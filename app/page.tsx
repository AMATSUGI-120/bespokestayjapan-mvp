import { supabase } from '@/lib/supabase';
import HomeClient from './HomeClient';
import type { FeaturedHotelData } from '@/components/FeaturedStays';

export const dynamic = 'force-dynamic';

const DEPRIORITIZE_NAMES = [
  'mandarin oriental',
  'shangri-la',
  'the peninsula',
  'four seasons',
  'ritz-carlton',
];

function hotelPriority(name: string, city: string): number {
  const cityRank = city === 'Kyoto' ? 0 : city === 'Osaka' ? 1 : city !== 'Tokyo' ? 2 : 3;
  const deprio = DEPRIORITIZE_NAMES.some((n) => name.toLowerCase().includes(n)) ? 10 : 0;
  return cityRank + deprio;
}

export default async function HomePage() {
  let featuredHotels: FeaturedHotelData[] = [];

  try {
    const { data } = await supabase
      .from('hotels')
      .select(
        'id, name, liteapi_id, city, area, type, amenities, pet_dogs, pet_cats, pet_notes, access_info, photo_urls, english_support, category_tags, caution_notes'
      )
      .eq('is_published', true)
      .not('liteapi_id', 'is', null)
      .not('photo_urls', 'is', null);

    const withPhotos = (data ?? []).filter(
      (h: { photo_urls: unknown }) =>
        Array.isArray(h.photo_urls) && (h.photo_urls as string[]).length > 0
    );

    withPhotos.sort(
      (a: { name: string; city: string }, b: { name: string; city: string }) =>
        hotelPriority(a.name, a.city) - hotelPriority(b.name, b.city)
    );

    featuredHotels = withPhotos.slice(0, 6) as FeaturedHotelData[];
  } catch {
    // silently fall back to example cards
  }

  const heroHotel = featuredHotels[0] ?? null;
  const heroImageUrl = heroHotel?.photo_urls?.[0] ?? null;
  const heroImageAlt = heroHotel
    ? `${heroHotel.name} — ${heroHotel.type} in ${heroHotel.city}`
    : undefined;

  return (
    <HomeClient
      initialFeaturedHotels={featuredHotels}
      heroImageUrl={heroImageUrl}
      heroImageAlt={heroImageAlt}
    />
  );
}
