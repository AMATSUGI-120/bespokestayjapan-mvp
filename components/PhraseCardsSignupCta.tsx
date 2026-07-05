'use client';

import { trackEvent } from '@/lib/analytics';

type PhraseCardsSignupCtaProps = {
  subscribeUrl?: string;
};

export default function PhraseCardsSignupCta({ subscribeUrl }: PhraseCardsSignupCtaProps) {
  if (!subscribeUrl) {
    return (
      <button
        type="button"
        disabled
        className="min-h-11 w-full border border-[var(--bsj-border-strong)] bg-[var(--bsj-bg-subtle)] px-4 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-muted)]"
      >
        Beehiiv signup coming soon
      </button>
    );
  }

  return (
    <a
      href={subscribeUrl}
      target="_blank"
      rel="noreferrer"
      onClick={() =>
        trackEvent('bsj_phrase_cards_signup_click', {
          lead_magnet: 'free_japan_phrase_cards',
          destination: 'beehiiv',
        })
      }
      className="inline-flex min-h-11 w-full items-center justify-center border border-[var(--bsj-border-strong)] bg-[var(--bsj-text)] px-4 text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-bg)] no-underline transition-colors hover:bg-[var(--bsj-primary-hover)]"
    >
      Get the free cards by email
    </a>
  );
}
