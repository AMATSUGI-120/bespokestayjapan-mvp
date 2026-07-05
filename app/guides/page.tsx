import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import { guidePages } from '@/lib/guide-content';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Japan Stay Guides',
  description:
    'Practical Japan stay guides for tattoo policies, private baths, luggage delivery, dietary restrictions, ryokan stays, and local transport planning.',
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
      guidePages['japan-rail-pass-guide'],
      guidePages['japan-bicycle-rules-guide'],
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

export default function GuidesPage() {
  return (
    <>
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
              Practical notes for travelers choosing Japan stays around real constraints:
              baths, tattoos, luggage, food, family movement, and local transport.
            </p>
          </div>
        </section>

        <section className="px-6 py-14 md:py-20" style={{ backgroundColor: 'var(--bsj-bg-card)' }}>
          <div className="mx-auto max-w-[1180px] space-y-14 md:space-y-18">
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
