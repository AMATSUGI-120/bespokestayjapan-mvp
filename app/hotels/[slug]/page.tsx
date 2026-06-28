import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { ConditionTag } from '@/components/ConditionTag';
import ExternalSourceLink from '@/components/ExternalSourceLink';
import HotelDetailViewTracker from '@/components/HotelDetailViewTracker';
import { guidePages, type GuideLink } from '@/lib/guide-content';
import { supabase } from '@/lib/supabase';
import { formatCategoryTagLabel, getCategoryTagHref, normalizeCategoryTags } from '@/lib/category-tags';
import { createHotelSlug } from '@/lib/hotel-slug';
import { getProduct, type Product, type ProductKey } from '@/lib/products';
import { buildPageMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

interface StayDetail {
  id: number;
  name: string;
  city: string | null;
  area: string | null;
  type: string | null;
  category_tags: string[] | null;
  short_description: string | null;
  key_highlights: string | null;
  best_for: string | null;
  condition_details: string | null;
  access_summary: string | null;
  luggage_summary: string | null;
  kitchen_summary: string | null;
  bath_summary: string | null;
  english_support_summary: string | null;
  rules_summary: string | null;
  verified_notes: string | null;
  caution_notes: string | null;
  source_urls: string | null;
  booking_url: string | null;
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const DETAIL_SELECT = [
  'id',
  'name',
  'city',
  'area',
  'type',
  'category_tags',
  'short_description',
  'key_highlights',
  'best_for',
  'condition_details',
  'access_summary',
  'luggage_summary',
  'kitchen_summary',
  'bath_summary',
  'english_support_summary',
  'rules_summary',
  'verified_notes',
  'caution_notes',
  'source_urls',
  'booking_url',
].join(', ');

function cleanText(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : null;
}

function splitProfileTitle(name: string): { title: string; subtitle: string | null } {
  const [title, ...rest] = name.split(/\s+—\s+/);
  const cleanTitle = title?.trim() || name;
  const subtitle = rest.join(' — ').trim();

  return {
    title: cleanTitle,
    subtitle: subtitle.length > 0 ? subtitle : null,
  };
}

function firstSentence(value: string | null | undefined): string | null {
  const text = cleanText(value);
  if (!text) return null;

  const sentence = text.match(/^.*?(?:[.!?](?:\s|$)|$)/)?.[0]?.trim();
  return sentence && sentence.length > 0 ? sentence : text;
}

function firstSentences(value: string | null | undefined, maxSentences: number): string | null {
  const text = cleanText(value);
  if (!text) return null;

  const sentences = text.match(/[^.!?]+[.!?](?:\s|$)|[^.!?]+$/g)
    ?.map((sentence) => sentence.trim())
    .filter(Boolean);

  if (!sentences || sentences.length === 0) return text;

  return sentences.slice(0, maxSentences).join(' ');
}

function buildRegion(stay: StayDetail): string {
  return [stay.area, stay.city].filter(Boolean).join(', ');
}

function getNormalizedTags(tags: string[] | null): string[] {
  return normalizeCategoryTags(tags);
}

function buildTags(tags: string[]): Array<{ label: string; href: string | null }> {
  return tags
    .map((tag) => ({
      label: formatCategoryTagLabel(tag),
      href: getCategoryTagHref(tag),
    }));
}

function pickRelatedProduct(tags: string[]): Product | null {
  const tagSet = new Set(tags);
  let productKey: ProductKey | null = null;

  if (tagSet.has('tattoo-friendly') || tagSet.has('tattoo-consideration')) {
    productKey = 'kansai-tattoo-friendly-stay-kit';
  } else if (tagSet.has('private-bath')) {
    productKey = 'kyoto-osaka-private-bath-stay-map';
  } else if (tagSet.has('food-friendly')) {
    productKey = 'japan-dietary-restriction-travel-kit';
  } else if (tagSet.has('luggage-friendly') || tagSet.has('access-friendly')) {
    productKey = 'japan-luggage-free-travel-kit';
  }

  return productKey ? getProduct(productKey) : null;
}

function getRelatedGuides(tags: string[]): GuideLink[] {
  const tagSet = new Set(tags);
  const guides: GuideLink[] = [];
  const addGuide = (key: keyof typeof guidePages, label?: string) => {
    const guide = guidePages[key];
    if (!guide || guides.some((item) => item.href === guide.path)) return;
    guides.push({ href: guide.path, label: label ?? guide.title });
  };

  if (tagSet.has('tattoo-friendly') || tagSet.has('tattoo-consideration')) {
    addGuide('tattoo-friendly-stays-kansai');
  }
  if (tagSet.has('private-bath')) {
    addGuide('private-bath-stays-kansai');
  }
  if (tagSet.has('luggage-friendly') || tagSet.has('access-friendly')) {
    addGuide('shinkansen-oversized-luggage-guide');
    addGuide('japan-luggage-delivery-guide');
  }
  if (tagSet.has('food-friendly') || tagSet.has('self-catering')) {
    addGuide('dietary-restrictions-japan');
  }

  return guides.slice(0, 4);
}

function parseSources(sourceUrls: string | null): string[] {
  return (sourceUrls ?? '')
    .split(/\s*\|\s*|\n+/)
    .map((url) => url.trim())
    .filter((url) => url.length > 0);
}

async function getStayBySlug(slug: string): Promise<StayDetail | null> {
  const { data, error } = await supabase
    .from('hotels')
    .select(DETAIL_SELECT)
    .eq('is_published', true)
    .order('published_at', { ascending: false, nullsFirst: false });

  if (error) {
    console.error('[hotel-detail] Supabase error:', error.message);
    return null;
  }

  const stays = (data ?? []) as unknown as StayDetail[];

  return stays.find((stay) => createHotelSlug(stay.name, stay.city) === slug) ?? null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const stay = await getStayBySlug(slug);

  if (!stay) {
    return {
      title: 'Stay not found | Bespoke Stay Japan',
    };
  }

  const { title, subtitle } = splitProfileTitle(stay.name);
  const description =
    cleanText(stay.short_description) ??
    cleanText(stay.best_for) ??
    subtitle ??
    'A researched Japan stay profile with practical condition notes.';

  return buildPageMetadata({
    title,
    description:
      description.length > 160 ? `${description.slice(0, 157).trim()}...` : description,
    path: `/hotels/${slug}`,
  });
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[var(--bsj-border)] py-8">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
        {title}
      </h2>
      <div className="mt-4 text-[15px] leading-[1.85] text-[var(--bsj-text-muted)]">
        {children}
      </div>
    </section>
  );
}

function TextSection({
  title,
  value,
}: {
  title: string;
  value: string | null | undefined;
}) {
  const text = cleanText(value);
  if (!text) return null;

  return (
    <DetailSection title={title}>
      <p className="whitespace-pre-line">{text}</p>
    </DetailSection>
  );
}

export default async function HotelProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const stay = await getStayBySlug(slug);

  if (!stay) {
    notFound();
  }

  const normalizedTags = getNormalizedTags(stay.category_tags);
  const tags = buildTags(normalizedTags);
  const region = buildRegion(stay);
  const sources = parseSources(stay.source_urls);
  const shortDescription = cleanText(stay.short_description);
  const bestFor = cleanText(stay.best_for);
  const cautionNote = cleanText(stay.caution_notes);
  const cautionSummary = firstSentences(stay.caution_notes, 2);
  const verifiedNote = firstSentence(stay.verified_notes);
  const { title, subtitle } = splitProfileTitle(stay.name);
  const hotelId = String(stay.id);
  const relatedProduct = pickRelatedProduct(normalizedTags);
  const relatedGuides = getRelatedGuides(normalizedTags);

  return (
    <>
      <HotelDetailViewTracker hotelId={hotelId} hotelName={stay.name} city={stay.city} />
      <SiteNav />

      <main>
        <section className="bg-[var(--bsj-bg)] px-6 py-10 md:py-14">
          <div className="mx-auto max-w-[1280px]">
            <Link
              href="/stays"
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)] no-underline transition-colors hover:text-[var(--bsj-text)]"
            >
              Back to stays
            </Link>

            <div className="mt-8 grid grid-cols-1 gap-9 border-t border-[var(--bsj-border)] pt-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(260px,0.32fr)] lg:gap-14">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                  Researched stay profile
                </p>
                <h1 className="mt-5 max-w-4xl text-[clamp(38px,7vw,82px)] font-medium leading-[0.98] tracking-[0] text-[var(--bsj-text)]">
                  {title}
                </h1>
                {subtitle && (
                  <p className="mt-5 max-w-2xl text-[18px] leading-[1.55] text-[var(--bsj-text-muted)]">
                    {subtitle}
                  </p>
                )}
                {region && (
                  <p className="mt-5 text-sm leading-[1.7] text-[var(--bsj-text-muted)]">
                    {region}
                  </p>
                )}

                {(shortDescription || bestFor) && (
                  <p className="mt-8 max-w-xl text-[16px] leading-[1.85] text-[var(--bsj-text-muted)]">
                    {shortDescription ?? bestFor}
                  </p>
                )}
              </div>

              <aside className="border-t border-[var(--bsj-border)] pt-6 lg:border-t-0 lg:pt-2">
                <dl className="space-y-5">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
                      Stay type
                    </dt>
                    <dd className="mt-1 text-sm leading-[1.6] text-[var(--bsj-text-muted)]">
                      {stay.type ?? 'Stay'}
                    </dd>
                  </div>
                  {bestFor && (
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
                        Useful for
                      </dt>
                      <dd className="mt-1 text-sm leading-[1.6] text-[var(--bsj-text-muted)]">
                        {bestFor}
                      </dd>
                    </div>
                  )}
                  {verifiedNote && (
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
                        Verified notes
                      </dt>
                      <dd className="mt-1 text-sm leading-[1.6] text-[var(--bsj-text-muted)]">
                        {verifiedNote}
                      </dd>
                    </div>
                  )}
                  {cautionSummary && (
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
                        Good to know
                      </dt>
                      <dd className="mt-1 text-sm leading-[1.6] text-[var(--bsj-text-muted)]">
                        {cautionSummary}
                      </dd>
                    </div>
                  )}
                  {tags.length > 0 && (
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
                        Conditions
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-1.5">
                        {tags.slice(0, 6).map((tag) => (
                          <ConditionTag key={tag.label} label={tag.label} href={tag.href} />
                        ))}
                      </dd>
                    </div>
                  )}
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-[var(--bsj-bg-subtle)] px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.68fr)_minmax(260px,0.32fr)]">
            <div>
              <TextSection title="Condition details" value={stay.condition_details} />
              <TextSection title="Key highlights" value={stay.key_highlights} />
              <TextSection title="Best for" value={stay.best_for} />
              <TextSection title="Access" value={stay.access_summary} />
              <TextSection title="Luggage" value={stay.luggage_summary} />
              <TextSection title="Kitchen" value={stay.kitchen_summary} />
              <TextSection title="Bath" value={stay.bath_summary} />
              <TextSection title="English support" value={stay.english_support_summary} />
              <TextSection title="Rules" value={stay.rules_summary} />
              <TextSection title="Good to know" value={stay.caution_notes} />

              {cleanText(stay.verified_notes) && (
                <DetailSection title="Verified notes">
                  <div className="border-l border-[var(--bsj-border-strong)] pl-5">
                    <p className="whitespace-pre-line">{stay.verified_notes}</p>
                  </div>
                </DetailSection>
              )}

              {sources.length > 0 && (
                <DetailSection title="Sources">
                  <ul className="space-y-2">
                    {sources.map((source, index) => (
                      <li key={`${source}-${index}`}>
                        <a
                          href={source}
                          target="_blank"
                          rel="noreferrer"
                          className="break-words text-[var(--bsj-primary)] underline decoration-[var(--bsj-border-strong)] underline-offset-4 transition-colors hover:text-[var(--bsj-primary-hover)]"
                        >
                          {source}
                        </a>
                      </li>
                    ))}
                  </ul>
                </DetailSection>
              )}
            </div>

            <aside className="lg:pt-8">
              <div className="sticky top-8 border-t border-[var(--bsj-border)] py-6">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                  Source check
                </h2>
                <p className="mt-4 text-sm leading-[1.75] text-[var(--bsj-text-muted)]">
                  Use the source page to confirm current policies, room details, and
                  availability before relying on this profile.
                </p>

                <ExternalSourceLink
                  sourceUrl={stay.booking_url}
                  hotelId={hotelId}
                  className="mt-6"
                />

                {relatedProduct ? (
                  <div className="mt-8 border-t border-[var(--bsj-border)] pt-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                      Related planning kit
                    </p>
                    <h2 className="mt-3 text-[18px] font-medium leading-[1.25] text-[var(--bsj-text)]">
                      {relatedProduct.title}
                    </h2>
                    <p className="mt-3 text-sm leading-[1.75] text-[var(--bsj-text-muted)]">
                      {relatedProduct.description}
                    </p>
                    {relatedProduct.purchaseUrl ? (
                      <a
                        href={relatedProduct.purchaseUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex min-h-10 items-center border border-[var(--bsj-border-strong)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg)]"
                      >
                        {relatedProduct.ctaLabel}
                      </a>
                    ) : (
                      <p className="mt-4 text-[12px] leading-[1.7] text-[var(--bsj-text-light)]">
                        {relatedProduct.statusLabel}
                      </p>
                    )}
                  </div>
                ) : null}

                {relatedGuides.length > 0 ? (
                  <div className="mt-8 border-t border-[var(--bsj-border)] pt-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                      Related guides
                    </p>
                    <div className="mt-4 flex flex-col gap-3">
                      {relatedGuides.map((guide) => (
                        <Link
                          key={guide.href}
                          href={guide.href}
                          className="border-b border-[var(--bsj-border)] pb-3 text-sm leading-[1.5] text-[var(--bsj-text-muted)] no-underline transition-colors last:border-0 last:pb-0 hover:text-[var(--bsj-text)]"
                        >
                          {guide.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-8 border-t border-[var(--bsj-border)] pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                    Need help checking this stay?
                  </p>
                  <p className="mt-3 text-sm leading-[1.75] text-[var(--bsj-text-muted)]">
                    Custom stay research support may be added later for travelers who
                    need policy checks, Japanese source review, or a short list of
                    matching stays.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
