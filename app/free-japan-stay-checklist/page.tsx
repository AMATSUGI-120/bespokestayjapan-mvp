import type { Metadata } from 'next';
import Link from 'next/link';
import { ConditionIcon } from '@/components/ConditionIcon';
import LeadMagnetSignupCta from '@/components/LeadMagnetSignupCta';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import TrackedAnalyticsLink from '@/components/TrackedAnalyticsLink';
import { getLeadMagnet } from '@/lib/lead-magnets';
import { buildPageMetadata } from '@/lib/seo';

const leadMagnet = getLeadMagnet('free-japan-stay-checklist');
const pagePath = leadMagnet.path;
const subscribeUrl = process.env.NEXT_PUBLIC_BEEHIIV_PHRASE_CARDS_URL;

export const metadata: Metadata = buildPageMetadata({
  title: leadMagnet.title,
  description: leadMagnet.description,
  path: pagePath,
});

const checklistItems = [
  {
    icon: 'private-bath',
    title: 'Bath and tattoo rules',
    text: 'Public bath rules, private bath wording, in-room bath options, cover stickers, and policy proof.',
  },
  {
    icon: 'luggage-friendly',
    title: 'Luggage flow',
    text: 'Before check-in storage, delivery acceptance, elevators, station exits, and large-bag movement.',
  },
  {
    icon: 'food-friendly',
    title: 'Food restrictions',
    text: 'Fish-based dashi, breakfast changes, allergies, halal, vegetarian, vegan, and nearby meal options.',
  },
  {
    icon: 'self-catering',
    title: 'Room practicality',
    text: 'Kitchen, laundry, workspace, bed layout, noise, stairs, pets, children, and longer-stay comfort.',
  },
  {
    icon: 'english-friendly',
    title: 'Language and support',
    text: 'English pages, email response, check-in method, emergency contact, and staff support level.',
  },
];

const includedPages = [
  'A quick 5-point pre-booking scan',
  'Travel-need prompts for tattoos, baths, food, luggage, and access',
  'Simple hotel inquiry templates',
  'A calm next-step framework for turning uncertainty into a shortlist',
];

const relatedSamples = [
  getLeadMagnet('tattoo-friendly-stay-inquiry-template'),
  getLeadMagnet('private-bath-comparison-sheet'),
  getLeadMagnet('japan-luggage-planning-mini-sheet'),
  getLeadMagnet('dietary-restriction-check-sheet'),
  getLeadMagnet('kansai-tattoo-stay-starter-list'),
];

export default function FreeJapanStayChecklistPage() {
  return (
    <>
      <SiteNav />

      <main>
        <section className="bg-[var(--bsj-bg)] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(320px,0.38fr)] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--bsj-text-light)]">
                {leadMagnet.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-[clamp(38px,7vw,82px)] font-medium leading-[0.98] tracking-[0] text-[var(--bsj-text)]">
                Check the details before you trust a Japan stay listing.
              </h1>
              <p className="mt-7 max-w-2xl text-[16px] leading-[1.85] text-[var(--bsj-text-muted)]">
                {leadMagnet.description}
              </p>
              <p className="mt-5 max-w-2xl text-[14px] leading-[1.8] text-[var(--bsj-text-muted)]">
                Use it before you book a hotel, ryokan, apartment stay, villa, or
                long-stay room. It is designed for travelers who need practical
                clarity, not a generic sightseeing checklist.
              </p>
            </div>

            <aside className="border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                Free PDF sample
              </p>
              <h2 className="mt-4 text-[24px] font-medium leading-[1.2] text-[var(--bsj-text)]">
                Get the checklist by email
              </h2>
              <p className="mt-4 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                Join the Bespoke Stay Japan email list and use the PDF before
                comparing stays. You can also preview the current sample PDF now.
              </p>
              <div className="mt-6">
                <LeadMagnetSignupCta
                  leadMagnet={leadMagnet}
                  subscribeUrl={subscribeUrl}
                  sourcePath={pagePath}
                />
              </div>
              <p className="mt-4 break-words text-[11px] leading-[1.6] text-[var(--bsj-text-light)]">
                PDF URL: {leadMagnet.pdfUrl}
              </p>
            </aside>
          </div>
        </section>

        <section className="border-t border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                What it helps you check
              </p>
              <h2 className="mt-3 text-[32px] font-medium leading-[1.08] text-[var(--bsj-text)] md:text-[44px]">
                The stay details that can change the trip.
              </h2>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] md:grid-cols-2 lg:grid-cols-3">
              {checklistItems.map((item) => (
                <article key={item.title} className="bg-[var(--bsj-bg-card)] p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--bsj-border-strong)] text-[var(--bsj-text)]">
                    <ConditionIcon name={item.icon} width={28} height={28} />
                  </span>
                  <h3 className="mt-5 text-[20px] font-medium leading-[1.25] text-[var(--bsj-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--bsj-bg-subtle)] px-6 py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                Inside the PDF
              </p>
              <h2 className="mt-3 text-[30px] font-medium leading-[1.1] text-[var(--bsj-text)] md:text-[40px]">
                A short sample that points to the right questions.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.85] text-[var(--bsj-text-muted)]">
                This is intentionally compact. The goal is to help travelers notice
                which details need proof, direct confirmation, or a backup plan.
              </p>
            </div>

            <div className="border border-[var(--bsj-border)] bg-[var(--bsj-bg)] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                Included pages
              </p>
              <ul className="mt-5 grid gap-3">
                {includedPages.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[14px] leading-[1.65] text-[var(--bsj-text-muted)]"
                  >
                    <span className="mt-[0.75em] h-px w-5 shrink-0 bg-[var(--bsj-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--bsj-border)] bg-[var(--bsj-bg)] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                  More BSJ samples
                </p>
                <h2 className="mt-3 text-[30px] font-medium leading-[1.1] text-[var(--bsj-text)] md:text-[40px]">
                  Downloadable planning aids for specific worries.
                </h2>
              </div>
              <TrackedAnalyticsLink
                href="/japan-confirmation-service"
                className="inline-flex min-h-10 w-fit items-center border border-[var(--bsj-border-strong)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)]"
                tracking={{
                  event: 'confirmation_service_cta',
                  sourcePath: pagePath,
                  ctaLabel: 'Need a specific answer checked?',
                  ctaHref: '/japan-confirmation-service',
                  ctaLocation: 'more_bsj_samples',
                }}
              >
                Need a specific answer checked?
              </TrackedAnalyticsLink>
              <Link
                href="/free-japan-travel-samples"
                className="inline-flex min-h-10 w-fit items-center border border-[var(--bsj-border)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-muted)] no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)] hover:text-[var(--bsj-text)]"
              >
                Browse all free samples
              </Link>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] md:grid-cols-2">
              {relatedSamples.map((sample) => (
                <a
                  key={sample.key}
                  href={sample.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group bg-[var(--bsj-bg-card)] p-6 text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg)]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                    {sample.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[21px] font-medium leading-[1.2] text-[var(--bsj-text)] group-hover:underline">
                    {sample.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.7] text-[var(--bsj-text-muted)]">
                    {sample.description}
                  </p>
                  <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-primary)]">
                    Preview PDF →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-6 py-12">
          <div className="mx-auto max-w-[1180px]">
            <p className="max-w-3xl text-[12px] leading-[1.75] text-[var(--bsj-text-light)]">
              This checklist is a planning aid, not a guarantee. Hotel policies,
              restaurant policies, bath access, luggage handling, and staff answers
              can change. Confirm directly before booking when a detail matters.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/stays"
                className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline hover:underline"
              >
                Browse stay profiles
              </Link>
              <Link
                href="/guides"
                className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline hover:underline"
              >
                Read practical guides
              </Link>
              <Link
                href="/free-japan-travel-samples"
                className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline hover:underline"
              >
                View all free samples
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
