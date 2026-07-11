import type { Metadata } from 'next';
import Link from 'next/link';
import LeadMagnetSignupCta from '@/components/LeadMagnetSignupCta';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import TrackedAnalyticsLink from '@/components/TrackedAnalyticsLink';
import { getLeadMagnet, getLeadMagnetSamples, type LeadMagnetKey } from '@/lib/lead-magnets';
import { buildPageMetadata } from '@/lib/seo';

const pagePath = '/free-japan-travel-samples';
const pageTitle = 'Free Japan Travel Planning Samples';
const pageDescription =
  'Free BSJ sample PDFs for Japan stay planning: pre-booking checklist, phrase cards, tattoo inquiries, private bath wording, luggage, dietary restrictions, and Kansai tattoo stay planning.';
const subscribeUrl = process.env.NEXT_PUBLIC_BEEHIIV_PHRASE_CARDS_URL;
const primaryLeadMagnet = getLeadMagnet('free-japan-stay-checklist');
const samples = getLeadMagnetSamples();

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const sampleGroups = [
  {
    title: 'Start here',
    text: 'Use these when you are not sure which stay detail matters yet.',
    keys: ['free-japan-stay-checklist', 'free-japan-phrase-cards'],
  },
  {
    title: 'Stay and bath planning',
    text: 'Use these when tattoos, bath wording, or Kansai stay planning affect your booking choice.',
    keys: [
      'tattoo-friendly-stay-inquiry-template',
      'private-bath-comparison-sheet',
      'kansai-tattoo-stay-starter-list',
    ],
  },
  {
    title: 'Food and luggage',
    text: 'Use these when movement or meals could become the hard part of the trip.',
    keys: ['japan-luggage-planning-mini-sheet', 'dietary-restriction-check-sheet'],
  },
] satisfies Array<{
  title: string;
  text: string;
  keys: LeadMagnetKey[];
}>;

export default function FreeJapanTravelSamplesPage() {
  return (
    <>
      <SiteNav />

      <main>
        <section className="bg-[var(--bsj-bg)] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(320px,0.38fr)] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--bsj-text-light)]">
                Free BSJ samples
              </p>
              <h1 className="mt-5 max-w-4xl text-[clamp(38px,7vw,82px)] font-medium leading-[0.98] tracking-[0] text-[var(--bsj-text)]">
                Practical Japan planning samples for real travel needs.
              </h1>
              <p className="mt-7 max-w-2xl text-[16px] leading-[1.85] text-[var(--bsj-text-muted)]">
                Download compact BSJ samples for pre-booking checks, hotel
                questions, bath wording, luggage movement, food restrictions,
                phrase cards, and tattoo-friendly stay planning.
              </p>
              <p className="mt-5 max-w-2xl text-[14px] leading-[1.8] text-[var(--bsj-text-muted)]">
                These are planning aids, not guarantees. Use them to ask better
                questions before relying on a hotel, ryokan, restaurant, station
                route, or booking-site label.
              </p>
            </div>

            <aside className="border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                Best first download
              </p>
              <h2 className="mt-4 text-[24px] font-medium leading-[1.2] text-[var(--bsj-text)]">
                Start with the pre-booking checklist
              </h2>
              <p className="mt-4 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                It gives the broadest overview of what to check before choosing a
                Japan stay. Then use the specific samples below for tattoos,
                baths, luggage, food, and phrase support.
              </p>
              <div className="mt-6">
                <LeadMagnetSignupCta
                  leadMagnet={primaryLeadMagnet}
                  subscribeUrl={subscribeUrl}
                  sourcePath={pagePath}
                />
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                All sample PDFs
              </p>
              <h2 className="mt-3 text-[32px] font-medium leading-[1.08] text-[var(--bsj-text)] md:text-[44px]">
                Choose the sample that matches the worry.
              </h2>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] md:grid-cols-2">
              {samples.map((sample) => (
                <article key={sample.key} className="bg-[var(--bsj-bg-card)] p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                    {sample.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[22px] font-medium leading-[1.18] text-[var(--bsj-text)]">
                    {sample.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-[var(--bsj-text-muted)]">
                    {sample.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {subscribeUrl ? (
                      <TrackedAnalyticsLink
                        href={subscribeUrl}
                        external
                        className="inline-flex min-h-10 items-center border border-[var(--bsj-border-strong)] bg-[var(--bsj-text)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-bg)] no-underline transition-colors hover:bg-[var(--bsj-primary-hover)] active:bg-[var(--bsj-primary)]"
                        tracking={{
                          event: 'product_teaser',
                          sourcePath: pagePath,
                          productKey: sample.key,
                          ctaLabel: 'Get sample by email',
                          ctaHref: subscribeUrl,
                        }}
                      >
                        Get by email
                      </TrackedAnalyticsLink>
                    ) : (
                      <span className="inline-flex min-h-10 items-center border border-[var(--bsj-border)] bg-[var(--bsj-bg-subtle)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-muted)]">
                        Email signup coming soon
                      </span>
                    )}
                    {sample.path.startsWith('/free-') ? (
                      <Link
                        href={sample.path}
                        className="inline-flex min-h-10 items-center border border-[var(--bsj-border)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-muted)] no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)] hover:text-[var(--bsj-text)]"
                      >
                        View page
                      </Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--bsj-bg-subtle)] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] md:grid-cols-3">
              {sampleGroups.map((group) => (
                <div key={group.title} className="bg-[var(--bsj-bg)] p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                    {group.title}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                    {group.text}
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    {group.keys.map((key) => {
                      const sample = getLeadMagnet(key);
                      return subscribeUrl ? (
                        <TrackedAnalyticsLink
                          key={sample.key}
                          href={subscribeUrl}
                          external
                          className="text-[13px] leading-[1.5] text-[var(--bsj-text)] no-underline transition-colors hover:text-[var(--bsj-primary-hover)] hover:underline"
                          tracking={{
                            event: 'product_teaser',
                            sourcePath: pagePath,
                            productKey: sample.key,
                            ctaLabel: sample.title,
                            ctaHref: subscribeUrl,
                          }}
                        >
                          {sample.title}
                        </TrackedAnalyticsLink>
                      ) : (
                        <span
                          key={sample.key}
                          className="text-[13px] leading-[1.5] text-[var(--bsj-text-muted)]"
                        >
                          {sample.title}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--bsj-border)] bg-[var(--bsj-bg)] px-6 py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                When a sample is not enough
              </p>
              <h2 className="mt-3 text-[30px] font-medium leading-[1.1] text-[var(--bsj-text)] md:text-[40px]">
                Some details are worth confirming in writing.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.85] text-[var(--bsj-text-muted)]">
                If a bath rule, food restriction, luggage delivery, late check-in,
                activity rule, or restaurant detail could change your plan, use the
                samples as a starting point and confirm directly before booking.
              </p>
              <TrackedAnalyticsLink
                href="/japan-confirmation-service"
                className="mt-7 inline-flex min-h-10 items-center border border-[var(--bsj-border-strong)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)]"
                tracking={{
                  event: 'confirmation_service_cta',
                  sourcePath: pagePath,
                  ctaLabel: 'Read about confirmation support',
                  ctaHref: '/japan-confirmation-service',
                  ctaLocation: 'free_samples_hub',
                }}
              >
                Read about confirmation support
              </TrackedAnalyticsLink>
            </div>

            <div className="border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                Related pages
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/free-japan-stay-checklist"
                  className="border-b border-[var(--bsj-border)] pb-3 text-[14px] leading-[1.5] text-[var(--bsj-text)] no-underline transition-colors hover:text-[var(--bsj-primary-hover)] hover:underline"
                >
                  Free Japan Stay Checklist
                </Link>
                <Link
                  href="/free-japan-phrase-cards"
                  className="border-b border-[var(--bsj-border)] pb-3 text-[14px] leading-[1.5] text-[var(--bsj-text)] no-underline transition-colors hover:text-[var(--bsj-primary-hover)] hover:underline"
                >
                  Free Japan Phrase Cards
                </Link>
                <Link
                  href="/guides"
                  className="text-[14px] leading-[1.5] text-[var(--bsj-text)] no-underline transition-colors hover:text-[var(--bsj-primary-hover)] hover:underline"
                >
                  Practical Japan guides
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
