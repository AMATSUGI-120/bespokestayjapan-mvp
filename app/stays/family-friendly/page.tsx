import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Family-Friendly Stays',
  eyebrow: 'Family travel',
  description:
    'Published stays tagged for family-friendly travel, with practical notes that can make planning across Japan easier.',
  tags: ['family-friendly'],
};

export const dynamic = 'force-dynamic';
export const metadata = buildCategoryMetadata(config);

export default function FamilyFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
