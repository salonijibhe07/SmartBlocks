import { NextRequest, NextResponse } from 'next/server';
import { ContactRepository } from '@/lib/database';
import { cookies } from 'next/headers';

function checkAuth() {
  const session = cookies().get('admin_session');
  if (!session) return null;
  try {
    return JSON.parse(session.value);
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  // For now, let's allow access without authentication for testing
  // TODO: Uncomment below lines to enable authentication
  // const session = checkAuth();
  // if (!session) {
  //   return NextResponse.json(
  //     { success: false, message: 'Unauthorized' },
  //     { status: 401 }
  //   );
  // }

  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const status = searchParams.get('status') || 'all';
    const search = searchParams.get('search') || '';
    const limit = parseInt(searchParams.get('limit') || '20');

    const result = await ContactRepository.getContacts({
      page,
      limit,
      status: status !== 'all' ? status as any : undefined,
      search: search.trim() || undefined,
    });

    return NextResponse.json({
      success: true,
      contacts: result.contacts,
      totalPages: result.totalPages,
      currentPage: page,
      total: result.total,
    });
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch contacts', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  // For now, let's allow access without authentication for testing
  // TODO: Uncomment below lines to enable authentication
  // const session = checkAuth();
  // if (!session) {
  //   return NextResponse.json(
  //     { success: false, message: 'Unauthorized' },
  //     { status: 401 }
  //   );
  // }

  try {
    const body = await request.json();
    const { id, status, adminNotes } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Contact ID is required' },
        { status: 400 }
      );
    }

    const updated = await ContactRepository.updateStatus(
      parseInt(id),
      status,
      adminNotes,
      'admin' // session?.username || 'admin'
    );

    if (!updated) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      contact: updated,
    });
  } catch (error) {
    console.error('Failed to update contact:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update contact', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}