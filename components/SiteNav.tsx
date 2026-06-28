'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { CSSProperties } from 'react';

export interface SiteNavProps {
  className?: string;
}

const navStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg-card)',
  borderBottom: '1px solid var(--bsj-border)',
  position: 'relative',
  zIndex: 50,
};

const brandStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
};

const navLinks = [
  { href: '/stays', label: 'Stays' },
  { href: '/guides', label: 'Guides' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#ask', label: 'Ask for a stay match' },
];

export function SiteNav({ className }: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
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

        {/* Desktop nav */}
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

        {/* Mobile hamburger button */}
        <button
          className="flex sm:hidden items-center justify-center -mr-1 p-2 text-[var(--bsj-text-muted)]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <svg
            width="20" height="20" viewBox="0 0 20 20"
            fill="none" aria-hidden="true"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="sm:hidden border-t border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-6 py-2"
          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-[var(--bsj-border)] py-3.5 text-[13px] text-[var(--bsj-text-muted)] no-underline last:border-0 hover:text-[var(--bsj-text)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default SiteNav;
