'use client';

import { trackExternalSourceLinkClick } from '@/lib/analytics';
import { resolveHotelExternalLink } from '@/lib/external-links';

interface ExternalSourceLinkProps {
  sourceUrl: string | null;
  hotelId: string;
  className?: string;
  label?: string;
}

export function ExternalSourceLink({
  sourceUrl,
  hotelId,
  className,
  label,
}: ExternalSourceLinkProps) {
  const externalLink = resolveHotelExternalLink({ sourceUrl, hotelId });

  if (!externalLink) return null;

  return (
    <a
      href={externalLink.href}
      target="_blank"
      rel={externalLink.isAffiliate ? 'noreferrer sponsored' : 'noreferrer'}
      onClick={() =>
        trackExternalSourceLinkClick({
          hotel_id: hotelId,
          provider: externalLink.provider,
          is_affiliate: externalLink.isAffiliate,
        })
      }
      className={[
        'inline-flex min-h-10 items-center border border-[var(--bsj-border-strong)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline transition-colors hover:border-[var(--bsj-primary)] hover:bg-[var(--bsj-primary)] hover:text-white active:border-[var(--bsj-primary)] active:bg-[var(--bsj-primary)] active:text-white focus:outline-none focus-visible:border-[var(--bsj-primary)] focus-visible:bg-[var(--bsj-primary)] focus-visible:text-white',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label ?? externalLink.label}
    </a>
  );
}

export default ExternalSourceLink;
