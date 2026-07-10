'use client';

import Link from 'next/link';
import type { CSSProperties } from 'react';
import { trackTagClick } from '@/lib/analytics';
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

interface ConditionTagTone {
  border: string;
  color: string;
  background: string;
  hoverBackground: string;
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

function getConditionTagTone(label: string, variant: ConditionTagVariant): ConditionTagTone {
  const normalized = label.toLowerCase();

  if (normalized.includes('tattoo')) {
    return {
      border: '#d8c5bd',
      color: '#7d4038',
      background: '#fbf6f3',
      hoverBackground: '#7d4038',
    };
  }

  if (normalized.includes('food') || normalized.includes('catering')) {
    return {
      border: '#d5d8c4',
      color: '#58613a',
      background: '#f7f8f1',
      hoverBackground: '#58613a',
    };
  }

  if (normalized.includes('luggage') || normalized.includes('access')) {
    return {
      border: '#cbd3d9',
      color: '#435a68',
      background: '#f3f6f7',
      hoverBackground: '#435a68',
    };
  }

  if (normalized.includes('bath')) {
    return {
      border: '#c9d0da',
      color: '#374f72',
      background: '#f3f5f9',
      hoverBackground: '#374f72',
    };
  }

  if (normalized.includes('pet') || normalized.includes('family')) {
    return {
      border: '#d8d1c4',
      color: '#6a5640',
      background: '#f9f6f0',
      hoverBackground: '#6a5640',
    };
  }

  if (variant === 'stay-type') {
    return {
      border: 'var(--bsj-border)',
      color: 'var(--bsj-text-muted)',
      background: 'transparent',
      hoverBackground: 'var(--bsj-primary)',
    };
  }

  return {
    border: 'var(--bsj-border)',
    color: conditionTagConfig[variant].color,
    background: 'transparent',
    hoverBackground: 'var(--bsj-primary)',
  };
}

export function ConditionTag({
  label,
  variant = 'facility',
  href,
  className,
}: ConditionTagProps) {
  const config = conditionTagConfig[variant];
  const tone = getConditionTagTone(label, variant);

  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    width: 'fit-content',
    padding: '3px 8px',
    borderRadius: '3px',
    border: config.border ?? `1px solid ${tone.border}`,
    backgroundColor: tone.background,
    color: tone.color,
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
    const { border, backgroundColor, color, ...baseLinkStyle } = style;
    void border;
    void backgroundColor;
    void color;

    const linkStyle: CSSProperties & {
      '--tag-border': string;
      '--tag-bg': string;
      '--tag-color': string;
      '--tag-hover-bg': string;
    } = {
      ...baseLinkStyle,
      '--tag-border': tone.border,
      '--tag-bg': tone.background,
      '--tag-color': tone.color,
      '--tag-hover-bg': tone.hoverBackground,
    };

    return (
      <Link
        href={href}
        onClick={() =>
          trackTagClick({
            tag_label: label,
            tag_href: href,
            tag_variant: variant,
          })
        }
        className={[
          'border border-[var(--tag-border)] bg-[var(--tag-bg)] text-[var(--tag-color)] no-underline transition-colors hover:border-[var(--tag-hover-bg)] hover:bg-[var(--tag-hover-bg)] hover:text-white active:border-[var(--tag-hover-bg)] active:bg-[var(--tag-hover-bg)] active:text-white focus:outline-none focus-visible:border-[var(--tag-hover-bg)] focus-visible:bg-[var(--tag-hover-bg)] focus-visible:text-white',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={linkStyle}
      >
        <ConditionIcon name={label} width={16} height={16} aria-hidden="true" />
        {label}
      </Link>
    );
  }

  return (
    <span className={className} style={style}>
      <ConditionIcon name={label} width={16} height={16} aria-hidden="true" />
      {label}
    </span>
  );
}

export default ConditionTag;
