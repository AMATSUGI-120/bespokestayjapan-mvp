import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.event === 'booking.confirmed') {
      const { bookingId, confirmationNumber, status } = body.data ?? {};

      // Supabaseに予約情報保存
      if (bookingId) {
        const { error } = await supabase.from('bookings').upsert({
          booking_id: bookingId,
          confirmation_number: confirmationNumber,
          status: status ?? 'confirmed',
          confirmed_at: new Date().toISOString(),
        });

        if (error) {
          console.error('Supabase upsert error:', error);
        }
      }

    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook failed' }, { status: 500 });
  }
}
