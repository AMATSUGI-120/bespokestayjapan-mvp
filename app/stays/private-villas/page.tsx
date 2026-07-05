import {
  CategoryStayPage,
  buildCategoryMetadata,
  type StayCategoryConfig,
} from '../CategoryStayPage';

const config: StayCategoryConfig = {
  title: 'Private Villas & Stays',
  eyebrow: 'Private stays',
  description:
    'Published private-villa stays for travelers who want more privacy, more control over shared spaces, or a quieter base in Japan.',
  tags: ['private-villa'],
  path: '/stays/private-villas',
  planningNotes: [
    'Private stays can be calmer, but check transport, check-in method, trash rules, and nearby food options.',
    'For groups or families, confirm bed setup, bathrooms, kitchen equipment, and noise rules.',
    'If the stay is remote, compare luggage movement and last-mile transport before choosing it.',
  ],
  guideLinks: [
    { href: '/japan-luggage-delivery-guide', label: 'Japan luggage delivery guide' },
    { href: '/japan-restaurant-etiquette-guide', label: 'Japan restaurant etiquette guide' },
  ],
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function PrivateVillasPage() {
  return <CategoryStayPage config={config} />;
}
