import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
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
            </p>
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
