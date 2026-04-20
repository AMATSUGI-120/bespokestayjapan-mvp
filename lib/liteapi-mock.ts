/**
 * 開発初期用モック
 * USE_MOCK_API=true の時に使用
 */

import { SearchResult, PrebookResult, BookingResult } from './types';

export const mockSearchHotels = async (params: {
  hotelIds: string[];
  checkin: string;
  checkout: string;
  guests: number;
}): Promise<SearchResult[]> => {
  // ダミーデータを返す
  const results: SearchResult[] = params.hotelIds.slice(0, 5).map((hotelId, i) => ({
    hotelId,
    name: `Mock Hotel ${i + 1}`,
    offerId: `mock-offer-${String(i + 1).padStart(3, '0')}`,
    price: 20000 + i * 5000,
    currency: 'JPY',
    available: true,
  }));
  return results;
};

export const mockPrebook = async (params: {
  offerId: string;
  margin: number;
}): Promise<PrebookResult> => {
  return {
    prebookId: 'mock-prebook-001',
    status: 'confirmed',
    totalPrice: 35000,
    currency: 'JPY',
  };
};

export const mockBook = async (params: {
  prebookId: string;
  guestInfo: unknown;
  margin: number;
}): Promise<BookingResult> => {
  return {
    bookingId: 'mock-booking-001',
    paymentUrl: 'https://checkout.stripe.com/mock-session',
    confirmationNumber: 'MOCK-12345',
    totalPrice: 35000,
  };
};
