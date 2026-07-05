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
  planningNotes: [
    'Pet-friendly rules can depend on species, size, number of pets, room type, and required documents.',
    'Confirm fees, allowed areas, crate rules, and whether pets can be left alone in the room.',
    'For visitors entering Japan with pets, accommodation rules are separate from import and quarantine requirements.',
  ],
  guideLinks: [
    { href: '/japan-train-etiquette-guide', label: 'Japan train etiquette and transfer guide' },
  ],
};

export const revalidate = 3600;
export const metadata = buildCategoryMetadata(config);

export default function PetFriendlyPage() {
  return <CategoryStayPage config={config} />;
}
