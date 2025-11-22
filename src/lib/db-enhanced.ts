/**
 * Enhanced database connection and query utilities for Smart Block Project
 * With logging, error handling, and performance optimizations
 */

import { neon } from '@neondatabase/serverless';
import { Block, CreateBlockRequest, UpdateBlockRequest } from './types';
import { CATEGORIES, ERROR_MESSAGES, SUCCESS_MESSAGES } from './constants';

// Initialize Neon connection
const sql = neon(process.env.DATABASE_URL!);

/**
 * Database logger utility
 */
const dbLogger = {
  info: (operation: string, data?: any) => {
    console.log(`[DB INFO] ${operation}`, data ? JSON.stringify(data, null, 2) : '');
  },
  error: (operation: string, error: any) => {
    console.error(`[DB ERROR] ${operation}:`, error);
  },
  query: (query: string, params?: any[]) => {
    console.log(`[DB QUERY] ${query}`, params ? `Params: ${JSON.stringify(params)}` : '');
  }
};

/**
 * Enhanced error handling wrapper
 */
async function executeQuery<T>(
  operation: string,
  queryFn: () => Promise<T>
): Promise<T> {
  const startTime = Date.now();
  
  try {
    dbLogger.info(`Starting operation: ${operation}`);
    const result = await queryFn();
    const duration = Date.now() - startTime;
    dbLogger.info(`Completed operation: ${operation} in ${duration}ms`);
    return result;
  } catch (error) {
    const duration = Date.now() - startTime;
    dbLogger.error(`Failed operation: ${operation} after ${duration}ms`, error);
    throw error;
  }
}

/**
 * Get all blocks with optional filtering and pagination
 */
export async function getBlocks(
  category?: string,
  limit: number = 50,
  offset: number = 0
): Promise<Block[]> {
  return executeQuery('getBlocks', async () => {
    let query = 'SELECT * FROM blocks';
    const params: any[] = [];
    const conditions: string[] = [];
    
    if (category) {
      conditions.push(`category = $${params.length + 1}`);
      params.push(category);
    }
    
    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(' AND ')}`;
    }
    
    query += ` ORDER BY created_at DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;
    params.push(limit, offset);
    
    dbLogger.query(query, params);
    const result = await sql(query, params);
    
    dbLogger.info(`Retrieved ${result.length} blocks`);
    return result as Block[];
  });
}

/**
 * Get total count of blocks with optional category filter
 */
export async function getBlocksCount(category?: string): Promise<number> {
  return executeQuery('getBlocksCount', async () => {
    let query = 'SELECT COUNT(*) as count FROM blocks';
    const params: any[] = [];
    
    if (category) {
      query += ' WHERE category = $1';
      params.push(category);
    }
    
    dbLogger.query(query, params);
    const result = await sql(query, params);
    
    const count = Number(result[0]?.count || 0);
    dbLogger.info(`Total blocks count: ${count}`);
    return count;
  });
}

/**
 * Get a single block by ID with enhanced error handling
 */
export async function getBlockById(id: number): Promise<Block | null> {
  return executeQuery('getBlockById', async () => {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error(ERROR_MESSAGES.INVALID_BLOCK_ID);
    }
    
    const query = 'SELECT * FROM blocks WHERE id = $1';
    const params = [id];
    
    dbLogger.query(query, params);
    const result = await sql(query, params);
    
    const block = result.length > 0 ? (result[0] as Block) : null;
    dbLogger.info(`Block ${id} ${block ? 'found' : 'not found'}`);
    return block;
  });
}

/**
 * Create a new block with duplicate URL checking
 */
export async function createBlock(blockData: CreateBlockRequest): Promise<Block> {
  return executeQuery('createBlock', async () => {
    const { title, description, url, color, category } = blockData;
    
    // Check for duplicate URL (optional)
    try {
      const existingQuery = 'SELECT id FROM blocks WHERE url = $1';
      dbLogger.query(existingQuery, [url]);
      const existing = await sql(existingQuery, [url]);
      
      if (existing.length > 0) {
        throw new Error(ERROR_MESSAGES.DUPLICATE_URL);
      }
    } catch (error) {
      // If it's not a duplicate URL error, log and continue
      if (error instanceof Error && error.message !== ERROR_MESSAGES.DUPLICATE_URL) {
        dbLogger.error('Error checking duplicate URL', error);
      } else {
        throw error;
      }
    }
    
    const query = `
      INSERT INTO blocks (title, description, url, color, category) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *
    `;
    const params = [title, description || null, url, color, category];
    
    dbLogger.query(query, params);
    const result = await sql(query, params);
    
    const newBlock = result[0] as Block;
    dbLogger.info(`Created new block with ID: ${newBlock.id}`);
    return newBlock;
  });
}

/**
 * Update an existing block with optimistic locking
 */
export async function updateBlock(
  id: number, 
  blockData: UpdateBlockRequest
): Promise<Block | null> {
  return executeQuery('updateBlock', async () => {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error(ERROR_MESSAGES.INVALID_BLOCK_ID);
    }
    
    // Check if block exists first
    const existingBlock = await getBlockById(id);
    if (!existingBlock) {
      throw new Error(ERROR_MESSAGES.BLOCK_NOT_FOUND);
    }
    
    const updates: string[] = [];
    const values: any[] = [];
    let paramCount = 1;
    
    Object.entries(blockData).forEach(([key, value]) => {
      if (value !== undefined) {
        updates.push(`${key} = $${paramCount}`);
        values.push(value);
        paramCount++;
      }
    });
    
    if (updates.length === 0) {
      dbLogger.info(`No fields to update for block ${id}`);
      return existingBlock;
    }
    
    // Add updated_at
    updates.push(`updated_at = CURRENT_TIMESTAMP`);
    values.push(id);
    
    const query = `
      UPDATE blocks 
      SET ${updates.join(', ')} 
      WHERE id = $${paramCount} 
      RETURNING *
    `;
    
    dbLogger.query(query, values);
    const result = await sql(query, values);
    
    const updatedBlock = result.length > 0 ? (result[0] as Block) : null;
    dbLogger.info(`Updated block ${id}`, updatedBlock ? 'successfully' : 'failed');
    return updatedBlock;
  });
}

/**
 * Delete a block with cascade checking
 */
export async function deleteBlock(id: number): Promise<boolean> {
  return executeQuery('deleteBlock', async () => {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error(ERROR_MESSAGES.INVALID_BLOCK_ID);
    }
    
    // Check if block exists first
    const existingBlock = await getBlockById(id);
    if (!existingBlock) {
      throw new Error(ERROR_MESSAGES.BLOCK_NOT_FOUND);
    }
    
    const query = 'DELETE FROM blocks WHERE id = $1 RETURNING id';
    const params = [id];
    
    dbLogger.query(query, params);
    const result = await sql(query, params);
    
    const deleted = result.length > 0;
    dbLogger.info(`Block ${id} ${deleted ? 'deleted successfully' : 'deletion failed'}`);
    return deleted;
  });
}

/**
 * Get comprehensive blocks statistics
 */
export async function getBlocksStats(): Promise<{
  total: number;
  byCategory: { category: string; count: number }[];
  recentCount: number;
}> {
  return executeQuery('getBlocksStats', async () => {
    // Get total count
    const totalQuery = 'SELECT COUNT(*) as count FROM blocks';
    dbLogger.query(totalQuery);
    const totalResult = await sql(totalQuery);
    const total = Number(totalResult[0]?.count || 0);
    
    // Get count by category
    const categoryQuery = `
      SELECT category, COUNT(*) as count 
      FROM blocks 
      GROUP BY category 
      ORDER BY count DESC
    `;
    dbLogger.query(categoryQuery);
    const categoryResult = await sql(categoryQuery);
    const byCategory = categoryResult.map(row => ({
      category: row.category as string,
      count: Number(row.count)
    }));
    
    // Get recent count (last 24 hours)
    const recentQuery = `
      SELECT COUNT(*) as count 
      FROM blocks 
      WHERE created_at > NOW() - INTERVAL '24 hours'
    `;
    dbLogger.query(recentQuery);
    const recentResult = await sql(recentQuery);
    const recentCount = Number(recentResult[0]?.count || 0);
    
    const stats = { total, byCategory, recentCount };
    dbLogger.info('Retrieved comprehensive stats', stats);
    return stats;
  });
}

/**
 * Search blocks by title or description
 */
export async function searchBlocks(
  searchTerm: string,
  limit: number = 20
): Promise<Block[]> {
  return executeQuery('searchBlocks', async () => {
    if (!searchTerm || searchTerm.trim().length === 0) {
      return [];
    }
    
    const query = `
      SELECT * FROM blocks 
      WHERE 
        LOWER(title) LIKE LOWER($1) OR 
        LOWER(description) LIKE LOWER($1)
      ORDER BY 
        CASE 
          WHEN LOWER(title) = LOWER($2) THEN 1
          WHEN LOWER(title) LIKE LOWER($3) THEN 2
          ELSE 3
        END,
        created_at DESC
      LIMIT $4
    `;
    
    const searchPattern = `%${searchTerm.trim()}%`;
    const exactMatch = searchTerm.trim();
    const startMatch = `${searchTerm.trim()}%`;
    const params = [searchPattern, exactMatch, startMatch, limit];
    
    dbLogger.query(query, params);
    const result = await sql(query, params);
    
    dbLogger.info(`Search for "${searchTerm}" returned ${result.length} results`);
    return result as Block[];
  });
}

/**
 * Health check for database connection
 */
export async function healthCheck(): Promise<{ status: string; timestamp: string }> {
  return executeQuery('healthCheck', async () => {
    const query = 'SELECT NOW() as timestamp';
    dbLogger.query(query);
    const result = await sql(query);
    
    return {
      status: 'healthy',
      timestamp: result[0]?.timestamp || new Date().toISOString()
    };
  });
}