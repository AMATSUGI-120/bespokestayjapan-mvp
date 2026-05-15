export interface Hotel {
  id: number;
  name: string;
  liteapi_id: string | null;
  city: string;
  area: string;
  type: string;
  layer: 1 | 2 | 3;
  recommended_margin: number;
  price_range: string;
  pet_size_limit_kg: number | null;
  pet_fee_per_night: number;
  pet_fee_per_stay: number | null;
  pet_additional_fee: number | null;
  pet_max_pets: number;
  pet_dogs: boolean;
  pet_cats: boolean;
  pet_other: string | null;
  pet_vaccination_required: boolean;
  pet_notes: string | null;
  amenities: string[];
  nearby_parks: string[];
  nearby_vets: string[];
  english_support: boolean;
  access_info: string | null;
  booking_url: string;
  photo_urls?: string[] | null;
}

export interface SearchConditions {
  city: string;
  petSize: 'small' | 'medium' | 'large' | 'any';
  guests: number;
  checkin: string;
  checkout: string;
}

export interface HotelResult extends Hotel {
  matchLevel: 100 | 80 | 60;
  basePrice: number;
  margin: number;
  finalPrice: number;
  liteapiOfferId: string;
  recommendationReason: string;
  refundableTag?: string;
  cancellationDeadline?: string | null;
}

export interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface SearchResult {
  hotelId: string;
  name: string;
  offerId: string;
  price: number;
  currency: string;
  available: boolean;
  refundableTag?: string;
  cancellationDeadline?: string | null;
}

export interface PrebookResult {
  prebookId: string;
  status: string;
  totalPrice: number;
  currency: string;
  secretKey: string;
  transactionId: string;
}

export interface BookingResult {
  bookingId: string;
  paymentUrl: string;
  confirmationNumber: string;
  totalPrice: number;
}
