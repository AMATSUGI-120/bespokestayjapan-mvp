import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import { ConditionIcon } from '@/components/ConditionIcon';
import { buildPageMetadata } from '@/lib/seo';

const pagePath = '/free-kansai-tattoo-stay-kit';
const pageTitle = 'Free Kansai Tattoo-Friendly Stay Starter Kit';
const pageDescription =
  'A free starter kit for tattooed travelers comparing stays around Osaka, Kyoto, Nara, and Kobe: bath types, tattoo policy checks, hotel questions, and a pre-booking checklist.';

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const kitItems = [
  {
    icon: 'tattoo-friendly',
    title: 'Tattoo and bath status guide',
    text: 'Understand the difference between tattoo-friendly, cover-required, private-bath, and check-before-booking situations.',
  },
  {
    icon: 'private-bath',
    title: 'Bath type checklist',
    text: 'Compare public baths, private reservable baths, and in-room baths before relying on a stay.',
  },
  {
    icon: 'luggage-friendly',
    title: 'Kansai stay shortlist starter',
    text: 'Use a small researched shortlist as a starting point for Osaka, Kyoto, Nara, and nearby Kansai planning.',
  },
  {
    icon: 'english-friendly',
    title: 'Hotel inquiry template',
    text: 'Send a concise English/Japanese message to confirm tattoo and bath rules before choosing a room.',
  },
];

const goodFor = [
  'Travelers with visible tattoos who want fewer bath-rule surprises.',
  'Travelers choosing between city hotels, ryokan, machiya, and private-bath stays.',
  'People who want to understand Japanese bath wording before booking.',
  'Visitors who prefer to confirm details directly instead of guessing from OTA listings.',
];

const relatedLinks = [
  { href: '/tattoo-friendly-stays-kansai', label: 'Read the tattoo-friendly Kansai guide' },
  { href: '/private-bath-stays-kansai', label: 'Compare private bath stay notes' },
  { href: '/stays/tattoo-consideration', label: 'Browse tattoo consideration stays' },
  { href: '/stays/private-bath', label: 'Browse private bath stays' },
];

export default function FreeKansaiTattooStayKitPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="bg-[var(--bsj-bg)] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(320px,0.38fr)] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--bsj-text-light)]">
                Free starter kit
              </p>
              <h1 className="mt-5 max-w-4xl text-[clamp(38px,7vw,82px)] font-medium leading-[0.98] tracking-[0] text-[var(--bsj-text)]">
                Kansai tattoo stay planning, without the guesswork.
              </h1>
              <p className="mt-7 max-w-2xl text-[16px] leading-[1.85] text-[var(--bsj-text-muted)]">
                A free starter kit for tattooed travelers comparing stays in Osaka,
                Kyoto, Nara, Kobe, and nearby Kansai. Use it to understand bath types,
                read policy wording more carefully, and know what to confirm before
                choosing a room.
              </p>
            </div>

            <aside className="border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                Get notified
              </p>
              <h2 className="mt-4 text-[24px] font-medium leading-[1.2] text-[var(--bsj-text)]">
                Join the starter kit waitlist
              </h2>
              <p className="mt-4 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                The free kit is being prepared from BSJ&apos;s researched hotel notes.
                Leave your email to be notified when it is ready.
              </p>
              <form className="mt-6 grid gap-3" aria-label="Starter kit waitlist">
                <input
                  type="email"
                  placeholder="you@example.com"
                  disabled
                  className="min-h-11 w-full border border-[var(--bsj-border)] bg-[var(--bsj-bg)] px-4 text-[14px] text-[var(--bsj-text)] outline-none transition-colors placeholder:text-[var(--bsj-text-light)] focus:border-[var(--bsj-primary)]"
                />
                <button
                  type="submit"
                  disabled
                  className="min-h-11 border border-[var(--bsj-border-strong)] bg-[var(--bsj-bg-subtle)] px-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-muted)]"
                >
                  Signup opening soon
                </button>
              </form>
              <p className="mt-4 text-[11px] leading-[1.6] text-[var(--bsj-text-light)]">
                Temporary waitlist UI. Email service connection will be added later.
              </p>
            </aside>
          </div>
        </section>

        <section className="border-t border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                What&apos;s inside
              </p>
              <h2 className="mt-3 text-[32px] font-medium leading-[1.08] text-[var(--bsj-text)] md:text-[44px]">
                Practical notes for choosing before you book
              </h2>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] md:grid-cols-2">
              {kitItems.map((item) => (
                <div key={item.title} className="bg-[var(--bsj-bg-card)] p-6 md:p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--bsj-border-strong)] text-[var(--bsj-text)]">
                    <ConditionIcon name={item.icon} width={28} height={28} />
                  </span>
                  <h3 className="mt-5 text-[20px] font-medium leading-[1.25] text-[var(--bsj-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--bsj-bg-subtle)] px-6 py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                Who it helps
              </p>
              <h2 className="mt-3 text-[30px] font-medium leading-[1.1] text-[var(--bsj-text)] md:text-[40px]">
                For travelers who need more than a booking-site filter
              </h2>
              <p className="mt-5 text-[15px] leading-[1.85] text-[var(--bsj-text-muted)]">
                A hotel can be easy to reserve and still have bath rules that affect
                your stay. The starter kit keeps the practical checks together so you
                can compare calmly before making your own booking decision.
              </p>
            </div>

            <ul className="space-y-4">
              {goodFor.map((item) => (
                <li key={item} className="flex gap-4 border-b border-[var(--bsj-border)] pb-4 text-[15px] leading-[1.75] text-[var(--bsj-text-muted)] last:border-0">
                  <span className="mt-[0.8em] h-px w-7 shrink-0 bg-[var(--bsj-accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[var(--bsj-border)] bg-[var(--bsj-bg)] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-[1180px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
              Related reading
            </p>
            <div className="mt-6 grid gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] md:grid-cols-2">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-[var(--bsj-bg)] p-5 text-[15px] font-medium leading-[1.5] text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)] hover:underline"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
