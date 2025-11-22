/**
 * Database connection and query utilities for Smart Block Project
 * Using Neon Serverless Postgres
 */

import { neon } from '@neondatabase/serverless';
import { Block, CreateBlockRequest, UpdateBlockRequest } from './types';

// Initialize Neon connection
const sql = neon(process.env.DATABASE_URL!);

/**
 * Get all blocks with optional category filter
 */
export async function getBlocks(category?: string): Promise<Block[]> {
  try {
    let query = 'SELECT * FROM blocks ORDER BY created_at DESC';
    let params: any[] = [];
    
    if (category) {
      query = 'SELECT * FROM blocks WHERE category = $1 ORDER BY created_at DESC';
      params = [category];
    }
    
    const result = await sql(query, params);
    return result as Block[];
  } catch (error) {
    console.error('Error fetching blocks:', error);
    throw new Error('Failed to fetch blocks');
  }
}

/**
 * Get a single block by ID
 */
export async function getBlockById(id: number): Promise<Block | null> {
  try {
    const result = await sql('SELECT * FROM blocks WHERE id = $1', [id]);
    return result.length > 0 ? (result[0] as Block) : null;
  } catch (error) {
    console.error('Error fetching block:', error);
    throw new Error('Failed to fetch block');
  }
}

/**
 * Create a new block
 */
export async function createBlock(blockData: CreateBlockRequest): Promise<Block> {
  try {
    const { title, description, url, color, category } = blockData;
    
    const result = await sql(`
      INSERT INTO blocks (title, description, url, color, category) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *
    `, [title, description || null, url, color, category]);
    
    return result[0] as Block;
  } catch (error) {
    console.error('Error creating block:', error);
    throw new Error('Failed to create block');
  }
}

/**
 * Update an existing block
 */
export async function updateBlock(id: number, blockData: UpdateBlockRequest): Promise<Block | null> {
  try {
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
      throw new Error('No fields to update');
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
    
    const result = await sql(query, values);
    return result.length > 0 ? (result[0] as Block) : null;
  } catch (error) {
    console.error('Error updating block:', error);
    throw new Error('Failed to update block');
  }
}

/**
 * Delete a block
 */
export async function deleteBlock(id: number): Promise<boolean> {
  try {
    const result = await sql('DELETE FROM blocks WHERE id = $1 RETURNING id', [id]);
    return result.length > 0;
  } catch (error) {
    console.error('Error deleting block:', error);
    throw new Error('Failed to delete block');
  }
}

/**
 * Get blocks count by category
 */
export async function getBlocksStats(): Promise<{ category: string; count: number }[]> {
  try {
    const result = await sql(`
      SELECT category, COUNT(*) as count 
      FROM blocks 
      GROUP BY category 
      ORDER BY count DESC
    `);
    
    return result.map(row => ({
      category: row.category as string,
      count: Number(row.count)
    }));
  } catch (error) {
    console.error('Error fetching blocks stats:', error);
    throw new Error('Failed to fetch blocks statistics');
  }
}