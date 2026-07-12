import Link from 'next/link';
import type { CSSProperties } from 'react';
import { guidePages, type GuidePageContent } from '@/lib/guide-content';
import { ConditionIcon } from './ConditionIcon';

export interface GuideTeaserSectionProps {
  className?: string;
}

const featuredGuideGroups = [
  {
    icon: 'tattoo-friendly',
    label: 'Tattoo & baths',
    guide: guidePages['japan-onsen-etiquette-guide'],
    links: [
      guidePages['tattoo-friendly-stays-kansai'],
      guidePages['private-bath-stays-kansai'],
    ],
  },
  {
    icon: 'luggage-friendly',
    label: 'Luggage & trains',
    guide: guidePages['japan-train-etiquette-guide'],
    links: [
      guidePages['japan-luggage-delivery-guide'],
      guidePages['shinkansen-oversized-luggage-guide'],
    ],
  },
  {
    icon: 'food-friendly',
    label: 'Food & meals',
    guide: guidePages['japan-restaurant-etiquette-guide'],
    links: [
      guidePages['dietary-restrictions-japan'],
      guidePages['ryokan-stay-guide'],
    ],
  },
  {
    icon: 'luggage-friendly',
    label: 'Tours & transfers',
    guide: guidePages['japan-private-tours-transfers-guide'],
    links: [
      guidePages['kansai-day-trips-practical-guide'],
      guidePages['japan-airport-arrival-transfer-guide'],
    ],
  },
  {
    icon: 'access-friendly',
    label: 'Local basics',
    guide: guidePages['japan-family-activity-planning-guide'],
    links: [
      guidePages['japan-theme-park-attraction-guide'],
      guidePages['japan-cultural-workshop-guide'],
    ],
  },
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

export function GuideTeaserSection({ className }: GuideTeaserSectionProps) {
  return (
    <section className={className} style={sectionStyle}>
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p style={eyebrowStyle}>Travel planning guides</p>
            <h2 style={headingStyle}>Start with the detail that could change your stay</h2>
            <p style={subtextStyle}>
              BSJ guides translate practical Japan travel constraints into clear
              pre-booking checks: baths, tattoos, luggage, food, transport, and local
              manners.
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
          {featuredGuideGroups.map((group) => (
            <Link
              key={group.label}
              href={group.guide.path}
              className="group bg-[var(--bsj-bg-card)] p-6 text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg)] md:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--bsj-border)] bg-[var(--bsj-bg-subtle)] text-[var(--bsj-text)] transition-colors group-hover:border-[var(--bsj-primary-hover)] group-hover:bg-[var(--bsj-primary-hover)] group-hover:text-white">
                  <ConditionIcon name={group.icon} width={24} height={24} />
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
                  {group.label}
                </p>
              </div>
              <h3 className="mt-4 text-[22px] font-medium leading-[1.2] tracking-[0] text-[var(--bsj-text)] group-hover:underline">
                {group.guide.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                {group.guide.description}
              </p>
              <div className="mt-6 border-t border-[var(--bsj-border)] pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                  Also useful
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.links.map((guide: GuidePageContent) => (
                    <span
                      key={guide.path}
                      className="border border-[var(--bsj-border)] px-2.5 py-1 text-[11px] leading-[1.4] text-[var(--bsj-text-muted)]"
                    >
                      {guide.title}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--bsj-text)]">
                Start here →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuideTeaserSection;
