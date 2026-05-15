import type { CSSProperties } from 'react';

export interface HeroSectionProps {
  imageUrl?: string | null;
  imageAlt?: string;
  className?: string;
}

const sectionStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg)',
  padding: '56px 24px 72px',
};

/* Image column — dominant, left side on desktop */
const imgWrapperStyle: CSSProperties = {
  borderRadius: '6px',
  overflow: 'hidden',
  minHeight: '360px',
  flexShrink: 0,
};

const imgStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

/* Placeholder when no image */
const placeholderStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  minHeight: '420px',
  backgroundColor: 'var(--bsj-bg-card)',
  border: '1px solid var(--bsj-border)',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  textAlign: 'center',
  padding: '32px',
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
  fontSize: 'clamp(36px, 5.6vw, 76px)',
  fontWeight: 600,
  lineHeight: 0.98,
  letterSpacing: '0',
};

const subtextStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '16px',
  lineHeight: 1.8,
  marginTop: '28px',
  maxWidth: '500px',
};

const primaryCtaStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-primary)',
  borderRadius: '4px',
  color: 'white',
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.06em',
  padding: '12px 22px',
  textDecoration: 'none',
  textTransform: 'uppercase',
};

const secondaryCtaStyle: CSSProperties = {
  color: 'var(--bsj-primary)',
  fontSize: '13px',
  fontWeight: 600,
  textDecoration: 'none',
};

const placeholderTextStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '13px',
  fontWeight: 600,
};

const placeholderNoteStyle: CSSProperties = {
  color: 'var(--bsj-text-light)',
  fontSize: '11px',
  lineHeight: 1.5,
  maxWidth: '180px',
};

export function HeroSection({ imageUrl, imageAlt, className }: HeroSectionProps) {
  return (
    <section
      className={['', className].filter(Boolean).join(' ')}
      style={sectionStyle}
    >
      <div
        className="mx-auto flex flex-col lg:flex-row items-stretch gap-9 lg:gap-16"
        style={{ maxWidth: '1280px' }}
      >
        {/* Left: real hotel image — dominant */}
        <div
          className="w-full lg:w-[62%] aspect-[4/3] lg:aspect-auto lg:min-h-[560px]"
          style={imgWrapperStyle}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={imageAlt ?? 'A Japan stay — hotel or ryokan interior'}
              style={imgStyle}
            />
          ) : (
            /* TODO: Replace with owned/licensed stay photography once photo seeding is live */
            <div style={placeholderStyle}>
              <svg
                width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="var(--bsj-border-strong)" strokeWidth="1.25"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <p style={placeholderTextStyle}>Stay photography coming soon</p>
              <p style={placeholderNoteStyle}>
                Hero image will be replaced with licensed stay photography
              </p>
            </div>
          )}
        </div>

        {/* Right: editorial copy — no background box */}
        <div className="lg:pl-4" style={textColStyle}>
          <p style={eyebrowStyle}>Curated Japan stays</p>

          <h1 style={headlineStyle}>
            Stay where the<br className="hidden sm:block" />
            details already<br className="hidden sm:block" />
            make sense.
          </h1>

          <p style={subtextStyle}>
            Bespoke Stay Japan curates properties around the conditions that shape a trip:
            pet policies, tattoo-related bath rules, luggage access, private stays, and
            food-restriction-friendly areas.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-9">
            <a href="#stays" style={primaryCtaStyle}>
              Browse conditions
            </a>
            <a href="#ask" style={secondaryCtaStyle}>
              Ask for a stay match
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
