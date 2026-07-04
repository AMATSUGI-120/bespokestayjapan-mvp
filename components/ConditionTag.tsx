import Link from 'next/link';
import type { CSSProperties } from 'react';
import { ConditionIcon } from './ConditionIcon';

export type ConditionTagVariant = 'facility' | 'access' | 'stay-type';

export interface ConditionTagProps {
  label: string;
  variant?: ConditionTagVariant;
  href?: string | null;
  className?: string;
}

interface ConditionTagConfig {
  color: string;
  border?: string;
}

const conditionTagConfig: Record<ConditionTagVariant, ConditionTagConfig> = {
  facility: {
    color: 'var(--bsj-primary)',
  },
  access: {
    color: 'var(--bsj-text-muted)',
  },
  'stay-type': {
    color: 'var(--bsj-text-muted)',
    border: '1px solid var(--bsj-border)',
  },
};

export function ConditionTag({
  label,
  variant = 'facility',
  href,
  className,
}: ConditionTagProps) {
  const config = conditionTagConfig[variant];

  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    width: 'fit-content',
    padding: '3px 8px',
    borderRadius: '3px',
    border: config.border ?? '1px solid var(--bsj-border)',
    backgroundColor: 'transparent',
    color: config.color,
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    lineHeight: 1.3,
    maxWidth: '100%',
    overflowWrap: 'anywhere',
    textAlign: 'left',
    textTransform: 'uppercase',
    whiteSpace: 'normal',
  };

  if (href) {
    const linkStyle: CSSProperties = {
      ...style,
      border: undefined,
      backgroundColor: undefined,
      color: undefined,
    };

    return (
      <Link
        href={href}
        className={[
          'border border-[var(--bsj-border)] text-[var(--bsj-primary)] no-underline transition-colors hover:border-[var(--bsj-primary)] hover:bg-[var(--bsj-primary)] hover:text-white active:border-[var(--bsj-primary)] active:bg-[var(--bsj-primary)] active:text-white focus:outline-none focus-visible:border-[var(--bsj-primary)] focus-visible:bg-[var(--bsj-primary)] focus-visible:text-white',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={linkStyle}
      >
        <ConditionIcon name={label} width={13} height={13} aria-hidden="true" />
        {label}
      </Link>
    );
  }

  return (
    <span className={className} style={style}>
      <ConditionIcon name={label} width={13} height={13} aria-hidden="true" />
      {label}
    </span>
  );
}

export default ConditionTag;
