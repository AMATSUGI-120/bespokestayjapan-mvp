import type { MetadataRoute } from 'next';
import { guidePages } from '@/lib/guide-content';
import { absoluteUrl } from '@/lib/seo';

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
  '/free-japan-phrase-cards',
  '/japan-confirmation-service',
  ...Object.values(guidePages).map((guide) => guide.path),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/stays' || path === '/guides' ? 0.8 : 0.6,
  }));
}
