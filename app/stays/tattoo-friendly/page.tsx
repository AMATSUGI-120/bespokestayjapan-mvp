import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Tattoo-Friendly & Tattoo-Consideration Stays',
  eyebrow: 'Bath access and policy clarity',
  description:
    'A combined view of stays tagged tattoo-friendly and tattoo-consideration. Tattoo-friendly indicates lower-friction or clearer access; tattoo-consideration means the stay may still be useful, but details should be checked carefully before planning around them.',
  tags: ['tattoo-friendly', 'tattoo-consideration'],
  path: '/stays/tattoo-friendly',
  planningNotes: [
    'Tattoo-friendly does not always mean shared public bath access.',
    'Check whether the stay has a public bath, reservable private bath, or in-room bath.',
    'If tattoos must be covered, confirm whether cover stickers are accepted and whether size limits apply.',
  ],
  guideLinks: [
    { href: '/japan-onsen-etiquette-guide', label: 'Japan onsen etiquette guide' },
    { href: '/tattoo-friendly-stays-kansai', label: 'Tattoo-friendly stays in Kansai' },
    { href: '/private-bath-stays-kansai', label: 'Private bath stays in Kansai' },
  ],
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function TattooFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
