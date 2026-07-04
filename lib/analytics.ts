import posthog from 'posthog-js';

// Keys that must never be sent to PostHog — personal / payment / credential data
const BLOCKED_KEYS = new Set([
  'secretKey',
  'transactionId',
  'email',
  'phone',
  'firstName',
  'lastName',
  'address',
  'passport',
  'bookingId',
  'confirmationCode',
  'cardNumber',
  'cvv',
]);

function sanitize(props: Record<string, unknown>): Record<string, unknown> {
  const safe: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props)) {
    if (!BLOCKED_KEYS.has(key)) {
      safe[key] = value;
    }
  }
  return safe;
}

export function trackEvent(event: string, props?: Record<string, unknown>): void {
  try {
    posthog.capture(event, props ? sanitize(props) : undefined);
  } catch {
    // Never surface analytics errors to users
  }
}

export function stopSessionRecording(): void {
  try {
    posthog.stopSessionRecording();
  } catch {
    // ignore
  }
}

// ── BSJ event helpers ──────────────────────────────────────────────────────

export function trackHotelDetailView(props: {
  hotel_id: string;
  hotel_name: string;
  city?: string | null;
}) {
  trackEvent('bsj_hotel_detail_view', {
    hotel_id: props.hotel_id,
    hotel_name: props.hotel_name,
    city: props.city ?? null,
  });
}

export function trackExternalSourceLinkClick(props: {
  hotel_id: string;
  provider?: string;
  is_affiliate?: boolean;
}) {
  trackEvent('bsj_external_source_link_click', props);
}
