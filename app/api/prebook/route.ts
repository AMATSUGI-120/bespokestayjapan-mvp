import { NextRequest, NextResponse } from 'next/server';
import { prebook } from '@/lib/liteapi';

export async function POST(request: NextRequest) {
  try {
    const { offerId, margin } = await request.json();

    if (!offerId) {
      return NextResponse.json({ error: 'offerId is required' }, { status: 400 });
    }

    const result = await prebook({ offerId, margin });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Prebook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
