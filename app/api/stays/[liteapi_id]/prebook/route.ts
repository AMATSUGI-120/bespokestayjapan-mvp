import { NextRequest, NextResponse } from 'next/server';
import { getLiteApiKey, LITEAPI_BASE } from '@/lib/liteapi-env';

const BOARD_LABELS: Record<string, string> = {
  RO: 'Room Only',
  BI: 'Breakfast Included',
  BB: 'Bed & Breakfast',
  HB: 'Half Board',
  FB: 'Full Board',
  AI: 'All Inclusive',
};

export interface PrebookApiResponse {
  success: boolean;
  error?: string;
  prebookId?: string;
  totalPrice?: number;
  currency?: string;
  boardType?: string;
  boardLabel?: string;
  refundable?: boolean;
  cancelDeadline?: string | null;
  cancelTimezone?: string;
  cancellationChanged?: boolean;
  boardChanged?: boolean;
  priceChanged?: boolean;
  priceDifferencePercent?: number;
  transactionIdPresent?: boolean;
  secretKeyPresent?: boolean;
  transactionIdSupported?: boolean;
  paymentTypes?: string[];
  refundableTag?: string;
  cancelPolicyInfos?: CancelPolicyInfo[];
}

type CancelPolicyInfo = {
  cancelTime?: string;
  timezone?: string;
  amount?: number;
  currency?: string;
  type?: string;
};
type TaxFee = { amount?: number; currency?: string };
type RetailRate = { total?: TaxFee[] };
type Rate = {
  boardType?: string;
  retailRate?: RetailRate;
  cancellationPolicies?: {
    refundableTag?: string;
    cancelPolicyInfos?: CancelPolicyInfo[];
  };
};
type RoomType = { rates?: Rate[] };
type LiteApiPrebookData = {
  prebookId?: string;
  transactionId?: string;
  secretKey?: string;
  currency?: string;
  price?: number;
  sellingPriceToUser?: number;
  priceDifferencePercent?: number;
  cancellationChanged?: boolean;
  boardChanged?: boolean;
  paymentTypes?: string[];
  roomTypes?: RoomType[];
};

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ liteapi_id: string }> }
) {
  const { liteapi_id: liteapiId } = await params;

  let body: { offerId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }

  const { offerId } = body;
  if (!offerId) {
    return NextResponse.json(
      { success: false, error: 'offerId is required' },
      { status: 400 }
    );
  }

  let raw: unknown;
  try {
    const res = await fetch(`${LITEAPI_BASE}/rates/prebook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': getLiteApiKey(),
      },
      body: JSON.stringify({ offerId, usePaymentSdk: true }),
    });

    raw = await res.json();

    if (!res.ok) {
      console.error(`[stays/${liteapiId}/prebook] LiteAPI error:`, JSON.stringify(raw));
      return NextResponse.json({ success: false, error: 'Prebook failed' });
    }
  } catch (err) {
    console.error(`[stays/${liteapiId}/prebook] fetch error:`, err);
    return NextResponse.json({ success: false, error: 'Network error' });
  }

  const data = ((raw as { data?: LiteApiPrebookData }).data) ?? {} as LiteApiPrebookData;

  const prebookId = data.prebookId ?? '';
  const transactionId = data.transactionId ?? '';
  const secretKey = data.secretKey ?? '';

  // Log presence only — never log full values
  console.log(
    `[stays/${liteapiId}/prebook] prebookId=${prebookId}` +
    ` transactionId=${transactionId ? '…' + transactionId.slice(-4) : '(empty)'}` +
    ` secretKey=${secretKey ? 'present' : '(empty)'}`
  );

  const rate = data.roomTypes?.[0]?.rates?.[0] ?? {};
  const boardType = rate.boardType ?? 'RO';
  const totalPrice =
    rate.retailRate?.total?.[0]?.amount ??
    data.price ??
    data.sellingPriceToUser ??
    0;
  const planCurrency =
    rate.retailRate?.total?.[0]?.currency ??
    data.currency ??
    'JPY';

  const policies = rate.cancellationPolicies ?? {};
  const refundableTag = policies.refundableTag ?? '';
  const cancelInfo = policies.cancelPolicyInfos?.[0] ?? {};

  const paymentTypes = data.paymentTypes ?? [];

  const cancelPolicyInfos: CancelPolicyInfo[] = (policies.cancelPolicyInfos ?? []).map(
    (p) => ({
      cancelTime: p.cancelTime,
      timezone: p.timezone,
      amount: p.amount,
      currency: p.currency,
      type: p.type,
    })
  );

  return NextResponse.json({
    success: true,
    prebookId,
    totalPrice,
    currency: planCurrency,
    boardType,
    boardLabel: BOARD_LABELS[boardType] ?? boardType,
    refundable: refundableTag === 'RFN',
    cancelDeadline: cancelInfo.cancelTime ?? null,
    cancelTimezone: cancelInfo.timezone ?? 'GMT',
    cancellationChanged: data.cancellationChanged ?? false,
    boardChanged: data.boardChanged ?? false,
    priceChanged: (data.priceDifferencePercent ?? 0) !== 0,
    priceDifferencePercent: data.priceDifferencePercent ?? 0,
    transactionIdPresent: transactionId.length > 0,
    secretKeyPresent: secretKey.length > 0,
    transactionIdSupported: paymentTypes.includes('TRANSACTION_ID'),
    paymentTypes,
    refundableTag,
    cancelPolicyInfos,
  } satisfies PrebookApiResponse);
}
