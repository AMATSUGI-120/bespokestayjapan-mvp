export type LeadMagnetKey =
  | 'free-japan-stay-checklist'
  | 'free-japan-phrase-cards'
  | 'tattoo-friendly-stay-inquiry-template'
  | 'private-bath-comparison-sheet'
  | 'japan-luggage-planning-mini-sheet'
  | 'dietary-restriction-check-sheet'
  | 'kansai-tattoo-stay-starter-list';

export interface LeadMagnet {
  key: LeadMagnetKey;
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  pdfUrl: string;
  fileName: string;
}

export const leadMagnets: Record<LeadMagnetKey, LeadMagnet> = {
  'free-japan-stay-checklist': {
    key: 'free-japan-stay-checklist',
    path: '/free-japan-stay-checklist',
    eyebrow: 'Free stay planning checklist',
    title: 'Japan Stay Pre-Booking Checklist',
    description:
      'A practical BSJ checklist for choosing Japan stays when tattoos, luggage, food needs, private baths, pets, family travel, or long-stay comfort matter.',
    ctaLabel: 'Get the checklist by email',
    pdfUrl: '/downloads/japan-stay-pre-booking-checklist-bsj-sample.pdf',
    fileName: 'japan-stay-pre-booking-checklist-bsj-sample.pdf',
  },
  'free-japan-phrase-cards': {
    key: 'free-japan-phrase-cards',
    path: '/free-japan-phrase-cards',
    eyebrow: 'Free phone cards',
    title: 'Free Japan Phrase Cards',
    description:
      'Phone-friendly show-this-card Japanese for restaurants, hotels, trains, taxis, onsen, luggage, and basic help.',
    ctaLabel: 'Get the free cards by email',
    pdfUrl: '/downloads/japan-survival-phrase-cards-bsj-sample.pdf',
    fileName: 'japan-survival-phrase-cards-bsj-sample.pdf',
  },
  'tattoo-friendly-stay-inquiry-template': {
    key: 'tattoo-friendly-stay-inquiry-template',
    path: '/downloads/tattoo-friendly-stay-inquiry-template-bsj-sample.pdf',
    eyebrow: 'Hotel message sample',
    title: 'Tattoo Stay Inquiry Template',
    description:
      'Short hotel questions for tattooed travelers who need bath policy clarity before booking in Japan.',
    ctaLabel: 'Get the tattoo inquiry template',
    pdfUrl: '/downloads/tattoo-friendly-stay-inquiry-template-bsj-sample.pdf',
    fileName: 'tattoo-friendly-stay-inquiry-template-bsj-sample.pdf',
  },
  'private-bath-comparison-sheet': {
    key: 'private-bath-comparison-sheet',
    path: '/downloads/private-bath-comparison-sheet-bsj-sample.pdf',
    eyebrow: 'Bath wording sample',
    title: 'Private Bath Comparison Sheet',
    description:
      'A quick guide to the difference between public baths, reservable private baths, and in-room baths in Japan.',
    ctaLabel: 'Get the private bath sheet',
    pdfUrl: '/downloads/private-bath-comparison-sheet-bsj-sample.pdf',
    fileName: 'private-bath-comparison-sheet-bsj-sample.pdf',
  },
  'japan-luggage-planning-mini-sheet': {
    key: 'japan-luggage-planning-mini-sheet',
    path: '/downloads/japan-luggage-planning-mini-sheet-bsj-sample.pdf',
    eyebrow: 'Luggage sample',
    title: 'Japan Luggage Planning Mini Sheet',
    description:
      'A practical checklist for travelers with large bags, city transfers, luggage delivery, or early arrivals.',
    ctaLabel: 'Get the luggage mini sheet',
    pdfUrl: '/downloads/japan-luggage-planning-mini-sheet-bsj-sample.pdf',
    fileName: 'japan-luggage-planning-mini-sheet-bsj-sample.pdf',
  },
  'dietary-restriction-check-sheet': {
    key: 'dietary-restriction-check-sheet',
    path: '/downloads/dietary-restriction-check-sheet-bsj-sample.pdf',
    eyebrow: 'Food needs sample',
    title: 'Dietary Restriction Check Sheet',
    description:
      'A Japan-specific food and hotel meal checklist for vegetarian, vegan, halal, allergy, and other food concerns.',
    ctaLabel: 'Get the food needs sheet',
    pdfUrl: '/downloads/dietary-restriction-check-sheet-bsj-sample.pdf',
    fileName: 'dietary-restriction-check-sheet-bsj-sample.pdf',
  },
  'kansai-tattoo-stay-starter-list': {
    key: 'kansai-tattoo-stay-starter-list',
    path: '/downloads/kansai-tattoo-stay-starter-list-bsj-sample.pdf',
    eyebrow: 'Starter list sample',
    title: 'Kansai Tattoo Stay Starter List',
    description:
      'A sample planning worksheet for tattooed travelers comparing Osaka, Kyoto, Nara, Kobe, and nearby stay options.',
    ctaLabel: 'Get the starter list',
    pdfUrl: '/downloads/kansai-tattoo-stay-starter-list-bsj-sample.pdf',
    fileName: 'kansai-tattoo-stay-starter-list-bsj-sample.pdf',
  },
};

export function getLeadMagnet(key: LeadMagnetKey): LeadMagnet {
  return leadMagnets[key];
}

export const leadMagnetSampleKeys: LeadMagnetKey[] = [
  'free-japan-stay-checklist',
  'free-japan-phrase-cards',
  'tattoo-friendly-stay-inquiry-template',
  'private-bath-comparison-sheet',
  'japan-luggage-planning-mini-sheet',
  'dietary-restriction-check-sheet',
  'kansai-tattoo-stay-starter-list',
];

export function getLeadMagnetSamples(): LeadMagnet[] {
  return leadMagnetSampleKeys.map((key) => leadMagnets[key]);
}
