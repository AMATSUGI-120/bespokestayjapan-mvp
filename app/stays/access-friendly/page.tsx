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
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function AccessFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
