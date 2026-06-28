import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';
import { guidePages } from '@/lib/guide-content';
import { buildPageMetadata } from '@/lib/seo';

const guide = guidePages['ryokan-stay-guide'];

export const metadata: Metadata = buildPageMetadata({
  title: guide.title,
  description: guide.description,
  path: guide.path,
});

export default function RyokanStayGuidePage() {
  return <GuidePage guide={guide} />;
}

