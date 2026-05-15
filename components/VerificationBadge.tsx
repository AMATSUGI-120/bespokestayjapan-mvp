import type { CSSProperties } from 'react';

export type VerificationVariant =
  | 'property-confirmed'
  | 'source-backed'
  | 'ask-before-booking'
  | 'not-yet-checked';

export interface VerificationBadgeProps {
  variant: VerificationVariant;
  label?: string;
  className?: string;
}

interface VerificationBadgeConfig {
  label: string;
  color: string;
  backgroundColor: string;
}

const verificationBadgeConfig: Record<VerificationVariant, VerificationBadgeConfig> = {
  'property-confirmed': {
    label: 'Property confirmed',
    color: 'var(--bsj-confirmed)',
    backgroundColor: 'var(--bsj-confirmed-bg)',
  },
  'source-backed': {
    label: 'Source-backed',
    color: 'var(--bsj-sourced)',
    backgroundColor: 'var(--bsj-sourced-bg)',
  },
  'ask-before-booking': {
    label: 'Ask before booking',
    color: 'var(--bsj-ask)',
    backgroundColor: 'var(--bsj-ask-bg)',
  },
  'not-yet-checked': {
    label: 'Not yet checked',
    color: 'var(--bsj-unknown)',
    backgroundColor: 'var(--bsj-unknown-bg)',
  },
};

export function VerificationBadge({
  variant,
  label,
  className,
}: VerificationBadgeProps) {
  const config = verificationBadgeConfig[variant];

  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'fit-content',
    padding: '3px 8px',
    borderRadius: '3px',
    backgroundColor: config.backgroundColor,
    color: config.color,
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    lineHeight: 1.3,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  };

  return (
    <span className={className} style={style}>
      {label ?? config.label}
    </span>
  );
}

export default VerificationBadge;
