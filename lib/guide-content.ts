import type { ProductKey } from '@/lib/products';

export interface GuideLink {
  href: string;
  label: string;
  external?: boolean;
  sponsored?: boolean;
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
  serviceLinks?: GuideLink[];
  sourceLinks?: GuideLink[];
}

const affiliateServiceLinks = {
  airaloJapan: {
    href: 'https://airalo.tpk.mx/ztsQtMmA',
    label: 'Compare Japan eSIMs on Airalo',
    external: true,
    sponsored: true,
  },
  sailyJapan: {
    href: 'https://saily.tpk.mx/5RWqVnM8',
    label: 'Check Japan eSIM plans on Saily',
    external: true,
    sponsored: true,
  },
  yesimJapan: {
    href: 'https://yesim.tpk.mx/oj7KCPUG',
    label: 'Check Japan eSIM plans on Yesim',
    external: true,
    sponsored: true,
  },
  radicalStorageJapan: {
    href: 'https://radicalstorage.tpk.mx/bz9wL4jy',
    label: 'Find luggage storage with Radical Storage',
    external: true,
    sponsored: true,
  },
  kiwitaxiJapan: {
    href: 'https://kiwitaxi.tpk.mx/0f91KlnQ',
    label: 'Check private transfer options on Kiwitaxi',
    external: true,
    sponsored: true,
  },
  klookJapanActivities: {
    href: 'https://klook.tpk.mx/zakGjLwG',
    label: 'Browse Japan activities on Klook',
    external: true,
    sponsored: true,
  },
} satisfies Record<string, GuideLink>;

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
      { href: '/free-kansai-tattoo-stay-kit', label: 'Free Kansai tattoo stay starter kit' },
      { href: '/stays/tattoo-friendly', label: 'Tattoo-friendly stay profiles' },
      { href: '/stays/tattoo-consideration', label: 'Tattoo consideration notes' },
      { href: '/stays/private-bath', label: 'Private bath stays' },
    ],
    serviceLinks: [affiliateServiceLinks.klookJapanActivities],
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
        title: 'What to compare before choosing',
        bullets: [
          'Whether the bath is inside the room or in a separate shared facility.',
          'Whether a private bath is guaranteed, first-come-first-served, or reservation-only.',
          'Whether private bath use has a time limit, extra fee, or check-in-day restriction.',
          'Whether the bath uses hot spring water, regular heated water, or a standard unit bath.',
          'Whether guests with tattoos, children, or mobility concerns can use the facility comfortably.',
        ],
      },
      {
        title: 'Common planning mistakes',
        body: [
          'The most common mistake is treating every "private bath" mention as the same. A room with its own bath, a reservable family bath, and a public bath with private-use hours are different stay experiences.',
          'Another mistake is checking bath details after choosing the hotel. If the bath is central to the trip, compare bath type before comparing room style, price, or decoration.',
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
      {
        title: 'Sample message to confirm bath details',
        body: [
          'If the bath setup is the reason you are choosing a stay, ask the property to separate the room bath, private reservable bath, and public bath in the answer.',
        ],
        template: {
          title: 'Private bath and room bath check',
          intro: 'Use this before booking a room where the bath type matters for privacy, tattoos, family use, or comfort.',
          messages: [
            {
              label: 'English',
              text: `Hello,
I am considering staying at your property and would like to confirm the bath facilities before booking.

Could you please tell me:
- Does the room have its own private bath?
- Is there a private or family bath that can be reserved?
- Is there a public bath or large shared bath?
- If the private bath requires a reservation or extra fee, how does it work?

Thank you.`,
            },
            {
              label: 'Japanese',
              text: `宿泊を検討しています。
予約前にお風呂の設備について確認したいです。

以下について教えていただけますか？
・客室内に専用のお風呂はありますか？
・貸切風呂または家族風呂はありますか？
・大浴場などの共用のお風呂はありますか？
・貸切風呂に予約や追加料金が必要な場合、利用方法を教えてください。

よろしくお願いいたします。`,
            },
          ],
        },
      },
    ],
    relatedStays: [
      { href: '/stays/private-bath', label: 'Private bath stay profiles' },
      { href: '/stays/tattoo-friendly', label: 'Tattoo-friendly stays' },
      { href: '/stays/family-friendly', label: 'Family-friendly stays' },
    ],
    serviceLinks: [affiliateServiceLinks.klookJapanActivities],
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
        title: 'Why this affects where you stay',
        body: [
          'Large luggage is not only a train-seat issue. The difficult part is often the full movement chain: hotel to station, local train to Shinkansen platform, arrival station to the next hotel, and any stair-heavy transfer in between.',
          'A slightly less central hotel can be easier if it has elevator access, luggage delivery support, and a simple route from the station. A more central hotel can still be stressful if reaching it requires multiple crowded transfers.',
        ],
      },
      {
        title: 'When to reserve luggage space',
        bullets: [
          'Reserve oversized baggage space when your luggage size falls under the train operator rule for the relevant route.',
          'Reserve early during peak travel periods, weekends, and major holiday seasons.',
          'Do not assume an empty space will be available without the correct reservation.',
          'If your route changes, re-check whether the same baggage rule applies on the new train.',
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
    serviceLinks: [
      affiliateServiceLinks.radicalStorageJapan,
      affiliateServiceLinks.kiwitaxiJapan,
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
      {
        title: 'Sample message to confirm luggage delivery',
        body: [
          'Before sending luggage to a hotel, confirm that the property can receive it, what name should be written on the label, and whether there are date or storage limits.',
        ],
        template: {
          title: 'Hotel luggage receiving check',
          intro: 'Use this when you want to send luggage before arrival or forward it to your next stay.',
          messages: [
            {
              label: 'English',
              text: `Hello,
I have a reservation at your property and would like to confirm your luggage delivery policy.

Could you please tell me:
- Can you receive my luggage before check-in?
- What name, reservation number, and arrival date should I write on the delivery label?
- Is there any limit on how early the luggage can arrive?
- Can the front desk also help send luggage to my next hotel?

Thank you.`,
            },
            {
              label: 'Japanese',
              text: `予約済みです。
荷物配送について確認したいです。

以下について教えていただけますか？
・チェックイン前に荷物を受け取っていただくことは可能ですか？
・配送伝票には、氏名、予約番号、到着日など何を書けばよいですか？
・荷物が到着してよい日は何日前からですか？
・次のホテルへの発送手配もフロントで可能ですか？

よろしくお願いいたします。`,
            },
          ],
        },
      },
    ],
    relatedStays: [
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stay profiles' },
      { href: '/stays/access-friendly', label: 'Access-friendly stays' },
    ],
    serviceLinks: [
      affiliateServiceLinks.radicalStorageJapan,
      affiliateServiceLinks.kiwitaxiJapan,
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
        title: 'Why Japanese hotel wording can be hard to read',
        body: [
          'Some hotels can remove obvious ingredients but cannot guarantee cross-contact. Some ryokan can adjust a few items but cannot rebuild a fixed-course dinner. Some properties may understand vegetarian or vegan wording differently from travelers outside Japan.',
          'For serious allergies, religious dietary needs, or strict vegan requirements, vague phrases such as "please tell us in advance" are not enough. Ask what they can do, what they cannot do, and whether the kitchen can handle your level of restriction.',
        ],
      },
      {
        title: 'Lower-risk stay choices',
        bullets: [
          'A room-only plan can be safer when meal support is unclear.',
          'A stay near supermarkets, convenience stores, or restaurants with clear menus gives more backup options.',
          'Apartment-style stays with a kitchen can reduce dependence on hotel meals.',
          'English-friendly properties may reduce communication friction, but they still need specific questions.',
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
      {
        title: 'Sample message to confirm meal support',
        body: [
          'For allergies, halal, vegan, vegetarian, or other dietary needs, contact the property before choosing a meal plan. Keep the message specific and ask what they cannot do as well as what they can do.',
        ],
        template: {
          title: 'Dietary restriction and hotel meal check',
          intro: 'Use this before relying on hotel breakfast, dinner, or ryokan meals.',
          messages: [
            {
              label: 'English',
              text: `Hello,
I am considering staying at your property and would like to confirm meal support before booking.

I need to avoid: [write your restriction here].

Could you please tell me:
- Can your breakfast or dinner accommodate this restriction?
- Is cross-contact a concern in your kitchen?
- Are there any dishes, sauces, soup bases, or seasonings I should be careful about?
- If accommodation is not possible, can I book without meals?

Thank you.`,
            },
            {
              label: 'Japanese',
              text: `宿泊を検討しています。
予約前に食事対応について確認したいです。

避ける必要があるもの：［ここに内容を記入］

以下について教えていただけますか？
・朝食または夕食で対応可能ですか？
・厨房内での混入の可能性はありますか？
・注意すべき料理、ソース、出汁、調味料はありますか？
・対応が難しい場合、素泊まりで予約できますか？

よろしくお願いいたします。`,
            },
          ],
        },
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
    serviceLinks: [affiliateServiceLinks.klookJapanActivities],
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
    serviceLinks: [
      affiliateServiceLinks.airaloJapan,
      affiliateServiceLinks.sailyJapan,
      affiliateServiceLinks.yesimJapan,
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
  'japan-tax-free-shopping-guide': {
    path: '/japan-tax-free-shopping-guide',
    eyebrow: 'Shopping and departure',
    title: 'Japan Tax-Free Shopping Guide',
    description:
      'A practical guide to tax-free shopping in Japan, what changes with the refund method, and what travelers should check before leaving the country.',
    intro: [
      'Tax-free shopping in Japan can be useful, but it is easy to misunderstand. It is not the same as airport duty-free shopping, and the rules depend on your visitor status, the store, the item, and the departure process.',
      'Japan is shifting the consumption-tax exemption system to a refund-style method from November 1, 2026. Until then, some travelers may see old and new explanations side by side, so it is worth checking the timing of any advice you read.',
      'Use this as a practical travel checklist, not tax advice. For expensive purchases or unusual situations, check the latest official guidance and the store procedure before relying on a refund.',
    ],
    productKey: 'japan-stay-planning-kits',
    sections: [
      {
        title: 'Tax-free is different from duty-free',
        body: [
          'Tax-free shopping in city stores usually refers to Japan consumption tax exemption for eligible non-resident visitors buying eligible goods at approved tax-free shops. Airport duty-free shopping is a separate retail setup.',
          'For travelers, the practical difference is timing. City-store tax-free purchases may involve passport checks, purchase records, packaging rules, and customs confirmation at departure. Airport duty-free shopping usually happens after departure procedures.',
        ],
      },
      {
        title: 'Who should pay attention',
        bullets: [
          'Short-term foreign visitors buying goods to take out of Japan.',
          'Travelers buying cosmetics, medicine, food, electronics, clothing, bags, or souvenirs in approved tax-free stores.',
          'Travelers with long itineraries who may not leave Japan soon after shopping.',
          'Foreign residents and long-stay visitors, because eligibility is not the same as nationality.',
        ],
      },
      {
        title: 'Before November 2026',
        body: [
          'Under the current system, many eligible purchases are sold without consumption tax at the store after the tax-free procedure is completed. Stores may check your passport and create electronic purchase records.',
          'Consumable goods and general goods have had different handling rules, and some items must not be used in Japan before departure. Store staff may seal certain goods or explain restrictions at the counter.',
        ],
      },
      {
        title: 'From November 2026: refund method',
        body: [
          'From November 1, 2026, Japan plans to shift to a refund method. In practical terms, travelers should expect the flow to feel more like paying first and receiving the tax amount back after the departure-side confirmation process.',
          'The exact refund method can vary by store or refund operator. Official guidance notes that refund methods may include options such as bank transfer, card-based transfer, app transfer, or cash refund at the departure port, depending on how the seller arranges it.',
        ],
      },
      {
        title: 'Departure timing matters',
        bullets: [
          'Keep your passport and purchase information accessible at the airport or departure port.',
          'Leave time before departure if your refund or customs confirmation requires extra steps.',
          'Be ready to show tax-free goods if customs asks to inspect them.',
          'Do not assume you can pack every tax-free item deep inside checked luggage without checking the departure procedure first.',
          'If you do not export the goods as required, you may lose the exemption or owe the tax amount.',
        ],
      },
      {
        title: 'Common mistakes',
        bullets: [
          'Thinking every store in Japan can sell tax-free. The store must be approved for the procedure.',
          'Confusing tax-free shopping with airport duty-free shopping.',
          'Opening or using restricted consumable goods in Japan before departure.',
          'Forgetting the departure confirmation step after a busy shopping day.',
          'Relying on old blog posts that do not mention the November 2026 refund-method change.',
        ],
      },
      {
        title: 'A simple traveler checklist',
        bullets: [
          'Ask whether the store is a tax-free shop before you shop seriously.',
          'Carry the passport or required entry-status proof used for the procedure.',
          'Ask whether the purchase is tax-free now or refund-based later.',
          'Keep receipts, purchase records, and any sealed packaging until departure.',
          'Plan airport time for customs or refund steps if your trip includes large purchases.',
          'Check official guidance again before travel, especially for trips after November 1, 2026.',
        ],
      },
    ],
    serviceLinks: [
      affiliateServiceLinks.airaloJapan,
      affiliateServiceLinks.sailyJapan,
      affiliateServiceLinks.yesimJapan,
    ],
    sourceLinks: [
      {
        href: 'https://www.mlit.go.jp/kankocho/tax-free/index.html',
        label: 'Japan Tourism Agency: Japan Tax-free Shop',
        external: true,
      },
      {
        href: 'https://www.nta.go.jp/publication/pamph/shohi/menzei/201805/format/002.htm',
        label: 'National Tax Agency: Refund method information',
        external: true,
      },
      {
        href: 'https://www.mlit.go.jp/kankocho/tax-free/page01_000001_00029.html',
        label: 'Japan Tourism Agency: Traveler refund-method leaflet',
        external: true,
      },
    ],
  },
  'japan-rail-pass-guide': {
    path: '/japan-rail-pass-guide',
    eyebrow: 'Rail planning',
    title: 'Japan Rail Pass Guide',
    description:
      'A practical guide to deciding whether the Japan Rail Pass fits your itinerary, with notes on eligibility, routes, Nozomi and Mizuho trains, and hotel planning.',
    intro: [
      'The Japan Rail Pass can be useful for some visitors, but it is no longer an automatic purchase for every Japan trip. After the price changes in recent years, the best answer depends on your exact route, travel pace, and how much flexibility you need.',
      'Use this guide before buying a pass, especially if your trip is mostly one region, mostly city travel, or includes luggage-heavy transfers.',
      'BSJ looks at rail passes from the stay-planning side: where you sleep, how often you move hotels, and whether your route is simple enough to make the pass worth the cost.',
    ],
    productKey: 'japan-stay-planning-kits',
    sections: [
      {
        title: 'Start with your actual route',
        body: [
          'A rail pass should be checked against the route you will actually take, not against a dream itinerary. Write down your long-distance travel days first: airport transfer, Tokyo to Kyoto or Osaka, side trips, and the final return route.',
          'If your plan is mostly Tokyo, Kyoto, Osaka, and local transit, a national JR Pass may not be the best fit. If your trip crosses multiple regions in a short period, it becomes more worth checking carefully.',
        ],
      },
      {
        title: 'Who can use it',
        bullets: [
          'Foreign tourists entering Japan from overseas under Temporary Visitor status are the main eligible users.',
          'JR checks eligibility when you pick up or exchange the pass, so passport status matters even if you already purchased online or have an exchange order.',
          'Foreign residents in Japan generally should not assume they can use the national Japan Rail Pass.',
          'Japanese nationals living overseas have separate documentation rules and should confirm the official requirements before purchase.',
        ],
      },
      {
        title: 'Know the price dates',
        body: [
          'The official price table currently shows national pass options for 7, 14, and 21 consecutive days, with ordinary and Green Car versions.',
          'For purchases at overseas JR-designated agencies, the official site lists higher prices for purchases made on or after October 1, 2026. If your travel date is near a price-change period, check the purchase date and official price table before deciding.',
        ],
      },
      {
        title: 'Nozomi and Mizuho need extra care',
        body: [
          'The fastest Nozomi and Mizuho Shinkansen services are not simply included like many other JR trains. JR Pass holders need a special additional ticket for those trains, purchased before boarding, and conditions apply.',
          'For many travelers, using Hikari, Sakura, Kodama, or Tsubame trains may be simpler. But if speed, frequency, or a specific connection matters, factor the extra Nozomi or Mizuho ticket into your plan.',
        ],
      },
      {
        title: 'When a pass often makes less sense',
        bullets: [
          'You are staying mostly in one city or one region.',
          'Your long-distance route is only one way, such as Tokyo to Kyoto with no return or major side trip.',
          'You prefer slower stays with fewer hotel changes.',
          'You plan to use many private railways, subways, buses, or non-JR routes.',
          'Your luggage makes frequent same-day transfers stressful.',
        ],
      },
      {
        title: 'When it is worth checking seriously',
        bullets: [
          'You have several long-distance JR rides within 7, 14, or 21 consecutive days.',
          'You want flexibility to change long-distance plans without buying separate tickets each time.',
          'Your route connects multiple regions, such as Tokyo, Kansai, Hiroshima, Kyushu, Hokuriku, or Tohoku.',
          'You are comfortable planning around JR lines and pass conditions.',
        ],
      },
      {
        title: 'Stay planning angle',
        body: [
          'A rail pass can encourage travelers to move too often. Before adding another city because the train feels free, check whether the extra hotel change, luggage movement, and station transfer actually improve the trip.',
          'For families, travelers with large bags, and first-time visitors, fewer bases can be calmer. A pass is only useful if the route still feels good on the ground.',
        ],
      },
      {
        title: 'A simple decision checklist',
        bullets: [
          'Confirm you are eligible before purchase.',
          'Price your actual long-distance rides against the current official pass price.',
          'Check whether regional passes fit better than the national pass.',
          'Check whether your desired trains are covered or require extra tickets.',
          'Plan where you will activate the pass and which consecutive days matter most.',
          'Leave room for luggage delivery or simpler hotel bases if the route feels too rushed.',
        ],
      },
    ],
    relatedStays: [
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stays' },
      { href: '/stays/access-friendly', label: 'Access-friendly stays' },
      { href: '/japan-luggage-delivery-guide', label: 'Japan luggage delivery guide' },
      { href: '/shinkansen-oversized-luggage-guide', label: 'Shinkansen oversized luggage guide' },
    ],
    serviceLinks: [
      affiliateServiceLinks.radicalStorageJapan,
      affiliateServiceLinks.kiwitaxiJapan,
      affiliateServiceLinks.airaloJapan,
    ],
    sourceLinks: [
      {
        href: 'https://japanrailpass.net/en/',
        label: 'JAPAN RAIL PASS official site',
        external: true,
      },
      {
        href: 'https://japanrailpass.net/en/purchase/price/',
        label: 'JAPAN RAIL PASS: Types and prices',
        external: true,
      },
      {
        href: 'https://japanrailpass.net/en/about_jrp/riyou/',
        label: 'JAPAN RAIL PASS: Eligibility for use',
        external: true,
      },
      {
        href: 'https://japanrailpass.net/en/use/special-ticket/',
        label: 'JAPAN RAIL PASS: Nozomi and Mizuho special ticket',
        external: true,
      },
    ],
  },
  'japan-bicycle-rules-guide': {
    path: '/japan-bicycle-rules-guide',
    eyebrow: 'Cycling basics',
    title: 'Japan Bicycle Rules Guide',
    description:
      'A practical guide to bicycle rules in Japan for travelers using rental bikes, hotel bikes, share cycles, or e-bikes.',
    intro: [
      'Cycling can be a useful way to explore Japan, especially in quieter neighborhoods, island routes, and cities with good rental bike access. But bicycles are treated as vehicles under Japanese traffic rules, and the everyday local habits you see on the street may not always be the safest or clearest guide.',
      'From April 1, 2026, Japan introduced the traffic violation notice system, often called blue tickets, for cyclists aged 16 and older. Travelers should understand the basic rules before using rental bikes, hotel bicycles, share cycles, or e-bikes.',
      'Use this guide as a practical pre-ride checklist. Local rules, signs, insurance requirements, and rental shop conditions can vary, so confirm details with the rental provider before riding.',
    ],
    productKey: 'japan-stay-planning-kits',
    sections: [
      {
        title: 'The basic idea: bicycles are vehicles',
        body: [
          'In Japan, bicycles are generally treated as light vehicles. That means riders are expected to follow traffic rules, not move unpredictably between pedestrian and vehicle behavior.',
          'The safest starting point is simple: ride on the left side of the road, follow traffic signals and stop signs, slow down near pedestrians, and avoid riding in a way that surprises drivers or walkers.',
        ],
      },
      {
        title: 'The five core bicycle rules',
        bullets: [
          'Use the roadway in principle and ride on the left side; sidewalks are exceptions.',
          'At intersections, obey traffic lights, stop signs, and check safety before crossing.',
          'Turn on your light at night.',
          'Do not ride after drinking alcohol.',
          'Wear a bicycle helmet.',
        ],
      },
      {
        title: 'Sidewalks are not a free-for-all',
        body: [
          'Many visitors notice people riding on sidewalks in Japan, but the official rule is more limited. Sidewalk riding is allowed only in certain cases, such as when signs permit it, when the rider is under 13 or 70 or older, when a disability makes road riding difficult, or when road conditions make sidewalk use necessary for safety.',
          'When you do ride on a sidewalk, pedestrians have priority. Ride slowly near the roadway side of the sidewalk and stop if you would interfere with people walking.',
        ],
      },
      {
        title: 'Blue tickets and risky behavior',
        body: [
          'From April 1, 2026, cyclists aged 16 and older can be subject to the traffic violation notice system for certain bicycle violations. Serious or dangerous cases can still be handled more strictly.',
          'For travelers, the practical message is to avoid the behaviors police and public guidance repeatedly warn about: ignoring signals, failing to stop, riding the wrong way, using a phone while riding, riding after drinking, entering closed railway crossings, or using a bicycle with faulty brakes.',
        ],
      },
      {
        title: 'E-bikes, pedal-assist bikes, and mopeds',
        body: [
          'A normal pedal-assist rental bike is different from a moped or pedal-equipped electric motorcycle. If a vehicle can move under motor power in a way that is treated as a moped, different rules, licensing, registration, insurance, and helmet requirements may apply.',
          'If you are renting anything electric, ask the rental provider whether it is a standard pedal-assist bicycle under Japanese rules. Do not assume every two-wheeled electric vehicle is legal to ride like a bicycle.',
        ],
      },
      {
        title: 'Before you rent a bicycle',
        bullets: [
          'Ask whether the rental includes liability insurance.',
          'Check that the brakes, bell, light, tires, and lock work.',
          'Ask where you may park the bike and what happens if it is removed for illegal parking.',
          'Confirm whether the route has hills, narrow roads, tunnels, tram tracks, or heavy traffic.',
          'Use a helmet when available, especially on unfamiliar roads or longer routes.',
          'Do not ride with an umbrella, phone in hand, or headphones that prevent you from hearing traffic.',
        ],
      },
      {
        title: 'Hotel and stay planning angle',
        body: [
          'If cycling is part of your plan, the right stay can make it easier. Look for bicycle parking, luggage storage, coin laundry, access to quieter roads, and simple routes from the station.',
          'For families or first-time visitors, a hotel near a safe cycling area may matter more than a central address. For long rides, also check whether the property can store bags before check-in or after checkout.',
        ],
      },
      {
        title: 'A simple safe-riding checklist',
        bullets: [
          'Ride on the left and keep your movement predictable.',
          'Slow down around pedestrians, crossings, station areas, and shopping streets.',
          'Stop fully at stop signs and closed railway crossings.',
          'Use lights at night and avoid dark riverside or rural roads if you are unsure.',
          'Park only where permitted; station areas often remove illegally parked bikes.',
          'When in doubt, get off and walk the bicycle.',
        ],
      },
    ],
    relatedStays: [
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stays' },
      { href: '/stays/access-friendly', label: 'Access-friendly stays' },
      { href: '/japan-ic-card-guide', label: 'Japan IC card guide' },
      { href: '/japan-luggage-delivery-guide', label: 'Japan luggage delivery guide' },
    ],
    serviceLinks: [
      affiliateServiceLinks.radicalStorageJapan,
      affiliateServiceLinks.airaloJapan,
      affiliateServiceLinks.sailyJapan,
    ],
    sourceLinks: [
      {
        href: 'https://www.npa.go.jp/bureau/traffic/bicycle/info.html',
        label: 'National Police Agency: Bicycle safety and traffic rules',
        external: true,
      },
      {
        href: 'https://www.npa.go.jp/english/bureau/traffic/index.html',
        label: 'National Police Agency: Traffic rules in English',
        external: true,
      },
      {
        href: 'https://www.gov-online.go.jp/article/202410/entry-6604.html',
        label: 'Government Public Relations: Bicycle blue ticket system',
        external: true,
      },
    ],
  },
  'japan-shrine-temple-etiquette-guide': {
    path: '/japan-shrine-temple-etiquette-guide',
    eyebrow: 'Quiet visits',
    title: 'Japan Shrine and Temple Etiquette Guide',
    description:
      'A practical guide to visiting shrines and temples in Japan with calm manners around prayer, photography, goshuin, shoes, and quiet spaces.',
    intro: [
      'Shrines and temples are some of the most memorable places to visit in Japan, but they are not only sightseeing spots. Many are active religious spaces, local gathering places, and quiet places for prayer or reflection.',
      'You do not need to perform every gesture perfectly. The important thing is to move calmly, read signs, respect photo restrictions, and avoid treating prayer areas like a stage set.',
      'Use this as a gentle pre-visit guide before visiting popular places in Kyoto, Nara, Tokyo, Miyajima, Nikko, Koyasan, or smaller neighborhood shrines and temples.',
    ],
    productKey: 'japan-stay-planning-kits',
    sections: [
      {
        title: 'Shrine or temple: what is the difference?',
        body: [
          'A shrine is usually Shinto and often has a torii gate. A temple is Buddhist and may have temple gates, incense, Buddhist statues, pagodas, or halls where shoes are removed.',
          'In everyday travel, the exact distinction is less important than reading the place carefully. Some sites have both Shinto and Buddhist elements nearby, and each place may have its own rules.',
        ],
      },
      {
        title: 'A calm visitor mindset',
        bullets: [
          'Walk slowly and keep your voice low, especially near prayer halls.',
          'Do not block paths, gates, stairs, offering boxes, or photo spots.',
          'Follow signs even if other visitors are ignoring them.',
          'Avoid climbing, sitting, or leaning on sacred objects, fences, lanterns, statues, or old woodwork.',
          'If a ceremony or prayer is happening, give people space and do not film closely.',
        ],
      },
      {
        title: 'Basic shrine prayer flow',
        body: [
          'At many shrines, visitors purify their hands and mouth at the water basin before approaching the main prayer area. A common prayer pattern is two deep bows, two claps, and one deep bow.',
          'There are exceptions. Some shrines have different customs, and some visitors simply bow quietly. If you are unsure, a respectful bow and quiet behavior are enough.',
        ],
      },
      {
        title: 'Temizu: the water basin',
        bullets: [
          'Use the ladle to rinse your left hand, then your right hand.',
          'Pour water into your cupped hand to rinse your mouth; do not touch the ladle directly to your mouth.',
          'Rinse your left hand again if following the full sequence.',
          'Tilt the ladle so the remaining water cleans the handle.',
          'If the basin has signs saying not to use it, follow the signs.',
        ],
      },
      {
        title: 'Photography rules matter',
        body: [
          'Photography is often allowed in outer grounds but restricted near prayer areas, inside halls, around Buddhist statues, or during ceremonies. At some famous sites, seasonal crowding can also create stricter photo rules.',
          'If you see a no-photo sign, put the camera away. If you are unsure, avoid photographing the altar, worshippers, priests, monks, ceremonies, or the inside of halls.',
        ],
      },
      {
        title: 'Shoes, halls, and indoor spaces',
        body: [
          'Many temple halls, traditional buildings, and some shrine-related buildings require shoes to be removed. Look for shoe shelves, plastic bags, signs, or other visitors changing footwear.',
          'Wear socks you are comfortable being seen in, and avoid stepping on tatami, polished wood, or sacred indoor areas with outdoor shoes.',
        ],
      },
      {
        title: 'Goshuin and amulets',
        body: [
          'Goshuin are shrine or temple seals written in a special book, usually for a fee. They are not just souvenir stamps, so hand over the book politely and avoid asking for unrelated notebooks or loose scraps unless the site offers a paper version.',
          'Omamori amulets and omikuji fortunes are part of the visit for many people. Buy them quietly, keep lines moving, and follow local instructions for tying or returning old items.',
        ],
      },
      {
        title: 'Food, trash, and crowded seasons',
        bullets: [
          'Eat only where food is clearly allowed.',
          'Carry your trash until you find a bin or return to your hotel.',
          'During cherry blossom, autumn foliage, New Year, and festival periods, move with the flow and avoid stopping suddenly.',
          'Keep tripods, selfie sticks, and large camera setups away from narrow paths unless explicitly allowed.',
          'If the site feels crowded, a quieter nearby shrine or temple may offer a better visit.',
        ],
      },
      {
        title: 'Stay planning angle',
        body: [
          'If shrines and temples are a major part of your trip, staying nearby can make mornings calmer. Early visits are often quieter, cooler, and better for respectful photography in allowed areas.',
          'For Kyoto, Nara, Koyasan, or pilgrimage-style routes, consider luggage delivery, easy station access, and whether your stay has early breakfast or flexible check-out.',
        ],
      },
    ],
    relatedStays: [
      { href: '/ryokan-stay-guide', label: 'Ryokan stay guide' },
      { href: '/japan-ic-card-guide', label: 'Japan IC card guide' },
      { href: '/japan-luggage-delivery-guide', label: 'Japan luggage delivery guide' },
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stays' },
    ],
    serviceLinks: [
      affiliateServiceLinks.klookJapanActivities,
      affiliateServiceLinks.radicalStorageJapan,
      affiliateServiceLinks.airaloJapan,
    ],
    sourceLinks: [
      {
        href: 'https://www.isejingu.or.jp/en/pray/index.html',
        label: 'Ise Jingu: Basic manners and etiquette',
        external: true,
      },
      {
        href: 'https://www.isejingu.or.jp/en/ritual/index.html',
        label: 'Ise Jingu: Rituals and ceremonies',
        external: true,
      },
    ],
  },
};
