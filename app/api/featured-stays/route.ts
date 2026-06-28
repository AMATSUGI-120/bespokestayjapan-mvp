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
        'id, name, city, area, type, amenities, pet_dogs, pet_cats, pet_notes, access_info, english_support, category_tags, short_description, best_for, caution_notes'
      )
      .eq('is_published', true);

    if (error) {
      console.error('[featured-stays] Supabase error:', error.message);
      return NextResponse.json({ hotels: [] });
    }

    const publishedHotels = data ?? [];

    publishedHotels.sort(
      (a: { name: string; city: string }, b: { name: string; city: string }) =>
        hotelPriority(a.name, a.city) - hotelPriority(b.name, b.city)
    );

    return NextResponse.json({ hotels: publishedHotels.slice(0, 6) });
  } catch (err) {
    console.error('[featured-stays] Unexpected error:', err);
    return NextResponse.json({ hotels: [] });
  }
}
