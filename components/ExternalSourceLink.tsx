'use client';

import { trackExternalSourceLinkClick } from '@/lib/analytics';

interface ExternalSourceLinkProps {
  sourceUrl: string | null;
  hotelId: string;
  className?: string;
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
        'inline-flex w-full justify-center border-t border-[var(--bsj-border)] px-0 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--bsj-primary)] no-underline transition-colors hover:text-[var(--bsj-primary-hover)] hover:underline',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      View source page
    </a>
  );
}

export default ExternalSourceLink;
