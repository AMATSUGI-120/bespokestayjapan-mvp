import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { StayRegionGroups } from '@/components/StayRegionGroups';
import { supabase } from '@/lib/supabase';
import {
  formatCategoryTagLabel,
  getCategoryTagQueryValues,
} from '@/lib/category-tags';
import { buildPageMetadata } from '@/lib/seo';

export interface StayCategoryConfig {
  title: string;
  eyebrow?: string;
  description: string;
  tags: string[];
  path?: string;
}

interface CategoryStay {
  id: number;
  name: string;
  city: string | null;
  area: string | null;
  type: string | null;
  category_tags: string[] | null;
  short_description: string | null;
  best_for: string | null;
  caution_notes: string | null;
  published_at: string | null;
  updated_at: string | null;
}

export function buildCategoryMetadata(config: StayCategoryConfig): Metadata {
  return buildPageMetadata({
    title: config.title,
    description: config.description,
    path: config.path ?? '/stays',
  });
}

function sortByPublishedThenUpdated(a: CategoryStay, b: CategoryStay): number {
  const aDate = Date.parse(a.published_at ?? a.updated_at ?? '');
  const bDate = Date.parse(b.published_at ?? b.updated_at ?? '');

  if (Number.isNaN(aDate) && Number.isNaN(bDate)) return 0;
  if (Number.isNaN(aDate)) return 1;
  if (Number.isNaN(bDate)) return -1;
  return bDate - aDate;
}

async function getStaysForTag(tag: string): Promise<CategoryStay[]> {
  const { data, error } = await supabase
    .from('hotels')
    .select(
      'id, name, city, area, type, category_tags, short_description, best_for, caution_notes, published_at, updated_at'
    )
    .eq('is_published', true)
    .contains('category_tags', [tag])
    .order('published_at', { ascending: false, nullsFirst: false });

  if (error) {
    console.error(`[category-stays] Supabase error for ${tag}:`, error.message);
    return [];
  }

  return (data ?? []) as unknown as CategoryStay[];
}

async function getCategoryStays(tags: string[]): Promise<CategoryStay[]> {
  const queryTags = Array.from(new Set(tags.flatMap((tag) => getCategoryTagQueryValues(tag))));
  const results = await Promise.all(queryTags.map((tag) => getStaysForTag(tag)));
  const unique = new Map<number, CategoryStay>();

  for (const stay of results.flat()) {
    unique.set(stay.id, stay);
  }

  return Array.from(unique.values()).sort(sortByPublishedThenUpdated);
}

export async function CategoryStayPage({
  config,
}: {
  config: StayCategoryConfig;
}) {
  const stays = await getCategoryStays(config.tags);

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
              {config.eyebrow ?? 'Browse by condition'}
            </p>
            <h1 className="max-w-4xl text-[clamp(40px,7vw,84px)] font-medium leading-[0.98] tracking-[0] text-[var(--bsj-text)]">
              {config.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-[var(--bsj-text-muted)]">
              {config.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-1.5">
              {config.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[3px] border border-[var(--bsj-border)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-muted)]"
                >
                  {formatCategoryTagLabel(tag)}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section
          className="px-6 py-16 md:py-20"
          style={{ backgroundColor: 'var(--bsj-bg-subtle)' }}
        >
          <div className="mx-auto max-w-[1180px]">
            <StayRegionGroups
              stays={stays}
              emptyTitle="No published stays yet for this condition."
              emptyDescription="Published stay profiles will appear here once they are available."
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

export default CategoryStayPage;
