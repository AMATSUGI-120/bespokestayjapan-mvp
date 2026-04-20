import { NextRequest, NextResponse } from 'next/server';
import { book } from '@/lib/liteapi';
import { GuestInfo } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const { prebookId, guestInfo, margin }: {
      prebookId: string;
      guestInfo: GuestInfo;
      margin: number;
    } = await request.json();

    if (!prebookId || !guestInfo) {
      return NextResponse.json({ error: 'prebookId and guestInfo are required' }, { status: 400 });
    }

    const result = await book({ prebookId, guestInfo, margin });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Book error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
