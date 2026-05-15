import Link from 'next/link';
import type { CSSProperties } from 'react';

export interface SiteNavProps {
  className?: string;
}

const navStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg-card)',
  borderBottom: '1px solid var(--bsj-border)',
};

const brandStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
};

const navLinks = [
  { href: '/stays', label: 'Stays' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#ask', label: 'Concierge' },
];

export function SiteNav({ className }: SiteNavProps) {
  const rootClassName = ['w-full', className].filter(Boolean).join(' ');

  return (
    <nav className={rootClassName} style={navStyle} aria-label="Site navigation">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:h-[72px] md:px-8">
        <Link
          href="/"
          className="text-[12px] font-semibold leading-none no-underline md:text-[13px]"
          style={brandStyle}
        >
          Bespoke Stay Japan
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] leading-none text-[var(--bsj-text-muted)] no-underline transition-colors hover:text-[var(--bsj-text)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default SiteNav;
