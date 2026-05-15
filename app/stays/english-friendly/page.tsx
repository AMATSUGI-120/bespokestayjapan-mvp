import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'English-Friendly Stays',
  eyebrow: 'Language support',
  description:
    'Published stays tagged for English-friendly context, including clearer international booking information or guest support.',
  tags: ['English-friendly'],
};

export const dynamic = 'force-dynamic';
export const metadata = buildCategoryMetadata(config);

export default function EnglishFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
