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
};

export const dynamic = 'force-dynamic';
export const metadata = buildCategoryMetadata(config);

export default function TattooFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
