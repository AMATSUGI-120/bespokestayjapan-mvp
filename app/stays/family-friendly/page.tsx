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
  path: '/stays/family-friendly',
  planningNotes: [
    'Family-friendly can mean room layout, bath privacy, laundry, meal flexibility, or easier station access.',
    'Check bed setup, child meal rules, stroller routes, and whether luggage storage works for your arrival day.',
    'A calmer base can be more useful than a slightly cheaper or more central stay.',
  ],
  guideLinks: [
    { href: '/japan-train-etiquette-guide', label: 'Japan train etiquette and transfer guide' },
    { href: '/japan-restaurant-etiquette-guide', label: 'Japan restaurant etiquette guide' },
    { href: '/private-bath-stays-kansai', label: 'Private bath stays in Kansai' },
  ],
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function FamilyFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
