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

const guideCards = [
  guidePages['tattoo-friendly-stays-kansai'],
  guidePages['private-bath-stays-kansai'],
  guidePages['shinkansen-oversized-luggage-guide'],
  guidePages['japan-luggage-delivery-guide'],
  guidePages['dietary-restrictions-japan'],
  guidePages['ryokan-stay-guide'],
  guidePages['japan-ic-card-guide'],
  guidePages['japan-tax-free-shopping-guide'],
  guidePages['japan-rail-pass-guide'],
  guidePages['japan-bicycle-rules-guide'],
  guidePages['japan-shrine-temple-etiquette-guide'],
  guidePages['japan-photography-etiquette-guide'],
  guidePages['japan-onsen-etiquette-guide'],
  guidePages['japan-restaurant-etiquette-guide'],
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

        <section className="px-6 py-16 md:py-20" style={{ backgroundColor: 'var(--bsj-bg-card)' }}>
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] md:grid-cols-2">
            {guideCards.map((guide) => (
              <Link
                key={guide.path}
                href={guide.path}
                className="group bg-[var(--bsj-bg-card)] p-7 text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg)] md:p-8"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                  {guide.eyebrow}
                </p>
                <h2 className="mt-5 text-[24px] font-medium leading-[1.15] tracking-[0] text-[var(--bsj-text)] group-hover:underline">
                  {guide.title}
                </h2>
                <p className="mt-4 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                  {guide.description}
                </p>
                <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--bsj-text)]">
                  Read guide →
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
