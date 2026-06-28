export function createHotelSlug(name: string, city?: string | null): string {
  const base = [name, city]
    .filter((part): part is string => typeof part === 'string' && part.trim().length > 0)
    .join(' ')
    .normalize('NFKD')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');

  return base || 'stay';
}

export function getHotelProfileHref({
  name,
  city,
}: {
  name: string;
  city?: string | null;
}): string {
  return `/hotels/${createHotelSlug(name, city)}`;
}
