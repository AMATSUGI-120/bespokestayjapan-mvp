import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';
import { guidePages } from '@/lib/guide-content';
import { buildPageMetadata } from '@/lib/seo';

const guide = guidePages['japan-shrine-temple-etiquette-guide'];

export const metadata: Metadata = buildPageMetadata({
  title: guide.title,
  description: guide.description,
  path: guide.path,
});

export default function JapanShrineTempleEtiquetteGuidePage() {
  return <GuidePage guide={guide} />;
}
