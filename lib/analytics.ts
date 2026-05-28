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

export function trackCheckAvailabilityClick(props: {
  hotel_id: string;
  checkin: string;
  checkout: string;
  adults: number;
}) {
  trackEvent('bsj_check_availability_click', props);
}

export function trackRatePlansLoaded(props: {
  hotel_id: string;
  plan_count: number;
  checkin: string;
  checkout: string;
}) {
  trackEvent('bsj_rate_plans_loaded', props);
}

export function trackAvailabilityNoResult(props: {
  hotel_id: string;
  checkin: string;
  checkout: string;
}) {
  trackEvent('bsj_availability_no_result', props);
}

export function trackAvailabilityError(props: {
  hotel_id: string;
  checkin: string;
  checkout: string;
}) {
  trackEvent('bsj_availability_error', props);
}

export function trackDateValidationError(props: {
  hotel_id: string;
  checkin: string;
  checkout: string;
}) {
  trackEvent('bsj_date_validation_error', props);
}

export function trackSelectPlanClick(props: {
  hotel_id: string;
  offer_id: string;
  plan_name: string;
  price: number;
  currency: string;
  refundable: boolean;
}) {
  trackEvent('bsj_select_plan_click', props);
}

export function trackPrebookSuccess(props: {
  hotel_id: string;
  offer_id: string;
  final_price: number;
  currency: string;
  refundable: boolean;
  risk_level?: string;
}) {
  trackEvent('bsj_prebook_success', props);
}

export function trackPrebookFailure(props: {
  hotel_id: string;
  offer_id: string;
}) {
  trackEvent('bsj_prebook_failure', props);
}

export function trackProceedToPaymentClick(props: {
  hotel_id: string;
  offer_id: string;
  price: number;
  currency: string;
}) {
  trackEvent('bsj_proceed_to_payment_click', props);
}

export function trackPaymentModalOpen(props: {
  hotel_id: string;
  offer_id: string;
}) {
  trackEvent('bsj_payment_modal_open', props);
}

export function trackExternalBookingCtaClick(props: {
  hotel_id: string;
}) {
  trackEvent('bsj_external_booking_cta_click', props);
}
