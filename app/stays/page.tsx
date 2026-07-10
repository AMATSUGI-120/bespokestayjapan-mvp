import type { Metadata } from 'next';
import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { ConditionIcon } from '@/components/ConditionIcon';
import { StayRegionGroups } from '@/components/StayRegionGroups';
import { supabase } from '@/lib/supabase';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Stays',
  description:
    'Curated Japan stay profiles where practical details are easier to compare, including bath rules, luggage support, self-catering, pets, family needs, and English support.',
  path: '/stays',
});

export const revalidate = 3600;

interface PublishedStay {
  id: number;
  name: string;
  city: string | null;
  area: string | null;
  type: string | null;
  category_tags: string[] | null;
  short_description: string | null;
  best_for: string | null;
  caution_notes: string | null;
}

const STAY_CONDITIONS = [
  { href: '/stays/tattoo-friendly', icon: 'tattoo-friendly', label: 'Tattoo notes' },
  { href: '/stays/private-bath', icon: 'private-bath', label: 'Private bath' },
  { href: '/stays/luggage-friendly', icon: 'luggage-friendly', label: 'Luggage' },
  { href: '/stays/food-friendly', icon: 'food-friendly', label: 'Food needs' },
  { href: '/stays/family-friendly', icon: 'family-friendly', label: 'Family' },
  { href: '/stays/self-catering', icon: 'self-catering', label: 'Long stay' },
  { href: '/stays/access-friendly', icon: 'access-friendly', label: 'Access notes' },
  { href: '/stays/pet-friendly', icon: 'pet-friendly', label: 'Pets' },
];

async function getPublishedStays(): Promise<PublishedStay[]> {
  const { data, error } = await supabase
    .from('hotels')
    .select(
      'id, name, city, area, type, category_tags, short_description, best_for, caution_notes'
    )
    .eq('is_published', true)
    .order('published_at', { ascending: false, nullsFirst: false });

  if (error) {
    console.error('[stays] Supabase error:', error.message);
    return [];
  }

  return (data ?? []) as PublishedStay[];
}

export default async function StaysPage() {
  const stays = await getPublishedStays();

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
              Browse curated stays
            </p>
            <h1 className="text-[clamp(40px,7vw,88px)] font-medium leading-[0.96] tracking-[0] text-[var(--bsj-text)]">
              Stays
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-[var(--bsj-text-muted)]">
              Curated places in Japan where practical details are easier to compare.
              Start with all stays, or jump to the condition that matters most for your trip.
            </p>

            <nav
              aria-label="Browse stay conditions"
              className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:max-w-4xl"
            >
              {STAY_CONDITIONS.map((condition) => (
                <Link
                  key={condition.href}
                  href={condition.href}
                  className="group flex min-h-[56px] items-center gap-3 rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-3 py-2 text-[var(--bsj-text)] no-underline transition-colors hover:border-[var(--bsj-primary)] hover:bg-[var(--bsj-primary)] hover:text-white active:border-[var(--bsj-primary)] active:bg-[var(--bsj-primary)] active:text-white focus:outline-none focus-visible:border-[var(--bsj-primary)] focus-visible:bg-[var(--bsj-primary)] focus-visible:text-white"
                >
                  <ConditionIcon name={condition.icon} width={24} height={24} />
                  <span className="text-[12px] font-semibold leading-[1.25]">
                    {condition.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section
          className="px-6 py-16 md:py-20"
          style={{ backgroundColor: 'var(--bsj-bg-subtle)' }}
        >
          <div className="mx-auto max-w-[1180px]">
            <StayRegionGroups
              stays={stays}
              emptyTitle="No published stays are ready yet."
              emptyDescription="Published stay profiles will appear here once they are available."
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
