import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Private-Bath Stays',
  eyebrow: 'Bath privacy',
  description:
    'Published stays with private-bath context, useful for travelers who prefer privacy or need clearer bath access before planning.',
  tags: ['private-bath'],
  path: '/stays/private-bath',
  planningNotes: [
    'Private bath can mean an in-room bath, a reservable family bath, or a shared facility used privately by time slot.',
    'Check whether reservations, time limits, or extra fees apply.',
    'If the bath experience matters, confirm whether the water is hot spring water or a standard room bath.',
  ],
  guideLinks: [
    { href: '/private-bath-stays-kansai', label: 'Private bath stays in Kansai' },
    { href: '/japan-onsen-etiquette-guide', label: 'Japan onsen etiquette guide' },
  ],
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function PrivateBathPage() {
  return <CategoryStayPage config={config} />;
}
