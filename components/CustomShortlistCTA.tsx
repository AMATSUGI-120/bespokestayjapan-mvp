import type { CSSProperties } from 'react';

export interface CustomShortlistCTAProps {
  id?: string;
  className?: string;
}

const sectionStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg)',
  borderTop: '1px solid var(--bsj-border)',
  padding: '72px 24px',
};

const innerStyle: CSSProperties = {
  maxWidth: '640px',
  margin: '0 auto',
};

const accentBarStyle: CSSProperties = {
  width: '32px',
  height: '3px',
  backgroundColor: 'var(--bsj-secondary)',
  borderRadius: '2px',
  marginBottom: '24px',
};

const headingStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  fontSize: '24px',
  fontWeight: 800,
  lineHeight: 1.3,
  letterSpacing: '-0.01em',
};

const bodyStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '15px',
  lineHeight: 1.75,
  marginTop: '14px',
  maxWidth: '520px',
};

const ctaStyle: CSSProperties = {
  display: 'inline-block',
  backgroundColor: 'var(--bsj-primary)',
  color: 'white',
  padding: '11px 24px',
  borderRadius: '8px',
  fontWeight: 700,
  fontSize: '14px',
  marginTop: '28px',
  textDecoration: 'none',
};

export function CustomShortlistCTA({
  id,
  className,
}: CustomShortlistCTAProps) {
  return (
    <section id={id} className={className} style={sectionStyle}>
      <div style={innerStyle}>
        <div style={accentBarStyle} aria-hidden="true" />
        <h2 style={headingStyle}>Need help checking a Japan stay or activity?</h2>
        <p style={bodyStyle}>
          Use BSJ to organize the details that matter before you rely on a listing:
          tattoo rules, luggage, food needs, bath wording, late arrival, or activity
          requirements. Future support will focus on Japanese confirmation and clear
          English summaries, not booking on your behalf.
        </p>
        <a
          href="/japan-confirmation-service"
          style={ctaStyle}
          className="hover:[background-color:var(--bsj-primary-hover)]"
        >
          See confirmation support
        </a>
      </div>
    </section>
  );
}

export default CustomShortlistCTA;
