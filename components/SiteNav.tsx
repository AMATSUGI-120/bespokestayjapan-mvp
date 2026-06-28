'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

export interface SiteNavProps {
  className?: string;
}

const navStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg-card)',
  borderBottom: '1px solid var(--bsj-border)',
  zIndex: 50,
};

const navLinks = [
  { href: '/stays', label: 'Stays' },
  { href: '/guides', label: 'Guides' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#ask', label: 'Ask for a stay match' },
];

export function SiteNav({ className }: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hiddenOnMobile, setHiddenOnMobile] = useState(false);
  const lastScrollY = useRef(0);
  const rootClassName = [
    'w-full max-sm:sticky max-sm:top-0 sm:relative transition-transform duration-200 ease-out motion-reduce:transition-none',
    hiddenOnMobile && !menuOpen ? 'max-sm:-translate-y-full' : 'translate-y-0',
    className,
  ].filter(Boolean).join(' ');

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      if (window.matchMedia('(min-width: 640px)').matches) {
        setHiddenOnMobile(false);
        lastScrollY.current = window.scrollY;
        return;
      }

      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 80 || menuOpen) {
        setHiddenOnMobile(false);
      } else if (delta > 8) {
        setHiddenOnMobile(true);
      } else if (delta < -8) {
        setHiddenOnMobile(false);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [menuOpen]);

  return (
    <nav className={rootClassName} style={navStyle} aria-label="Site navigation">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:h-[72px] md:px-8">
        <a
          href="/"
          className="rounded-[3px] border border-transparent px-2 py-2 text-[12px] font-semibold uppercase leading-none tracking-[0.04em] text-[var(--bsj-text)] no-underline transition-colors hover:border-[var(--bsj-primary)] hover:bg-[var(--bsj-primary)] hover:text-white active:border-[var(--bsj-primary)] active:bg-[var(--bsj-primary)] active:text-white focus:outline-none focus-visible:border-[var(--bsj-primary)] focus-visible:bg-[var(--bsj-primary)] focus-visible:text-white md:text-[13px]"
        >
          Bespoke Stay Japan
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[3px] px-2 py-2 text-[12px] leading-none text-[var(--bsj-text-muted)] no-underline transition-colors hover:bg-[var(--bsj-bg-subtle)] hover:text-[var(--bsj-text)] active:bg-[var(--bsj-bg)] focus:outline-none focus-visible:bg-[var(--bsj-bg-subtle)] focus-visible:text-[var(--bsj-text)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="flex sm:hidden items-center justify-center -mr-1 rounded-[3px] p-2 text-[var(--bsj-text-muted)] transition-colors hover:bg-[var(--bsj-bg-subtle)] hover:text-[var(--bsj-text)] active:bg-[var(--bsj-bg)] focus:outline-none focus-visible:bg-[var(--bsj-bg-subtle)] focus-visible:text-[var(--bsj-text)]"
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
              className="block border-b border-[var(--bsj-border)] px-2 py-3.5 text-[13px] text-[var(--bsj-text-muted)] no-underline transition-colors last:border-0 hover:bg-[var(--bsj-bg-subtle)] hover:text-[var(--bsj-text)] active:bg-[var(--bsj-bg)] focus:outline-none focus-visible:bg-[var(--bsj-bg-subtle)] focus-visible:text-[var(--bsj-text)]"
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
