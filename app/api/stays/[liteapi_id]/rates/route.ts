import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { getLiteApiKey, LITEAPI_BASE } from '@/lib/liteapi-env';

const BOARD_LABELS: Record<string, string> = {
  RO: 'Room Only',
  BI: 'Breakfast Included',
  BB: 'Bed & Breakfast',
  HB: 'Half Board',
  FB: 'Full Board',
  AI: 'All Inclusive',
};

type CancelPolicyInfo = {
  cancelTime?: string;
  amount?: number;
  currency?: string;
  type?: string;
  timezone?: string;
};

type Rate = {
  offerId?: string;
  name?: string | null;
  boardType?: string;
  boardName?: string;
  remarks?: string | null;
  retailRate?: {
    total?: Array<{ amount?: number; currency?: string }>;
    taxesAndFees?: Array<{
      included?: boolean;
      description?: string;
      amount?: number;
      currency?: string;
    }>;
  };
  cancellationPolicies?: {
    refundableTag?: string;
    cancelPolicyInfos?: CancelPolicyInfo[];
  };
};

type RoomType = {
  offerId?: string;
  name?: string | null;
  rates?: Rate[];
};

export interface RatePlan {
  offerId: string;
  roomName: string | null;
  planName: string;
  totalPrice: number;
  currency: string;
  taxesAndFees: { amount: number; included: boolean; description: string } | null;
  boardType: string;
  boardLabel: string;
  refundable: boolean;
  cancellationPolicy: string;
  cancelDeadline: string | null;
  remarks: string | null;
  index: number;
}

export interface RatesResponse {
  available: boolean;
  plans: RatePlan[];
  unavailableReason?: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ liteapi_id: string }> }
) {
  const { liteapi_id: liteapiId } = await params;
  const { searchParams } = new URL(request.url);

  const checkin = searchParams.get('checkin') ?? '';
  const checkout = searchParams.get('checkout') ?? '';
  const adults = Math.max(1, Number(searchParams.get('adults') ?? '2'));
  const currency = searchParams.get('currency') ?? 'JPY';
  const guestNationality = searchParams.get('guestNationality') ?? 'US';

  if (!checkin || !checkout) {
    return NextResponse.json(
      { available: false, plans: [], unavailableReason: 'checkin and checkout are required' },
      { status: 400 }
    );
  }

  // Confirm hotel exists in DB and is published
  const { data: hotel, error: dbError } = await supabase
    .from('hotels')
    .select('liteapi_id, name')
    .eq('liteapi_id', liteapiId)
    .eq('is_published', true)
    .maybeSingle();

  if (dbError || !hotel) {
    return NextResponse.json(
      { available: false, plans: [], unavailableReason: 'Hotel not found' },
      { status: 404 }
    );
  }

  // Call LiteAPI /hotels/rates
  let liteapiRaw: unknown;
  try {
    const res = await fetch(`${LITEAPI_BASE}/hotels/rates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': getLiteApiKey(),
      },
      body: JSON.stringify({
        hotelIds: [liteapiId],
        checkin,
        checkout,
        occupancies: [{ adults }],
        guestNationality,
        currency,
        margin: 15,
      }),
    });

    liteapiRaw = await res.json();

    if (!res.ok) {
      console.error('[stays/rates] LiteAPI error:', JSON.stringify(liteapiRaw));
      return NextResponse.json({ available: false, plans: [] });
    }
  } catch (err) {
    console.error('[stays/rates] fetch error:', err);
    return NextResponse.json({ available: false, plans: [] });
  }

  // Extract roomTypes for this hotel
  const response = liteapiRaw as {
    data?: Array<{ hotelId?: string; roomTypes?: RoomType[] }>;
  };
  const hotelData = (response.data ?? []).find((h) => h.hotelId === liteapiId);
  const roomTypes = hotelData?.roomTypes ?? [];

  if (roomTypes.length === 0) {
    return NextResponse.json({ available: false, plans: [] });
  }

  // Transform each roomType into a RatePlan
  const plans: RatePlan[] = roomTypes
    .map((room, idx): RatePlan | null => {
      const rate = room.rates?.[0];
      if (!rate) return null;

      const offerId = room.offerId ?? rate.offerId ?? '';
      if (!offerId) return null;

      const roomName = (room.name ?? rate.name ?? '').trim() || null;
      const boardType = rate.boardType ?? 'RO';
      const boardLabel = BOARD_LABELS[boardType] ?? boardType;
      const totalPrice = rate.retailRate?.total?.[0]?.amount ?? 0;
      const planCurrency = rate.retailRate?.total?.[0]?.currency ?? currency;

      const taxFeeRaw = rate.retailRate?.taxesAndFees?.[0];
      const taxesAndFees = taxFeeRaw
        ? {
            amount: taxFeeRaw.amount ?? 0,
            included: taxFeeRaw.included ?? false,
            description: taxFeeRaw.description ?? 'Tax',
          }
        : null;

      const refundableTag = rate.cancellationPolicies?.refundableTag ?? '';
      const cancelDeadline =
        rate.cancellationPolicies?.cancelPolicyInfos?.[0]?.cancelTime ?? null;
      const remarks = rate.remarks?.trim() || null;

      return {
        offerId,
        roomName,
        planName: `Plan ${idx + 1}`,
        totalPrice,
        currency: planCurrency,
        taxesAndFees,
        boardType,
        boardLabel,
        refundable: refundableTag === 'RFN',
        cancellationPolicy: refundableTag,
        cancelDeadline,
        remarks,
        index: idx,
      };
    })
    .filter((p): p is RatePlan => p !== null);

  return NextResponse.json({ available: plans.length > 0, plans } satisfies RatesResponse);
}
