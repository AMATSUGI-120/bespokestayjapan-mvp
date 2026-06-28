import { supabase } from '@/lib/supabase';
import HomeClient from './HomeClient';
import type { FeaturedHotelData } from '@/components/FeaturedStays';
import { buildPageMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export const metadata = buildPageMetadata({
  title: 'Find Japan stays that fit your real travel needs',
  description:
    'Browse researched Japan stay profiles for tattoo and bath notes, luggage support, self-catering, food needs, family travel, pets, English support, and access details.',
  path: '/',
});

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
        'id, name, city, area, type, amenities, pet_dogs, pet_cats, pet_notes, access_info, english_support, category_tags, short_description, best_for, caution_notes'
      )
      .eq('is_published', true);

    const publishedHotels = data ?? [];

    publishedHotels.sort(
      (a: { name: string; city: string }, b: { name: string; city: string }) =>
        hotelPriority(a.name, a.city) - hotelPriority(b.name, b.city)
    );

    featuredHotels = publishedHotels.slice(0, 6) as FeaturedHotelData[];
  } catch {
    // silently fall back to example cards
  }

  return (
    <HomeClient
      initialFeaturedHotels={featuredHotels}
    />
  );
}
