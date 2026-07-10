import type { CSSProperties } from 'react';
import { ConditionIcon } from './ConditionIcon';

export interface HeroSectionProps {
  className?: string;
}

const sectionStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg)',
  padding: '48px 24px 72px',
};

const guidePanelStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg-subtle)',
  border: '1px solid var(--bsj-border)',
  borderRadius: '6px',
  display: 'grid',
  gap: '1px',
  overflow: 'hidden',
};

/* Text column */
const textColStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '1 1 0',
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
  fontSize: 'clamp(38px, 6vw, 82px)',
  fontWeight: 600,
  lineHeight: 0.98,
  letterSpacing: '0',
};

const subtextStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '16px',
  lineHeight: 1.8,
  marginTop: '24px',
  maxWidth: '560px',
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

const guideTileStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg)',
  minHeight: '150px',
  padding: '22px',
};

const guideCodeStyle: CSSProperties = {
  color: 'var(--bsj-text-light)',
  display: 'block',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.12em',
  lineHeight: 1.4,
  textTransform: 'uppercase',
};

const guideTitleStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  fontSize: '17px',
  fontWeight: 500,
  lineHeight: 1.35,
  marginTop: '20px',
};

const guideTextStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '12px',
  lineHeight: 1.65,
  marginTop: '8px',
};

const GUIDE_TILES = [
  {
    code: 'TAT',
    title: 'Bath rules',
    text: 'Tattoo notes, private bath options, and what still needs direct confirmation.',
  },
  {
    code: 'BAG',
    title: 'Luggage flow',
    text: 'Station proximity, storage, delivery timing, and large-bag practicality.',
  },
  {
    code: 'FOOD',
    title: 'Diet needs',
    text: 'Food restriction notes, breakfast caveats, and nearby area suitability.',
  },
  {
    code: 'LONG',
    title: 'Longer stays',
    text: 'Kitchen, laundry, room layout, and everyday comfort for slower travel.',
  },
];

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
        className="mx-auto flex flex-col lg:flex-row items-stretch gap-9 lg:gap-16"
        style={{ maxWidth: '1280px' }}
      >
        <div className="w-full lg:w-[52%]" style={guidePanelStyle}>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {GUIDE_TILES.map((tile) => (
              <div key={tile.code} style={guideTileStyle}>
                <span style={guideCodeStyle}>{tile.code}</span>
                <p style={guideTitleStyle}>{tile.title}</p>
                <p style={guideTextStyle}>{tile.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:pl-4" style={textColStyle}>
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

          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
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
