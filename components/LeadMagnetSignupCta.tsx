'use client';

import { trackEvent } from '@/lib/analytics';
import type { LeadMagnet } from '@/lib/lead-magnets';

interface LeadMagnetSignupCtaProps {
  leadMagnet: LeadMagnet;
  subscribeUrl?: string;
  sourcePath: string;
}

export default function LeadMagnetSignupCta({
  leadMagnet,
  subscribeUrl,
  sourcePath,
}: LeadMagnetSignupCtaProps) {
  const trackSignup = () => {
    trackEvent('bsj_lead_magnet_signup_click', {
      lead_magnet: leadMagnet.key,
      source_path: sourcePath,
      destination: 'beehiiv',
    });
  };

  return (
    <div className="grid gap-3">
      {subscribeUrl ? (
        <>
          <a
            href={subscribeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={trackSignup}
            className="inline-flex min-h-11 w-full items-center justify-center border border-[var(--bsj-border-strong)] bg-[var(--bsj-text)] px-4 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-bg)] no-underline transition-colors hover:bg-[var(--bsj-primary-hover)] active:bg-[var(--bsj-primary)]"
          >
            {leadMagnet.ctaLabel}
          </a>
          <p className="text-[11px] leading-[1.6] text-[var(--bsj-text-light)]">
            If you do not see the email, check your spam or promotions folder.
          </p>
        </>
      ) : (
        <button
          type="button"
          disabled
          className="min-h-11 w-full border border-[var(--bsj-border-strong)] bg-[var(--bsj-bg-subtle)] px-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-muted)]"
        >
          Email signup coming soon
        </button>
      )}
    </div>
  );
}
