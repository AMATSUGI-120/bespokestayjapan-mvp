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
  path: '/stays/luggage-friendly',
  planningNotes: [
    'Distance from the station is not the whole story; elevator routes and transfer complexity matter too.',
    'Confirm whether the stay can receive luggage before check-in or send luggage onward.',
    'For multi-city trips, luggage delivery can make one-night stops and crowded stations much easier.',
  ],
  guideLinks: [
    { href: '/japan-luggage-delivery-guide', label: 'Japan luggage delivery guide' },
    { href: '/shinkansen-oversized-luggage-guide', label: 'Shinkansen oversized luggage guide' },
    { href: '/japan-train-etiquette-guide', label: 'Japan train etiquette and transfer guide' },
  ],
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function LuggageFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
