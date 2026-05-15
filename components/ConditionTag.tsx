import Link from 'next/link';
import type { CSSProperties } from 'react';

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
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  };

  if (href) {
    return (
      <Link
        href={href}
        className={[
          'no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)] hover:underline focus:outline-none focus-visible:underline',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={style}
      >
        {label}
      </Link>
    );
  }

  return (
    <span className={className} style={style}>
      {label}
    </span>
  );
}

export default ConditionTag;
