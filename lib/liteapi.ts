import { mockSearchHotels, mockPrebook, mockBook } from './liteapi-mock';
import { SearchResult, PrebookResult, BookingResult, GuestInfo } from './types';

const LITEAPI_BASE = 'https://api.liteapi.travel/v3.0';
// DEBUG: hardcoded to bypass USE_MOCK_API env var
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

  const response = await fetch(`${LITEAPI_BASE}/hotels/rates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': process.env.NEXT_PUBLIC_LITEAPI_KEY!,
    },
    body: JSON.stringify({
      hotelIds: params.hotelIds,
      checkin: params.checkin,
      checkout: params.checkout,
      adults: params.guests,
      currency: 'JPY',
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message ?? 'LiteAPI searchHotels failed');
  }

  return (data.data ?? []).map((h: { id: string; name: string; roomTypes?: Array<{ offerId: string; price?: { finalRate?: number } }> }) => ({
    hotelId: h.id,
    name: h.name,
    offerId: h.roomTypes?.[0]?.offerId ?? '',
    price: h.roomTypes?.[0]?.price?.finalRate ?? 0,
    currency: 'JPY',
    available: (h.roomTypes?.length ?? 0) > 0,
  }));
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
    throw new Error(data.message ?? 'LiteAPI prebook failed');
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
    throw new Error(data.message ?? 'LiteAPI book failed');
  }

  return {
    bookingId: data.data?.bookingId ?? '',
    paymentUrl: data.data?.payment?.checkoutUrl ?? '',
    confirmationNumber: data.data?.confirmationNumber ?? '',
    totalPrice: data.data?.price?.finalRate ?? 0,
  };
}
