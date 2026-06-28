'use client';

import { trackExternalSourceLinkClick } from '@/lib/analytics';

interface ExternalSourceLinkProps {
  sourceUrl: string | null;
  hotelId: string;
  className?: string;
  label?: string;
}

function resolveExternalSourceUrl({
  sourceUrl,
}: Pick<ExternalSourceLinkProps, 'sourceUrl' | 'hotelId'>): string | null {
  const currentUrl = sourceUrl?.trim();

  // Future source priority, tracked redirects, or affiliate links should be centralized here.
  return currentUrl && currentUrl.length > 0 ? currentUrl : null;
}

export function ExternalSourceLink({
  sourceUrl,
  hotelId,
  className,
  label = 'Open official / source page',
}: ExternalSourceLinkProps) {
  const href = resolveExternalSourceUrl({ sourceUrl, hotelId });

  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackExternalSourceLinkClick({ hotel_id: hotelId })}
      className={[
        'inline-flex min-h-10 items-center border border-[var(--bsj-border-strong)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] no-underline transition-colors hover:bg-[var(--bsj-bg)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label}
    </a>
  );
}

export default ExternalSourceLink;
