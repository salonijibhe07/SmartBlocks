/**
 * Health check endpoint for Smart Block Project API
 * GET /api/health - Check API and database health
 */

import { NextRequest, NextResponse } from 'next/server';
import { healthCheck, getBlocksStats } from '@/lib/db-enhanced';
import { HTTP_STATUS } from '@/lib/constants';

interface HealthResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  version: string;
  uptime: number;
  database: {
    status: 'connected' | 'error';
    latency?: number;
  };
  stats?: {
    totalBlocks: number;
    categories: number;
    recentBlocks: number;
  };
  error?: string;
}

/**
 * GET /api/health
 * Comprehensive health check including database connectivity and stats
 */
export async function GET(request: NextRequest) {
  const startTime = Date.now();
  const uptime = process.uptime();
  
  try {
    // Test database connection
    const dbStart = Date.now();
    const dbHealth = await healthCheck();
    const dbLatency = Date.now() - dbStart;
    
    // Get basic stats (optional, comment out if too slow)
    let stats;
    try {
      const blockStats = await getBlocksStats();
      stats = {
        totalBlocks: blockStats.total,
        categories: blockStats.byCategory.length,
        recentBlocks: blockStats.recentCount
      };
    } catch (error) {
      // Stats are optional, don't fail health check if they error
      console.warn('[HEALTH] Failed to get stats:', error);
    }
    
    const response: HealthResponse = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '0.1.0',
      uptime: Math.floor(uptime),
      database: {
        status: 'connected',
        latency: dbLatency
      },
      stats
    };
    
    const totalDuration = Date.now() - startTime;
    
    return NextResponse.json(response, {
      status: HTTP_STATUS.OK,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Response-Time': `${totalDuration}ms`,
        'X-Health-Check': 'passed'
      }
    });
    
  } catch (error) {
    console.error('[HEALTH] Health check failed:', error);
    
    const response: HealthResponse = {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '0.1.0',
      uptime: Math.floor(uptime),
      database: {
        status: 'error'
      },
      error: error instanceof Error ? error.message : 'Unknown error'
    };
    
    const totalDuration = Date.now() - startTime;
    
    return NextResponse.json(response, {
      status: HTTP_STATUS.SERVICE_UNAVAILABLE,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Response-Time': `${totalDuration}ms`,
        'X-Health-Check': 'failed'
      }
    });
  }
}

/**
 * OPTIONS /api/health
 * Handle CORS preflight requests
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}