import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Private Villas & Stays',
  eyebrow: 'Private stays',
  description:
    'Published private-villa stays for travelers who want more privacy, more control over shared spaces, or a quieter base in Japan.',
  tags: ['private-villa'],
  path: '/stays/private-villas',
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function PrivateVillasPage() {
  return <CategoryStayPage config={config} />;
}
