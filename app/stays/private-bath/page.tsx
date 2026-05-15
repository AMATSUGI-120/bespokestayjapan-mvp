import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Private-Bath Stays',
  eyebrow: 'Bath privacy',
  description:
    'Published stays with private-bath context, useful for travelers who prefer privacy or need clearer bath access before booking.',
  tags: ['private-bath'],
};

export const dynamic = 'force-dynamic';
export const metadata = buildCategoryMetadata(config);

export default function PrivateBathPage() {
  return <CategoryStayPage config={config} />;
}
