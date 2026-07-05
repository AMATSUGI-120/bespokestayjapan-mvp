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
  path: '/stays/food-friendly',
  planningNotes: [
    'Food-friendly does not guarantee allergy, halal, vegan, or vegetarian support.',
    'Confirm meal support before relying on hotel breakfast, ryokan dinner, or remote-area dining.',
    'Room-only plans, nearby supermarkets, or self-catering can be safer for strict restrictions.',
  ],
  guideLinks: [
    { href: '/dietary-restrictions-japan', label: 'Dietary restrictions in Japan' },
    { href: '/japan-restaurant-etiquette-guide', label: 'Japan restaurant etiquette guide' },
    { href: '/ryokan-stay-guide', label: 'Ryokan stay guide' },
  ],
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function FoodFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
