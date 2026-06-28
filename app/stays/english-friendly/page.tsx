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
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function EnglishFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
