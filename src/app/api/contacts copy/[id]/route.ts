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

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = checkAuth();
  if (!session) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { status, adminNotes } = body;

    const updated = await ContactRepository.updateStatus(
      parseInt(params.id),
      status,
      adminNotes,
      session.username
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
    return NextResponse.json(
      { success: false, message: 'Failed to update contact' },
      { status: 500 }
    );
  }
}