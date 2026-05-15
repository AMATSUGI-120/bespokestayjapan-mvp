import { Hotel, SearchConditions } from './types';

/**
 * Layer別マージン計算
 * Layer 1: 一般 (小型犬・2-3人) → 7%
 * Layer 2: 中間 (中型犬・4人) → 10%
 * Layer 3: ニッチ (大型犬・5+人・複数匹) → 15%
 */
export function calculateMargin(layer: number, conditions: SearchConditions): number {
  const baseMargins: Record<number, number> = {
    1: 7,
    2: 10,
    3: 15,
  };

  let margin = baseMargins[layer] ?? 7;

  // 大型犬 + Layer 3 = そのまま 15%
  if (conditions.petSize === 'large' && layer === 3) {
    margin = 15;
  }

  // 5人以上 + Layer 3 = そのまま 15%
  if (conditions.guests >= 5 && layer === 3) {
    margin = 15;
  }

  return margin;
}

/**
 * 最終価格計算 (端数処理込み)
 * LiteAPIに送る金額は整数 (円単位)
 */
export function calculateFinalPrice(basePrice: number, margin: number): number {
  return Math.ceil(basePrice * (1 + margin / 100));
}

/**
 * AI推薦理由生成
 */
export function generateRecommendationReason(
  hotel: Hotel,
  matchLevel: number,
  conditions: SearchConditions
): string {
  if (matchLevel === 100) {
    if (conditions.petSize === 'large') {
      return `Perfect match! They welcome large dogs up to ${hotel.pet_size_limit_kg ?? 'any size'}kg.`;
    }
    return `Perfect match for your ${conditions.guests} guests and ${conditions.petSize} dog!`;
  }

  if (matchLevel === 80) {
    return `Great option! Slight flexibility needed, but excellent facilities.`;
  }

  return `Budget-friendly alternative with good pet amenities.`;
}
