import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { searchHotels } from '@/lib/liteapi';
import { calculateMargin, calculateFinalPrice, generateRecommendationReason } from '@/lib/margin';
import { Hotel, SearchConditions, HotelResult } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const conditions: SearchConditions = await request.json();
    const { city, petSize, guests, checkin, checkout } = conditions;

    // 1. Supabaseからホテル取得 (cityでフィルター)
    const { data: allHotels, error } = await supabase
      .from('hotels')
      .select('*')
      .eq('city', city);

    if (error) {
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    if (!allHotels || allHotels.length === 0) {
      return NextResponse.json({ hotels: [] });
    }

    // 2. マッチングスコア計算
    const petSizeKgMap: Record<string, number> = {
      small: 7,
      medium: 15,
      large: 9999,
      any: 9999,
    };
    const requestedKg = petSizeKgMap[petSize] ?? 9999;

    const scored: Array<{ hotel: Hotel; matchLevel: 100 | 80 | 60 }> = [];

    for (const hotel of allHotels as Hotel[]) {
      const sizeLimit = hotel.pet_size_limit_kg ?? 9999;
      const guestsOk = true; // 基本OK (部屋数等は検索時に確認)

      let matchLevel: 100 | 80 | 60 | null = null;

      if (petSize === 'any' || sizeLimit >= requestedKg) {
        // 100% マッチ: petSize完全一致 + guests対応
        if (guestsOk) {
          matchLevel = 100;
        }
      } else if (sizeLimit >= requestedKg * 0.8) {
        // 80% マッチ: petSizeは一段階の融和
        matchLevel = 80;
      } else {
        // 60% マッチ: さらに融和
        matchLevel = 60;
      }

      if (matchLevel !== null) {
        scored.push({ hotel, matchLevel });
      }
    }

    // マッチレベル順にソート
    scored.sort((a, b) => b.matchLevel - a.matchLevel);

    // 上位3件
    const top3 = scored.slice(0, 3);

    if (top3.length === 0) {
      return NextResponse.json({ hotels: [] });
    }

    // 3. LiteAPI検索 (またはモック) で価格取得
    const hotelIds = top3
      .map((s) => s.hotel.liteapi_id)
      .filter((id): id is string => id !== null);

    let liteapiResults: Awaited<ReturnType<typeof searchHotels>> = [];
    if (hotelIds.length > 0) {
      liteapiResults = await searchHotels({ hotelIds, checkin, checkout, guests });
    }

    const liteapiMap = new Map(liteapiResults.map((r) => [r.hotelId, r]));

    // 4. Layer別マージン適用 & 最終価格計算
    const results: HotelResult[] = top3.map(({ hotel, matchLevel }) => {
      const liteapiData = hotel.liteapi_id ? liteapiMap.get(hotel.liteapi_id) : undefined;
      const basePrice = liteapiData?.price ?? 0;
      const margin = calculateMargin(hotel.layer, conditions);
      const finalPrice = calculateFinalPrice(basePrice, margin);
      const liteapiOfferId = liteapiData?.offerId ?? '';
      const recommendationReason = generateRecommendationReason(hotel, matchLevel, conditions);

      return {
        ...hotel,
        matchLevel,
        basePrice,
        margin,
        finalPrice,
        liteapiOfferId,
        recommendationReason,
      };
    });

    // 5. 3件を返却 (マッチレベル順)
    return NextResponse.json({ hotels: results });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
