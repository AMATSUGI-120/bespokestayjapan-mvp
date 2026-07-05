import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'English-Friendly Stays',
  eyebrow: 'Language support',
  description:
    'Published stays tagged for English-friendly context, including clearer international information or guest support.',
  tags: ['english-friendly'],
  path: '/stays/english-friendly',
  planningNotes: [
    'English-friendly usually means clearer information or support, not that every staff member is fluent.',
    'For tattoos, meals, pets, or accessibility, still ask specific questions before relying on the stay.',
    'Written confirmation can reduce misunderstandings for important stay conditions.',
  ],
  guideLinks: [
    { href: '/japan-restaurant-etiquette-guide', label: 'Japan restaurant etiquette guide' },
    { href: '/japan-train-etiquette-guide', label: 'Japan train etiquette and transfer guide' },
  ],
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function EnglishFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
