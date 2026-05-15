interface StayBookingCtaProps {
  bookingUrl: string | null;
  liteapiId: string;
  className?: string;
}

function resolveStayBookingUrl({
  bookingUrl,
}: Pick<StayBookingCtaProps, 'bookingUrl' | 'liteapiId'>): string | null {
  const currentUrl = bookingUrl?.trim();

  // Future revenue links should be centralized here:
  // affiliate URL, LiteAPI booking flow URL, or tracked redirect endpoint.
  return currentUrl && currentUrl.length > 0 ? currentUrl : null;
}

export function StayBookingCta({
  bookingUrl,
  liteapiId,
  className,
}: StayBookingCtaProps) {
  const href = resolveStayBookingUrl({ bookingUrl, liteapiId });

  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[
        'inline-flex w-full justify-center rounded-[4px] bg-[var(--bsj-primary)] px-5 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-white no-underline transition-colors hover:bg-[var(--bsj-primary-hover)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      Visit official / booking page
    </a>
  );
}

export default StayBookingCta;
