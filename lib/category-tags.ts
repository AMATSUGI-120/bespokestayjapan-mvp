export const CATEGORY_TAG_HREFS: Record<string, string> = {
  'pet-friendly': '/stays/pet-friendly',
  'tattoo-friendly': '/stays/tattoo-friendly',
  'tattoo-consideration': '/stays/tattoo-consideration',
  'private-villa': '/stays/private-villas',
  'self-catering': '/stays/self-catering',
  'private-bath': '/stays/private-bath',
  'luggage-friendly': '/stays/luggage-friendly',
  'access-friendly': '/stays/access-friendly',
  'english-friendly': '/stays/english-friendly',
  'family-friendly': '/stays/family-friendly',
  'food-friendly': '/stays/food-friendly',
};

const TAG_ALIASES: Record<string, string[]> = {
  'English-friendly': ['english-friendly'],
  'private-villas': ['private-villa'],
  'tattoo-friendly-private-bath': ['tattoo-friendly', 'private-bath'],
};

const CATEGORY_TAG_LABELS: Record<string, string> = {
  'pet-friendly': 'Pet-friendly',
  'tattoo-friendly': 'Tattoo-friendly',
  'tattoo-consideration': 'Tattoo consideration',
  'private-villa': 'Private villa',
  'self-catering': 'Self-catering',
  'private-bath': 'Private bath',
  'luggage-friendly': 'Luggage-friendly',
  'access-friendly': 'Access-friendly',
  'english-friendly': 'English-friendly',
  'family-friendly': 'Family-friendly',
  'food-friendly': 'Food-friendly',
};

const QUERY_TAG_ALIASES: Record<string, string[]> = {
  'english-friendly': ['English-friendly', 'english-friendly'],
  'private-villa': ['private-villa', 'private-villas'],
  'private-bath': ['private-bath', 'tattoo-friendly-private-bath'],
  'tattoo-friendly': ['tattoo-friendly', 'tattoo-friendly-private-bath'],
};

export function normalizeCategoryTag(tag: string): string[] {
  const trimmed = tag.trim();
  if (!trimmed) return [];

  const lower = trimmed.toLowerCase();
  return TAG_ALIASES[trimmed] ?? TAG_ALIASES[lower] ?? [lower];
}

export function normalizeCategoryTags(tags: string[] | null | undefined): string[] {
  const normalized = new Set<string>();

  for (const tag of tags ?? []) {
    if (typeof tag !== 'string') continue;
    for (const normalizedTag of normalizeCategoryTag(tag)) {
      if (normalizedTag) normalized.add(normalizedTag);
    }
  }

  return Array.from(normalized);
}

export function getCategoryTagQueryValues(tag: string): string[] {
  const normalized = normalizeCategoryTag(tag);
  const values = new Set<string>();

  for (const normalizedTag of normalized) {
    const aliases = QUERY_TAG_ALIASES[normalizedTag] ?? [normalizedTag];
    aliases.forEach((alias) => values.add(alias));
  }

  return Array.from(values);
}

export function getCategoryTagHref(tag: string): string | null {
  const [normalized] = normalizeCategoryTag(tag);
  return normalized ? CATEGORY_TAG_HREFS[normalized] ?? null : null;
}

export function formatCategoryTagLabel(tag: string): string {
  const [normalized] = normalizeCategoryTag(tag);
  if (!normalized) return tag;

  return CATEGORY_TAG_LABELS[normalized] ?? normalized.replace(/-/g, ' ');
}
