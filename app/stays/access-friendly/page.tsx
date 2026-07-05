import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Access-Friendly Stays',
  eyebrow: 'ACCESS NOTES',
  description:
    'Stays with clearer access information, elevator details, station proximity, or easier movement with luggage. Always confirm accessibility details directly before planning around them.',
  tags: ['access-friendly'],
  path: '/stays/access-friendly',
  planningNotes: [
    'Access-friendly does not mean fully wheelchair-accessible or barrier-free.',
    'Check elevator routes, station exits, entrance steps, bathroom layout, and luggage movement directly.',
    'When accessibility is essential, confirm the exact details with the property before booking.',
  ],
  guideLinks: [
    { href: '/japan-train-etiquette-guide', label: 'Japan train etiquette and transfer guide' },
    { href: '/japan-luggage-delivery-guide', label: 'Japan luggage delivery guide' },
  ],
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function AccessFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
