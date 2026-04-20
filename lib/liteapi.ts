import { mockSearchHotels, mockPrebook, mockBook } from './liteapi-mock';
import { SearchResult, PrebookResult, BookingResult, GuestInfo } from './types';

const LITEAPI_BASE = 'https://api.liteapi.travel/v3.0';
const USE_MOCK = false;

// 1. ホテル検索
export async function searchHotels(params: {
  hotelIds: string[];
  checkin: string;
  checkout: string;
  guests: number;
}): Promise<SearchResult[]> {
  if (USE_MOCK) {
    return mockSearchHotels(params);
  }

  const body = {
    hotelIds: params.hotelIds,
    checkin: params.checkin,
    checkout: params.checkout,
    occupancies: [{ adults: Number(params.guests) }],
    guestNationality: 'JP',
    currency: 'JPY',
  };
  const response = await fetch(`${LITEAPI_BASE}/hotels/rates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': process.env.NEXT_PUBLIC_LITEAPI_KEY!,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`LiteAPI searchHotels failed [${response.status}]: ${data.message ?? JSON.stringify(data)}`);
  }

  type RoomType = {
    offerId?: string;
    price?: { total?: number; finalRate?: number; net?: number; amount?: number; currency?: string };
    retailRate?: {
      total?: Array<{ amount?: number; currency?: string }>;
      suggestedSellingRate?: Array<{ amount?: number; currency?: string }>;
    };
    rates?: Array<{
      offerId?: string;
      retailRate?: {
        total?: Array<{ amount?: number }>;
        suggestedSellingRate?: Array<{ amount?: number }>;
      };
    }>;
  };

  return (data.data ?? []).map((h: { hotelId?: string; id?: string; name?: string; roomTypes?: RoomType[] }) => {
    const room = h.roomTypes?.[0];

    // LiteAPI V3: 複数のレスポンス構造に対応
    const price =
      room?.price?.total ??
      room?.price?.finalRate ??
      room?.price?.net ??
      room?.price?.amount ??
      room?.retailRate?.total?.[0]?.amount ??
      room?.retailRate?.suggestedSellingRate?.[0]?.amount ??
      room?.rates?.[0]?.retailRate?.total?.[0]?.amount ??
      room?.rates?.[0]?.retailRate?.suggestedSellingRate?.[0]?.amount ??
      null;

    const offerId =
      room?.offerId ??
      room?.rates?.[0]?.offerId ??
      '';
    return {
      hotelId: h.hotelId ?? h.id ?? '',
      name: h.name ?? '',
      offerId,
      price: price ?? 0,
      currency: room?.price?.currency ?? room?.retailRate?.total?.[0]?.currency ?? 'JPY',
      available: (h.roomTypes?.length ?? 0) > 0,
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
      'X-API-Key': process.env.LITEAPI_SECRET_KEY!,
    },
    body: JSON.stringify({
      offerId: params.offerId,
      usePaymentSdk: true,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`LiteAPI prebook failed [${response.status}]: ${data.message ?? JSON.stringify(data)}`);
  }

  return {
    prebookId: data.data?.prebookId ?? '',
    status: data.data?.status ?? 'unknown',
    totalPrice: data.data?.offer?.price?.finalRate ?? 0,
    currency: data.data?.offer?.price?.currency ?? 'JPY',
  };
}

// 3. Book (予約確定 + paymentURL取得)
export async function book(params: {
  prebookId: string;
  guestInfo: GuestInfo;
  margin: number;
}): Promise<BookingResult> {
  if (USE_MOCK) {
    return mockBook(params);
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

  const response = await fetch(`${LITEAPI_BASE}/rates/book`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': process.env.LITEAPI_SECRET_KEY!,
    },
    body: JSON.stringify({
      prebookId: params.prebookId,
      payment: {
        method: 'stripe_checkout',
        margin: params.margin,
        success_url: `${baseUrl}/booking/success`,
        cancel_url: `${baseUrl}/booking/cancel`,
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
