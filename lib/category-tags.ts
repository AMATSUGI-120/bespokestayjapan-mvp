export const CATEGORY_TAG_HREFS: Record<string, string> = {
  'pet-friendly': '/stays/pet-friendly',
  'tattoo-friendly': '/stays/tattoo-friendly',
  'tattoo-consideration': '/stays/tattoo-consideration',
  'private-villa': '/stays/private-villas',
  'self-catering': '/stays/self-catering',
  'private-bath': '/stays/private-bath',
  'luggage-friendly': '/stays/luggage-friendly',
  'access-friendly': '/stays/access-friendly',
  'English-friendly': '/stays/english-friendly',
  'family-friendly': '/stays/family-friendly',
  'food-friendly': '/stays/food-friendly',
};

export function getCategoryTagHref(tag: string): string | null {
  return CATEGORY_TAG_HREFS[tag] ?? null;
}

export function formatCategoryTagLabel(tag: string): string {
  return tag.replace(/-/g, ' ');
}
