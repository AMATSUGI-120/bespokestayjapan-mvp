import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Food-Friendly Stays',
  eyebrow: 'Food access and self-catering context',
  description:
    'Published stays tagged for food-related travel needs, including easier access to self-catering, vegetarian, vegan, halal, or other practical food options.',
  tags: ['food-friendly'],
};

export const dynamic = 'force-dynamic';
export const metadata = buildCategoryMetadata(config);

export default function FoodFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
