import type { CSSProperties } from 'react';
import { VerificationBadge, VerificationVariant } from './VerificationBadge';
import { ConditionTag, ConditionTagVariant } from './ConditionTag';

interface ConditionTagData {
  label: string;
  variant?: ConditionTagVariant;
  href?: string | null;
}

interface PropertyCardProps {
  imageUrl: string;
  imageAlt: string;
  stayType: string;
  verificationVariant: VerificationVariant;
  name: string;
  region: string;
  tags: ConditionTagData[];
  editorialNote: string;
  goodToKnow?: string | null;
  ctaHref: string;
  ctaLabel?: string;
  referenceLabel?: string | null;
  showCta?: boolean;
  className?: string;
}

const imageStyle: CSSProperties = {
  borderRadius: '6px',
  transition: 'filter 180ms ease, transform 180ms ease',
};

const imageLinkStyle: CSSProperties = {
  borderRadius: '6px',
  display: 'block',
  overflow: 'hidden',
};

const bodyStyle: CSSProperties = {
  padding: '18px 0 0',
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
};

const stayTypeStyle: CSSProperties = {
  color: 'var(--bsj-text-light)',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  lineHeight: 1.4,
  textTransform: 'uppercase',
};

const nameStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: 1.25,
  marginTop: '10px',
};

const nameLinkStyle: CSSProperties = {
  color: 'inherit',
  textDecoration: 'none',
  textDecorationThickness: '1px',
  textUnderlineOffset: '4px',
};

const regionStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '13px',
  lineHeight: 1.4,
  marginTop: '5px',
};

const noteStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '14px',
  lineHeight: 1.7,
  marginTop: '16px',
  flex: '1 1 auto',
};

const goodToKnowStyle: CSSProperties = {
  borderTop: '1px solid var(--bsj-border)',
  marginTop: '16px',
  paddingTop: '12px',
};

const goodToKnowTextStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  display: '-webkit-box',
  fontSize: '12px',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  lineHeight: 1.55,
  overflow: 'hidden',
};

const goodToKnowLabelStyle: CSSProperties = {
  color: 'var(--bsj-text-light)',
  display: 'block',
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.1em',
  lineHeight: 1.4,
  marginBottom: '4px',
  textTransform: 'uppercase',
};

const ctaStyle: CSSProperties = {
  display: 'inline-block',
  color: 'var(--bsj-primary)',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  lineHeight: 1.5,
  marginTop: '24px',
  paddingBottom: '3px',
  textDecoration: 'none',
  textDecorationThickness: '1px',
  textUnderlineOffset: '5px',
  textTransform: 'uppercase',
};

const referenceStyle: CSSProperties = {
  color: 'var(--bsj-text-light)',
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.1em',
  lineHeight: 1.4,
  marginTop: '16px',
  textTransform: 'uppercase',
};

export function PropertyCard({
  imageUrl,
  imageAlt,
  stayType,
  verificationVariant,
  name,
  region,
  tags,
  editorialNote,
  goodToKnow,
  ctaHref,
  ctaLabel = 'View stay note',
  referenceLabel,
  showCta = true,
  className,
}: PropertyCardProps) {
  const trimmedGoodToKnow = goodToKnow?.trim();
  const trimmedReferenceLabel = referenceLabel?.trim();

  return (
    <article className={className} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <a
        href={ctaHref}
        style={imageLinkStyle}
        className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bsj-primary)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bsj-bg-subtle)]"
        aria-label={`Read stay note for ${name}`}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="block aspect-[4/5] w-full object-cover group-hover:brightness-[0.92] sm:aspect-[3/4] lg:aspect-[4/5]"
          style={imageStyle}
        />
      </a>

      <div style={bodyStyle}>
        <div className="flex items-center justify-between gap-3 border-b border-[var(--bsj-border)] pb-3">
          <span style={stayTypeStyle}>{stayType}</span>
          <VerificationBadge variant={verificationVariant} />
        </div>

        <h3 style={nameStyle}>
          <a
            href={ctaHref}
            style={nameLinkStyle}
            className="hover:underline focus:outline-none focus-visible:underline"
          >
            {name}
          </a>
        </h3>
        <p style={regionStyle}>{region}</p>

        <div className="mt-[10px] flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag) => (
            <ConditionTag
              key={`${tag.label}-${tag.variant ?? 'facility'}`}
              label={tag.label}
              variant={tag.variant}
              href={tag.href}
            />
          ))}
        </div>

        <p style={noteStyle}>{editorialNote}</p>

        {trimmedGoodToKnow && (
          <div style={goodToKnowStyle}>
            <span style={goodToKnowLabelStyle}>Good to know</span>
            <p style={goodToKnowTextStyle}>{trimmedGoodToKnow}</p>
          </div>
        )}

        {trimmedReferenceLabel && (
          <p style={referenceStyle}>{trimmedReferenceLabel}</p>
        )}

        {showCta && (
          <a
            href={ctaHref}
            className="hover:underline focus:outline-none focus-visible:underline"
            style={ctaStyle}
          >
            {ctaLabel} →
          </a>
        )}
      </div>
    </article>
  );
}

export default PropertyCard;
