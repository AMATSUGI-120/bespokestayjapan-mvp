import type { CSSProperties } from 'react';
import { ConditionIcon } from './ConditionIcon';

export interface HeroSectionProps {
  className?: string;
}

const sectionStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg)',
  padding: '56px 24px 72px',
};

const textColStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  minWidth: 0,
};

const eyebrowStyle: CSSProperties = {
  color: 'var(--bsj-secondary)',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.18em',
  lineHeight: 1.4,
  textTransform: 'uppercase',
  marginBottom: '24px',
};

const headlineStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  fontSize: 'clamp(42px, 7vw, 92px)',
  fontWeight: 600,
  lineHeight: 0.98,
  letterSpacing: '0',
  maxWidth: '900px',
};

const subtextStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '16px',
  lineHeight: 1.8,
  marginTop: '24px',
  maxWidth: '720px',
};

const primaryCtaStyle: CSSProperties = {
  borderRadius: '4px',
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.06em',
  padding: '12px 22px',
  textDecoration: 'none',
  textTransform: 'uppercase',
};

const secondaryCtaStyle: CSSProperties = {
  fontSize: '13px',
  fontWeight: 600,
  textDecoration: 'none',
};

const KEY_CONDITIONS = [
  { id: 'tattoo-friendly', label: 'Tattoo notes' },
  { id: 'food-friendly', label: 'Food needs' },
  { id: 'luggage-friendly', label: 'Luggage' },
  { id: 'private-bath', label: 'Private bath' },
  { id: 'family-friendly', label: 'Family stays' },
  { id: 'self-catering', label: 'Long stay' },
];

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={['', className].filter(Boolean).join(' ')}
      style={sectionStyle}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: '1040px' }}
      >
        <div style={textColStyle}>
          <p style={eyebrowStyle}>Researched Japan stay guide</p>

          <h1 style={headlineStyle}>
            Japan stays that<br className="hidden sm:block" />
            fit real travel<br className="hidden sm:block" />
            needs.
          </h1>

          <p style={subtextStyle}>
            Tattoo notes, food restrictions, luggage support, private baths,
            family stays, pets, and long-stay comfort. Researched from Japanese
            sources and hotel policies, with the details to confirm before booking.
          </p>

          <div className="mt-8 grid max-w-[760px] grid-cols-2 gap-2 sm:grid-cols-3">
            {KEY_CONDITIONS.map((condition) => (
              <a
                key={condition.id}
                href={`/stays/${condition.id === 'private-villa' ? 'private-villas' : condition.id}`}
                className="group flex min-h-[54px] items-center gap-3 rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-3 py-2 text-[var(--bsj-text)] no-underline transition-colors hover:border-[var(--bsj-primary)] hover:bg-[var(--bsj-primary)] hover:text-white active:border-[var(--bsj-primary)] active:bg-[var(--bsj-primary)] active:text-white focus:outline-none focus-visible:border-[var(--bsj-primary)] focus-visible:bg-[var(--bsj-primary)] focus-visible:text-white"
              >
                <ConditionIcon name={condition.id} width={25} height={25} />
                <span className="text-[12px] font-semibold leading-[1.25] tracking-[0.02em]">
                  {condition.label}
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-9">
            <a
              href="/guides"
              style={primaryCtaStyle}
              className="bg-[var(--bsj-primary)] text-white transition-colors hover:bg-[var(--bsj-primary-hover)] active:bg-[var(--bsj-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bsj-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bsj-bg)]"
            >
              Start with guides
            </a>
            <a
              href="#conditions"
              style={secondaryCtaStyle}
              className="rounded-[3px] px-1 py-2 text-[var(--bsj-primary)] transition-colors hover:bg-[var(--bsj-bg-subtle)] hover:text-[var(--bsj-primary-hover)] hover:underline active:bg-[var(--bsj-border)] focus:outline-none focus-visible:bg-[var(--bsj-bg-subtle)] focus-visible:underline"
            >
              Browse stay conditions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
