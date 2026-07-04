export type ExternalLinkProvider =
  | 'official'
  | 'booking'
  | 'agoda'
  | 'trip'
  | 'expedia'
  | 'hotels'
  | 'rakuten'
  | 'jalan'
  | 'google_maps'
  | 'source';

export interface ManagedExternalLink {
  href: string;
  label: string;
  provider: ExternalLinkProvider;
  isAffiliate: boolean;
}

interface ResolveHotelExternalLinkOptions {
  sourceUrl: string | null;
  hotelId: string;
}

interface AffiliateOverride {
  href: string;
  provider: ExternalLinkProvider;
}

const AFFILIATE_LINK_OVERRIDES: Record<string, AffiliateOverride> = {
  // Add Travelpayouts, OTA, or direct affiliate links here by hotel id.
  // Example:
  // '123': { href: 'https://...', provider: 'agoda' },
};

function normalizeExternalUrl(sourceUrl: string | null | undefined): string | null {
  const trimmed = sourceUrl?.trim();
  if (!trimmed) return null;

  try {
    return new URL(trimmed).toString();
  } catch {
    return null;
  }
}

function getExternalLinkProvider(url: string): ExternalLinkProvider {
  const hostname = new URL(url).hostname.replace(/^www\./, '').toLowerCase();

  if (hostname.includes('booking.com')) return 'booking';
  if (hostname.includes('agoda.com')) return 'agoda';
  if (hostname.includes('trip.com')) return 'trip';
  if (hostname.includes('expedia.')) return 'expedia';
  if (hostname.includes('hotels.com')) return 'hotels';
  if (hostname.includes('travel.rakuten.')) return 'rakuten';
  if (hostname.includes('jalan.net')) return 'jalan';
  if (hostname.includes('google.') || hostname.includes('goo.gl')) return 'google_maps';

  return 'official';
}

function getExternalLinkLabel(provider: ExternalLinkProvider, isAffiliate: boolean): string {
  if (isAffiliate) return 'Check booking options';

  switch (provider) {
    case 'booking':
    case 'agoda':
    case 'trip':
    case 'expedia':
    case 'hotels':
    case 'rakuten':
    case 'jalan':
      return 'Check booking options';
    case 'google_maps':
      return 'Open map listing';
    case 'source':
      return 'Open source page';
    case 'official':
    default:
      return 'Open official / source page';
  }
}

export function resolveHotelExternalLink({
  sourceUrl,
  hotelId,
}: ResolveHotelExternalLinkOptions): ManagedExternalLink | null {
  const override = AFFILIATE_LINK_OVERRIDES[hotelId];

  if (override) {
    return {
      href: override.href,
      provider: override.provider,
      isAffiliate: true,
      label: getExternalLinkLabel(override.provider, true),
    };
  }

  const href = normalizeExternalUrl(sourceUrl);
  if (!href) return null;

  const provider = getExternalLinkProvider(href);

  return {
    href,
    provider,
    isAffiliate: false,
    label: getExternalLinkLabel(provider, false),
  };
}
