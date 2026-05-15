import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Self-Catering Stays',
  eyebrow: 'Kitchen and food flexibility',
  description:
    'Published stays with self-catering context, useful for longer trips, families, dietary needs, or travelers who want more control over meals.',
  tags: ['self-catering'],
};

export const dynamic = 'force-dynamic';
export const metadata = buildCategoryMetadata(config);

export default function SelfCateringPage() {
  return <CategoryStayPage config={config} />;
}
