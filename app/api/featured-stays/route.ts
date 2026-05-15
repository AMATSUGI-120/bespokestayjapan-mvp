import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Prefer Kyoto/Osaka over Tokyo for editorial hero placement
function cityRank(city: string): number {
  if (city === 'Kyoto') return 0;
  if (city === 'Osaka') return 1;
  if (city !== 'Tokyo') return 2;
  return 3;
}

// Hotels that should not appear as hero/featured (ultra-luxury chain flagged by name)
const DEPRIORITIZE_NAMES = [
  'mandarin oriental',
  'shangri-la',
  'the peninsula',
  'four seasons',
  'ritz-carlton',
];

function hotelPriority(name: string, city: string): number {
  const lower = name.toLowerCase();
  const deprio = DEPRIORITIZE_NAMES.some(n => lower.includes(n)) ? 10 : 0;
  return cityRank(city) + deprio;
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('hotels')
      .select(
        'id, name, liteapi_id, city, area, type, amenities, pet_dogs, pet_cats, pet_notes, access_info, photo_urls, english_support, category_tags, caution_notes'
      )
      .eq('is_published', true)
      .not('liteapi_id', 'is', null)
      .not('photo_urls', 'is', null);

    if (error) {
      console.error('[featured-stays] Supabase error:', error.message);
      return NextResponse.json({ hotels: [] });
    }

    const withPhotos = (data ?? []).filter(
      (h: { photo_urls: unknown }) =>
        Array.isArray(h.photo_urls) && (h.photo_urls as string[]).length > 0
    );

    withPhotos.sort(
      (a: { name: string; city: string }, b: { name: string; city: string }) =>
        hotelPriority(a.name, a.city) - hotelPriority(b.name, b.city)
    );

    return NextResponse.json({ hotels: withPhotos.slice(0, 6) });
  } catch (err) {
    console.error('[featured-stays] Unexpected error:', err);
    return NextResponse.json({ hotels: [] });
  }
}
