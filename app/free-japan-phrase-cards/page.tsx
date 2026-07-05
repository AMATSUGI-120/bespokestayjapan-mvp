import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import { ConditionIcon } from '@/components/ConditionIcon';
import { buildPageMetadata } from '@/lib/seo';

const pagePath = '/free-japan-phrase-cards';
const pageTitle = 'Free Japan Phrase Cards';
const pageDescription =
  'A free phone-friendly mini pack of show-this-card Japanese phrases for restaurants, hotels, trains, taxis, onsen, and basic travel help.';

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

const cardCategories = [
  {
    icon: 'food-friendly',
    title: 'Restaurant and food',
    text: 'Reservation, fish-based dashi, vegetarian needs, allergies, and what to ask before relying on a meal.',
  },
  {
    icon: 'luggage-friendly',
    title: 'Hotel and luggage',
    text: 'Checking luggage before check-in, large-bag receiving, late arrival, and basic front-desk questions.',
  },
  {
    icon: 'private-bath',
    title: 'Onsen and baths',
    text: 'Tattoo policy, public baths, private reservable baths, and in-room bath wording.',
  },
  {
    icon: 'access-friendly',
    title: 'Stations, taxis, and help',
    text: 'Asking for the right train, elevator routes, taxi destinations, and basic urgent help.',
  },
];

const sampleCards = [
  {
    code: 'R-02',
    category: 'Restaurant',
    title: 'Fish broth / dashi',
    japanese: 'この料理には、魚、かつお節、煮干し、だしが使われていますか？',
    english:
      'Does this dish contain fish, bonito flakes, dried sardines, or fish-based dashi?',
    note: 'Useful for vegetarian and pescatarian concerns. This does not guarantee allergen-free food.',
  },
  {
    code: 'H-01',
    category: 'Hotel',
    title: 'Luggage before check-in',
    japanese: 'チェックイン前に荷物を預けることはできますか？',
    english: 'Can I leave my luggage before check-in?',
    note: 'Useful when arriving early or moving between cities with large bags.',
  },
  {
    code: 'O-01',
    category: 'Onsen',
    title: 'Tattoo / public bath',
    japanese: 'タトゥーがありますが、大浴場を利用できますか？',
    english: 'I have tattoos. Can I use the public bath?',
    note: 'Always confirm directly. Rules can vary by facility, date, and bath type.',
  },
];

const relatedLinks = [
  { href: '/japan-restaurant-etiquette-guide', label: 'Restaurant etiquette guide' },
  { href: '/dietary-restrictions-japan', label: 'Dietary restrictions in Japan' },
  { href: '/japan-onsen-etiquette-guide', label: 'Onsen etiquette guide' },
  { href: '/japan-confirmation-service', label: 'Japanese confirmation support' },
];

export default function FreeJapanPhraseCardsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="bg-[var(--bsj-bg)] px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(320px,0.38fr)] lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--bsj-text-light)]">
                Free phone cards
              </p>
              <h1 className="mt-5 max-w-4xl text-[clamp(38px,7vw,82px)] font-medium leading-[0.98] tracking-[0] text-[var(--bsj-text)]">
                Show-this-card Japanese for real travel situations.
              </h1>
              <p className="mt-7 max-w-2xl text-[16px] leading-[1.85] text-[var(--bsj-text-muted)]">
                A free mini pack of phone-friendly phrase cards for moments when
                translation is not enough: food restrictions, hotel questions, bath
                rules, luggage, trains, taxis, and basic help.
              </p>
              <p className="mt-5 max-w-2xl text-[14px] leading-[1.8] text-[var(--bsj-text-muted)]">
                Save the PDF to your phone, open the card for your situation, and show
                the Japanese text to staff. The cards help communication, but they do
                not guarantee policies, allergen-free meals, medical safety, or service
                availability.
              </p>
            </div>

            <aside className="border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                Get the mini pack
              </p>
              <h2 className="mt-4 text-[24px] font-medium leading-[1.2] text-[var(--bsj-text)]">
                Join the phrase card waitlist
              </h2>
              <p className="mt-4 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                The beehiiv signup and file delivery will be connected later. For now,
                this page defines the free offer and where it will live on BSJ.
              </p>
              <form className="mt-6 grid gap-3" aria-label="Phrase card waitlist">
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
                What is inside
              </p>
              <h2 className="mt-3 text-[32px] font-medium leading-[1.08] text-[var(--bsj-text)] md:text-[44px]">
                Not hello and thank you. The questions people forget to ask.
              </h2>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] md:grid-cols-2">
              {cardCategories.map((item) => (
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
          <div className="mx-auto max-w-[1180px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
              Sample card structure
            </p>
            <div className="mt-6 grid gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] lg:grid-cols-3">
              {sampleCards.map((card) => (
                <article key={card.code} className="bg-[var(--bsj-bg)] p-6">
                  <div className="flex items-center justify-between gap-4 border-b border-[var(--bsj-border)] pb-4">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text)]">
                      {card.code}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                      {card.category}
                    </p>
                  </div>
                  <h3 className="mt-5 text-[22px] font-medium leading-[1.15] text-[var(--bsj-text)]">
                    {card.title}
                  </h3>
                  <p className="mt-6 text-[24px] font-semibold leading-[1.55] text-[var(--bsj-text)]">
                    {card.japanese}
                  </p>
                  <p className="mt-5 border-t border-[var(--bsj-border)] pt-4 text-[14px] leading-[1.7] text-[var(--bsj-text-muted)]">
                    {card.english}
                  </p>
                  <p className="mt-5 bg-[var(--bsj-bg-card)] p-4 text-[12px] leading-[1.65] text-[var(--bsj-text-light)]">
                    {card.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--bsj-border)] bg-[var(--bsj-bg)] px-6 py-14 md:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                When cards are not enough
              </p>
              <h2 className="mt-3 text-[30px] font-medium leading-[1.1] text-[var(--bsj-text)] md:text-[40px]">
                If the answer matters, ask before you rely on it.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.85] text-[var(--bsj-text-muted)]">
                Phrase cards help in the moment. For hotel bath rules, allergy-sensitive
                meals, restaurant reservations, or activity details, BSJ is also planning
                a Japanese confirmation support service.
              </p>
              <Link
                href="/japan-confirmation-service"
                className="mt-7 inline-flex min-h-10 items-center border border-[var(--bsj-border-strong)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)]"
              >
                Read about confirmation support
              </Link>
            </div>

            <div className="border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                Related reading
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="border-b border-[var(--bsj-border)] pb-3 text-[14px] leading-[1.5] text-[var(--bsj-text)] no-underline transition-colors last:border-0 last:pb-0 hover:text-[var(--bsj-primary-hover)] hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
