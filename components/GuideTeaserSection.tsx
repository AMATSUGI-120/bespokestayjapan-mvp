import Link from 'next/link';
import type { CSSProperties } from 'react';
import { guidePages, type GuidePageContent } from '@/lib/guide-content';

export interface GuideTeaserSectionProps {
  className?: string;
}

const featuredGuideKeys = [
  'tattoo-friendly-stays-kansai',
  'private-bath-stays-kansai',
  'shinkansen-oversized-luggage-guide',
  'dietary-restrictions-japan',
] as const;

const sectionStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg-card)',
  borderTop: '1px solid var(--bsj-border)',
  padding: '88px 24px',
};

const eyebrowStyle: CSSProperties = {
  color: 'var(--bsj-text-light)',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.16em',
  lineHeight: 1.4,
  textTransform: 'uppercase',
};

const headingStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  fontSize: 'clamp(28px, 4vw, 44px)',
  fontWeight: 500,
  letterSpacing: '0',
  lineHeight: 1.08,
  marginTop: '6px',
  maxWidth: '680px',
};

const subtextStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '15px',
  lineHeight: 1.75,
  marginTop: '16px',
  maxWidth: '590px',
};

function getFeaturedGuides(): GuidePageContent[] {
  return featuredGuideKeys.map((key) => guidePages[key]);
}

export function GuideTeaserSection({ className }: GuideTeaserSectionProps) {
  const guides = getFeaturedGuides();

  return (
    <section className={className} style={sectionStyle}>
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p style={eyebrowStyle}>Travel planning guides</p>
            <h2 style={headingStyle}>Read the practical notes before comparing stays</h2>
            <p style={subtextStyle}>
              Short guides for the questions that often decide where to stay: baths,
              tattoos, luggage, food, ryokan rules, and transport basics.
            </p>
          </div>
          <Link
            href="/guides"
            className="inline-flex min-h-10 w-fit items-center border border-[var(--bsj-border-strong)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)]"
          >
            Browse all guides
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-[var(--bsj-border)] bg-[var(--bsj-border)] md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.path}
              href={guide.path}
              className="group bg-[var(--bsj-bg-card)] p-6 text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg)] md:p-7"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                {guide.eyebrow}
              </p>
              <h3 className="mt-4 text-[22px] font-medium leading-[1.2] tracking-[0] text-[var(--bsj-text)] group-hover:underline">
                {guide.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                {guide.description}
              </p>
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--bsj-text)]">
                Read guide →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuideTeaserSection;

