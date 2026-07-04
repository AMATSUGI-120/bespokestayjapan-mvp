import Link from 'next/link';
import type { CSSProperties } from 'react';
import { ConditionIcon } from './ConditionIcon';

export interface ConditionBrowserProps {
  className?: string;
}

interface Condition {
  id: string;
  label: string;
  title: string;
  description: string;
  href: string;
}

const CONDITIONS: Condition[] = [
  {
    id: 'private-villas',
    label: 'Private stays',
    title: 'Private Villas & Glamping',
    description:
      'Private stays, villas, cottages, and glamping for families, groups, and quiet getaways.',
    href: '/stays/private-villas',
  },
  {
    id: 'tattoo-friendly',
    label: 'Tattoo access',
    title: 'Tattoo-Friendly & Consideration',
    description:
      'Clearer bath access, lower-friction options, and stays worth checking carefully.',
    href: '/stays/tattoo-friendly',
  },
  {
    id: 'tattoo-consideration',
    label: 'Check before planning',
    title: 'Tattoo-Consideration Stays',
    description:
      'Potentially useful stays where bath or onsen policies need closer confirmation.',
    href: '/stays/tattoo-consideration',
  },
  {
    id: 'private-bath',
    label: 'Bath privacy',
    title: 'Private-Bath Stays',
    description:
      'Stays with private-bath context for travelers who need more privacy or clarity.',
    href: '/stays/private-bath',
  },
  {
    id: 'self-catering',
    label: 'Kitchen access',
    title: 'Self-Catering Stays',
    description:
      'Apartment-style or kitchen-friendly stays for flexible meals and longer trips.',
    href: '/stays/self-catering',
  },
  {
    id: 'luggage-friendly',
    label: 'Travel ease',
    title: 'Luggage-Friendly Hotels',
    description:
      'Hotels and areas with easier access for large luggage and station proximity.',
    href: '/stays/luggage-friendly',
  },
  {
    id: 'food-friendly',
    label: 'Food access',
    title: 'Food Restriction-Friendly',
    description:
      'Stays near vegan, vegetarian, halal, or self-catering options.',
    href: '/stays/food-friendly',
  },
  {
    id: 'english-friendly',
    label: 'Language support',
    title: 'English-Friendly Stays',
    description:
      'Stays with clearer international information or guest support.',
    href: '/stays/english-friendly',
  },
  {
    id: 'family-friendly',
    label: 'Family travel',
    title: 'Family-Friendly Stays',
    description:
      'Stays with practical details that can make family travel easier to plan.',
    href: '/stays/family-friendly',
  },
  {
    id: 'pet-friendly',
    label: 'Traveling with pets',
    title: 'Pet-Friendly Stays',
    description:
      'Pet-friendly hotels and stays with clearer rules before you plan.',
    href: '/stays/pet-friendly',
  },
];

const sectionStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg-card)',
  borderTop: '1px solid var(--bsj-border)',
  padding: '88px 24px',
};

const headingStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  fontSize: 'clamp(28px, 4vw, 44px)',
  fontWeight: 500,
  lineHeight: 1.08,
  letterSpacing: '0',
};

const subtextStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '15px',
  lineHeight: 1.75,
  marginTop: '16px',
  maxWidth: '520px',
};

const entryStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid var(--bsj-border)',
  padding: '30px 0',
  textDecoration: 'none',
};

const entryMetaStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '10px',
  marginBottom: '10px',
};

const entryNumStyle: CSSProperties = {
  color: 'var(--bsj-text-light)',
  fontSize: '12px',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',
  flexShrink: 0,
};

const entryLabelStyle: CSSProperties = {
  color: 'var(--bsj-secondary)',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
};

const entryTitleStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  fontSize: '19px',
  fontWeight: 500,
  lineHeight: 1.3,
};

const entryDescStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '14px',
  lineHeight: 1.75,
  marginTop: '8px',
  maxWidth: '480px',
};

const entryCtaStyle: CSSProperties = {
  color: 'var(--bsj-primary)',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.08em',
  marginTop: '18px',
  display: 'inline-block',
  textTransform: 'uppercase',
};

export function ConditionBrowser({ className }: ConditionBrowserProps) {
  return (
    <section
      className={['px-6', className].filter(Boolean).join(' ')}
      style={sectionStyle}
    >
      <div className="mx-auto" style={{ maxWidth: '1180px' }}>
        <div className="mb-6">
          <h2 style={headingStyle}>Browse by travel condition</h2>
          <p style={subtextStyle}>
            A quieter way to compare the details that usually sit in footnotes, policies,
            and unanswered messages.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ columnGap: '96px' }}
        >
          {CONDITIONS.map((condition, i) => (
            <Link
              key={condition.id}
              href={condition.href}
              style={entryStyle}
              className="group -mx-3 rounded-[4px] px-3 transition-colors hover:bg-[var(--bsj-bg-subtle)] active:bg-[var(--bsj-border)] focus:outline-none focus-visible:bg-[var(--bsj-bg-subtle)]"
            >
              <div style={entryMetaStyle}>
                <span style={entryNumStyle}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--bsj-border)] text-[var(--bsj-text-muted)] transition-colors group-hover:border-[var(--bsj-border-strong)] group-hover:text-[var(--bsj-text)]">
                  <ConditionIcon name={condition.id} width={23} height={23} />
                </span>
                <span style={entryLabelStyle}>{condition.label}</span>
              </div>
              <span
                style={entryTitleStyle}
                className="transition-colors group-hover:underline"
              >
                {condition.title}
              </span>
              <span style={entryDescStyle}>{condition.description}</span>
              <span className="transition-colors group-hover:text-[var(--bsj-primary-hover)] group-hover:underline" style={entryCtaStyle}>View guide</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConditionBrowser;
