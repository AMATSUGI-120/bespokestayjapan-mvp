import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import { guidePages } from '@/lib/guide-content';
import { absoluteUrl, buildPageMetadata, SITE_NAME } from '@/lib/seo';
import { buildBreadcrumbJsonLd } from '@/lib/structured-data';

const guidesDescription =
  'Practical Japan travel and stay guides for tattoo policies, private baths, luggage delivery, dietary restrictions, ryokan stays, airport transfers, train etiquette, eSIMs, and activity planning.';

export const metadata: Metadata = buildPageMetadata({
  title: 'Japan Stay Guides',
  description: guidesDescription,
  path: '/guides',
});

const guideSections = [
  {
    eyebrow: 'Stay conditions',
    title: 'Choose stays around real constraints',
    description:
      'Baths, tattoos, meals, ryokan customs, and luggage details that affect where you should stay.',
    guides: [
      guidePages['tattoo-friendly-stays-kansai'],
      guidePages['private-bath-stays-kansai'],
      guidePages['dietary-restrictions-japan'],
      guidePages['ryokan-stay-guide'],
      guidePages['japan-onsen-etiquette-guide'],
      guidePages['japan-luggage-delivery-guide'],
      guidePages['shinkansen-oversized-luggage-guide'],
    ],
  },
  {
    eyebrow: 'Getting around',
    title: 'Move through Japan with less friction',
    description:
      'Trains, IC cards, rail passes, bicycles, and station movement for travelers who want fewer surprises.',
    guides: [
      guidePages['japan-train-etiquette-guide'],
      guidePages['japan-ic-card-guide'],
      guidePages['japan-esim-guide'],
      guidePages['japan-luggage-storage-guide'],
      guidePages['japan-checkout-day-luggage-guide'],
      guidePages['japan-taxi-private-transfer-guide'],
      guidePages['japan-rail-pass-guide'],
      guidePages['japan-bicycle-rules-guide'],
    ],
  },
  {
    eyebrow: 'Tours and experiences',
    title: 'Book activities around real-world constraints',
    description:
      'Day trips, private transfers, workshops, tickets, and tours viewed through luggage, meeting points, toilets, food needs, and timing.',
    guides: [
      guidePages['japan-private-tours-transfers-guide'],
      guidePages['kansai-day-trips-practical-guide'],
      guidePages['japan-experience-booking-guide'],
      guidePages['japan-airport-arrival-transfer-guide'],
      guidePages['japan-taxi-private-transfer-guide'],
      guidePages['japan-theme-park-attraction-guide'],
      guidePages['japan-snow-winter-activity-guide'],
      guidePages['japan-cultural-workshop-guide'],
      guidePages['japan-family-activity-planning-guide'],
      guidePages['japan-food-tours-dietary-needs-guide'],
      guidePages['japan-luggage-delivery-guide'],
      guidePages['japan-luggage-storage-guide'],
      guidePages['japan-checkout-day-luggage-guide'],
      guidePages['dietary-restrictions-japan'],
      guidePages['japan-restaurant-etiquette-guide'],
    ],
  },
  {
    eyebrow: 'Local manners',
    title: 'Understand the small rules around daily travel',
    description:
      'Food, photos, shrines, temples, shopping, and quiet public behavior explained without making travel feel intimidating.',
    guides: [
      guidePages['japan-restaurant-etiquette-guide'],
      guidePages['japan-shrine-temple-etiquette-guide'],
      guidePages['japan-photography-etiquette-guide'],
      guidePages['japan-tax-free-shopping-guide'],
    ],
  },
];

const problemLinks = [
  {
    title: 'I have tattoos or want a private bath',
    href: '/tattoo-friendly-stays-kansai',
    description: 'Start with tattoo policy, public bath, private bath, and in-room bath wording.',
  },
  {
    title: 'I am worried about luggage',
    href: '/japan-luggage-delivery-guide',
    description: 'Compare delivery, station storage, checkout-day planning, and Shinkansen luggage rules.',
  },
  {
    title: 'I have food restrictions',
    href: '/dietary-restrictions-japan',
    description: 'Check ryokan meals, hotel breakfast, fish-based dashi, allergies, and self-catering.',
  },
  {
    title: 'I need arrival-day help',
    href: '/japan-airport-arrival-transfer-guide',
    description: 'Plan airport trains, buses, transfers, luggage, eSIM setup, and hotel check-in.',
  },
  {
    title: 'I am booking tours or activities',
    href: '/japan-experience-booking-guide',
    description: 'Review meeting points, toilets, luggage, weather, children, and food needs before booking.',
  },
  {
    title: 'I need station and train basics',
    href: '/japan-train-etiquette-guide',
    description: 'Understand IC cards, queues, escalators, priority seats, transfers, and rush hour.',
  },
];

const allGuides = Array.from(
  new Map(
    guideSections
      .flatMap((section) => section.guides)
      .filter(Boolean)
      .map((guide) => [guide.path, guide])
  ).values()
);

const guidesItemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Japan stay and travel guides',
  description: guidesDescription,
  url: absoluteUrl('/guides'),
  itemListElement: allGuides.map((guide, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: guide.title,
    url: absoluteUrl(guide.path),
  })),
};

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Japan Stay Guides',
          description: guidesDescription,
          url: absoluteUrl('/guides'),
          inLanguage: 'en',
          isPartOf: {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: absoluteUrl('/'),
          },
        }}
      />
      <JsonLd data={guidesItemListJsonLd} />
      <SiteNav />

      <main>
        <section
          className="px-6 py-20 md:py-24"
          style={{
            backgroundColor: 'var(--bsj-bg)',
            borderBottom: '1px solid var(--bsj-border)',
          }}
        >
          <div className="mx-auto max-w-[1180px]">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
              Japan stay planning
            </p>
            <h1 className="text-[clamp(40px,7vw,88px)] font-medium leading-[0.96] tracking-[0] text-[var(--bsj-text)]">
              Guides
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-[var(--bsj-text-muted)]">
              Practical notes for travelers choosing Japan stays, routes, and activities
              around real constraints: baths, tattoos, luggage, food, family movement,
              airport arrivals, trains, and local rules.
            </p>
          </div>
        </section>

        <section className="px-6 py-14 md:py-20" style={{ backgroundColor: 'var(--bsj-bg-card)' }}>
          <div className="mx-auto max-w-[1180px] space-y-14 md:space-y-18">
            <section>
              <div className="mb-7 grid gap-4 border-b border-[var(--bsj-border)] pb-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                    Start by problem
                  </p>
                  <h2 className="mt-3 text-[28px] font-medium leading-[1.1] tracking-[0] text-[var(--bsj-text)] md:text-[36px]">
                    What are you trying to solve?
                  </h2>
                </div>
                <p className="max-w-2xl text-[14px] leading-[1.75] text-[var(--bsj-text-muted)] md:justify-self-end">
                  BSJ is organized around practical travel constraints, not generic
                  inspiration. Start with the detail that could affect your booking,
                  route, meal, or day-of-travel comfort.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] md:grid-cols-2 lg:grid-cols-3">
                {problemLinks.map((problem) => (
                  <Link
                    key={problem.href}
                    href={problem.href}
                    className="group flex min-h-[190px] flex-col bg-[var(--bsj-bg)] p-6 text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)] md:p-7"
                  >
                    <h3 className="text-[20px] font-medium leading-[1.2] tracking-[0] text-[var(--bsj-text)] group-hover:underline">
                      {problem.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-[1.7] text-[var(--bsj-text-muted)]">
                      {problem.description}
                    </p>
                    <p className="mt-auto pt-6 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--bsj-text)]">
                      Start here →
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {guideSections.map((section) => (
              <section key={section.title}>
                <div className="mb-7 grid gap-4 border-b border-[var(--bsj-border)] pb-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                      {section.eyebrow}
                    </p>
                    <h2 className="mt-3 text-[28px] font-medium leading-[1.1] tracking-[0] text-[var(--bsj-text)] md:text-[36px]">
                      {section.title}
                    </h2>
                  </div>
                  <p className="max-w-2xl text-[14px] leading-[1.75] text-[var(--bsj-text-muted)] md:justify-self-end">
                    {section.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] md:grid-cols-2 lg:grid-cols-3">
                  {section.guides.map((guide) => (
                    <Link
                      key={guide.path}
                      href={guide.path}
                      className="group flex min-h-[260px] flex-col bg-[var(--bsj-bg-card)] p-6 text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg)] md:p-7"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                        {guide.eyebrow}
                      </p>
                      <h3 className="mt-5 text-[22px] font-medium leading-[1.15] tracking-[0] text-[var(--bsj-text)] group-hover:underline">
                        {guide.title}
                      </h3>
                      <p className="mt-4 text-[14px] leading-[1.7] text-[var(--bsj-text-muted)]">
                        {guide.description}
                      </p>
                      <p className="mt-auto pt-6 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--bsj-text)]">
                        Read guide →
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
