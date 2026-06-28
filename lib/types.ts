export interface Hotel {
  id: number;
  name: string;
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
}
