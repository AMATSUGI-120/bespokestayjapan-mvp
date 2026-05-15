import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Luggage-Friendly Stays',
  eyebrow: 'Station access and travel ease',
  description:
    'Published stays where luggage storage, station access, transfers, or room setup may make travel across Japan easier to manage.',
  tags: ['luggage-friendly'],
};

export const dynamic = 'force-dynamic';
export const metadata = buildCategoryMetadata(config);

export default function LuggageFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
