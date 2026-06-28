import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { PropertyCard } from '@/components/PropertyCard';
import type { ConditionTagVariant } from '@/components/ConditionTag';
import type { VerificationVariant } from '@/components/VerificationBadge';
import { supabase } from '@/lib/supabase';
import { formatCategoryTagLabel, getCategoryTagHref, normalizeCategoryTags } from '@/lib/category-tags';
import { getHotelProfileHref } from '@/lib/hotel-slug';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Stays',
  description:
    'Curated Japan stay profiles where practical details are easier to compare, including bath rules, luggage support, self-catering, pets, family needs, and English support.',
  path: '/stays',
});

export const dynamic = 'force-dynamic';

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

interface StayCardTag {
  label: string;
  variant?: ConditionTagVariant;
  href?: string | null;
}

function buildRegion(stay: PublishedStay): string {
  return [stay.area, stay.city].filter(Boolean).join(', ');
}

function buildTags(tags: string[] | null): StayCardTag[] {
  return normalizeCategoryTags(tags)
    .slice(0, 3)
    .map((tag) => ({
      label: formatCategoryTagLabel(tag),
      variant: 'facility' as ConditionTagVariant,
      href: getCategoryTagHref(tag),
    }));
}

function buildEditorialNote(stay: PublishedStay): string {
  if (stay.short_description) return stay.short_description;
  if (stay.best_for) return stay.best_for;
  return 'A published stay selected for practical travel conditions in Japan.';
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
            {stays.length > 0 ? (
              <>
                <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                  {stays.length} published stay{stays.length > 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {stays.map((stay) => (
                    <PropertyCard
                      key={stay.id}
                      stayType={stay.type ?? 'Stay'}
                      verificationVariant={'source-backed' as VerificationVariant}
                      name={stay.name}
                      region={buildRegion(stay)}
                      tags={buildTags(stay.category_tags)}
                      editorialNote={buildEditorialNote(stay)}
                      bestFor={stay.best_for}
                      goodToKnow={stay.caution_notes}
                      ctaHref={getHotelProfileHref(stay)}
                      ctaLabel="Read stay note"
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="border-t border-[var(--bsj-border)] py-16 text-center">
                <p className="text-xl font-medium text-[var(--bsj-text)]">
                  No published stays are ready yet.
                </p>
                <p className="mt-3 text-sm leading-[1.7] text-[var(--bsj-text-muted)]">
                  Published stay profiles will appear here once they are available.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
