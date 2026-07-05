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
  path: '/stays/self-catering',
  planningNotes: [
    'Self-catering can mean anything from a simple microwave to a real kitchen, so check the actual equipment.',
    'For dietary restrictions, nearby supermarkets and storage space can matter as much as the kitchen itself.',
    'For longer stays, also compare laundry, room layout, trash rules, and nearby transport.',
  ],
  guideLinks: [
    { href: '/dietary-restrictions-japan', label: 'Dietary restrictions in Japan' },
    { href: '/japan-restaurant-etiquette-guide', label: 'Japan restaurant etiquette guide' },
  ],
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function SelfCateringPage() {
  return <CategoryStayPage config={config} />;
}
