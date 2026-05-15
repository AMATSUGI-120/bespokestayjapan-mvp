import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Tattoo-Consideration Stays',
  eyebrow: 'Ask before booking',
  description:
    'Published stays that may still work for tattooed travelers, but where bath access, public onsen rules, or property policy should be checked carefully before booking.',
  tags: ['tattoo-consideration'],
};

export const dynamic = 'force-dynamic';
export const metadata = buildCategoryMetadata(config);

export default function TattooConsiderationPage() {
  return <CategoryStayPage config={config} />;
}
