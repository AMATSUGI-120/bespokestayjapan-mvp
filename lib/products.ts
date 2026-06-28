export type ProductStatus = 'coming-soon' | 'available';

export type ProductKey =
  | 'kansai-tattoo-friendly-stay-kit'
  | 'kyoto-osaka-private-bath-stay-map'
  | 'japan-dietary-restriction-travel-kit'
  | 'japan-luggage-free-travel-kit'
  | 'japan-stay-planning-kits';

export interface Product {
  key: ProductKey;
  eyebrow: string;
  title: string;
  description: string;
  formatLabel?: string;
  priceLabel?: string;
  includes?: string[];
  status: ProductStatus;
  statusLabel: string;
  ctaLabel: string;
  purchaseUrl?: string;
}

export const products: Record<ProductKey, Product> = {
  'kansai-tattoo-friendly-stay-kit': {
    key: 'kansai-tattoo-friendly-stay-kit',
    eyebrow: 'Planning kit',
    title: 'Kansai Tattoo-Friendly Stay Kit',
    description:
      'A practical stay-planning kit for tattooed travelers visiting Osaka, Kyoto, Nara, and Kobe. Planned contents include a hotel comparison sheet, Google Map, bath-type notes, inquiry templates, and a stay-planning checklist.',
    formatLabel: 'PDF + Google Map + comparison sheet',
    priceLabel: 'Planned price: $9-19',
    includes: [
      'Tattoo-friendly stay planning guide',
      'Private bath, in-room bath, and public bath comparison notes',
      'Kansai candidate hotel comparison sheet',
      'Google Map for Osaka, Kyoto, Nara, and Kobe planning',
      'English inquiry template for hotel bath policies',
      'Stay-planning checklist before choosing a hotel',
    ],
    status: 'coming-soon',
    statusLabel: 'Product page coming later. This article is the free planning overview.',
    ctaLabel: 'Get the planning kit',
  },
  'kyoto-osaka-private-bath-stay-map': {
    key: 'kyoto-osaka-private-bath-stay-map',
    eyebrow: 'Planning kit',
    title: 'Kyoto & Osaka Private Bath Stay Map',
    description:
      'A planned comparison map for travelers who want private baths, in-room baths, or easier bathing options without relying on public bath access.',
    formatLabel: 'PDF + Google Map + comparison sheet',
    priceLabel: 'Planned price: $9-19',
    includes: [
      'Private bath and in-room bath comparison notes',
      'Kyoto and Osaka stay map',
      'Bath-type checklist for hotel listings',
      'Questions to confirm before choosing a stay',
    ],
    status: 'coming-soon',
    statusLabel: 'Product page coming later. Related stay profiles are available first.',
    ctaLabel: 'Get the private bath map',
  },
  'japan-dietary-restriction-travel-kit': {
    key: 'japan-dietary-restriction-travel-kit',
    eyebrow: 'Planning kit',
    title: 'Japan Dietary Restriction Travel Kit',
    description:
      'A planned kit with allergy, halal, vegetarian, vegan, and hotel meal confirmation templates for travelers who need clearer food communication in Japan.',
    formatLabel: 'PDF + template cards + inquiry scripts',
    priceLabel: 'Planned price: $9-29',
    includes: [
      'Dietary restriction explanation cards',
      'Hotel and ryokan meal confirmation templates',
      'Self-catering stay checklist',
      'Questions for allergy, halal, vegetarian, and vegan needs',
    ],
    status: 'coming-soon',
    statusLabel: 'Product page coming later. This guide keeps the main planning points in one place.',
    ctaLabel: 'Get the food planning kit',
  },
  'japan-luggage-free-travel-kit': {
    key: 'japan-luggage-free-travel-kit',
    eyebrow: 'Planning kit',
    title: 'Japan Luggage-Free Travel Kit',
    description:
      'A planned kit for travelers carrying large suitcases: train rules, delivery steps, hotel confirmation questions, and a practical movement checklist.',
    formatLabel: 'PDF + checklist + hotel questions',
    priceLabel: 'Planned price: $7-15',
    includes: [
      'Shinkansen oversized luggage planning notes',
      'Luggage delivery decision checklist',
      'Hotel luggage receiving questions',
      'Station transfer and overnight bag checklist',
    ],
    status: 'coming-soon',
    statusLabel: 'Product page coming later. Use this guide as the starting checklist.',
    ctaLabel: 'Get the luggage kit',
  },
  'japan-stay-planning-kits': {
    key: 'japan-stay-planning-kits',
    eyebrow: 'Related planning product',
    title: 'Japan Stay Planning Kits',
    description:
      'Future BSJ kits may include transport checklists, hotel-area notes, and Google Maps for specific needs such as luggage-light travel or family stays.',
    formatLabel: 'Downloadable planning kits',
    priceLabel: 'Product links coming later',
    includes: [
      'Hotel-area planning notes',
      'Condition-specific checklists',
      'Google Maps and comparison sheets where useful',
    ],
    status: 'coming-soon',
    statusLabel: 'Product links will be added when available.',
    ctaLabel: 'View planning kits',
  },
};

export function getProduct(key: ProductKey): Product {
  return products[key];
}
