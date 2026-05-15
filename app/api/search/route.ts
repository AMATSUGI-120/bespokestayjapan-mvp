import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { searchHotels } from '@/lib/liteapi';
import { calculateMargin, generateRecommendationReason } from '@/lib/margin';
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

    // 3. ホテルごとに正しいmarginでLiteAPI検索（offerIdにmarginを含めるため個別呼び出し）
    const results: HotelResult[] = [];

    for (const { hotel, matchLevel } of top3) {
      if (!hotel.liteapi_id) continue;

      const margin = calculateMargin(hotel.layer, conditions);

      let liteapiData: Awaited<ReturnType<typeof searchHotels>>[number] | undefined;
      try {
        const [result] = await searchHotels({
          hotelIds: [hotel.liteapi_id],
          checkin,
          checkout,
          guests,
          margin,
        });
        liteapiData = result;
      } catch {
        // ホテル単体の失敗は他に影響しない
      }

      const netPrice = liteapiData?.price ?? 0;
      const finalPrice = netPrice;
      const liteapiOfferId = liteapiData?.offerId ?? '';
      const refundableTag = liteapiData?.refundableTag ?? '';
      const cancellationDeadline = liteapiData?.cancellationDeadline ?? null;

      console.log(`[PRICE DEBUG] hotel=${hotel.liteapi_id} layer=${hotel.layer} margin=${margin}% (commission) netPrice=${netPrice} offerId=${liteapiOfferId || '(none)'} refundableTag=${refundableTag}`);

      results.push({
        ...hotel,
        matchLevel,
        basePrice: netPrice,
        margin,
        finalPrice,
        liteapiOfferId,
        refundableTag,
        cancellationDeadline,
        recommendationReason: generateRecommendationReason(hotel, matchLevel, conditions),
      });
    }

    // 4. 価格が取得できなかったホテルは除外して返却
    const validResults = results.filter(
      (r) => r.finalPrice > 0 && r.liteapiOfferId !== ''
    );

    return NextResponse.json({ hotels: validResults });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
