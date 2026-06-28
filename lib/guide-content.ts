import type { ProductKey } from '@/lib/products';

export interface GuideLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface GuideSection {
  title: string;
  body?: string[];
  bullets?: string[];
}

export interface GuidePageContent {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string[];
  productKey?: ProductKey;
  sections: GuideSection[];
  relatedStays?: GuideLink[];
  sourceLinks?: GuideLink[];
}

export const guidePages: Record<string, GuidePageContent> = {
  'tattoo-friendly-stays-kansai': {
    path: '/tattoo-friendly-stays-kansai',
    eyebrow: 'Tattoo and bath notes',
    title: 'Tattoo-Friendly Stays in Kansai',
    description:
      'A practical guide to finding stays around Osaka, Kyoto, Nara, and Kobe where tattooed travelers can plan bathing and hotel communication with fewer surprises.',
    intro: [
      'Tattoo policies in Japan are not always visible in English, and the phrase "tattoo-friendly" can mean different things depending on the property. Some hotels allow tattoos in all baths, some allow them only if covered, and some recommend private or in-room bathing instead.',
      'This guide is designed as a planning layer before you choose a hotel: understand the bath type, confirm the policy, then compare stays that match your comfort level.',
    ],
    productKey: 'kansai-tattoo-friendly-stay-kit',
    sections: [
      {
        title: 'What to check first',
        bullets: [
          'Whether the property has a public bath, private reservable bath, in-room bath, or no shared bathing area.',
          'Whether tattoo rules apply only to the public bath or to the entire facility.',
          'Whether tattoo cover stickers are accepted, required, or not enough.',
          'Whether the policy is written by the property or inferred from third-party listings.',
        ],
      },
      {
        title: 'Bath types matter',
        body: [
          'A private bath and an in-room bath are not the same. A private bath is usually a reservable shared facility used alone for a set time. An in-room bath is inside the guest room. A public bath or large bath is shared with other guests and is where tattoo rules are most likely to matter.',
        ],
      },
      {
        title: 'How BSJ treats tattoo information',
        body: [
          'BSJ separates clear tattoo-friendly notes from softer tattoo-consideration notes. If a stay looks useful but the policy is conditional, it should be treated as "check before planning" rather than a guarantee.',
        ],
      },
      {
        title: 'Before you choose a stay',
        bullets: [
          'Ask the property directly if the bath policy is central to your stay decision.',
          'Mention the size and visibility of tattoos if needed.',
          'Confirm whether the answer applies to public baths, private baths, and in-room baths separately.',
        ],
      },
    ],
    relatedStays: [
      { href: '/stays/tattoo-friendly', label: 'Tattoo-friendly stay profiles' },
      { href: '/stays/tattoo-consideration', label: 'Tattoo consideration notes' },
      { href: '/stays/private-bath', label: 'Private bath stays' },
    ],
    sourceLinks: [
      {
        href: 'https://www.japan.travel/en/guide/onsen/',
        label: 'Japan National Tourism Organization: Onsen guide',
        external: true,
      },
    ],
  },
  'private-bath-stays-kansai': {
    path: '/private-bath-stays-kansai',
    eyebrow: 'Bath planning',
    title: 'Private Bath Stays in Kansai',
    description:
      'How to compare private baths, in-room baths, and public baths when choosing a stay in Osaka, Kyoto, Nara, or Kobe.',
    intro: [
      'For many travelers, the key question is not whether a hotel has a bath. It is whether the bath setup matches privacy, tattoo, family, or comfort needs.',
      'This guide explains the wording to look for before comparing BSJ stay profiles.',
    ],
    productKey: 'kyoto-osaka-private-bath-stay-map',
    sections: [
      {
        title: 'The three bath types',
        bullets: [
          'In-room bath: inside your room, usually the simplest option for privacy.',
          'Private or family bath: a reservable bath used privately for a limited time.',
          'Public bath or large bath: shared bathing area where local rules and etiquette matter most.',
        ],
      },
      {
        title: 'Why wording can be confusing',
        body: [
          'English listings often compress several Japanese bath types into one phrase. If bathing is a major reason for choosing the stay, confirm whether the bath is in the room, reservable, or shared.',
        ],
      },
      {
        title: 'Best fit travelers',
        bullets: [
          'Tattooed travelers who want fewer public-bath concerns.',
          'Families who need more control over bathing time.',
          'Couples or solo travelers who prefer quiet private bathing.',
        ],
      },
    ],
    relatedStays: [
      { href: '/stays/private-bath', label: 'Private bath stay profiles' },
      { href: '/stays/tattoo-friendly', label: 'Tattoo-friendly stays' },
      { href: '/stays/family-friendly', label: 'Family-friendly stays' },
    ],
    sourceLinks: [
      {
        href: 'https://www.japan.travel/en/guide/onsen/',
        label: 'Japan National Tourism Organization: Onsen guide',
        external: true,
      },
    ],
  },
  'shinkansen-oversized-luggage-guide': {
    path: '/shinkansen-oversized-luggage-guide',
    eyebrow: 'Train and luggage',
    title: 'Shinkansen Oversized Luggage Guide',
    description:
      'A practical guide to large luggage on Japanese bullet trains, and how it affects hotel choice, station transfers, and delivery planning.',
    intro: [
      'Large luggage can change the way you move through Japan. Even when a train route is simple, elevators, transfers, storage space, and hotel luggage support can become the real constraint.',
      'Use this guide before building an itinerary with multiple cities or large suitcases.',
    ],
    productKey: 'japan-luggage-free-travel-kit',
    sections: [
      {
        title: 'What to check before travel',
        bullets: [
          'Whether your suitcase falls under the oversized baggage rule on relevant Shinkansen routes.',
          'Whether your seat reservation includes oversized baggage space when needed.',
          'Whether station transfers require stairs, long walks, or crowded local lines.',
          'Whether your hotel can receive luggage delivery before arrival.',
        ],
      },
      {
        title: 'Hotel choice matters',
        body: [
          'A luggage-friendly stay is not only a place with storage. For multi-city trips, useful details include front desk hours, delivery acceptance, same-day storage, elevator access, and distance from the station.',
        ],
      },
      {
        title: 'When to consider delivery',
        body: [
          'Luggage delivery can make sense when traveling between cities, staying one night before a longer base stay, or visiting places where station movement is difficult. Always confirm receiving rules with the next hotel.',
        ],
      },
    ],
    relatedStays: [
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stays' },
      { href: '/stays/access-friendly', label: 'Access-friendly stays' },
    ],
    sourceLinks: [
      {
        href: 'https://global.jr-central.co.jp/en/info/oversized-baggage/',
        label: 'JR Central: Oversized baggage information',
        external: true,
      },
    ],
  },
  'japan-luggage-delivery-guide': {
    path: '/japan-luggage-delivery-guide',
    eyebrow: 'Hands-light travel',
    title: 'Japan Luggage Delivery Guide',
    description:
      'How to think about luggage forwarding, hotel receiving rules, and station movement when planning a Japan trip.',
    intro: [
      'Japan has strong luggage delivery options, but the practical details still matter: hotel acceptance, timing, destination address, cutoff times, and what you need to carry overnight.',
      'This guide is for travelers who want to reduce suitcase stress rather than carry everything through every transfer.',
    ],
    productKey: 'japan-luggage-free-travel-kit',
    sections: [
      {
        title: 'Useful use cases',
        bullets: [
          'Sending large suitcases from airport to hotel.',
          'Forwarding luggage between hotels during a multi-city trip.',
          'Traveling light for one night before rejoining your main luggage.',
          'Avoiding difficult station transfers with stairs or crowded trains.',
        ],
      },
      {
        title: 'Confirm with the hotel',
        bullets: [
          'Can the hotel receive luggage before check-in?',
          'Can the hotel send luggage to another hotel or airport?',
          'What name, date, and reservation details should appear on the delivery label?',
          'Are there front desk hours or storage limits?',
        ],
      },
      {
        title: 'What to keep with you',
        body: [
          'Do not send items you may need immediately: passport, medication, valuables, chargers, a change of clothes, and anything needed for check-in or the next morning.',
        ],
      },
    ],
    relatedStays: [
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stay profiles' },
      { href: '/stays/access-friendly', label: 'Access-friendly stays' },
    ],
    sourceLinks: [
      {
        href: 'https://www.global-yamato.com/en/hands-free-travel/',
        label: 'Yamato Transport: Hands-Free Travel',
        external: true,
      },
    ],
  },
  'dietary-restrictions-japan': {
    path: '/dietary-restrictions-japan',
    eyebrow: 'Food and hotel meals',
    title: 'Dietary Restrictions in Japan',
    description:
      'A stay-planning guide for travelers with allergies, halal, vegetarian, vegan, or other dietary needs in Japan.',
    intro: [
      'Dietary restrictions can be difficult to explain at hotels, ryokan, restaurants, and breakfast venues in Japan. Some properties can adjust meals with notice, some cannot, and some may need very specific wording.',
      'This guide focuses on what to confirm before relying on hotel meals or remote stay locations.',
    ],
    productKey: 'japan-dietary-restriction-travel-kit',
    sections: [
      {
        title: 'Confirm early',
        bullets: [
          'Whether the property can accommodate your restriction at all.',
          'Whether breakfast, dinner, or both are affected.',
          'Whether cross-contact is a concern for your situation.',
          'Whether the answer applies to every restaurant or only one meal venue.',
        ],
      },
      {
        title: 'Ryokan meals need extra care',
        body: [
          'Traditional ryokan meals can be fixed-course and prepared in advance. If food restrictions are central to the stay, contact the property before relying on the meal plan and keep the written answer.',
        ],
      },
      {
        title: 'When self-catering helps',
        body: [
          'For longer stays or strict restrictions, a stay with a kitchen, nearby supermarket, or apartment-style setup may reduce risk and stress.',
        ],
      },
    ],
    relatedStays: [
      { href: '/stays/food-friendly', label: 'Food-friendly stay profiles' },
      { href: '/stays/self-catering', label: 'Self-catering stays' },
      { href: '/stays/english-friendly', label: 'English-friendly stays' },
    ],
    sourceLinks: [
      {
        href: 'https://www.japan.travel/en/plan/vegetarian-guide/',
        label: 'Japan National Tourism Organization: Vegetarian guide',
        external: true,
      },
    ],
  },
  'ryokan-stay-guide': {
    path: '/ryokan-stay-guide',
    eyebrow: 'Traditional stays',
    title: 'Ryokan Stay Guide',
    description:
      'A practical first guide to ryokan stays: arrival timing, meals, bathing, bedding, tattoos, and what to confirm before planning around a property.',
    intro: [
      'A ryokan can be one of the best parts of a Japan trip, but it works differently from a standard hotel. Meal times, bath rules, room setup, and check-in timing can all affect the experience.',
      'This guide helps travelers decide what to confirm before choosing a traditional stay.',
    ],
    productKey: 'kansai-tattoo-friendly-stay-kit',
    sections: [
      {
        title: 'Core details to understand',
        bullets: [
          'Dinner and breakfast may have fixed times.',
          'Futon bedding may be prepared in the room by staff or laid out by guests.',
          'Bathing areas may be public, private, in-room, or a mix.',
          'Tattoo rules can matter if the stay includes shared baths.',
        ],
      },
      {
        title: 'Who should confirm more carefully',
        bullets: [
          'Travelers with tattoos who want to use baths.',
          'Travelers with dietary restrictions relying on ryokan meals.',
          'Families with young children and early bedtimes.',
          'Travelers arriving late after long transfers.',
        ],
      },
      {
        title: 'BSJ approach',
        body: [
          'BSJ profiles should make the practical constraints visible: bath type, meal flexibility, luggage notes, access, and caution notes where the public listing is not enough.',
        ],
      },
    ],
    relatedStays: [
      { href: '/stays/private-bath', label: 'Private bath stays' },
      { href: '/stays/tattoo-friendly', label: 'Tattoo-friendly stays' },
      { href: '/stays/food-friendly', label: 'Food-friendly stays' },
    ],
    sourceLinks: [
      {
        href: 'https://www.japan.travel/en/guide/ryokan/',
        label: 'Japan National Tourism Organization: Ryokan guide',
        external: true,
      },
    ],
  },
  'japan-ic-card-guide': {
    path: '/japan-ic-card-guide',
    eyebrow: 'Transport basics',
    title: 'Japan IC Card Guide',
    description:
      'A practical guide to using IC cards such as Suica, PASMO, and ICOCA when moving around Japan.',
    intro: [
      'IC cards make local transport easier in much of Japan, but availability, mobile setup, refunds, and regional coverage can still confuse visitors.',
      'This guide keeps the stay-planning angle in view: where you stay affects how often you transfer, whether you need buses, and how much cash backup you should carry.',
    ],
    productKey: 'japan-stay-planning-kits',
    sections: [
      {
        title: 'What IC cards help with',
        bullets: [
          'Local trains and many buses in major areas.',
          'Small purchases at many convenience stores, vending machines, and lockers.',
          'Reducing ticket-machine friction during busy transfers.',
        ],
      },
      {
        title: 'What to check',
        bullets: [
          'Whether a physical visitor card or mobile IC setup is available for your device.',
          'Whether your route includes areas or operators where IC cards are not accepted.',
          'Whether you need cash backup for rural transport, buses, temples, or small shops.',
        ],
      },
      {
        title: 'Stay planning angle',
        body: [
          'A hotel near a direct station can reduce transfer stress. If traveling with children, large luggage, or mobility concerns, the simplest route can be more valuable than the cheapest route.',
        ],
      },
    ],
    relatedStays: [
      { href: '/stays/access-friendly', label: 'Access-friendly stays' },
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stays' },
      { href: '/stays/family-friendly', label: 'Family-friendly stays' },
    ],
    sourceLinks: [
      {
        href: 'https://www.jreast.co.jp/multi/en/welcomesuica/welcomesuica.html',
        label: 'JR East: Welcome Suica',
        external: true,
      },
      {
        href: 'https://www.westjr.co.jp/global/en/howto/icoca/',
        label: 'JR West: ICOCA',
        external: true,
      },
    ],
  },
};
