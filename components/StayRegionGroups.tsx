import { PropertyCard } from '@/components/PropertyCard';
import type { ConditionTagVariant } from '@/components/ConditionTag';
import type { VerificationVariant } from '@/components/VerificationBadge';
import {
  formatCategoryTagLabel,
  getCategoryTagHref,
  normalizeCategoryTags,
} from '@/lib/category-tags';
import { getHotelProfileHref } from '@/lib/hotel-slug';

export interface StayRegionItem {
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

interface StayRegionGroupsProps {
  stays: StayRegionItem[];
  emptyTitle: string;
  emptyDescription: string;
}

interface StayRegionGroup {
  label: string;
  id: string;
  stays: StayRegionItem[];
}

const REGION_PRIORITY = [
  'Kyoto',
  'Osaka',
  'Nara',
  'Kobe',
  'Tokyo',
  'Hakone',
  'Yokohama',
  'Fukuoka',
  'Sapporo',
  'Okinawa',
  'Other areas',
];

function cleanText(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : null;
}

function buildRegion(stay: StayRegionItem): string {
  return [stay.area, stay.city].filter(Boolean).join(', ');
}

function buildRegionGroupLabel(stay: StayRegionItem): string {
  return cleanText(stay.city) ?? cleanText(stay.area) ?? 'Other areas';
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

function buildEditorialNote(stay: StayRegionItem): string {
  if (stay.short_description) return stay.short_description;
  if (stay.best_for) return stay.best_for;
  return 'A published stay selected for practical travel conditions in Japan.';
}

function slugifyRegion(label: string): string {
  const slug = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return slug.length > 0 ? slug : 'other-areas';
}

function sortRegionLabels(a: string, b: string): number {
  const aIndex = REGION_PRIORITY.indexOf(a);
  const bIndex = REGION_PRIORITY.indexOf(b);

  if (aIndex !== -1 || bIndex !== -1) {
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  }

  return a.localeCompare(b);
}

function groupStaysByRegion(stays: StayRegionItem[]): StayRegionGroup[] {
  const groups = new Map<string, StayRegionItem[]>();

  for (const stay of stays) {
    const label = buildRegionGroupLabel(stay);
    groups.set(label, [...(groups.get(label) ?? []), stay]);
  }

  return Array.from(groups.entries())
    .sort(([a], [b]) => sortRegionLabels(a, b))
    .map(([label, groupStays]) => ({
      label,
      id: `region-${slugifyRegion(label)}`,
      stays: groupStays,
    }));
}

function RegionNavLink({
  href,
  label,
  count,
}: {
  href: string;
  label: string;
  count?: number;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-9 shrink-0 items-center gap-2 rounded-[3px] border border-[var(--bsj-border)] bg-[var(--bsj-bg)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-muted)] no-underline transition-colors hover:border-[var(--bsj-border-strong)] hover:text-[var(--bsj-text)]"
    >
      <span>{label}</span>
      {typeof count === 'number' ? (
        <span className="text-[10px] text-[var(--bsj-text-light)]">{count}</span>
      ) : null}
    </a>
  );
}

export function StayRegionGroups({
  stays,
  emptyTitle,
  emptyDescription,
}: StayRegionGroupsProps) {
  const groups = groupStaysByRegion(stays);

  if (stays.length === 0) {
    return (
      <div className="border-t border-[var(--bsj-border)] py-16 text-center">
        <p className="text-xl font-medium text-[var(--bsj-text)]">{emptyTitle}</p>
        <p className="mt-3 text-sm leading-[1.7] text-[var(--bsj-text-muted)]">
          {emptyDescription}
        </p>
      </div>
    );
  }

  return (
    <div id="stay-regions">
      <div className="mb-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
          {stays.length} published stay{stays.length > 1 ? 's' : ''} across{' '}
          {groups.length} region{groups.length > 1 ? 's' : ''}
        </p>
        <nav
          aria-label="Browse stays by region"
          className="-mx-6 mt-5 overflow-x-auto px-6 [scrollbar-width:none] md:mx-0 md:px-0"
        >
          <div className="flex min-w-max gap-2">
            <RegionNavLink href="#stay-regions" label="All" count={stays.length} />
            {groups.map((group) => (
              <RegionNavLink
                key={group.id}
                href={`#${group.id}`}
                label={group.label}
                count={group.stays.length}
              />
            ))}
          </div>
        </nav>
      </div>

      <div className="space-y-14">
        {groups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            className="scroll-mt-24 border-t border-[var(--bsj-border)] pt-8"
          >
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                  Region
                </p>
                <h2 className="mt-2 text-[28px] font-medium tracking-[0] text-[var(--bsj-text)]">
                  {group.label}
                </h2>
              </div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--bsj-text-light)]">
                {group.stays.length} stay{group.stays.length > 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {group.stays.map((stay) => (
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
          </section>
        ))}
      </div>
    </div>
  );
}

export default StayRegionGroups;
