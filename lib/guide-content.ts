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
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
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
  klookPrivateTours: {
    href: 'https://klook.tpk.mx/zakGjLwG',
    label: 'Browse Japan private tours and transfers on Klook',
    external: true,
    sponsored: true,
  },
  klookKansaiDayTrips: {
    href: 'https://klook.tpk.mx/zakGjLwG',
    label: 'Browse Kansai day trips on Klook',
    external: true,
    sponsored: true,
  },
  klookSnowActivities: {
    href: 'https://klook.tpk.mx/zakGjLwG',
    label: 'Browse Japan snow and winter activities on Klook',
    external: true,
    sponsored: true,
  },
  klookAttractionTickets: {
    href: 'https://klook.tpk.mx/zakGjLwG',
    label: 'Browse Japan attraction tickets on Klook',
    external: true,
    sponsored: true,
  },
  klookAirportTransfers: {
    href: 'https://klook.tpk.mx/zakGjLwG',
    label: 'Browse Japan airport transfers on Klook',
    external: true,
    sponsored: true,
  },
  klookWorkshops: {
    href: 'https://klook.tpk.mx/zakGjLwG',
    label: 'Browse Japan cultural workshops on Klook',
    external: true,
    sponsored: true,
  },
} satisfies Record<string, GuideLink>;

export const guidePages: Record<string, GuidePageContent> = {
  'japan-esim-guide': {
    path: '/japan-esim-guide',
    eyebrow: 'eSIM and connectivity',
    title: 'Japan eSIM Guide for Travel',
    description:
      'How to choose a Japan eSIM for maps, train routes, translation, hotel messages, QR tickets, and arrival-day stress.',
    intro: [
      'A Japan eSIM is not only about browsing the internet. It can affect your first hour after landing: maps, train routes, QR tickets, hotel messages, translation, ride pickup, and emergency contact.',
      'This guide helps travelers choose an eSIM calmly before the trip, and understand when an eSIM should be paired with airport Wi-Fi, hotel Wi-Fi, or a backup plan.',
      'BSJ treats connectivity as part of stay planning because internet problems often become hotel, transport, luggage, and food-problem problems.',
    ],
    sections: [
      {
        title: 'Why eSIM planning matters in Japan',
        bullets: [
          'Station navigation often depends on live maps, platform details, and route changes.',
          'Hotel check-in messages, door codes, and late-arrival instructions may arrive online.',
          'Klook tickets, QR passes, luggage delivery receipts, and confirmation emails may need quick access.',
          'Translation tools help with restaurants, taxis, pharmacies, and small hotel front desks.',
          'Public Wi-Fi exists, but it is not a reliable plan for moving between stations and hotels.',
        ],
      },
      {
        title: 'What to compare before buying',
        bullets: [
          'Coverage area and network partner in Japan.',
          'Data amount, validity days, and whether speed may slow after a threshold.',
          'Whether tethering/hotspot use is allowed.',
          'Activation timing: before departure, after landing, or when connected to Wi-Fi.',
          'Refund or support rules if installation fails.',
          'Whether your phone is unlocked and supports eSIM.',
        ],
      },
      {
        title: 'Where affiliate services fit',
        body: [
          'Airalo, Saily, and Yesim are useful options to compare before traveling. BSJ should not present one as universally best because the right choice depends on phone compatibility, trip length, data use, and support preference.',
          'The article should help readers choose the type of plan. The email checklist can help them confirm phone settings, installation timing, and what to screenshot before flying.',
        ],
      },
      {
        title: 'Arrival-day setup checklist',
        bullets: [
          'Install or prepare the eSIM while you still have reliable Wi-Fi.',
          'Save hotel address, check-in instructions, and key QR codes offline.',
          'Screenshot train route options from the airport to your hotel.',
          'Keep a backup payment card and a small amount of cash for ticket machines or taxis.',
          'Know how to switch mobile data to the eSIM after landing.',
        ],
      },
      {
        title: 'When eSIM is not enough',
        body: [
          'An eSIM does not solve a dead battery, a locked phone, a phone that does not support eSIM, or an app account problem. For high-stress arrival days, keep screenshots and hotel contact details available offline.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a Japan eSIM if my hotel has Wi-Fi?',
        answer:
          'Hotel Wi-Fi helps in your room, but an eSIM is useful between the airport, stations, hotels, restaurants, and activities. Many travel problems happen while moving, when you need maps, tickets, messages, or translation.',
      },
      {
        question: 'Should I install a Japan eSIM before flying?',
        answer:
          'In most cases, prepare the eSIM while you still have reliable Wi-Fi, then follow the provider instructions for activation timing. Also save hotel addresses, QR tickets, and check-in details offline.',
      },
      {
        question: 'Is public Wi-Fi enough for a Japan trip?',
        answer:
          'Public Wi-Fi can help, but it is not a reliable full travel plan. It may not be available when you are walking between stations, finding a hotel entrance, contacting a tour operator, or using live translation.',
      },
    ],
    relatedStays: [
      { href: '/japan-airport-arrival-transfer-guide', label: 'Airport arrival guide' },
      { href: '/japan-ic-card-guide', label: 'IC card guide' },
      { href: '/japan-train-etiquette-guide', label: 'Train and transfer guide' },
      { href: '/free-japan-travel-samples', label: 'Get the arrival checklist by email' },
    ],
    serviceLinks: [
      affiliateServiceLinks.airaloJapan,
      affiliateServiceLinks.sailyJapan,
      affiliateServiceLinks.yesimJapan,
    ],
    sourceLinks: [
      { href: 'https://www.japan.travel/en/plan/internet-access/', label: 'JNTO: Internet access in Japan', external: true },
    ],
  },
  'japan-luggage-storage-guide': {
    path: '/japan-luggage-storage-guide',
    eyebrow: 'Luggage storage',
    title: 'Japan Luggage Storage Guide',
    description:
      'How to decide between station lockers, hotel storage, luggage delivery, and luggage storage services when traveling around Japan.',
    intro: [
      'Luggage storage sounds simple until it controls your whole day. A checkout morning, theme park day, late flight, day trip, or station transfer can become stressful if you do not know where your bags will go.',
      'This guide explains the difference between station lockers, hotel storage, luggage delivery, and luggage storage services such as Radical Storage, so travelers can plan hands-light days without guessing.',
    ],
    sections: [
      {
        title: 'The four main luggage options',
        bullets: [
          'Hotel storage: often convenient before check-in or after checkout, but rules and hours vary.',
          'Station lockers: useful for short stops, but large lockers can fill quickly and station layouts can be confusing.',
          'Luggage delivery: best for moving between cities or avoiding train transfers with large bags.',
          'Luggage storage services: useful when lockers are full, hotel storage is unavailable, or you need a location near an attraction.',
        ],
      },
      {
        title: 'When luggage storage services make sense',
        body: [
          'A service such as Radical Storage can be useful when your hotel is far from your sightseeing area, when you have a late flight, or when station lockers are a poor fit. It can also help on days when you want to visit a museum, workshop, food area, or attraction before moving to the next hotel.',
          'As with any third-party service, check current opening hours, exact location, bag rules, price, cancellation, and how pickup works before relying on it.',
        ],
      },
      {
        title: 'What to check before choosing storage',
        bullets: [
          'Opening hours and final pickup time.',
          'Exact address and whether the location is easy to find with bags.',
          'Large suitcase acceptance and number of bags allowed.',
          'Security process, receipt, and what happens if pickup is late.',
          'Distance from your station exit, attraction, or hotel.',
          'Whether luggage delivery would be better than temporary storage.',
        ],
      },
      {
        title: 'Common planning mistakes',
        bullets: [
          'Assuming every station has large lockers available.',
          'Returning to the wrong station exit after storing bags.',
          'Planning a day trip with luggage because storage seems like a small detail.',
          'Leaving too little time to pick up bags before a train, flight, or hotel transfer.',
          'Forgetting that some small stays or apartment-style properties may not have staffed storage.',
        ],
      },
      {
        title: 'Email checklist angle',
        body: [
          'The luggage storage checklist should help travelers compare hotel storage, station lockers, delivery, and storage services by day type: arrival day, checkout day, day trip, theme park day, and city transfer day.',
        ],
      },
    ],
    relatedStays: [
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stays' },
      { href: '/japan-luggage-delivery-guide', label: 'Luggage delivery guide' },
      { href: '/shinkansen-oversized-luggage-guide', label: 'Shinkansen luggage guide' },
      { href: '/free-japan-travel-samples', label: 'Get the luggage checklist by email' },
    ],
    serviceLinks: [
      affiliateServiceLinks.radicalStorageJapan,
      affiliateServiceLinks.kiwitaxiJapan,
      affiliateServiceLinks.airaloJapan,
    ],
    sourceLinks: [
      { href: 'https://www.japan.travel/en/plan/luggage-storage-delivery/', label: 'JNTO: Luggage storage and delivery', external: true },
    ],
  },
  'japan-taxi-private-transfer-guide': {
    path: '/japan-taxi-private-transfer-guide',
    eyebrow: 'Taxis and private transfers',
    title: 'Japan Taxi and Private Transfer Guide',
    description:
      'When to use taxis, private transfers, airport transfers, or car services in Japan, especially with luggage, children, late arrivals, or difficult station routes.',
    intro: [
      'Japan public transport is excellent, but that does not mean every traveler should use trains for every movement. Taxis and private transfers can solve specific problems: late arrivals, heavy luggage, young children, older travelers, bad weather, or hotels that are awkward from the nearest station.',
      'This guide helps you decide when a taxi or transfer is worth paying for, what to check before booking, and how to avoid using private transport when a simple train route is better.',
    ],
    sections: [
      {
        title: 'When a taxi or private transfer makes sense',
        bullets: [
          'Late-night airport arrivals when trains or buses are limited.',
          'Hotel transfers with large luggage, strollers, or tired children.',
          'Moving between a station and a stay with difficult slopes, stairs, or unclear exits.',
          'Theme park, workshop, or day-trip days where the return trip is the hardest part.',
          'Groups where one larger vehicle is easier than several train transfers.',
          'Travelers with mobility concerns who need fewer station changes.',
        ],
      },
      {
        title: 'Taxi, app ride, airport transfer, or charter',
        body: [
          'A normal taxi works best for short city movements. A pre-booked airport transfer works better when arrival timing, luggage, and flight tracking matter. A private charter is closer to a flexible car service for several hours or a day route.',
          'Services such as Kiwitaxi can be useful for airport and private transfer planning, but travelers should still check the pickup point, waiting time, luggage allowance, child seat rules, and cancellation terms directly.',
        ],
      },
      {
        title: 'What to check before booking a transfer',
        bullets: [
          'Pickup point: airport terminal, arrival hall, hotel entrance, station exit, or nearby meeting point.',
          'Waiting time: what happens if immigration, baggage claim, or train arrival is delayed.',
          'Luggage allowance: suitcase count, oversized bags, stroller, ski bags, or sports equipment.',
          'Child seats: availability, age/size fit, and whether they must be requested in advance.',
          'Destination access: whether the vehicle can stop directly at the hotel or only nearby.',
          'Payment, cancellation, tolls, parking, and late-night surcharges.',
        ],
      },
      {
        title: 'When trains are still better',
        bullets: [
          'The route is direct, luggage is light, and the station is close to your hotel.',
          'You are traveling during heavy road traffic periods in central Tokyo, Osaka, or Kyoto.',
          'Your group can comfortably manage stairs, elevators, and ticket gates.',
          'The transfer price is high but does not solve a real constraint.',
          'You want flexibility rather than a fixed pickup time.',
        ],
      },
      {
        title: 'Email checklist angle',
        body: [
          'The transfer checklist should help travelers compare taxi, bus, train, private transfer, and luggage delivery by arrival time, group size, bags, children, hotel location, and backup plan.',
        ],
      },
    ],
    relatedStays: [
      { href: '/japan-airport-arrival-transfer-guide', label: 'Airport arrival guide' },
      { href: '/japan-private-tours-transfers-guide', label: 'Private tours and transfers guide' },
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stays' },
      { href: '/free-japan-travel-samples', label: 'Get the transfer checklist by email' },
    ],
    serviceLinks: [
      affiliateServiceLinks.kiwitaxiJapan,
      affiliateServiceLinks.radicalStorageJapan,
      affiliateServiceLinks.airaloJapan,
    ],
    sourceLinks: [
      { href: 'https://www.japan.travel/en/plan/getting-around/', label: 'JNTO: Getting around Japan', external: true },
    ],
  },
  'japan-checkout-day-luggage-guide': {
    path: '/japan-checkout-day-luggage-guide',
    eyebrow: 'Checkout day planning',
    title: 'Japan Checkout Day Luggage Guide',
    description:
      'How to plan a Japan checkout day when your hotel stay ends before your train, flight, tour, or evening plans.',
    intro: [
      'Checkout day is one of the easiest places for a Japan itinerary to break. Your room ends at 10 or 11, but your train is in the afternoon, your flight is at night, or your next hotel is not ready yet.',
      'This guide helps travelers decide whether to use hotel storage, luggage delivery, station lockers, luggage storage services, or a private transfer on a checkout day.',
      'The goal is simple: avoid dragging suitcases through stations, temples, workshops, restaurants, and crowded shopping streets when a better plan exists.',
    ],
    sections: [
      {
        title: 'Start with the next fixed time',
        body: [
          'Before choosing storage, write down the next fixed time: Shinkansen departure, airport arrival target, next hotel check-in, restaurant booking, tour meeting point, or attraction entry. Then work backward.',
          'A storage plan that looks convenient at noon can become stressful if you need to retrieve bags, cross town, and reach a train platform during evening crowds.',
        ],
      },
      {
        title: 'Checkout day options',
        bullets: [
          'Hotel storage: easiest if you return to the same area before leaving.',
          'Luggage delivery: best when moving to another city or avoiding a station-heavy transfer.',
          'Station lockers: useful for short stops but risky if large lockers are full.',
          'Luggage storage services: useful near attractions or when hotel storage is not convenient.',
          'Private transfer: useful when bags, children, or timing make the final movement stressful.',
          'A lighter itinerary: sometimes the best solution is choosing one easy area instead of crossing the city.',
        ],
      },
      {
        title: 'When to avoid carrying luggage',
        bullets: [
          'Visiting temples, shrines, old streets, markets, or small restaurants.',
          'Taking a workshop, food experience, tea ceremony, or museum visit.',
          'Moving through rush-hour stations or multiple private railway/JR transfers.',
          'Traveling with children, strollers, or older family members.',
          'Leaving from a different station than the one near your hotel.',
        ],
      },
      {
        title: 'How affiliate tools fit naturally',
        body: [
          'Radical Storage can be a practical option when you need a temporary bag drop near the area you actually want to visit. Kiwitaxi or another private transfer can make sense when the final hotel-to-airport or station movement is the stressful part.',
          'These links should support the plan, not replace the plan. The article should help readers decide whether they need storage, delivery, or a transfer before sending them to a service.',
        ],
      },
      {
        title: 'A simple checkout-day plan',
        bullets: [
          'Confirm hotel checkout time and whether storage is available after checkout.',
          'Decide whether you will return to the hotel area before leaving.',
          'If not, compare luggage delivery or storage near your actual sightseeing area.',
          'Keep one small day bag with passport, medicine, battery, valuables, and tickets.',
          'Leave extra time to retrieve bags before trains, flights, or tours.',
          'Avoid booking a luggage-heavy activity unless storage is already solved.',
        ],
      },
      {
        title: 'Email checklist angle',
        body: [
          'The checkout-day checklist should help travelers compare each option by time, location, bag size, children, weather, next hotel, airport route, and whether the day should be simplified.',
        ],
      },
    ],
    relatedStays: [
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stays' },
      { href: '/japan-luggage-storage-guide', label: 'Luggage storage guide' },
      { href: '/japan-luggage-delivery-guide', label: 'Luggage delivery guide' },
      { href: '/japan-taxi-private-transfer-guide', label: 'Taxi and transfer guide' },
      { href: '/free-japan-travel-samples', label: 'Get the checkout-day checklist by email' },
    ],
    serviceLinks: [
      affiliateServiceLinks.radicalStorageJapan,
      affiliateServiceLinks.kiwitaxiJapan,
      affiliateServiceLinks.airaloJapan,
    ],
    sourceLinks: [
      { href: 'https://www.japan.travel/en/plan/luggage-storage-delivery/', label: 'JNTO: Luggage storage and delivery', external: true },
    ],
  },
  'japan-private-tours-transfers-guide': {
    path: '/japan-private-tours-transfers-guide',
    eyebrow: 'Private tours and transfers',
    title: 'Japan Private Tours and Transfers Guide',
    description:
      'How to decide when a Japan private tour, private car, airport transfer, or day-trip driver is worth booking for luggage, children, older travelers, or tight timing.',
    intro: [
      'A private tour in Japan is not only a luxury upgrade. For some trips, it solves practical problems: luggage, tired children, older travelers, difficult station transfers, early checkout, late arrival, or a day trip that would be stressful by train.',
      'This guide helps you decide when a private car, private driver, airport transfer, or private day tour is actually useful, and what to check before booking through a platform such as Klook.',
      'BSJ does not rank tours by hype. We look at the travel day around the booking: hotel location, pickup rules, walking distance, toilet breaks, weather, language support, and what could go wrong if the plan is too tight.',
    ],
    sections: [
      {
        title: 'When a private tour is worth considering',
        bullets: [
          'You are doing a long day trip with several stops, such as Mt. Fuji, Hakone, Nikko, Kamakura, Kyoto, Nara, Kobe, or Amanohashidate.',
          'You have large luggage, a stroller, mobility concerns, or older travelers who may not enjoy multiple train transfers.',
          'You want hotel pickup or drop-off because the first or last part of the day is the hardest part to manage.',
          'You are traveling with children and need a slower pace, rest breaks, and fewer platform changes.',
          'You have a short Japan trip and cannot afford to lose a day to a confusing route or missed connection.',
          'You want to visit places where the train route is possible but awkward, especially in poor weather or with bags.',
        ],
      },
      {
        title: 'The main booking types',
        body: [
          'A private day tour usually has a planned route, such as Mt. Fuji and Lake Kawaguchiko from Tokyo or Kyoto and Nara from Osaka. It may include hotel pickup, an English-speaking driver or guide, and a fixed number of hours.',
          'A private car charter is more flexible. You may choose the route within a time limit, but you still need to check what is included: driver language, tolls, parking, overtime, child seats, and pickup area.',
          'A point-to-point private transfer is simpler. It is useful for airport arrivals, station transfers, hotel-to-theme-park days, or moving between areas when luggage makes public transport unpleasant.',
        ],
      },
      {
        title: 'Examples that fit the BSJ angle',
        body: [
          'Klook currently has Japan private tour and transfer options that fit this practical use case: Mt. Fuji and Lake Kawaguchiko private day tours from Tokyo, Mt. Fuji and Hakone private tours with English-speaking drivers, Tokyo private car hire for areas such as Kamakura or Chiba, and Kansai private car day tours from Osaka or Kyoto.',
          'The point is not that every traveler should book a car. The point is to know when the extra cost solves a real constraint. A family with luggage, a short stay, and a weather-sensitive day trip may value the certainty differently from a solo traveler with a flexible schedule.',
        ],
      },
      {
        title: 'BSJ notes from current private tour listings',
        body: [
          'Across private tour and car-charter listings, the same practical details tend to decide whether the booking feels smooth or frustrating: pickup area, driver language, vehicle size, overtime, and what happens when weather or traffic changes the day.',
          'Treat words such as private, customizable, hotel pickup, and English-speaking carefully. They are helpful signals, but they do not always answer the question that matters for your group.',
        ],
        bullets: [
          'Private may mean your group has the vehicle, not that every stop or timing request is possible.',
          'Customizable may still be limited by route area, total hours, traffic, and attraction opening times.',
          'English-speaking driver is not always the same as a licensed guide who explains each site in depth.',
          'Hotel pickup can be selected-area pickup, nearby pickup, or entrance pickup depending on the listing and road access.',
          'Mt. Fuji, Hakone, mountain, coastal, and snow routes can be heavily affected by weather and visibility.',
          'Tolls, parking, attraction tickets, meals, child seats, and overtime are often the details that change the real price.',
        ],
      },
      {
        title: 'What hotel pickup really solves',
        body: [
          'Hotel pickup can remove the hardest part of the morning: finding the right train, managing bags, walking to a station exit, or meeting a guide in a crowded area. It is especially useful when the day starts early or the destination is outside a major city center.',
          'But hotel pickup is not automatic for every listing. Check the pickup area, exact meeting time, whether your hotel is included, and whether the vehicle can stop directly outside the property. In dense areas of Tokyo, Kyoto, or Osaka, the practical pickup point may be nearby rather than at the entrance.',
        ],
      },
      {
        title: 'Private tour vs train vs bus tour',
        bullets: [
          'Choose trains when the route is direct, luggage is light, and you are comfortable reading platforms and transfers.',
          'Choose a bus tour when you want lower cost, a fixed route, and do not mind group timing.',
          'Choose a private car when the route has several scattered stops, the group has mixed energy levels, or luggage and transfers would dominate the day.',
          'Choose a point-to-point transfer when the main problem is movement, not sightseeing.',
          'Avoid private tours when you mainly want to wander slowly in one compact neighborhood. Walking or public transport may feel better.',
        ],
      },
      {
        title: 'The practical notes to check before booking',
        bullets: [
          'Pickup and drop-off: exact area, hotel eligibility, station exit, waiting policy, and what happens if you are late.',
          'Vehicle fit: number of passengers, luggage allowance, stroller space, child seats, and whether bags stay in the vehicle during stops.',
          'Driver and guide language: English-speaking driver, licensed guide, audio guide, or translation app support are not the same thing.',
          'Toilet and rest stops: long day trips can be uncomfortable if breaks are unclear or rushed.',
          'Weather and route changes: Mt. Fuji, mountain, snow, coastal, and outdoor routes need realistic backup expectations.',
          'Costs not included: tolls, parking, attraction tickets, meals, overtime, child seats, and entrance fees may be separate.',
          'Cancellation and overtime: check the deadline, refund rule, extra-hour fee, and how itinerary changes are handled.',
        ],
      },
      {
        title: 'Do not hide the important warnings',
        body: [
          'Some details should stay public in the article: cancellation terms, age restrictions, accessibility limitations, severe weather concerns, and whether food or tickets are included. Hiding those behind an email signup would make the page less trustworthy.',
          'The better email signup offer is a deeper practical checklist: what to ask the operator, what to compare across listings, which review clues matter, and how to decide whether a private tour is actually worth the extra cost for your group.',
        ],
      },
      {
        title: 'What the email-only memo should add',
        body: [
          'The public guide should help you avoid obvious mistakes. The email-only memo can go deeper: a comparison sheet, review-reading prompts, copy-and-paste questions, and a decision grid for train, bus tour, private car, and transfer.',
          'That is where BSJ can add value without turning the page into a giant checklist. The article gives the main judgment. The downloadable memo helps you apply it to the exact listing you are considering.',
        ],
        bullets: [
          'A one-page comparison table for two or three tour listings.',
          'A pickup and luggage question set for families, older travelers, and checkout-day plans.',
          'A cost checklist for tolls, parking, tickets, meals, overtime, and child seats.',
          'A weather fallback checklist for Mt. Fuji, Hakone, mountain, snow, and coastal routes.',
          'A short review-reading guide for clues about rushed timing, unclear meeting points, traffic, and restroom breaks.',
        ],
      },
      {
        title: 'A private tour decision checklist',
        bullets: [
          'Will this booking remove two or more stressful transfers?',
          'Would luggage, a stroller, or mobility needs make the public route unpleasant?',
          'Is the destination weather-sensitive enough that route flexibility matters?',
          'Is hotel pickup included for your actual hotel or only selected areas?',
          'Are toilets, meals, and rest stops clear enough for your group?',
          'Do you understand what is not included in the price?',
          'Would a simpler train route plus one taxi be enough?',
        ],
      },
      {
        title: 'Sample message before booking',
        body: [
          'If the listing is close but not clear, send a short message before booking. Ask about the practical constraint, not only the sightseeing route.',
        ],
        template: {
          title: 'Private tour and transfer check',
          intro:
            'Use this when luggage, children, pickup location, toilets, or weather could affect whether the tour works for your day.',
          messages: [
            {
              label: 'English',
              text: `Hello,
I am interested in booking this private tour or transfer.

Before booking, could you please confirm:
- Is pickup available from my hotel or only from selected areas?
- How much luggage can fit in the vehicle?
- Can the vehicle accommodate a stroller or child seat if needed?
- Are toilet or rest stops possible during the route?
- Are tolls, parking, attraction tickets, meals, or overtime fees included?
- If the weather is poor, can the route be adjusted?

Thank you.`,
            },
            {
              label: 'Japanese',
              text: `この貸切ツアーまたは送迎の予約を検討しています。

予約前に以下を確認させてください。
・ホテルまで迎えに来てもらえますか？それとも指定エリアのみですか？
・車に積める荷物の量はどのくらいですか？
・ベビーカーやチャイルドシートが必要な場合、対応できますか？
・途中でトイレ休憩や休憩時間を取ることはできますか？
・高速料金、駐車料金、入場券、食事、延長料金は料金に含まれていますか？
・天候が悪い場合、行程の変更は可能ですか？

よろしくお願いいたします。`,
            },
          ],
        },
      },
    ],
    faqs: [
      {
        question: 'Is a private tour in Japan worth it?',
        answer:
          'A private tour is worth considering when it solves a real travel constraint: several scattered stops, luggage, children, older travelers, a tight schedule, hotel pickup, or a route that would be stressful by train.',
      },
      {
        question: 'Is an English-speaking driver the same as a guide?',
        answer:
          'Not always. An English-speaking driver may help with logistics and communication, while a licensed guide is a different service that may explain sites in more detail. Check the listing before booking.',
      },
      {
        question: 'What should I confirm before booking a private car in Japan?',
        answer:
          'Confirm pickup area, exact meeting point, vehicle size, luggage allowance, child seats, driver or guide language, tolls, parking, entrance fees, overtime, and weather fallback.',
      },
    ],
    relatedStays: [
      { href: '/free-japan-travel-samples', label: 'Get the practical checklist by email' },
      { href: '/japan-experience-booking-guide', label: 'Japan experience booking guide' },
      { href: '/japan-luggage-delivery-guide', label: 'Luggage delivery guide' },
      { href: '/shinkansen-oversized-luggage-guide', label: 'Shinkansen luggage guide' },
      { href: '/japan-confirmation-service', label: 'Japanese confirmation support' },
    ],
    serviceLinks: [
      affiliateServiceLinks.klookPrivateTours,
      affiliateServiceLinks.kiwitaxiJapan,
      affiliateServiceLinks.radicalStorageJapan,
    ],
    sourceLinks: [
      {
        href: 'https://www.japan.travel/en/',
        label: 'Japan National Tourism Organization',
        external: true,
      },
      {
        href: 'https://www.klook.com/',
        label: 'Klook Japan tours, activities, and transfers',
        external: true,
      },
    ],
  },
  'kansai-day-trips-practical-guide': {
    path: '/kansai-day-trips-practical-guide',
    eyebrow: 'Kansai day trips',
    title: 'Kansai Day Trips Practical Guide',
    description:
      'How to choose Osaka, Kyoto, Nara, Kobe, Amanohashidate, and nearby Kansai day trips when timing, toilets, luggage, walking, and pickup points matter.',
    intro: [
      'Kansai day trips can look simple on a map, but the real travel day often depends on station exits, morning meeting points, long bus time, lunch timing, toilets, weather, and how much walking your group can handle.',
      'This guide helps you decide whether to go by train, join a bus tour, book a private car, or keep the day lighter. It is written for travelers who want a good experience without turning the day into logistics homework.',
      'Use it alongside current listings on Klook or other platforms, then save a practical checklist before booking anything that will be hard to change.',
    ],
    sections: [
      {
        title: 'The best day trip is not always the most famous one',
        body: [
          'Kyoto, Nara, Kobe, Himeji, Uji, Amanohashidate, Ine, Lake Biwa, Wakayama, and Awaji Island can all work from Osaka or Kyoto. But a day trip should match your base hotel, wake-up time, mobility, weather, and appetite for crowds.',
          'A packed route can be great for first-time visitors who want a guided overview. It can also be exhausting for families, older travelers, or anyone carrying bags between hotels.',
        ],
      },
      {
        title: 'Train, bus tour, or private car',
        bullets: [
          'Use trains when the destination is direct and you want flexibility, such as Osaka to Nara or Kyoto to Uji.',
          'Use a bus tour when the route combines several spread-out stops and you are comfortable following a fixed schedule.',
          'Use a private car when hotel pickup, luggage, slower pacing, or scattered destinations matter more than saving money.',
          'Avoid heavy day trips on checkout days unless luggage storage or delivery is already solved.',
          'Do not choose only by price. A cheaper route with several transfers can cost you energy, time, and patience.',
        ],
      },
      {
        title: 'Klook examples that fit this guide',
        body: [
          'Current Klook-style examples include Kyoto and Nara guided day trips from Osaka or Kyoto, Arashiyama and Fushimi Inari routes, Amanohashidate and Ine day trips, and private Kansai car charters that can cover Osaka, Kyoto, Nara, Kobe, Wakayama, or Lake Biwa.',
          'For BSJ readers, these are useful because the decision is not only sightseeing. The question is whether the route gives you enough toilet stops, rest time, food flexibility, and a meeting point you can actually find in the morning.',
        ],
      },
      {
        title: 'BSJ notes from current Kansai day trip listings',
        body: [
          'Kansai day trips often look compact because the cities are close on a map. The actual friction is usually the morning meeting point, how rushed the route feels, whether lunch is flexible, and how much walking happens at temples, shrines, scenic streets, or viewpoints.',
          'A cheap group tour can be excellent when you want a fixed overview. A private car can be better when the group has luggage, children, older travelers, or a checkout-day schedule. The right choice depends on the day around the tour.',
        ],
        bullets: [
          'Kyoto and Nara routes can involve more walking, stairs, and crowd navigation than the listing title suggests.',
          'Amanohashidate, Ine, Lake Biwa, Awaji, and Wakayama routes can become long vehicle days, so toilets and rest stops matter.',
          'Lunch may be included, optional, self-arranged, or rushed depending on the route.',
          'Hotel pickup is most valuable when the morning station transfer would otherwise be the stressful part.',
          'Checkout-day day trips need a luggage plan before you book the activity.',
        ],
      },
      {
        title: 'Practical checks before booking',
        bullets: [
          'Meeting point: exact station exit, landmark, pickup time, and whether your hotel is included.',
          'Toilets: whether the route has clear restroom stops, especially on long bus or coastal routes.',
          'Lunch: whether lunch is included, self-arranged, rushed, or difficult for dietary needs.',
          'Walking: temples, shrines, old streets, slopes, and viewpoint routes can add more walking than expected.',
          'Luggage: check whether bags can be stored, carried, or should be delivered before the day trip.',
          'Weather: coastal, mountain, shrine, and scenic routes can feel very different in heat, rain, wind, or snow.',
        ],
      },
      {
        title: 'What belongs in the email checklist',
        body: [
          'Public articles should explain the route type and important warnings. The deeper checklist can help readers compare exact meeting points, restroom clues, lunch risks, walking intensity, stroller fit, and whether the day should be private, guided, or self-guided.',
          'This is also where BSJ can keep a route-comparison sheet: Osaka base vs Kyoto base, group tour vs train, and whether the day is too heavy for checkout, bad weather, or young children.',
        ],
      },
      {
        title: 'Sample message before booking',
        template: {
          title: 'Kansai day trip practical check',
          intro: 'Use this when a day trip has several stops or the listing does not clearly explain timing, toilets, or luggage.',
          messages: [
            {
              label: 'English',
              text: `Hello,
I am considering booking this Kansai day trip.

Could you please confirm:
- Where exactly is the meeting point?
- Are there toilet breaks during the route?
- Is lunch included, or do we choose our own lunch?
- How much walking or stair use should we expect?
- Can travelers bring large luggage or should we avoid bringing bags?

Thank you.`,
            },
            {
              label: 'Japanese',
              text: `関西の日帰りツアーの予約を検討しています。

以下について確認させてください。
・集合場所は具体的にどこですか？
・行程中にトイレ休憩はありますか？
・昼食は含まれていますか？それとも各自で取りますか？
・徒歩移動や階段の利用はどのくらいありますか？
・大きな荷物の持ち込みは可能ですか？持って行かない方がよいですか？

よろしくお願いいたします。`,
            },
          ],
        },
      },
    ],
    faqs: [
      {
        question: 'Should I take a train, bus tour, or private car for a Kansai day trip?',
        answer:
          'Use trains for direct routes and flexible days, bus tours for lower-cost fixed routes, and private cars when hotel pickup, luggage, children, older travelers, or scattered stops matter more than saving money.',
      },
      {
        question: 'Are Kyoto and Nara day trips easy with luggage?',
        answer:
          'They can be difficult with luggage because station exits, crowds, temples, shrines, and deer park areas involve walking and stairs. Solve storage or delivery before booking a day trip on a checkout day.',
      },
      {
        question: 'What should I check before booking a Kansai day tour?',
        answer:
          'Check the exact meeting point, toilet breaks, lunch rules, walking distance, stair use, luggage policy, weather plan, and whether your hotel pickup is actually included.',
      },
    ],
    relatedStays: [
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stays' },
      { href: '/japan-private-tours-transfers-guide', label: 'Private tours and transfers guide' },
      { href: '/japan-luggage-delivery-guide', label: 'Luggage delivery guide' },
      { href: '/free-japan-travel-samples', label: 'Get the day trip checklist by email' },
    ],
    serviceLinks: [
      affiliateServiceLinks.klookKansaiDayTrips,
      affiliateServiceLinks.radicalStorageJapan,
      affiliateServiceLinks.kiwitaxiJapan,
    ],
    sourceLinks: [
      { href: 'https://www.japan.travel/en/destinations/kansai/', label: 'JNTO: Kansai', external: true },
      { href: 'https://www.klook.com/', label: 'Klook Japan day trips', external: true },
    ],
  },
  'japan-snow-winter-activity-guide': {
    path: '/japan-snow-winter-activity-guide',
    eyebrow: 'Winter activities',
    title: 'Japan Snow and Winter Activity Planning Guide',
    description:
      'A practical guide to booking Japan ski lessons, snow day trips, and winter activities when clothing, rentals, lockers, toilets, weather, and children matter.',
    intro: [
      'Japan winter activities can be magical, but they are also gear-heavy and weather-sensitive. The important questions are often practical: what to wear, where to store bags, whether beginners are supported, and what happens if snow or wind changes the plan.',
      'This guide is for travelers comparing ski day tours, private ski lessons, snow-play trips, and mountain routes from places such as Tokyo, Sapporo, Nagano, Niigata, Kanazawa, or Osaka.',
      'Use public listings to compare the main experience, then keep a checklist for the details that can make the day comfortable or stressful.',
    ],
    sections: [
      {
        title: 'Choose the winter activity type first',
        bullets: [
          'Snow play is usually better for families or first-timers who do not want a full ski day.',
          'Group ski day tours can simplify transport, rentals, and timing.',
          'Private lessons cost more but can be worth it for beginners, children, or mixed ability groups.',
          'Mountain day trips need weather flexibility because views, roads, and schedules can change.',
          'Do not assume every snow activity includes warm clothing, gloves, goggles, lockers, or insurance.',
        ],
      },
      {
        title: 'Klook examples that fit this guide',
        body: [
          'Current Klook-style options include Sapporo Kokusai and Sapporo Teine ski day tours, Mt. Fuji Yeti snow day trips from Tokyo, Yuzawa private ski lessons, and private ski lessons in Hokkaido or Nagano areas.',
          'These listings are useful for BSJ because the friction is predictable: cold weather, rental sizing, lockers, bathrooms, transport time, beginner support, and cancellation rules.',
        ],
      },
      {
        title: 'BSJ notes from current winter activity listings',
        body: [
          'Winter listings can make the day sound simple: transfer, rental, snow, return. The real experience depends on clothing, rental sizing, warm indoor breaks, lockers, bathroom access, beginner support, and whether the route still works when weather changes.',
          'The highest-value mistake to avoid is booking a snow day as if it were a normal sightseeing day. Snow activities need a clothing plan, a bag plan, and a realistic energy plan.',
        ],
        bullets: [
          'All-inclusive does not always mean every warm item is included, especially gloves, hats, goggles, or base layers.',
          'Beginner-friendly and private lesson are different promises. True first-timers should check lesson language and pace.',
          'Snow resorts can be difficult with suitcases unless storage, lockers, or hotel transfer timing is clear.',
          'Cold, wet clothing can make the return trip harder than the activity itself.',
          'Weather, road conditions, and lift operations can change the value of the day.',
        ],
      },
      {
        title: 'Practical checks before booking',
        bullets: [
          'Clothing: confirm whether snowwear, gloves, hats, goggles, and boots are included or rented separately.',
          'Luggage and lockers: check whether suitcases are realistic, especially when traveling between hotels.',
          'Toilets and rest areas: snow days can be long, cold, and tiring without clear breaks.',
          'Lessons: confirm language, group size, age limits, and whether true beginners are accepted.',
          'Weather policy: check cancellation, route change, and refund rules before price.',
          'Insurance and injury: understand that activity booking does not replace travel insurance or medical advice.',
        ],
      },
      {
        title: 'Who should be extra careful',
        body: [
          'Families with young children, travelers without winter clothing, people with injuries, and visitors arriving directly from a long flight should be careful with full-day snow plans. A shorter snow-play activity or private lesson may be calmer than an ambitious day tour.',
        ],
      },
      {
        title: 'Email checklist angle',
        body: [
          'The downloadable checklist should focus on rental items, what to pack, locker questions, toilet and warm-up breaks, beginner questions, child-fit questions, and weather fallback notes.',
          'The email-only version can include a packing grid, rental confirmation questions, and a quick filter for snow play, group ski day, private lesson, and private transfer.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the easiest Japan snow activity for first-time visitors?',
        answer:
          'Snow play or a beginner-focused day trip is usually easier than a full ski day. Check clothing, transport time, warm indoor breaks, toilets, and whether rental items are included.',
      },
      {
        question: 'Do Japan ski day tours include all winter clothing?',
        answer:
          'Not always. Confirm whether snowwear, gloves, hats, goggles, boots, helmets, and lockers are included, rented separately, or must be brought by you.',
      },
      {
        question: 'Should beginners book a private ski lesson in Japan?',
        answer:
          'A private lesson can be worth it for true beginners, children, and mixed-ability groups because pace and language support matter. Check instructor language, meeting point, age limits, and cancellation rules.',
      },
    ],
    relatedStays: [
      { href: '/japan-private-tours-transfers-guide', label: 'Private tours and transfers guide' },
      { href: '/japan-luggage-delivery-guide', label: 'Luggage delivery guide' },
      { href: '/free-japan-travel-samples', label: 'Get the winter activity checklist by email' },
    ],
    serviceLinks: [
      affiliateServiceLinks.klookSnowActivities,
      affiliateServiceLinks.kiwitaxiJapan,
      affiliateServiceLinks.airaloJapan,
    ],
    sourceLinks: [
      { href: 'https://www.japan.travel/en/things-to-do/skiing/', label: 'JNTO: Skiing in Japan', external: true },
      { href: 'https://www.klook.com/', label: 'Klook Japan snow activities', external: true },
    ],
  },
  'japan-theme-park-attraction-guide': {
    path: '/japan-theme-park-attraction-guide',
    eyebrow: 'Tickets and attractions',
    title: 'Japan Theme Park and Major Attraction Planning Guide',
    description:
      'How to plan Universal Studios Japan, teamLab, observation decks, museums, and major attraction days around timed entry, lockers, luggage, crowds, food, and transport.',
    intro: [
      'Major Japan attractions are easy to add to an itinerary and easy to underestimate. Timed entry, express passes, lockers, stroller rules, food lines, rain, and the ride home can affect the day as much as the ticket itself.',
      'This guide focuses on attraction days such as Universal Studios Japan, teamLab, observation decks, museums, and bundled city passes, with practical checks before you buy.',
    ],
    sections: [
      {
        title: 'Plan the whole day, not only the ticket',
        body: [
          'A ticket solves entry. It does not solve how you arrive, what happens to luggage, where you rest, whether food works for your group, or how you leave after closing. For families and first-time visitors, those details matter.',
        ],
      },
      {
        title: 'Klook examples that fit this guide',
        body: [
          'Current Klook-style examples include Universal Studios Japan Studio Pass and Express Pass, private or shared transfers to USJ, teamLab Planets, teamLab Borderless, observation deck tickets, and attraction passes around Tokyo or Kansai.',
          'Before making a page primarily revenue-driven, check the product category and commissionability. Some programs treat theme parks or special tickets differently.',
        ],
      },
      {
        title: 'BSJ notes from current attraction listings',
        body: [
          'Attraction listings usually explain the ticket. They do not always explain the day. For travelers, the hidden friction is often timed entry, lockers, post-closing transport, food queues, stroller handling, and what happens if the group gets tired earlier than expected.',
          'This is where BSJ can stay useful without becoming a generic ticket site: explain the day around the ticket, then link to current options when the booking makes sense.',
        ],
        bullets: [
          'Express passes and timed-entry tickets can have strict names, dates, and entry windows.',
          'Large lockers may be limited, far from the entrance, or difficult during peak times.',
          'After closing, station crowds can be the hardest part of the day for families.',
          'Food restrictions need a backup plan because attraction food queues and menus can be limited.',
          'A nearby stay, luggage storage, or private transfer can matter more than the cheapest ticket.',
        ],
      },
      {
        title: 'Practical checks before buying',
        bullets: [
          'Ticket type: date-specific, timed entry, express pass, admission only, or bundled pass.',
          'Luggage: whether lockers are available, large enough, or realistic during crowded periods.',
          'Transport: first train, last train, post-closing crowding, and whether a transfer is easier with children.',
          'Food: dietary restrictions, long queues, outside food rules, and backup meal plans.',
          'Weather: outdoor queues, rain, heat, and whether the experience is mostly indoor.',
          'Children and strollers: age/height rules, stroller parking, nap timing, and rest areas.',
        ],
      },
      {
        title: 'What belongs in the email checklist',
        body: [
          'A good attraction checklist helps travelers compare ticket names, entry timing, locker plans, food backup, stroller/rest needs, and whether a transfer or nearby stay would make the day easier.',
          'The email-only version can include a day plan template: before entry, first two hours, lunch backup, afternoon rest, exit transport, and what to do with bags.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What should I check before buying Japan attraction tickets?',
        answer:
          'Check whether the ticket is date-specific, timed-entry, admission-only, express access, QR-only, pickup-required, refundable, or limited by age, height, or re-entry rules.',
      },
      {
        question: 'Can I bring luggage to Universal Studios Japan or teamLab?',
        answer:
          'You should not assume large luggage is easy. Check lockers, storage size, crowded periods, and whether luggage storage near the station or hotel is a better plan.',
      },
      {
        question: 'Why plan transport after a theme park day?',
        answer:
          'The ride home can be the hardest part, especially after closing, with children, rain, or tired travelers. Check station crowds, last trains, taxi options, or transfers before the day.',
      },
    ],
    relatedStays: [
      { href: '/stays/family-friendly', label: 'Family-friendly stays' },
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stays' },
      { href: '/free-japan-travel-samples', label: 'Get the attraction day checklist by email' },
    ],
    serviceLinks: [
      affiliateServiceLinks.klookAttractionTickets,
      affiliateServiceLinks.kiwitaxiJapan,
      affiliateServiceLinks.radicalStorageJapan,
    ],
    sourceLinks: [
      { href: 'https://www.japan.travel/en/things-to-do/theme-parks/', label: 'JNTO: Theme parks', external: true },
      { href: 'https://www.klook.com/', label: 'Klook Japan attraction tickets', external: true },
    ],
  },
  'japan-airport-arrival-transfer-guide': {
    path: '/japan-airport-arrival-transfer-guide',
    eyebrow: 'Arrival and transfers',
    title: 'Japan Airport Arrival and Transfer Guide',
    description:
      'How to choose Japan airport trains, limousine buses, private transfers, luggage delivery, and eSIM setup for a calmer first day after landing.',
    intro: [
      'The first hour after landing in Japan can shape the whole trip. You may be tired, carrying luggage, setting up internet, finding tickets, and trying to reach a hotel before check-in closes.',
      'This guide helps you compare airport trains, limousine buses, private transfers, and luggage delivery from airports such as Narita, Haneda, and Kansai International Airport.',
    ],
    sections: [
      {
        title: 'Choose by friction, not only speed',
        body: [
          'The fastest route on a map may not be the easiest route with luggage, children, jet lag, or a late arrival. A direct bus to a hotel area can be calmer than a faster train with transfers. A private transfer can be worth it when arrival time is late or the group has several bags.',
        ],
      },
      {
        title: 'Common airport options',
        bullets: [
          'Airport express trains are often fast and reliable when your hotel is near the right station.',
          'Limousine buses are useful when they stop near your hotel or reduce transfers.',
          'Private transfers can help with late arrivals, children, large bags, or unfamiliar station exits.',
          'Luggage delivery can make the first day easier if timing and hotel receiving rules match.',
          'Airport lounges or waiting areas can help when arrival and check-in times do not line up.',
        ],
      },
      {
        title: 'Klook examples that fit this guide',
        body: [
          'Current Klook-style options include Keisei Skyliner, Narita Express, Narita and Haneda limousine buses, JR Haruka and Nankai Rapi:t from Kansai Airport, Osaka private station transfers, and luggage delivery between airports and hotels.',
        ],
      },
      {
        title: 'BSJ notes from current airport transfer options',
        body: [
          'Airport transport listings are easy to compare by price, but the better question is which option reduces first-day friction. A fast train can still be stressful if your hotel is far from the arrival station. A bus can be slower but calmer if it stops near your hotel area.',
          'Private transfers are most useful when the flight arrives late, the group has several bags, children are tired, or the hotel route involves station exits that are hard to read after a long flight.',
        ],
        bullets: [
          'Ticket pickup or QR redemption can add time before you even board.',
          'The best station on the map may not be the best station with suitcases.',
          'Late arrivals need a last-train and backup-taxi plan.',
          'Luggage delivery is useful only if delivery timing and hotel receiving rules match your plan.',
          'Internet setup should happen before you depend on maps, hotel messages, or ticket QR codes.',
        ],
      },
      {
        title: 'Practical checks before arrival',
        bullets: [
          'Landing time: include immigration, baggage claim, customs, and ticket pickup time.',
          'Hotel check-in: know the front desk hours and late arrival rule.',
          'Internet: set up eSIM or roaming before you need maps and ticket QR codes.',
          'Luggage: decide whether you carry it, store it, deliver it, or book a transfer.',
          'Children and older travelers: choose fewer transfers over theoretical speed.',
          'Last train or bus: late flights need a backup plan.',
        ],
      },
      {
        title: 'Email checklist angle',
        body: [
          'The arrival-day checklist should help travelers map their airport, internet, ticket, luggage, hotel check-in, and late-arrival backup in one place before flying.',
          'The email-only version can add a step-by-step arrival worksheet for Narita, Haneda, and Kansai Airport: internet, ticket, luggage, route, hotel message, and backup plan.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the easiest way from a Japan airport to my hotel?',
        answer:
          'The easiest route depends on your hotel location, bags, arrival time, group size, and energy level. A fast train is not always easiest if it requires several transfers with luggage.',
      },
      {
        question: 'When is a private airport transfer worth it in Japan?',
        answer:
          'A private transfer is worth considering for late arrivals, children, older travelers, several large bags, or hotels that are difficult to reach from the nearest station after a long flight.',
      },
      {
        question: 'Should I set up eSIM before leaving the airport?',
        answer:
          'Yes, if you depend on maps, hotel messages, ticket QR codes, or translation. Set up connectivity before the route becomes stressful, and keep important details saved offline.',
      },
    ],
    relatedStays: [
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stays' },
      { href: '/japan-luggage-delivery-guide', label: 'Luggage delivery guide' },
      { href: '/japan-ic-card-guide', label: 'IC card guide' },
      { href: '/free-japan-travel-samples', label: 'Get the arrival checklist by email' },
    ],
    serviceLinks: [
      affiliateServiceLinks.klookAirportTransfers,
      affiliateServiceLinks.kiwitaxiJapan,
      affiliateServiceLinks.airaloJapan,
      affiliateServiceLinks.radicalStorageJapan,
    ],
    sourceLinks: [
      { href: 'https://www.narita-airport.jp/en/', label: 'Narita Airport', external: true },
      { href: 'https://tokyo-haneda.com/en/', label: 'Haneda Airport', external: true },
      { href: 'https://www.kansai-airport.or.jp/en/', label: 'Kansai International Airport', external: true },
    ],
  },
  'japan-cultural-workshop-guide': {
    path: '/japan-cultural-workshop-guide',
    eyebrow: 'Workshops and culture',
    title: 'Japan Cultural Workshop Planning Guide',
    description:
      'How to choose tea ceremony, kimono, cooking, craft, and cultural workshops in Japan without missing the small practical details.',
    intro: [
      'Cultural workshops can be some of the best memories of a Japan trip. They can also be surprisingly sensitive to timing, clothing, language, food needs, photo rules, and whether children or beginners are comfortable.',
      'This guide helps you choose workshops such as tea ceremony, kimono rental, sushi or ramen classes, craft sessions, and short cultural experiences with practical expectations in mind.',
    ],
    sections: [
      {
        title: 'A workshop is a time block, not a quick add-on',
        body: [
          'Many workshops last one to three hours, but the true time cost includes arriving early, finding the location, changing clothes, storing bags, taking photos, and moving to the next plan. Do not squeeze a workshop between two stressful transfers.',
        ],
      },
      {
        title: 'Klook examples that fit this guide',
        body: [
          'Current Klook-style examples include Kyoto tea ceremony experiences, tea ceremony and kimono combinations, Tokyo sushi making, Osaka sushi classes, ramen and gyoza classes, and matcha or sweets workshops.',
          'Food-related workshops may need extra affiliate checking because some food categories can be excluded. They remain strong BSJ content topics because dietary and allergy details matter.',
        ],
      },
      {
        title: 'Practical checks before booking',
        bullets: [
          'Location: small studios can be harder to find than major attractions.',
          'Clothing: tea rooms, kimono, cooking, and craft spaces may have footwear or sleeve considerations.',
          'Sitting style: some traditional rooms involve sitting on the floor or low seats.',
          'Photos: check whether staff photos, self-photos, or photography during the activity are allowed.',
          'Children: age limits, patience level, sharp tools, hot liquids, or quiet behavior may matter.',
          'Food needs: ask about fish broth, meat, alcohol, soy, wheat, nuts, and cross-contact when food is included.',
          'Late arrival: many workshops cannot extend the session if you are late.',
        ],
      },
      {
        title: 'What belongs in the email checklist',
        body: [
          'The workshop checklist should include what to wear, how early to arrive, what to ask about photos, children, food needs, sitting style, language support, and whether the activity works on a luggage-heavy day.',
        ],
      },
    ],
    relatedStays: [
      { href: '/dietary-restrictions-japan', label: 'Dietary restriction guide' },
      { href: '/japan-restaurant-etiquette-guide', label: 'Restaurant etiquette guide' },
      { href: '/free-japan-travel-samples', label: 'Get the workshop checklist by email' },
    ],
    serviceLinks: [
      affiliateServiceLinks.klookWorkshops,
      affiliateServiceLinks.radicalStorageJapan,
      affiliateServiceLinks.airaloJapan,
    ],
    sourceLinks: [
      { href: 'https://www.japan.travel/en/things-to-do/traditional-culture/', label: 'JNTO: Traditional culture', external: true },
      { href: 'https://www.klook.com/', label: 'Klook Japan workshops', external: true },
    ],
  },
  'japan-food-tours-dietary-needs-guide': {
    path: '/japan-food-tours-dietary-needs-guide',
    eyebrow: 'Food tours and dietary needs',
    title: 'Japan Food Tours and Dietary Needs Guide',
    description:
      'How to think about food tours, cooking classes, tastings, and restaurant experiences in Japan when allergies, vegetarian needs, halal concerns, or fish-based dashi matter.',
    intro: [
      'Food experiences in Japan can be wonderful, but they are not always simple for travelers with dietary restrictions. A tour listing may say vegetarian-friendly, but that does not always answer questions about fish broth, bonito flakes, shellfish, pork, alcohol, soy sauce, wheat, or cross-contact.',
      'This guide is written for travelers who want food experiences without relying on vague assumptions. It is also a reminder that some food-related affiliate categories may not be commissionable, so BSJ treats food pages as trust and confirmation pages first.',
    ],
    sections: [
      {
        title: 'Do not treat every food experience the same',
        bullets: [
          'A cooking class may be easier to adapt than a street food tour, because ingredients are visible and prepared in one place.',
          'A tasting experience may have fixed items that cannot be changed.',
          'A bar-hopping or izakaya tour may involve hidden sauces, fish broth, pork, or shared cooking surfaces.',
          'A vegetarian-labeled experience may still use dashi, bonito flakes, or fish-based seasoning.',
          'Allergy needs require stronger confirmation than preference-based dietary requests.',
        ],
      },
      {
        title: 'What to ask before booking',
        bullets: [
          'Can the operator support your exact restriction, not only a broad category like vegetarian?',
          'Are fish broth, bonito flakes, dried sardines, shellfish, pork, alcohol, or gelatin used?',
          'Can ingredients be changed, or is the menu fixed?',
          'Is food prepared on shared surfaces or in shared oil?',
          'Can the operator provide written confirmation before the tour?',
          'If the answer is unclear, is it still worth booking for the non-food parts of the experience?',
        ],
      },
      {
        title: 'Where BSJ can help',
        body: [
          'Public articles should explain the questions travelers often forget to ask. The deeper value is a saved phrase card, message template, or confirmation checklist that travelers can use before booking or show on the day.',
          'For high-risk allergies, BSJ should never imply a guarantee. The role is to help travelers ask better questions and understand when an answer is too vague to rely on.',
        ],
      },
      {
        title: 'Sample message before booking',
        template: {
          title: 'Food experience dietary check',
          intro: 'Use this before booking food tours, cooking classes, tastings, or restaurant experiences.',
          messages: [
            {
              label: 'English',
              text: `Hello,
I am interested in this food experience.

Before booking, could you please confirm whether the menu can support the following dietary need:
[write your dietary restriction here]

Also, does the food include fish broth, bonito flakes, dried sardines, shellfish, pork, alcohol, wheat, soy, egg, dairy, or shared cooking oil?

I understand this may not be possible, but I would like to confirm before booking.
Thank you.`,
            },
            {
              label: 'Japanese',
              text: `この食事体験の予約を検討しています。

予約前に、以下の食事制限に対応可能か確認したいです。
【ここに食事制限を記入】

また、料理に魚のだし、かつお節、煮干し、貝類、豚肉、アルコール、小麦、大豆、卵、乳製品、共用の油は使われていますか？

対応が難しい場合があることは理解していますが、予約前に確認したいです。
よろしくお願いいたします。`,
            },
          ],
        },
      },
    ],
    relatedStays: [
      { href: '/dietary-restrictions-japan', label: 'Dietary restriction guide' },
      { href: '/japan-restaurant-etiquette-guide', label: 'Restaurant etiquette guide' },
      { href: '/japan-confirmation-service', label: 'Japanese confirmation support' },
      { href: '/free-japan-travel-samples', label: 'Get the food-needs checklist by email' },
    ],
    serviceLinks: [
      affiliateServiceLinks.airaloJapan,
      affiliateServiceLinks.radicalStorageJapan,
    ],
    sourceLinks: [
      { href: 'https://www.japan.travel/en/guide/vegetarian-guide/', label: 'JNTO: Vegetarian guide', external: true },
    ],
  },
  'japan-family-activity-planning-guide': {
    path: '/japan-family-activity-planning-guide',
    eyebrow: 'Family activity planning',
    title: 'Japan Family Activity Planning Guide',
    description:
      'How to choose Japan activities, transfers, theme parks, workshops, and day trips when traveling with children, strollers, luggage, or mixed energy levels.',
    intro: [
      'Family travel in Japan often works beautifully, but activity days need a different kind of planning. The question is not only whether children are allowed. It is whether the day has enough toilets, food options, stroller handling, breaks, and transport simplicity.',
      'This guide helps families choose between theme parks, private transfers, short workshops, day trips, and lighter attraction days without overloading the schedule.',
    ],
    sections: [
      {
        title: 'Start with the child constraint',
        bullets: [
          'Nap timing, meals, toilet access, stroller rules, and heat or rain can matter more than the activity headline.',
          'A shorter workshop near your hotel may beat a famous attraction across town on a tired day.',
          'Private transfers can be worth it when the route involves several station changes with a stroller.',
          'Theme parks need a food, rest, locker, and exit plan, not only a ticket.',
          'Do not schedule an early day trip after a late arrival or long hotel transfer.',
        ],
      },
      {
        title: 'Activity types that usually work well',
        bullets: [
          'Private car day trips for scattered destinations, luggage-heavy days, or mixed age groups.',
          'Theme parks and major attractions when ticket timing, transport, and rest breaks are planned.',
          'Short cultural workshops when the location is easy and the activity is not too long.',
          'Airport or station transfers when the first or last travel day would otherwise be too hard.',
          'Simple neighborhood plans with one anchor activity and flexible food breaks.',
        ],
      },
      {
        title: 'What to check before booking',
        bullets: [
          'Age limits, height limits, and whether infants or toddlers can join.',
          'Stroller rules, storage, elevators, and whether the activity route has stairs.',
          'Toilet timing, diaper-changing space, and whether breaks are possible.',
          'Food options nearby and whether dietary needs can be handled.',
          'Late arrival policy, cancellation, weather changes, and refund rules.',
          'Whether a private transfer would solve the hardest part of the day.',
        ],
      },
      {
        title: 'Email checklist angle',
        body: [
          'A family activity checklist should help parents compare stroller fit, toilet breaks, food backups, nap timing, luggage storage, ticket timing, and whether the day should be shortened or upgraded to private transport.',
        ],
      },
    ],
    relatedStays: [
      { href: '/stays/family-friendly', label: 'Family-friendly stays' },
      { href: '/japan-theme-park-attraction-guide', label: 'Theme park and attraction guide' },
      { href: '/japan-private-tours-transfers-guide', label: 'Private tours and transfers guide' },
      { href: '/free-japan-travel-samples', label: 'Get the family activity checklist by email' },
    ],
    serviceLinks: [
      affiliateServiceLinks.klookAttractionTickets,
      affiliateServiceLinks.klookPrivateTours,
      affiliateServiceLinks.kiwitaxiJapan,
      affiliateServiceLinks.radicalStorageJapan,
    ],
    sourceLinks: [
      { href: 'https://www.japan.travel/en/things-to-do/theme-parks/', label: 'JNTO: Theme parks', external: true },
      { href: 'https://www.klook.com/', label: 'Klook Japan activities', external: true },
    ],
  },
  'japan-experience-booking-guide': {
    path: '/japan-experience-booking-guide',
    eyebrow: 'Experiences and practical notes',
    title: 'Japan Experience Booking Guide',
    description:
      'How to choose Japan tours, tickets, transfers, and activities when the practical details matter as much as the experience itself.',
    intro: [
      'Japan has no shortage of bookable experiences: day trips, private tours, food walks, cultural workshops, theme parks, airport transfers, snow trips, and local activities. The hard part is not only choosing what looks fun. It is knowing whether the experience will work for your actual travel day.',
      'BSJ looks at experience booking from the practical side: meeting points, luggage, toilets, walking distance, weather, family needs, food restrictions, language support, and what to confirm before you pay.',
      'Use this guide to decide what kind of experience is worth booking through a platform such as Klook now, and what details you should keep in your own checklist before the trip.',
    ],
    sections: [
      {
        title: 'Start with the travel friction, not the activity title',
        body: [
          'A tour can have great reviews and still be a poor fit for your day if the meeting point is difficult, the schedule is tight, luggage is not accepted, or the activity has limited toilet access. This matters even more for families, first-time visitors, travelers with food needs, and people moving between cities.',
          'Before comparing star ratings, check how the activity fits into your route, hotel location, luggage plan, and energy level for that day.',
        ],
      },
      {
        title: 'Best experience categories for BSJ readers',
        bullets: [
          'Private tours and private transfers when you have luggage, kids, older travelers, or a tight hotel-to-station schedule.',
          'Day trips from Osaka, Kyoto, or Tokyo where transport planning is the main stress point.',
          'Cultural workshops when you want a structured activity but need clear language, timing, and location details.',
          'Food tours only when the listing gives enough information for dietary restrictions and cross-contamination concerns.',
          'Theme parks and major attractions when timed entry, ticket rules, and transport matter more than general inspiration.',
          'Snow, mountain, island, or outdoor activities where weather, equipment, bathrooms, and cancellation rules need extra attention.',
        ],
      },
      {
        title: 'Where Klook fits now',
        body: [
          'Klook is the most practical affiliate option for BSJ right now because it is already usable in the current affiliate setup and covers Japan activities, tickets, transport, and selected travel services. That makes it useful for guides where the reader is already comparing real travel constraints.',
          'BSJ should not turn these pages into generic "best tours" lists. The better angle is to explain which kind of activity fits which travel problem, then link to the relevant booking platform so the reader can compare current options.',
        ],
      },
      {
        title: 'What to check before booking an experience',
        bullets: [
          'Meeting point: exact location, nearest station exit, and whether it is easy to find in rain or crowds.',
          'Luggage: whether large bags are allowed, stored, carried, or clearly not suitable.',
          'Toilets: whether there are restrooms at the meeting point, during the route, or only at limited stops.',
          'Walking and stairs: total walking time, slopes, station transfers, and whether elevators are realistic.',
          'Food needs: whether vegetarian, vegan, halal, allergies, or no-fish-dashi requests can be handled.',
          'Weather: whether the activity changes, cancels, or becomes uncomfortable in heat, rain, snow, or wind.',
          'Children and older travelers: pace, waiting time, stroller rules, seating, and rest breaks.',
          'Language: whether the guide, voucher, meeting instructions, and emergency contact work in English.',
        ],
      },
      {
        title: 'Use public notes, save detailed notes for your checklist',
        body: [
          'A public guide should give enough information to help you decide whether an activity category is worth considering. It should not hide safety, cancellation, age, or accessibility concerns.',
          'More detailed practical notes work better as a saved checklist: what to ask, what to bring, which review details to look for, and which conditions would make the activity a poor fit. That checklist is also a good reason to join the BSJ email list before booking.',
        ],
      },
      {
        title: 'A simple booking decision path',
        bullets: [
          'Choose the activity category first: private transfer, day trip, workshop, food tour, attraction ticket, or outdoor activity.',
          'Remove anything that conflicts with your luggage, hotel location, dietary needs, mobility, or arrival/departure time.',
          'Check cancellation rules and weather policy before price.',
          'Read recent low-star reviews for practical friction, not just complaints.',
          'Save a short checklist of questions before booking anything expensive or hard to replace.',
        ],
      },
      {
        title: 'Sample questions to ask before booking',
        body: [
          'If an experience looks good but the practical details are unclear, ask short, specific questions before you commit.',
        ],
        template: {
          title: 'Experience booking practical check',
          intro:
            'Use this for tours, workshops, transfers, and day trips when luggage, toilets, food, or walking distance could affect your day.',
          messages: [
            {
              label: 'English',
              text: `Hello,
I am interested in this experience and would like to confirm a few practical details before booking.

- Is large luggage allowed or is there a place to store it?
- Are there toilets available at the meeting point or during the activity?
- How much walking or stair use should I expect?
- Is the meeting point easy to find from the nearest station?
- Can you support dietary restrictions or should I avoid this activity if food is included?

Thank you.`,
            },
            {
              label: 'Japanese',
              text: `この体験の予約を検討しています。
予約前にいくつか実用面の確認をしたいです。

・大きな荷物の持ち込み、または預かりは可能ですか？
・集合場所や体験中にトイレを利用できる場所はありますか？
・徒歩移動や階段の利用はどのくらいありますか？
・最寄り駅から集合場所は分かりやすいですか？
・食事が含まれる場合、食事制限への対応は可能ですか？

よろしくお願いいたします。`,
            },
          ],
        },
      },
    ],
    relatedStays: [
      { href: '/free-japan-travel-samples', label: 'Free Japan planning samples' },
      { href: '/japan-luggage-delivery-guide', label: 'Luggage planning guide' },
      { href: '/dietary-restrictions-japan', label: 'Dietary restriction guide' },
      { href: '/japan-confirmation-service', label: 'Japanese confirmation support' },
    ],
    serviceLinks: [
      affiliateServiceLinks.klookJapanActivities,
      affiliateServiceLinks.radicalStorageJapan,
      affiliateServiceLinks.kiwitaxiJapan,
    ],
    sourceLinks: [
      {
        href: 'https://www.japan.travel/en/',
        label: 'Japan National Tourism Organization',
        external: true,
      },
      {
        href: 'https://www.klook.com/',
        label: 'Klook Japan activities and travel services',
        external: true,
      },
    ],
  },
  'tattoo-friendly-stays-kansai': {
    path: '/tattoo-friendly-stays-kansai',
    eyebrow: 'Tattoo and bath notes',
    title: 'Tattoo-Friendly Stays in Kansai',
    description:
      'A practical guide to tattoo-friendly stays around Osaka, Kyoto, Nara, and Kobe, including public bath, private bath, in-room bath, and hotel confirmation notes.',
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
    faqs: [
      {
        question: 'Can travelers with tattoos use hotel public baths in Japan?',
        answer:
          'It depends on the property. Some hotels allow tattoos, some allow them only when covered, and some restrict public bath use. Confirm the current rule directly if bathing matters to your stay.',
      },
      {
        question: 'Is a private bath the same as an in-room bath?',
        answer:
          'No. A private bath may be a reservable shared facility used privately for a time slot, while an in-room bath is inside your room. They create different levels of privacy and convenience.',
      },
      {
        question: 'What should tattooed travelers ask before booking a Kansai stay?',
        answer:
          'Ask whether visible tattoos are allowed in the public bath, whether cover stickers are accepted, whether a private bath is available, and whether the guest room has its own bath.',
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
      'How to compare private bath stays, in-room baths, reservable family baths, and public baths when choosing a stay in Osaka, Kyoto, Nara, or Kobe.',
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
    faqs: [
      {
        question: 'What does private bath mean in a Japan hotel or ryokan?',
        answer:
          'Private bath can mean a reservable bath facility used privately for a limited time. It does not always mean the bath is inside your room, so confirm the bath type before booking.',
      },
      {
        question: 'Are private baths useful for tattooed travelers?',
        answer:
          'They can be useful because they may avoid public-bath restrictions, but policies still vary. Ask whether tattooed guests can use the private bath and whether reservations or extra fees apply.',
      },
      {
        question: 'What should I compare before choosing a private bath stay?',
        answer:
          'Compare whether the bath is in-room or reservable, whether use is guaranteed, time limits, extra fees, water type, tattoo rules, and whether children or mobility needs are supported.',
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
    faqs: [
      {
        question: 'Do I need to reserve oversized luggage space on the Shinkansen?',
        answer:
          'On relevant Tokaido, Sanyo, and Kyushu Shinkansen routes, very large luggage may require an oversized luggage space reservation. Check current railway rules before travel.',
      },
      {
        question: 'Should I use luggage delivery instead of carrying bags on the Shinkansen?',
        answer:
          'Luggage delivery can be better when bags are large, transfers are complex, or your hotel route includes stairs and crowded stations. Confirm hotel receiving rules and delivery timing first.',
      },
      {
        question: 'What hotel details matter for Shinkansen luggage days?',
        answer:
          'Station distance, elevator access, luggage storage, delivery receiving, checkout time, and whether the route from station to hotel is easy with large bags all matter.',
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
      'How to use Japan luggage delivery, hotel luggage forwarding, receiving rules, and hands-free travel planning between airports, hotels, and train stations.',
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
    faqs: [
      {
        question: 'Can I send luggage from one hotel to another in Japan?',
        answer:
          'Often yes, but it depends on hotel support, delivery timing, destination address, and bag rules. Confirm with both the sending and receiving property before relying on it.',
      },
      {
        question: 'When should I use luggage delivery in Japan?',
        answer:
          'Use it when moving between cities, avoiding crowded train transfers, traveling with children, or planning a checkout day where carrying suitcases would limit the itinerary.',
      },
      {
        question: 'What should I keep with me when forwarding luggage?',
        answer:
          'Keep passport, medicine, valuables, chargers, a change of clothes, tickets, and anything needed before the bag arrives. Delivery is convenient, but it is not instant access.',
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
      'How to plan hotel stays, ryokan meals, restaurants, and self-catering in Japan when allergies, vegetarian, vegan, halal, or other food restrictions matter.',
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
    faqs: [
      {
        question: 'Is vegetarian food in Japan always free from fish broth?',
        answer:
          'No. Vegetarian wording may not always exclude fish-based dashi, bonito flakes, or dried sardines. Ask specifically about fish broth if it matters to your diet.',
      },
      {
        question: 'Are ryokan meals good for dietary restrictions?',
        answer:
          'Ryokan meals can be difficult to modify because menus are planned in advance and may use shared stocks or seasonings. Confirm in writing before booking if meals are important.',
      },
      {
        question: 'When is self-catering better for food restrictions in Japan?',
        answer:
          'Self-catering can be safer and calmer when restrictions are complex, when breakfast is unclear, or when you need control over ingredients, timing, and backup meals.',
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
  'japan-photography-etiquette-guide': {
    path: '/japan-photography-etiquette-guide',
    eyebrow: 'Photo manners',
    title: 'Japan Photography Etiquette Guide',
    description:
      'A practical guide to taking photos in Japan without blocking streets, entering private spaces, or disturbing residents, worshippers, performers, and local life.',
    intro: [
      'Japan is easy to photograph badly and beautifully at the same time. A quiet alley, a temple hall, a small shopfront, or a person in traditional dress can look like a perfect scene, but it may also be someone’s workplace, home, prayer space, or commute.',
      'Good photography manners in Japan are mostly about awareness: read signs, avoid blocking movement, do not enter private areas, and do not treat people as props.',
      'Use this guide before visiting Kyoto, Tokyo neighborhoods, shrines and temples, markets, trains, festivals, and rural towns where the most interesting photos often happen close to daily life.',
    ],
    productKey: 'japan-stay-planning-kits',
    sections: [
      {
        title: 'Start with signs, not assumptions',
        body: [
          'Photo rules in Japan are highly place-specific. A shrine may allow photos in the outer grounds but ban them at the prayer area. A temple may allow photos outside but not inside halls. A shop, garden, museum, or private lane may have its own rule.',
          'If a sign says no photography, no video, no tripod, no entry, or no drones, treat that as the rule even if other tourists are ignoring it.',
        ],
      },
      {
        title: 'People are not background props',
        bullets: [
          'Do not chase, stop, touch, follow, or block geiko, maiko, monks, priests, staff, schoolchildren, or residents for photos.',
          'Ask before taking close portraits, especially of shop staff, artisans, or people in work settings.',
          'Avoid photographing children in a way that identifies them.',
          'If someone looks uncomfortable, lower the camera and move on.',
          'At ceremonies, keep distance and prioritize the event over the shot.',
        ],
      },
      {
        title: 'Do not block movement',
        body: [
          'A common problem is not the photo itself, but stopping suddenly in a narrow street, station passage, temple stairway, or sidewalk. In busy areas, step aside before composing a shot.',
          'Tripods, selfie sticks, wide group poses, and repeated takes can quickly become a nuisance in places designed for daily movement. If people are flowing around you, the spot is probably not a good place to stop.',
        ],
      },
      {
        title: 'Private roads and private property',
        body: [
          'Some beautiful alleys, gates, gardens, and lanes are private even if they look open. Kyoto’s Gion area is a clear example where local guidance asks visitors not to enter private property or nearby temples and shrines without permission.',
          'Do not step into gardens, doorways, stone paths, shrine or temple restricted areas, ryokan entrances, or residential lanes for a better angle unless entry is clearly allowed.',
        ],
      },
      {
        title: 'Shrines and temples',
        bullets: [
          'Avoid photographing the prayer area when signs prohibit it.',
          'Do not photograph worshippers closely while they pray.',
          'Inside halls, assume photography is not allowed unless clearly permitted.',
          'Never climb, lean on, or move objects for a photo.',
          'During crowded seasons, some temples restrict photography for safety and crowd flow.',
        ],
      },
      {
        title: 'Restaurants, shops, and markets',
        body: [
          'Small restaurants and shops may be fine with food photos but not staff, kitchens, price labels, other customers, or the interior. If in doubt, ask or keep the camera focused only on your own food or purchase.',
          'In markets, do not touch products for photos unless you are buying or the vendor invites it. Keep bags, elbows, and camera straps away from displays.',
        ],
      },
      {
        title: 'Transport and stations',
        bullets: [
          'Do not use flash near train operators, bus drivers, or platform staff.',
          'Stay behind safety lines and do not stop in ticket gates, escalator exits, or narrow platform areas.',
          'Avoid filming passengers closely inside trains.',
          'Large luggage plus camera gear can block movement quickly, so step away from the flow before taking photos.',
        ],
      },
      {
        title: 'A simple pre-photo checklist',
        bullets: [
          'Am I allowed to stand here?',
          'Is photography allowed here?',
          'Am I blocking anyone’s path, work, prayer, or daily life?',
          'Is a person identifiable, and would they reasonably expect privacy?',
          'Would this same behavior feel rude if someone did it near my home or workplace?',
          'Can I take the photo faster, farther back, or from a less crowded spot?',
        ],
      },
      {
        title: 'Stay planning angle',
        body: [
          'If photography is important to your trip, choose stays that make early mornings easier. A hotel near the area you want to photograph can reduce crowd pressure and help you avoid blocking busy daytime routes.',
          'For Kyoto, Nara, temple towns, and festival routes, luggage-friendly stays can also help. Moving through crowds with suitcases and camera gear is rarely pleasant.',
        ],
      },
    ],
    relatedStays: [
      { href: '/japan-shrine-temple-etiquette-guide', label: 'Shrine and temple etiquette guide' },
      { href: '/ryokan-stay-guide', label: 'Ryokan stay guide' },
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
        href: 'https://kyoto.travel/en/responsible-travel/gion-manner-message-from-southern-gionmachi/',
        label: 'Kyoto City Official Guide: Gion manners',
        external: true,
      },
      {
        href: 'https://www.isejingu.or.jp/en/pray/index.html',
        label: 'Ise Jingu: Basic manners and etiquette',
        external: true,
      },
    ],
  },
  'japan-onsen-etiquette-guide': {
    path: '/japan-onsen-etiquette-guide',
    eyebrow: 'Bath culture',
    title: 'Japan Onsen Etiquette Guide',
    description:
      'A practical guide to Japanese onsen and public bath etiquette, including washing, towels, tattoos, private baths, room baths, and what to confirm before booking.',
    intro: [
      'A Japanese onsen can be one of the most memorable parts of a trip, but it can also feel intimidating the first time. The rules are not meant to embarrass visitors. They exist so everyone can share the bath water cleanly and calmly.',
      'The most important idea is simple: wash before soaking. The bath is for relaxing, not for cleaning your body.',
      'This guide explains the basic flow, common mistakes, tattoo considerations, and how to choose between a public bath, private bath, and in-room bath when planning a stay.',
    ],
    productKey: 'kansai-tattoo-friendly-stay-kit',
    sections: [
      {
        title: 'Onsen, sento, public bath, private bath',
        body: [
          'An onsen uses natural hot spring water. A sento is a public bathhouse that may use heated tap water, although some facilities also use natural hot spring water. A hotel or ryokan may describe a large shared bath as a public bath, large bath, or daiyokujo.',
          'A private bath or family bath is usually a reservable bath used privately for a short period. An in-room bath is inside your guest room. For travelers with tattoos, privacy concerns, children, or anxiety about shared bathing, the difference matters.',
        ],
      },
      {
        title: 'The basic bathing flow',
        bullets: [
          'Remove shoes where required before entering the changing area.',
          'Undress fully in the changing room; swimsuits are normally not worn in traditional onsen baths.',
          'Take only the small towel and bath items into the washing area.',
          'Wash and rinse your body thoroughly before entering the bath.',
          'Keep soap, shampoo, and hair out of the bath water.',
          'Soak quietly, then dry your body lightly before returning to the changing area.',
        ],
      },
      {
        title: 'Washing before soaking',
        body: [
          'Use the shower station before entering the bath. Sit on the stool, wash with soap or body wash, shampoo if needed, and rinse completely. No soap should enter the shared bath water.',
          'If there is no shower, follow the local setup and rinse as best you can before soaking. Remote or old facilities may work differently, so watch signs and local instructions.',
        ],
      },
      {
        title: 'Towels, hair, and phones',
        bullets: [
          'Do not put your towel into the bath water.',
          'Place long hair up so it does not touch the bath water.',
          'Do not swim, splash, wash, or exercise in the bath.',
          'Keep phones and cameras out of the bathing area.',
          'Keep conversation low, especially in small baths or late at night.',
        ],
      },
      {
        title: 'Tattoos: always confirm',
        body: [
          'Tattoo rules vary by property. Some baths do not allow visible tattoos, some allow tattoos if covered, some have more flexible policies, and some private baths or in-room baths avoid the issue entirely.',
          'If you have visible tattoos and want to use a shared bath, confirm the current policy before booking. Do not rely only on old reviews or vague phrases like tattoo-friendly.',
        ],
      },
      {
        title: 'Private bath vs in-room bath',
        body: [
          'A private bath can still require a reservation, time limit, or extra fee. It may be a shared facility reserved by time slot, not a bath inside your room.',
          'An in-room bath is usually the lowest-friction option if you want privacy or have tattoo concerns. It may not have hot spring water, so check whether the room bath is a standard bath or an onsen-fed bath if that matters to you.',
        ],
      },
      {
        title: 'Health, heat, and children',
        bullets: [
          'Onsen water can be hotter than many visitors expect; enter slowly and leave if you feel dizzy.',
          'Avoid bathing immediately after drinking alcohol or when feeling unwell.',
          'Check local rules for children, diapers, mixed-gender bathing, and age limits.',
          'If pregnant, managing a medical condition, or sensitive to heat, ask your doctor and follow facility cautions.',
          'Drink water before and after bathing.',
        ],
      },
      {
        title: 'What to confirm before booking',
        bullets: [
          'Does the property have a public bath, private bath, in-room bath, or all three?',
          'Can guests with visible tattoos use the shared bath?',
          'Are cover stickers accepted, and are there size limits?',
          'Does the private bath require a reservation or extra fee?',
          'Is the room bath standard water or hot spring water?',
          'Are bathing hours separated by gender or switched during the day?',
        ],
      },
      {
        title: 'Stay planning angle',
        body: [
          'If bathing is central to your trip, choose the bath type before choosing the room style. A beautiful ryokan can still be stressful if the only bath you want to use has restrictions.',
          'BSJ stay profiles separate tattoo-friendly notes, tattoo-consideration notes, private-bath notes, and room-bath details so travelers can compare the practical constraints before booking.',
        ],
      },
    ],
    relatedStays: [
      { href: '/tattoo-friendly-stays-kansai', label: 'Tattoo-friendly stays in Kansai' },
      { href: '/private-bath-stays-kansai', label: 'Private bath stays in Kansai' },
      { href: '/stays/tattoo-friendly', label: 'Tattoo-friendly stay profiles' },
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
  'japan-restaurant-etiquette-guide': {
    path: '/japan-restaurant-etiquette-guide',
    eyebrow: 'Food basics',
    title: 'Japan Restaurant Etiquette Guide',
    description:
      'A practical guide to eating out in Japan, from ordering and chopsticks to tipping, payment, allergies, small restaurants, and quiet dining manners.',
    intro: [
      'Eating out in Japan is usually easy once you understand the small practical differences. Many rules are not formal ceremony; they are about keeping the restaurant calm, clean, and easy for staff and other customers.',
      'This guide is for everyday travel meals: ramen shops, sushi counters, izakaya, cafes, department-store restaurants, ryokan meals, and small local places where English may be limited.',
      'If you have allergies, halal, vegetarian, vegan, or other dietary needs, treat etiquette as only the first layer. You still need clear ingredient confirmation before relying on a meal.',
    ],
    productKey: 'japan-dietary-restriction-travel-kit',
    sections: [
      {
        title: 'Before you enter',
        body: [
          'Many restaurants have a waiting line, ticket machine, name sheet, or host who seats customers. Do not sit yourself unless the setup clearly suggests it.',
          'Small restaurants may have limited seats and a short menu. If there is a long line behind you, decide quickly, keep bags close, and avoid turning the counter into a planning session.',
        ],
      },
      {
        title: 'Ordering basics',
        bullets: [
          'Pointing at a menu item or photo is usually fine if language is limited.',
          'Some ramen, curry, and casual restaurants use a ticket machine near the entrance.',
          'At izakaya, each person may be expected to order a drink or food item.',
          'At omakase or course restaurants, tell the restaurant about allergies or restrictions before booking, not after sitting down.',
          'Do not assume staff can heavily customize dishes during busy service.',
        ],
      },
      {
        title: 'Oshibori and water',
        body: [
          'Many restaurants provide an oshibori, a wet towel, before the meal. Use it to clean your hands, not your face, neck, table, phone, or spilled food.',
          'Water or tea may be self-service in casual restaurants. If you see a water station, cups, and a pitcher, it is usually fine to help yourself.',
        ],
      },
      {
        title: 'Chopstick mistakes to avoid',
        bullets: [
          'Do not stick chopsticks upright in rice.',
          'Do not pass food directly from chopsticks to chopsticks.',
          'Do not point, wave, tap, or gesture with chopsticks.',
          'Do not spear food if you can reasonably pick it up.',
          'Use shared utensils when provided for shared dishes.',
          'Place chopsticks on the rest or wrapper when not using them.',
        ],
      },
      {
        title: 'Noise, slurping, and shared space',
        body: [
          'Slurping noodles such as ramen, soba, or udon is common, but loud conversation, speakerphone use, and filming other customers are not. The safest approach is to match the room.',
          'In tiny restaurants, avoid spreading out bags, coats, cameras, and shopping on empty seats unless staff clearly says it is fine.',
        ],
      },
      {
        title: 'Tipping and payment',
        body: [
          'Japan generally does not have a tipping culture for normal restaurants. A polite thank you is usually better than leaving coins on the table. Some tourist-facing places may have tip jars or digital tip options, but tipping is not the default expectation.',
          'Payment often happens at the register, not at the table. Many counters use a small money tray for cash or cards. If a tray is provided, place payment there instead of handing it directly to staff.',
        ],
      },
      {
        title: 'Food restrictions need specific questions',
        body: [
          'Japanese menus may use ingredients that are hard to spot in English: dashi, bonito, gelatin, pork extract, chicken stock, soy sauce, alcohol, wheat, sesame, or shared frying oil.',
          'For serious allergies, halal, vegan, vegetarian, or religious restrictions, ask specific questions and keep expectations realistic. A restaurant may be kind but still unable to guarantee cross-contact control.',
        ],
      },
      {
        title: 'Eating while walking',
        body: [
          'Eating while walking is not always forbidden, but it can be awkward in crowded streets, trains, shops, shrine and temple approaches, or residential areas. If you buy street food, eat near the vendor or in a clearly suitable area when possible.',
          'Japan has fewer public trash bins than many visitors expect. Plan to carry wrappers and bottles until you find the right bin or return to your hotel.',
        ],
      },
      {
        title: 'Ryokan and hotel meals',
        body: [
          'Ryokan meals and hotel course meals can be less flexible than casual restaurants. Dinner time may be fixed, late arrival can be a problem, and dietary changes may need advance notice.',
          'If the meal is a major reason for the stay, confirm timing, restrictions, and whether room-only plans are available before booking.',
        ],
      },
      {
        title: 'A simple restaurant checklist',
        bullets: [
          'Wait to be seated unless the restaurant is clearly self-service.',
          'Keep bags compact and avoid blocking narrow aisles.',
          'Use the oshibori for your hands only.',
          'Handle chopsticks calmly and avoid funeral-related taboos.',
          'Pay at the register if staff does not bring the bill to the table.',
          'For allergies or restrictions, ask before ordering and keep backup options nearby.',
        ],
      },
    ],
    relatedStays: [
      { href: '/dietary-restrictions-japan', label: 'Dietary restrictions in Japan' },
      { href: '/stays/food-friendly', label: 'Food-friendly stays' },
      { href: '/stays/self-catering', label: 'Self-catering stays' },
      { href: '/ryokan-stay-guide', label: 'Ryokan stay guide' },
    ],
    serviceLinks: [
      affiliateServiceLinks.klookJapanActivities,
      affiliateServiceLinks.airaloJapan,
    ],
    sourceLinks: [
      {
        href: 'https://www.jnto.org.au/experience/cuisine/essential-guide-japanese-dining-etiquette/',
        label: 'Japan National Tourism Organization Australia: Japanese dining etiquette',
        external: true,
      },
      {
        href: 'https://www.japan.travel/en/plan/vegetarian-guide/',
        label: 'Japan National Tourism Organization: Vegetarian guide',
        external: true,
      },
    ],
  },
  'japan-train-etiquette-guide': {
    path: '/japan-train-etiquette-guide',
    eyebrow: 'Transport manners',
    title: 'Japan Train Etiquette and Transfer Guide',
    description:
      'A practical Japan train etiquette and transfer guide covering quiet cars, queues, priority seats, escalators, luggage, IC cards, Shinkansen transfers, and rush-hour planning.',
    intro: [
      'Japan’s train system is efficient, but it can feel intense when you first arrive: gates, platforms, line colors, crowds, luggage, and announcements all happen quickly.',
      'The good news is that most train etiquette is practical. Queue where the floor markings tell you, keep noise low, avoid blocking movement, and prepare before you reach the gate.',
      'This guide is for everyday train use: city subways, JR lines, airport trains, Shinkansen transfers, and the station-to-hotel movement that often decides whether a travel day feels smooth or exhausting.',
    ],
    productKey: 'japan-luggage-free-travel-kit',
    sections: [
      {
        title: 'Before you enter the gate',
        body: [
          'Have your IC card, ticket, or QR code ready before you reach the ticket gate. Stopping directly in front of the gate to search your bag can block a fast-moving line.',
          'If you are unsure of the fare, route, or platform, step aside first. Japanese stations often have wide areas near maps, ticket machines, and information boards where you can pause without blocking commuters.',
        ],
      },
      {
        title: 'Platform queues',
        bullets: [
          'Stand behind the platform markings and queue where the train doors will open.',
          'Let passengers get off before boarding.',
          'Do not stand in the door area after boarding if people need to move behind you.',
          'Move into the car when possible, especially during rush hour.',
          'Keep large bags close and away from the platform edge.',
        ],
      },
      {
        title: 'Inside the train',
        body: [
          'Most city trains are quiet compared with many countries. Talking softly is usually fine, but phone calls, speakerphone, loud videos, and noisy group conversations stand out quickly.',
          'Backpacks are often worn in front or held low during crowded periods. This makes more space and helps avoid hitting people when the train moves.',
        ],
      },
      {
        title: 'Priority seats and women-only cars',
        body: [
          'Priority seats are intended for passengers who need them, such as elderly people, pregnant passengers, people with disabilities, injured passengers, and people with infants. If you sit there, be ready to offer the seat when someone may need it.',
          'Some lines have women-only cars during specified weekday times. They are usually marked on platforms and train cars. Check the sign rather than guessing from the car number.',
        ],
      },
      {
        title: 'Escalators, elevators, and stairs',
        body: [
          'Escalator standing customs can vary by region. Many people stand on the left in the Tokyo area, while standing on the right is more common around Osaka, but this is a local habit rather than a rule travelers need to memorize.',
          'Some stations, department stores, and public facilities ask people not to walk on escalators for safety, but the signs may be easy to miss or written mainly in Japanese. If you are carrying luggage, traveling with children, or unsure of the local flow, the safer choice is to stand, hold the handrail, and avoid rushing around people.',
          'Use elevators thoughtfully. If you can use stairs or escalators comfortably, leave elevator space for wheelchair users, strollers, elderly passengers, and travelers with difficult luggage when the station is crowded.',
        ],
      },
      {
        title: 'Luggage changes everything',
        bullets: [
          'Avoid rush hour with large suitcases when possible.',
          'Check whether your Shinkansen luggage requires an oversized baggage reservation.',
          'Use luggage delivery when moving between cities with one-night stops or difficult transfers.',
          'Choose hotels with simple station access when traveling with large bags.',
          'Keep bags out of doorways, priority areas, and narrow platform paths.',
        ],
      },
      {
        title: 'IC cards, paper tickets, and transfers',
        body: [
          'IC cards such as Suica, PASMO, and ICOCA are useful for many local trains, buses, convenience stores, lockers, and vending machines. They do not replace every long-distance ticket or reserved-seat requirement.',
          'For transfers between JR, private railways, subways, airport railways, and Shinkansen gates, pay attention to separate ticket gates. A transfer inside one station may still involve leaving one operator and entering another.',
        ],
      },
      {
        title: 'Rush hour planning',
        body: [
          'Morning and evening commuter periods can be difficult with luggage, children, or jet lag. If your schedule is flexible, shifting a transfer by even 30 to 60 minutes can make a travel day much calmer.',
          'For arrival days, a slightly easier hotel location can be worth more than a cheaper room. The first station transfer with bags often sets the tone for the trip.',
        ],
      },
      {
        title: 'Common transfer mistakes',
        bullets: [
          'Following only the station name and not the line or operator.',
          'Entering the wrong ticket gate for the Shinkansen or private railway.',
          'Choosing the fastest route even when it has stairs or several transfers.',
          'Assuming every elevator route is quick or easy to find.',
          'Forgetting that local, rapid, express, and limited express trains may stop at different stations.',
        ],
      },
      {
        title: 'A simple station-day checklist',
        bullets: [
          'Charge your phone and keep route screenshots available offline.',
          'Prepare your IC card or ticket before the gate.',
          'Check platform number, direction, train type, and final destination.',
          'Avoid rush hour if carrying large luggage.',
          'Step aside before checking maps or messages.',
          'Choose the route you can actually manage, not only the fastest route on paper.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which side should I stand on escalators in Japan?',
        answer:
          'Customs vary by region. Many people stand on the left around Tokyo, while standing on the right is more common around Osaka. Safety signs or local flow matter more than memorizing a national rule.',
      },
      {
        question: 'Can I bring large luggage on Japanese trains?',
        answer:
          'Yes, but large luggage can make transfers stressful. Avoid rush hour, keep bags out of doorways, check Shinkansen oversized baggage rules, and consider luggage delivery for multi-city trips.',
      },
      {
        question: 'Are phone calls allowed on Japanese trains?',
        answer:
          'Most city trains are quiet, and phone calls are generally avoided. Keep conversations low, use headphones, and avoid speakerphone or loud videos.',
      },
      {
        question: 'Do IC cards work for every train in Japan?',
        answer:
          'IC cards are useful for many local trains, buses, lockers, and vending machines, but they do not replace every long-distance ticket, reserved seat, airport express, or Shinkansen ticket.',
      },
    ],
    relatedStays: [
      { href: '/japan-ic-card-guide', label: 'Japan IC card guide' },
      { href: '/japan-rail-pass-guide', label: 'Japan Rail Pass guide' },
      { href: '/shinkansen-oversized-luggage-guide', label: 'Shinkansen oversized luggage guide' },
      { href: '/stays/luggage-friendly', label: 'Luggage-friendly stays' },
    ],
    serviceLinks: [
      affiliateServiceLinks.radicalStorageJapan,
      affiliateServiceLinks.kiwitaxiJapan,
      affiliateServiceLinks.airaloJapan,
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
      {
        href: 'https://global.jr-central.co.jp/en/info/oversized-baggage/',
        label: 'JR Central: Oversized baggage information',
        external: true,
      },
      {
        href: 'https://japanrailpass.net/en/',
        label: 'JAPAN RAIL PASS official site',
        external: true,
      },
    ],
  },
};
