import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Tattoo-Consideration Stays',
  eyebrow: 'Check before planning',
  description:
    'Published stays that may still work for tattooed travelers, but where bath access, public onsen rules, or property policy should be checked carefully before planning around them.',
  tags: ['tattoo-consideration'],
  path: '/stays/tattoo-consideration',
};

export const dynamic = 'force-dynamic';
export const metadata = buildCategoryMetadata(config);

export default function TattooConsiderationPage() {
  return <CategoryStayPage config={config} />;
}
