import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Pet-Friendly Stays',
  eyebrow: 'Traveling with pets',
  description:
    'Published stays with companion-animal policies, size notes, fees, or practical details that are easier to compare before you plan.',
  tags: ['pet-friendly'],
  path: '/stays/pet-friendly',
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function PetFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
