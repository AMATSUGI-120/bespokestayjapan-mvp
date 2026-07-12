import type { MetadataRoute } from 'next';
import { guidePages } from '@/lib/guide-content';
import { createHotelSlug } from '@/lib/hotel-slug';
import { absoluteUrl } from '@/lib/seo';
import { supabase } from '@/lib/supabase';

const staticPaths = [
  '/',
  '/stays',
  '/stays/access-friendly',
  '/stays/english-friendly',
  '/stays/family-friendly',
  '/stays/food-friendly',
  '/stays/luggage-friendly',
  '/stays/pet-friendly',
  '/stays/private-bath',
  '/stays/private-villas',
  '/stays/self-catering',
  '/stays/tattoo-consideration',
  '/stays/tattoo-friendly',
  '/guides',
  '/free-kansai-tattoo-stay-kit',
  '/free-japan-travel-samples',
  '/free-japan-stay-checklist',
  '/free-japan-phrase-cards',
  '/japan-confirmation-service',
  ...Object.values(guidePages).map((guide) => guide.path),
];

async function getPublishedHotelPaths(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from('hotels')
      .select('name, city')
      .eq('is_published', true);

    if (error) {
      console.error('[sitemap] Supabase hotel query failed:', error.message);
      return [];
    }

    return Array.from(
      new Set(
        (data ?? [])
          .filter((hotel): hotel is { name: string; city: string | null } =>
            typeof hotel.name === 'string' && hotel.name.trim().length > 0
          )
          .map((hotel) => `/hotels/${createHotelSlug(hotel.name, hotel.city)}`)
      )
    );
  } catch (error) {
    console.error('[sitemap] Failed to build hotel paths:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const hotelPaths = await getPublishedHotelPaths();

  return [...staticPaths, ...hotelPaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/stays' || path === '/guides' ? 0.8 : path.startsWith('/hotels/') ? 0.7 : 0.6,
  }));
}
