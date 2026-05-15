import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACES_BASE = 'https://places.googleapis.com/v1';
const MAX_PHOTOS = 5;

export async function POST(request: NextRequest) {
  try {
    const { hotelId, hotelName } = await request.json();

    if (!hotelId || !hotelName) {
      return NextResponse.json({ error: 'hotelId and hotelName required' }, { status: 400 });
    }

    // 1. Supabaseキャッシュ確認
    const { data } = await supabase
      .from('hotels')
      .select('photo_urls')
      .eq('id', hotelId)
      .single();

    if (data?.photo_urls && (data.photo_urls as string[]).length > 0) {
      return NextResponse.json({ photos: data.photo_urls, cached: true });
    }

    if (!PLACES_API_KEY) {
      return NextResponse.json({ photos: [] });
    }

    // 2. Google Places APIでホテル検索
    const searchResponse = await fetch(`${PLACES_BASE}/places:searchText`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': PLACES_API_KEY,
        'X-Goog-FieldMask': 'places.id,places.photos',
      },
      body: JSON.stringify({ textQuery: `${hotelName} Japan hotel` }),
    });

    if (!searchResponse.ok) {
      console.error('[hotel-photos] Places search failed:', searchResponse.status);
      return NextResponse.json({ photos: [] });
    }

    const searchData = await searchResponse.json();
    const place = searchData.places?.[0];

    if (!place?.photos?.length) {
      return NextResponse.json({ photos: [] });
    }

    // 3. リダイレクト先のCDN URLを解決してAPIキーをクライアントに渡さない
    const photoPromises = (place.photos as Array<{ name: string }>)
      .slice(0, MAX_PHOTOS)
      .map(async (photo) => {
        const mediaUrl = `${PLACES_BASE}/${photo.name}/media?maxHeightPx=800&key=${PLACES_API_KEY}`;
        try {
          const res = await fetch(mediaUrl, { redirect: 'follow' });
          return res.url;
        } catch {
          return null;
        }
      });

    const resolved = await Promise.all(photoPromises);
    const photoUrls = resolved.filter((u): u is string => !!u);

    // 4. Supabaseにキャッシュ保存
    if (photoUrls.length > 0) {
      await supabase
        .from('hotels')
        .update({ photo_urls: photoUrls })
        .eq('id', hotelId);
    }

    return NextResponse.json({ photos: photoUrls, cached: false });
  } catch (error) {
    console.error('[hotel-photos] Error:', error);
    return NextResponse.json({ photos: [] });
  }
}
