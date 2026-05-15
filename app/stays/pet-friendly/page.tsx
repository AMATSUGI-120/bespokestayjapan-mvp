import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Pet-Friendly Stays',
  eyebrow: 'Traveling with pets',
  description:
    'Published stays with companion-animal policies, size notes, fees, or booking details that are easier to compare before you commit.',
  tags: ['pet-friendly'],
};

export const dynamic = 'force-dynamic';
export const metadata = buildCategoryMetadata(config);

export default function PetFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
