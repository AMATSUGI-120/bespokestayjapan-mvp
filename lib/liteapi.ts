import { mockSearchHotels, mockPrebook, mockBook } from './liteapi-mock';
import { SearchResult, PrebookResult, BookingResult, GuestInfo } from './types';
import { getLiteApiKey, LITEAPI_BASE } from './liteapi-env';

const USE_MOCK = false;

// 1. ホテル検索
export async function searchHotels(params: {
  hotelIds: string[];
  checkin: string;
  checkout: string;
  guests: number;
  margin?: number;
}): Promise<SearchResult[]> {
  if (USE_MOCK) {
    return mockSearchHotels(params);
  }

  const body: Record<string, unknown> = {
    hotelIds: params.hotelIds,
    checkin: params.checkin,
    checkout: params.checkout,
    occupancies: [{ adults: Number(params.guests) }],
    guestNationality: 'JP',
    currency: 'JPY',
  };

  if (params.margin !== undefined) {
    body.margin = params.margin;
  }

  const response = await fetch(`${LITEAPI_BASE}/hotels/rates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': getLiteApiKey(),
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`LiteAPI searchHotels failed [${response.status}]: ${data.message ?? JSON.stringify(data)}`);
  }

  type CancelPolicyInfo = { cancelTime?: string; amount?: number; currency?: string; type?: string };
  type RoomType = {
    offerId?: string;
    refundableTag?: string;
    cancellationPolicies?: { cancelPolicyInfos?: CancelPolicyInfo[] };
    price?: { total?: number; finalRate?: number; net?: number; amount?: number; currency?: string };
    retailRate?: {
      total?: Array<{ amount?: number; currency?: string }>;
      suggestedSellingRate?: Array<{ amount?: number; currency?: string }>;
    };
    rates?: Array<{
      offerId?: string;
      refundableTag?: string;
      cancellationPolicies?: { refundableTag?: string; cancelPolicyInfos?: CancelPolicyInfo[] };
      retailRate?: {
        total?: Array<{ amount?: number }>;
        suggestedSellingRate?: Array<{ amount?: number }>;
      };
    }>;
  };

  return (data.data ?? []).map((h: { hotelId?: string; id?: string; name?: string; roomTypes?: RoomType[] }) => {
    const room = h.roomTypes?.[0];

    // margin指定時はretailRate(小売価格)を優先。なければprice.total(net rate)にフォールバック
    const price =
      room?.retailRate?.total?.[0]?.amount ??
      room?.retailRate?.suggestedSellingRate?.[0]?.amount ??
      room?.rates?.[0]?.retailRate?.total?.[0]?.amount ??
      room?.rates?.[0]?.retailRate?.suggestedSellingRate?.[0]?.amount ??
      room?.price?.total ??
      room?.price?.finalRate ??
      room?.price?.net ??
      room?.price?.amount ??
      null;

    const offerId =
      room?.offerId ??
      room?.rates?.[0]?.offerId ??
      '';

    const refundableTag =
      room?.rates?.[0]?.cancellationPolicies?.refundableTag ??
      '';

    const cancelPolicyInfos =
      room?.cancellationPolicies?.cancelPolicyInfos ??
      room?.rates?.[0]?.cancellationPolicies?.cancelPolicyInfos ??
      [];
    const cancellationDeadline = cancelPolicyInfos[0]?.cancelTime ?? null;

    console.log(`[liteapi/searchHotels] cancellation — hotel=${h.hotelId ?? h.id} refundableTag="${refundableTag}" room.refundableTag="${room?.refundableTag}" rates[0].refundableTag="${room?.rates?.[0]?.refundableTag}" cancelPolicyInfos=${JSON.stringify(cancelPolicyInfos.slice(0, 1))}`);

    console.log(`[liteapi/searchHotels] hotel=${h.hotelId ?? h.id} offerId=${offerId || '(none)'} retailRate.total=${room?.retailRate?.total?.[0]?.amount} price.total=${room?.price?.total} → picked price=${price} refundableTag=${refundableTag}`);

    return {
      hotelId: h.hotelId ?? h.id ?? '',
      name: h.name ?? '',
      offerId,
      price: price ?? 0,
      currency: room?.price?.currency ?? room?.retailRate?.total?.[0]?.currency ?? 'JPY',
      available: (h.roomTypes?.length ?? 0) > 0,
      refundableTag,
      cancellationDeadline,
    };
  });
}

// 2. Prebook (予約前確認)
export async function prebook(params: {
  offerId: string;
  margin: number;
}): Promise<PrebookResult> {
  if (USE_MOCK) {
    return mockPrebook(params);
  }

  const response = await fetch(`${LITEAPI_BASE}/rates/prebook`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': getLiteApiKey(),
    },
    body: JSON.stringify({
      offerId: params.offerId,
      usePaymentSdk: true,
      ...(params.margin > 0 ? { margin: params.margin } : {}),
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`LiteAPI prebook failed [${response.status}]: ${data.message ?? JSON.stringify(data)}`);
  }

  const prebookId = data.data?.prebookId ?? '';
  const secretKey = data.data?.secretKey ?? '';
  const transactionId = data.data?.transactionId ?? '';

  if (!secretKey) {
    console.error('[liteapi/prebook] WARNING: secretKey is empty. LiteAPI did not return usePaymentSdk data. Full data.data:', JSON.stringify(data.data));
  }

  const netPrice =
    data.data?.sellingPriceToUser ??
    data.data?.offer?.price?.finalRate ??
    data.data?.offer?.price?.total ??
    data.data?.offer?.price?.amount ??
    data.data?.offer?.retailRate?.total?.[0]?.amount ??
    data.data?.totalPrice ??
    data.data?.price?.finalRate ??
    data.data?.price?.total ??
    0;

  const totalPrice = netPrice;

  console.log(`[liteapi/prebook] netPrice=${netPrice} margin=${params.margin}% → totalPrice=${totalPrice} (LiteAPI retailRate.total already includes margin — no client-side markup applied)`);

  return {
    prebookId,
    status: data.data?.status ?? 'unknown',
    totalPrice,
    currency: data.data?.offer?.price?.currency ?? data.data?.offer?.retailRate?.total?.[0]?.currency ?? 'JPY',
    secretKey,
    transactionId,
  };
}

// 3. Book (予約確定)
export async function book(params: {
  prebookId: string;
  guestInfo: GuestInfo;
  transactionId: string;
}): Promise<BookingResult> {
  if (USE_MOCK) {
    return mockBook(params);
  }

  const response = await fetch(`${LITEAPI_BASE}/rates/book`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': getLiteApiKey(),
    },
    body: JSON.stringify({
      prebookId: params.prebookId,
      payment: {
        method: 'TRANSACTION_ID',
        transactionId: params.transactionId,
      },
      guestInfo: {
        guestFirstName: params.guestInfo.firstName,
        guestLastName: params.guestInfo.lastName,
        guestEmail: params.guestInfo.email,
        guestPhone: params.guestInfo.phone,
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`LiteAPI book failed [${response.status}]: ${data.message ?? JSON.stringify(data)}`);
  }

  return {
    bookingId: data.data?.bookingId ?? '',
    paymentUrl: data.data?.payment?.checkoutUrl ?? '',
    confirmationNumber: data.data?.confirmationNumber ?? '',
    totalPrice: data.data?.price?.finalRate ?? 0,
  };
}
