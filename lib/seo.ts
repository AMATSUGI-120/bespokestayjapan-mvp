import type { Metadata } from 'next';

export const SITE_NAME = 'Bespoke Stay Japan';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bespokestayjapan.com';

export const DEFAULT_DESCRIPTION =
  'A researched Japan stay guide for travelers with practical needs: tattoo and bath notes, luggage support, self-catering, pets, family travel, English support, and access details.';

export function absoluteUrl(path = '/'): string {
  return new URL(path, SITE_URL).toString();
}

export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
