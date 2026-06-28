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
  template?: {
    title: string;
    intro?: string;
    messages: Array<{
      label: string;
      text: string;
    }>;
  };
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
      'If you travel with tattoos in Japan, the hard part is often not finding a hotel room. It is understanding what you can use once you arrive: the public bath, the large bath, a private reservable bath, an in-room bath, or none of those.',
      'Kansai has many excellent places to stay, but tattoo policies are still uneven and English listings often compress important bath details into vague phrases. This guide helps you read those phrases more carefully before choosing a stay in Osaka, Kyoto, Nara, or Kobe.',
      'Use it as a planning checklist, not a guarantee. If a bath experience is important to your trip, confirm the current rule directly with the property before relying on it.',
    ],
    productKey: 'kansai-tattoo-friendly-stay-kit',
    sections: [
      {
        title: 'Why tattoo-friendly stays are hard to compare',
        bullets: [
          'A hotel can be easy to book but still have restrictions in the shared bath.',
          'Some properties allow tattoos only if covered with a sticker or bandage.',
          'Some listings mention a private bath, but do not clearly say whether it is in the room or reservable by time slot.',
          'A policy may apply to the public bath only, while the guest room bath is unaffected.',
          'Rules can change, especially when the information comes from third-party listings or older reviews.',
        ],
      },
      {
        title: 'Know the bath types before you compare hotels',
        body: [
          'A public bath or large bath is shared with other guests. This is where tattoo rules most often matter, and where you should check the property policy carefully.',
          'A private bath is usually a bath facility that guests reserve and use privately for a limited time. It may still be outside your room, and it may require a reservation, extra fee, or specific time slot.',
          'An in-room bath is inside your guest room. For tattooed travelers, this is usually the lowest-friction bathing option, but it may not offer the same experience as an onsen or large bath.',
        ],
      },
      {
        title: 'What tattoo-friendly can mean',
        body: [
          'The phrase "tattoo-friendly" is useful, but it is not always precise. It may mean tattoos are allowed in the public bath, tattoos are allowed only when covered, the property has a private bath option, or guests with tattoos have reported no issues.',
          'BSJ separates stronger tattoo-friendly signals from tattoo-consideration notes. Tattoo-consideration means the stay may still be useful, but the bath rule is conditional, incomplete, or important enough to confirm before planning around it.',
        ],
      },
      {
        title: 'What to ask before choosing a stay',
        bullets: [
          'Can guests with visible tattoos use the public bath or large bath?',
          'If tattoos must be covered, are cover stickers accepted and are there size limits?',
          'Is there a private bath, family bath, or reservable bath that tattooed guests can use?',
          'Is the private bath inside the room, or is it a shared facility reserved by time slot?',
          'Does the policy apply to all guests, or only to the bathing area?',
          'Can the property confirm the answer in writing before your stay?',
        ],
      },
      {
        title: 'Kansai planning notes',
        body: [
          'Osaka is often practical for first-time visitors because transport is straightforward and many city hotels are easier to compare by station access, luggage support, and bath type. Kyoto has strong ryokan and machiya options, but bath wording can be more important because traditional stays may rely more heavily on shared or reservable baths.',
          'Nara and Kobe can work well as quieter additions to a Kansai trip, but the number of clearly documented tattoo-related stay options may be smaller. If bathing is central to your plan, compare the bath setup first, then compare location.',
        ],
      },
      {
        title: 'A simple decision path',
        bullets: [
          'If you want the lowest-friction option, prioritize an in-room bath or apartment-style stay.',
          'If you want a ryokan or onsen-style experience, look for a private bath or a clearly written tattoo policy.',
          'If the listing only says "public bath" or "large bath," assume you need to confirm the tattoo rule.',
          'If your tattoo is large, visible, or difficult to cover, do not rely on sticker-friendly wording without asking.',
          'If the stay is expensive or hard to replace, keep the property answer with your trip notes.',
        ],
      },
      {
        title: 'Sample message to send a hotel',
        body: [
          'If the bath policy is important to your stay, send a short message before choosing a room. Keep the question specific: public bath, private bath, and in-room bath can have different rules.',
        ],
        template: {
          title: 'Tattoo and bath policy check',
          intro: 'You can adapt this message when contacting a hotel, ryokan, or machiya operator.',
          messages: [
            {
              label: 'English',
              text: `Hello,
I am considering staying at your property.
I have visible tattoos and would like to confirm the bathing policy before I choose a room.

Could guests with tattoos use:
- the public bath / large bath?
- a private reservable bath?
- the in-room bath?

If tattoos must be covered, are tattoo cover stickers accepted?

Thank you.`,
            },
            {
              label: 'Japanese',
              text: `宿泊を検討しています。
タトゥーが見える場所にあるため、宿泊前に浴場利用のルールを確認したいです。

タトゥーがある宿泊者は、
・大浴場
・貸切風呂
・客室内のお風呂
を利用できますか？

タトゥーを隠す必要がある場合、カバーシールの利用は可能ですか？

よろしくお願いいたします。`,
            },
          ],
        },
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
      {
        href: 'https://time.com/4263931/japan-spa-onsen-tattoo-tourists/',
        label: 'TIME: Japan Tourism Agency tattoo guidance report',
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
