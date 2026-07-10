import type { Metadata } from 'next';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import TrackedAnalyticsLink from '@/components/TrackedAnalyticsLink';
import { buildPageMetadata } from '@/lib/seo';

const pagePath = '/japan-confirmation-service';
const pageTitle = 'Japan Confirmation Support';
const pageDescription =
  'Planned Japanese confirmation support for travelers who need help checking hotels, ryokan, onsen, restaurants, or activities before making their own decision.';

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const serviceOptions = [
  {
    title: 'Message draft',
    price: 'Planned: $19-29',
    text: 'A Japanese inquiry message you can send yourself. Useful when you want control of the conversation but need better wording.',
  },
  {
    title: '1-place confirmation',
    price: 'Planned: around $39',
    text: 'BSJ sends a Japanese email inquiry to one facility and returns an English summary with the original reply.',
  },
  {
    title: '3-place confirmation pack',
    price: 'Planned: around $89',
    text: 'Compare up to three facilities on one specific issue, such as tattoo policy, meal support, or reservation conditions.',
  },
];

const confirmationTopics = [
  'Tattoo and public bath rules',
  'Private bath, family bath, or in-room bath details',
  'Vegetarian, vegan, halal, allergy, or fish-based dashi questions',
  'Luggage storage, luggage delivery, or large suitcase receiving',
  'Late check-in, shuttle service, or ryokan arrival rules',
  'Restaurant reservation details or activity requirements',
];

const boundaries = [
  'BSJ does not book hotels or accommodation on your behalf.',
  'BSJ does not handle accommodation payment, cancellation, refund, or booking changes.',
  'For restaurants and activities, any future reservation support must clearly show scope, cancellation rules, and whether payment is handled directly by the user or provider.',
  'BSJ does not guarantee allergen-free meals, medical safety, facility acceptance, availability, or final service outcomes.',
  'Written replies are preferred. Phone summaries are weaker evidence and would be clearly labeled as phone conversation notes.',
];

export default function JapanConfirmationServicePage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="bg-[var(--bsj-bg)] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(320px,0.38fr)] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--bsj-text-light)]">
                Planned service
              </p>
              <h1 className="mt-5 max-w-4xl text-[clamp(38px,7vw,82px)] font-medium leading-[0.98] tracking-[0] text-[var(--bsj-text)]">
                Ask Japan before you rely on the answer.
              </h1>
              <p className="mt-7 max-w-2xl text-[16px] leading-[1.85] text-[var(--bsj-text-muted)]">
                A planned Japanese confirmation support service for travelers who need
                help checking hotel policies, ryokan rules, restaurant details, activity
                conditions, or food restrictions before making their own booking or travel
                decision.
              </p>
            </div>

            <aside className="border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                Current status
              </p>
              <h2 className="mt-4 text-[24px] font-medium leading-[1.2] text-[var(--bsj-text)]">
                Service design in progress
              </h2>
              <p className="mt-4 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                This page defines the scope before accepting requests. Intake forms,
                pricing, and delivery workflow will be added later.
              </p>
              <TrackedAnalyticsLink
                href="/free-japan-travel-samples"
                className="mt-6 inline-flex min-h-10 items-center border border-[var(--bsj-border-strong)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)]"
                tracking={{
                  event: 'confirmation_service_cta',
                  sourcePath: pagePath,
                  ctaLabel: 'Start with free samples',
                  ctaHref: '/free-japan-travel-samples',
                  ctaLocation: 'hero_status_card',
                }}
              >
                Start with free samples
              </TrackedAnalyticsLink>
            </aside>
          </div>
        </section>

        <section className="border-t border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                What we may check
              </p>
              <h2 className="mt-3 text-[32px] font-medium leading-[1.08] text-[var(--bsj-text)] md:text-[44px]">
                Questions that are hard to answer from English listings alone
              </h2>
            </div>

            <ul className="mt-10 grid gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] md:grid-cols-2">
              {confirmationTopics.map((topic) => (
                <li
                  key={topic}
                  className="flex gap-4 bg-[var(--bsj-bg-card)] p-5 text-[15px] leading-[1.75] text-[var(--bsj-text-muted)] md:p-6"
                >
                  <span className="mt-[0.8em] h-px w-7 shrink-0 bg-[var(--bsj-accent)]" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[var(--bsj-bg-subtle)] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
              Possible service tiers
            </p>
            <div className="mt-6 grid gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] lg:grid-cols-3">
              {serviceOptions.map((option) => (
                <article key={option.title} className="bg-[var(--bsj-bg)] p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                    {option.price}
                  </p>
                  <h3 className="mt-4 text-[22px] font-medium leading-[1.2] text-[var(--bsj-text)]">
                    {option.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                    {option.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--bsj-border)] bg-[var(--bsj-bg)] px-6 py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                Boundary
              </p>
              <h2 className="mt-3 text-[30px] font-medium leading-[1.1] text-[var(--bsj-text)] md:text-[40px]">
                Confirmation support is not a hotel booking agency.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.85] text-[var(--bsj-text-muted)]">
                The core service is asking questions, organizing replies, and translating
                the practical meaning. Travelers still make their own booking, payment,
                and final safety decisions.
              </p>
            </div>

            <ul className="space-y-4">
              {boundaries.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-[var(--bsj-border)] pb-4 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)] last:border-0"
                >
                  <span className="mt-[0.8em] h-px w-7 shrink-0 bg-[var(--bsj-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
