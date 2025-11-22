/**
 * API routes for managing individual blocks
 * - GET /api/blocks/[id] → Fetch block
 * - PUT /api/blocks/[id] → Update block
 * - DELETE /api/blocks/[id] → Delete block
 */

import { NextRequest, NextResponse } from 'next/server';
import { getBlockById, updateBlock, deleteBlock } from '@/lib/db-enhanced';
import { updateBlockSchema } from '@/lib/validations';
import { ApiResponse } from '@/lib/types';
import { HTTP_STATUS, SUCCESS_MESSAGES, ERROR_MESSAGES } from '@/lib/constants';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const logger = {
  info: (method: string, path: string, data?: any) =>
    console.log(`[API ${method}] ${path}`, data ? JSON.stringify(data, null, 2) : ''),
  error: (method: string, path: string, error: any) =>
    console.error(`[API ERROR ${method}] ${path}:`, error),
};

function validateBlockId(idParam: string): { isValid: boolean; id?: number; error?: string } {
  const id = parseInt(idParam);
  if (isNaN(id) || id <= 0) {
    return { isValid: false, error: ERROR_MESSAGES.INVALID_BLOCK_ID };
  }
  return { isValid: true, id };
}

/** GET /api/blocks/[id] */
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const startTime = Date.now();
  try {
    const { isValid, id, error } = validateBlockId(params.id);
    if (!isValid) {
      return NextResponse.json<ApiResponse<null>>(
        { success: false, error, message: 'Invalid block ID' },
        { status: HTTP_STATUS.BAD_REQUEST, headers: corsHeaders }
      );
    }

    const block = await getBlockById(id!);
    if (!block) {
      return NextResponse.json<ApiResponse<null>>(
        { success: false, error: ERROR_MESSAGES.BLOCK_NOT_FOUND, message: 'Block not found' },
        { status: HTTP_STATUS.NOT_FOUND, headers: corsHeaders }
      );
    }

    const duration = Date.now() - startTime;
    return NextResponse.json<ApiResponse<typeof block>>(
      {
        success: true,
        data: block,
        message: `Block retrieved successfully (${duration}ms)`,
      },
      {
        headers: {
          ...corsHeaders,
          'Cache-Control': 'public, max-age=60',
          'X-Response-Time': `${duration}ms`,
        },
      }
    );
  } catch (error) {
    logger.error('GET', `/api/blocks/${params.id}`, error);
    return NextResponse.json<ApiResponse<null>>(
      { success: false, error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR, message: 'Failed to fetch block' },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR, headers: corsHeaders }
    );
  }
}

/** PUT /api/blocks/[id] */
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    const { isValid, id, error } = validateBlockId(params.id);
    if (!isValid) {
      return NextResponse.json<ApiResponse<null>>(
        { success: false, error, message: 'Invalid block ID' },
        { status: HTTP_STATUS.BAD_REQUEST, headers: corsHeaders }
      );
    }

    const validated = updateBlockSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: ERROR_MESSAGES.VALIDATION_FAILED,
          message: validated.error.errors[0]?.message,
        },
        { status: HTTP_STATUS.BAD_REQUEST, headers: corsHeaders }
      );
    }

    const updated = await updateBlock(id!, validated.data);
    if (!updated) {
      return NextResponse.json<ApiResponse<null>>(
        { success: false, error: ERROR_MESSAGES.BLOCK_NOT_FOUND, message: 'Update failed' },
        { status: HTTP_STATUS.NOT_FOUND, headers: corsHeaders }
      );
    }

    return NextResponse.json<ApiResponse<typeof updated>>(
      { success: true, data: updated, message: SUCCESS_MESSAGES.BLOCK_UPDATED },
      { headers: corsHeaders }
    );
  } catch (error) {
    logger.error('PUT', `/api/blocks/${params.id}`, error);
    return NextResponse.json<ApiResponse<null>>(
      { success: false, error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR, message: 'Failed to update block' },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR, headers: corsHeaders }
    );
  }
}

/** DELETE /api/blocks/[id] */
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { isValid, id, error } = validateBlockId(params.id);
    if (!isValid) {
      return NextResponse.json<ApiResponse<null>>(
        { success: false, error, message: 'Invalid block ID' },
        { status: HTTP_STATUS.BAD_REQUEST, headers: corsHeaders }
      );
    }

    const deleted = await deleteBlock(id!);
    if (!deleted) {
      return NextResponse.json<ApiResponse<null>>(
        { success: false, error: ERROR_MESSAGES.BLOCK_NOT_FOUND, message: 'Delete failed' },
        { status: HTTP_STATUS.NOT_FOUND, headers: corsHeaders }
      );
    }

    return NextResponse.json<ApiResponse<null>>(
      { success: true, message: SUCCESS_MESSAGES.BLOCK_DELETED },
      { headers: corsHeaders }
    );
  } catch (error) {
    logger.error('DELETE', `/api/blocks/${params.id}`, error);
    return NextResponse.json<ApiResponse<null>>(
      { success: false, error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR, message: 'Failed to delete block' },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR, headers: corsHeaders }
    );
  }
}

/** OPTIONS /api/blocks/[id] */
export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}
