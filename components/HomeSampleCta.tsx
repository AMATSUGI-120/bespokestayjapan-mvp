import type { CSSProperties } from 'react';
import TrackedAnalyticsLink from './TrackedAnalyticsLink';

const sectionStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg-subtle)',
  borderTop: '1px solid var(--bsj-border)',
  padding: '34px 24px',
};

const innerStyle: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  gap: '24px',
  justifyContent: 'space-between',
  margin: '0 auto',
  maxWidth: '1040px',
};

const eyebrowStyle: CSSProperties = {
  color: 'var(--bsj-text-light)',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.16em',
  lineHeight: 1.4,
  textTransform: 'uppercase',
};

const textStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '14px',
  lineHeight: 1.75,
  marginTop: '8px',
  maxWidth: '640px',
};

export default function HomeSampleCta() {
  return (
    <section style={sectionStyle}>
      <div className="flex-col md:flex-row md:items-center" style={innerStyle}>
        <div>
          <p style={eyebrowStyle}>Free planning samples</p>
          <p style={textStyle}>
            Not ready to choose a stay yet? Start with the free checklist and
            practical templates for baths, luggage, food needs, and hotel questions.
          </p>
        </div>

        <TrackedAnalyticsLink
          href="/free-japan-travel-samples"
          className="inline-flex min-h-11 shrink-0 items-center justify-center border border-[var(--bsj-border-strong)] px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-text)] hover:text-[var(--bsj-bg)] active:bg-[var(--bsj-primary)] active:text-white"
          tracking={{
            event: 'product_teaser',
            sourcePath: '/',
            productKey: 'free_japan_travel_samples',
            ctaLabel: 'Browse free samples',
            ctaHref: '/free-japan-travel-samples',
          }}
        >
          Browse free samples
        </TrackedAnalyticsLink>
      </div>
    </section>
  );
}
