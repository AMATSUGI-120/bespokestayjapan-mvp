import type { CSSProperties } from 'react';
import { VerificationBadge, VerificationVariant } from './VerificationBadge';
import { ConditionTag, ConditionTagVariant } from './ConditionTag';

interface ConditionTagData {
  label: string;
  variant?: ConditionTagVariant;
  href?: string | null;
}

interface PropertyCardProps {
  stayType: string;
  verificationVariant: VerificationVariant;
  name: string;
  region: string;
  tags: ConditionTagData[];
  editorialNote: string;
  bestFor?: string | null;
  goodToKnow?: string | null;
  ctaHref: string;
  ctaLabel?: string;
  referenceLabel?: string | null;
  showCta?: boolean;
  className?: string;
}

const bodyStyle: CSSProperties = {
  padding: '20px',
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
  fontSize: '21px',
  fontWeight: 500,
  lineHeight: 1.22,
  marginTop: '14px',
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
  display: '-webkit-box',
  fontSize: '14px',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  lineHeight: 1.7,
  marginTop: '18px',
  overflow: 'hidden',
  flex: '1 1 auto',
};

const bestForStyle: CSSProperties = {
  borderTop: '1px solid var(--bsj-border)',
  marginTop: '16px',
  paddingTop: '12px',
};

const bestForTextStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  display: '-webkit-box',
  fontSize: '12px',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  lineHeight: 1.55,
  overflow: 'hidden',
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
  alignItems: 'center',
  color: 'var(--bsj-primary)',
  display: 'inline-flex',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  lineHeight: 1.5,
  marginTop: '26px',
  paddingBottom: '3px',
  textDecoration: 'none',
  textDecorationThickness: '1px',
  textUnderlineOffset: '5px',
  textTransform: 'uppercase',
};

const conditionIconStyle: CSSProperties = {
  alignItems: 'center',
  border: '1px solid var(--bsj-border)',
  borderRadius: '999px',
  color: 'var(--bsj-text-muted)',
  display: 'inline-flex',
  fontSize: '10px',
  fontWeight: 700,
  height: '28px',
  justifyContent: 'center',
  letterSpacing: '0.04em',
  minWidth: '28px',
  padding: '0 8px',
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

function getDisplayName(name: string): string {
  return name.split(/\s+—\s+/)[0]?.trim() || name;
}

function getConditionCode(label: string): string {
  const normalized = label.toLowerCase();

  if (normalized.includes('tattoo')) return 'TAT';
  if (normalized.includes('bath') || normalized.includes('onsen')) return 'BTH';
  if (normalized.includes('luggage') || normalized.includes('station')) return 'BAG';
  if (normalized.includes('kitchen') || normalized.includes('catering')) return 'KIT';
  if (normalized.includes('english')) return 'EN';
  if (normalized.includes('family') || normalized.includes('child')) return 'FAM';
  if (normalized.includes('pet') || normalized.includes('dog') || normalized.includes('cat')) return 'PET';
  if (normalized.includes('food') || normalized.includes('diet')) return 'FOOD';
  if (normalized.includes('access') || normalized.includes('elevator')) return 'ACC';
  if (normalized.includes('villa')) return 'VIL';

  return label
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 3) || 'ST';
}

export function PropertyCard({
  stayType,
  verificationVariant,
  name,
  region,
  tags,
  editorialNote,
  bestFor,
  goodToKnow,
  ctaHref,
  ctaLabel = 'View stay note',
  referenceLabel,
  showCta = true,
  className,
}: PropertyCardProps) {
  const trimmedGoodToKnow = goodToKnow?.trim();
  const trimmedBestFor = bestFor?.trim();
  const trimmedReferenceLabel = referenceLabel?.trim();
  const conditionCodes = tags.slice(0, 4).map((tag) => getConditionCode(tag.label));
  const displayName = getDisplayName(name);

  return (
    <article
      className={[
        'group border border-[var(--bsj-border)] rounded-[6px] bg-[var(--bsj-bg)] transition-colors hover:border-[var(--bsj-border-strong)]',
        className,
      ].filter(Boolean).join(' ')}
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <div style={bodyStyle}>
        <div className="flex items-center justify-between gap-3 border-b border-[var(--bsj-border)] pb-3">
          <span style={stayTypeStyle}>{stayType}</span>
          <VerificationBadge variant={verificationVariant} />
        </div>

        {conditionCodes.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5" aria-hidden="true">
            {conditionCodes.map((code, index) => (
              <span key={`${code}-${index}`} style={conditionIconStyle}>
                {code}
              </span>
            ))}
          </div>
        )}

        <h3 style={nameStyle}>
          <a
            href={ctaHref}
            style={nameLinkStyle}
            className="hover:underline focus:outline-none focus-visible:underline group-hover:underline"
          >
            {displayName}
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

        {trimmedBestFor && (
          <div style={bestForStyle}>
            <span style={goodToKnowLabelStyle}>Best for</span>
            <p style={bestForTextStyle}>{trimmedBestFor}</p>
          </div>
        )}

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
