import { NextRequest, NextResponse } from 'next/server';
import { book } from '@/lib/liteapi';
import { GuestInfo } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const { prebookId, guestInfo, transactionId }: {
      prebookId: string;
      guestInfo: GuestInfo;
      transactionId: string;
    } = await request.json();

    if (!prebookId || !guestInfo || !transactionId) {
      return NextResponse.json({ error: 'prebookId, guestInfo, and transactionId are required' }, { status: 400 });
    }

    const result = await book({ prebookId, guestInfo, transactionId });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Book error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
