import Link from 'next/link';
import type { CSSProperties } from 'react';

export interface SiteFooterProps {
  className?: string;
}

interface FooterLink {
  href: string;
  label: string;
}

const staysLinks: FooterLink[] = [
  { href: '/stays/private-villas', label: 'Private Villas' },
  { href: '/stays/tattoo-friendly', label: 'Tattoo-Friendly' },
  { href: '/stays/luggage-friendly', label: 'Luggage-Friendly' },
  { href: '/stays/food-friendly', label: 'Food-Friendly' },
  { href: '/stays/pet-friendly', label: 'Pet-Friendly' },
];

const infoLinks: FooterLink[] = [
  { href: '/tattoo-friendly-stays-kansai', label: 'Tattoo stay guide' },
  { href: '/shinkansen-oversized-luggage-guide', label: 'Shinkansen luggage guide' },
  { href: '/dietary-restrictions-japan', label: 'Dietary restriction guide' },
  { href: '/ryokan-stay-guide', label: 'Ryokan stay guide' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#ask', label: 'Ask for a stay match' },
];

const footerStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg-subtle)',
  borderTop: '1px solid var(--bsj-border)',
};

const brandStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  fontSize: '15px',
  fontWeight: 700,
};

const taglineStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '13px',
  lineHeight: 1.6,
  marginTop: '8px',
};

const headingStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.06em',
  marginBottom: '12px',
  textTransform: 'uppercase',
};

const bottomBarStyle: CSSProperties = {
  borderTop: '1px solid var(--bsj-border)',
  color: 'var(--bsj-text-light)',
  fontSize: '12px',
  marginTop: '40px',
  paddingTop: '20px',
};

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-[13px] leading-[2] text-[var(--bsj-text-muted)] no-underline transition-colors hover:text-[var(--bsj-text)]"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter({ className }: SiteFooterProps) {
  const rootClassName = ['w-full px-6 py-14', className].filter(Boolean).join(' ');

  return (
    <footer className={rootClassName} style={footerStyle}>
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div style={brandStyle}>Bespoke Stay Japan</div>
            <p style={taglineStyle}>Japan stays researched for real travel conditions.</p>
          </div>

          <div>
            <h2 style={headingStyle}>Stays</h2>
            <FooterLinkList links={staysLinks} />
          </div>

          <div>
            <h2 style={headingStyle}>Info</h2>
            <FooterLinkList links={infoLinks} />
          </div>
        </div>

        <div style={bottomBarStyle}>
          <p>
            Stay conditions can change. Always confirm final details with the property
            before planning around them.
          </p>
          <p style={{ marginTop: '6px' }}>
            © 2025 Bespoke Stay Japan. Stay information is researched from public
            sources and property policies where available.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
