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
  planningNotes: [
    'Tattoo-consideration means the stay may be useful, but the rule is conditional, incomplete, or important to verify.',
    'Look closely at bath type: in-room bath, private bath, and shared public bath are different planning situations.',
    'Keep written confirmation if bath access is central to your trip.',
  ],
  guideLinks: [
    { href: '/japan-onsen-etiquette-guide', label: 'Japan onsen etiquette guide' },
    { href: '/tattoo-friendly-stays-kansai', label: 'Tattoo-friendly stays in Kansai' },
  ],
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function TattooConsiderationPage() {
  return <CategoryStayPage config={config} />;
}
