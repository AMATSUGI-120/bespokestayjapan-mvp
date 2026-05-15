import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { ConditionTag } from '@/components/ConditionTag';
import StayBookingCta from '@/components/StayBookingCta';
import CheckAvailability from '@/components/CheckAvailability';
import { supabase } from '@/lib/supabase';
import { formatCategoryTagLabel, getCategoryTagHref } from '@/lib/category-tags';

export const dynamic = 'force-dynamic';

interface StayDetail {
  id: number;
  name: string;
  liteapi_id: string;
  city: string | null;
  area: string | null;
  type: string | null;
  photo_urls: string[] | null;
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
    liteapi_id: string;
  }>;
}

function cleanText(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : null;
}

function buildRegion(stay: StayDetail): string {
  return [stay.area, stay.city].filter(Boolean).join(', ');
}

function buildTags(tags: string[] | null): Array<{ label: string; href: string | null }> {
  return (tags ?? [])
    .filter((tag): tag is string => typeof tag === 'string' && tag.trim().length > 0)
    .map((tag) => ({
      label: formatCategoryTagLabel(tag),
      href: getCategoryTagHref(tag),
    }));
}

function parseSources(sourceUrls: string | null): string[] {
  return (sourceUrls ?? '')
    .split(/\s*\|\s*|\n+/)
    .map((url) => url.trim())
    .filter((url) => url.length > 0);
}

async function getStay(liteapiId: string): Promise<StayDetail | null> {
  const { data, error } = await supabase
    .from('hotels')
    .select(
      [
        'id',
        'name',
        'liteapi_id',
        'city',
        'area',
        'type',
        'photo_urls',
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
      ].join(', ')
    )
    .eq('liteapi_id', liteapiId)
    .eq('is_published', true)
    .not('photo_urls', 'is', null)
    .maybeSingle();

  if (error) {
    console.error('[stay-detail] Supabase error:', error.message);
    return null;
  }

  return (data as unknown as StayDetail | null) ?? null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { liteapi_id: liteapiId } = await params;
  const stay = await getStay(liteapiId);

  if (!stay) {
    return {
      title: 'Stay not found | Bespoke Stay Japan',
    };
  }

  return {
    title: `${stay.name} | Bespoke Stay Japan`,
    description:
      cleanText(stay.short_description) ??
      cleanText(stay.best_for) ??
      'A curated Japan stay with practical condition notes.',
  };
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

export default async function StayDetailPage({ params }: PageProps) {
  const { liteapi_id: liteapiId } = await params;
  const stay = await getStay(liteapiId);

  if (!stay) {
    notFound();
  }

  const photos = Array.isArray(stay.photo_urls)
    ? (stay.photo_urls as string[]).filter((p) => typeof p === 'string' && p.length > 0)
    : [];
  const tags = buildTags(stay.category_tags);
  const region = buildRegion(stay);
  const sources = parseSources(stay.source_urls);
  const shortDescription = cleanText(stay.short_description);
  const bestFor = cleanText(stay.best_for);

  return (
    <>
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

            <div className="mt-8 grid grid-cols-1 gap-9 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:gap-14">
              {photos.length > 0 && (
                <div>
                  <img
                    src={photos[0]}
                    alt={`${stay.name} in ${region || 'Japan'}`}
                    className="block aspect-[4/3] w-full rounded-[6px] object-cover lg:aspect-[5/4]"
                  />
                </div>
              )}

              <div className="flex flex-col justify-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                  {stay.type ?? 'Stay'}
                </p>
                <h1 className="mt-5 text-[clamp(38px,6vw,76px)] font-medium leading-[0.98] tracking-[0] text-[var(--bsj-text)]">
                  {stay.name}
                </h1>
                {region && (
                  <p className="mt-5 text-sm leading-[1.7] text-[var(--bsj-text-muted)]">
                    {region}
                  </p>
                )}

                {tags.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-1.5">
                    {tags.slice(0, 6).map((tag) => (
                      <ConditionTag key={tag.label} label={tag.label} href={tag.href} />
                    ))}
                  </div>
                )}

                {(shortDescription || bestFor) && (
                  <p className="mt-8 max-w-xl text-[16px] leading-[1.85] text-[var(--bsj-text-muted)]">
                    {shortDescription ?? bestFor}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {photos.length > 1 && (
          <section className="bg-[var(--bsj-bg)] px-6 pb-16">
            <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-4 md:grid-cols-4">
              {photos.slice(1, 5).map((photo, index) => (
                <img
                  key={`${photo}-${index}`}
                  src={photo}
                  alt={`${stay.name} gallery image ${index + 2}`}
                  className="block aspect-[4/3] w-full rounded-[6px] object-cover"
                />
              ))}
            </div>
          </section>
        )}

        <section className="bg-[var(--bsj-bg)] px-6 pb-10">
          <div className="mx-auto max-w-[1180px]">
            <CheckAvailability
              liteapiId={stay.liteapi_id}
              hotelName={stay.name}
              bookingUrl={stay.booking_url}
            />
          </div>
        </section>

        <section className="bg-[var(--bsj-bg-subtle)] px-6 py-16 md:py-20">
          <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.68fr)_minmax(260px,0.32fr)]">
            <div>
              <TextSection title="Key highlights" value={stay.key_highlights} />
              <TextSection title="Best for" value={stay.best_for} />
              <TextSection title="Condition details" value={stay.condition_details} />
              <TextSection title="Access" value={stay.access_summary} />
              <TextSection title="Luggage" value={stay.luggage_summary} />
              <TextSection title="Kitchen" value={stay.kitchen_summary} />
              <TextSection title="Bath" value={stay.bath_summary} />
              <TextSection title="English support" value={stay.english_support_summary} />
              <TextSection title="Rules" value={stay.rules_summary} />

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
                {cleanText(stay.caution_notes) && (
                  <div className="border-b border-[var(--bsj-border)] pb-6">
                    <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                      Good to know before booking
                    </h2>
                    <p className="mt-4 text-sm leading-[1.75] text-[var(--bsj-text-muted)]">
                      {stay.caution_notes}
                    </p>
                  </div>
                )}

                <StayBookingCta
                  bookingUrl={stay.booking_url}
                  liteapiId={stay.liteapi_id}
                  className="mt-6"
                />

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--bsj-text-light)]">
                  Ref {stay.liteapi_id}
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
