import type { CSSProperties } from 'react';
import {
  VerificationBadge,
  type VerificationVariant,
} from './VerificationBadge';

export interface VerificationExplainerProps {
  id?: string;
  className?: string;
}

interface VerificationStage {
  badge: VerificationVariant;
  heading: string;
  body: string;
}

const STAGES: VerificationStage[] = [
  {
    badge: 'property-confirmed',
    heading: 'Property confirmed',
    body: 'We contacted the property directly and received a clear response. Current at time of listing.',
  },
  {
    badge: 'source-backed',
    heading: 'Source-backed',
    body: 'Information comes from official listings, tourism board records, or other reliable public sources.',
  },
  {
    badge: 'ask-before-booking',
    heading: 'Ask before booking',
    body: "Policy isn't clear from public sources. Contact the property before you commit.",
  },
  {
    badge: 'not-yet-checked',
    heading: 'Not yet checked',
    body: "We haven't verified this property's conditions yet. Listed for reference only.",
  },
];

const sectionStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg-card)',
  borderTop: '1px solid var(--bsj-border)',
  borderBottom: '1px solid var(--bsj-border)',
  padding: '72px 24px',
};

const innerStyle: CSSProperties = {
  maxWidth: '860px',
  margin: '0 auto',
};

const headingStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: 1.25,
  textAlign: 'center',
};

const subtextStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '14px',
  lineHeight: 1.6,
  marginTop: '8px',
  textAlign: 'center',
};

const cardStyle: CSSProperties = {
  backgroundColor: 'white',
  border: '1px solid var(--bsj-border)',
  borderRadius: '10px',
  padding: '20px 22px 22px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const cardHeadingStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 1.35,
};

const cardBodyStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '13px',
  lineHeight: 1.6,
};

export function VerificationExplainer({
  id,
  className,
}: VerificationExplainerProps) {
  return (
    <section id={id} className={className} style={sectionStyle}>
      <div style={innerStyle}>
        <h2 style={headingStyle}>How we check each stay</h2>
        <p style={subtextStyle}>
          Four labels describe what we know — and what we don&apos;t.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {STAGES.map((stage) => (
            <div key={stage.badge} style={cardStyle}>
              <VerificationBadge variant={stage.badge} />
              <h3 style={cardHeadingStyle}>{stage.heading}</h3>
              <p style={cardBodyStyle}>{stage.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VerificationExplainer;
