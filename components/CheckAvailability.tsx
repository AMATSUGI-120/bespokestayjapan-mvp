'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

const PLANS_PAGE_SIZE = 6;
import StayBookingCta from './StayBookingCta';
import StayPaymentModal from './StayPaymentModal';

// ── Types ──────────────────────────────────────────────────────────────────

interface TaxesAndFees {
  amount: number;
  included: boolean;
  description: string;
}

interface RatePlan {
  offerId: string;
  roomName: string | null;
  planName: string;
  totalPrice: number;
  currency: string;
  taxesAndFees: TaxesAndFees | null;
  boardType: string;
  boardLabel: string;
  refundable: boolean;
  cancellationPolicy: string;
  cancelDeadline: string | null;
  remarks: string | null;
  index: number;
}

interface RatesApiResponse {
  available: boolean;
  plans: RatePlan[];
}

interface PrebookResult {
  success: boolean;
  error?: string;
  prebookId?: string;
  totalPrice?: number;
  currency?: string;
  boardType?: string;
  boardLabel?: string;
  refundable?: boolean;
  cancelDeadline?: string | null;
  cancelTimezone?: string;
  cancellationChanged?: boolean;
  boardChanged?: boolean;
  priceChanged?: boolean;
  priceDifferencePercent?: number;
  transactionIdPresent?: boolean;
  secretKeyPresent?: boolean;
  transactionIdSupported?: boolean;
  paymentTypes?: string[];
}

interface CheckAvailabilityProps {
  liteapiId: string;
  hotelName: string;
  bookingUrl: string | null;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function getDefaultDates() {
  const now = new Date();
  const ci = new Date(now);
  ci.setDate(ci.getDate() + 30);
  const co = new Date(ci);
  co.setDate(co.getDate() + 1);
  return {
    checkin: ci.toISOString().slice(0, 10),
    checkout: co.toISOString().slice(0, 10),
  };
}

// Returns absolute diff in minutes between two GMT deadline strings ("YYYY-MM-DD HH:MM:SS")
function cancelDiffMinutes(a: string | null, b: string | null): number {
  if (!a || !b) return Infinity;
  try {
    const da = new Date(a.replace(' ', 'T') + 'Z');
    const db = new Date(b.replace(' ', 'T') + 'Z');
    if (isNaN(da.getTime()) || isNaN(db.getTime())) return Infinity;
    return Math.abs(db.getTime() - da.getTime()) / 60_000;
  } catch {
    return Infinity;
  }
}

// LiteAPI returns GMT; convert to JST for display
function toJST(gmtDateStr: string | null): string | null {
  if (!gmtDateStr) return null;
  try {
    const d = new Date(gmtDateStr.replace(' ', 'T') + 'Z');
    if (isNaN(d.getTime())) return gmtDateStr;
    return (
      d.toLocaleString('en-US', {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }) + ' JST'
    );
  } catch {
    return gmtDateStr;
  }
}

function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

// ── PlanCard ───────────────────────────────────────────────────────────────

function PlanCard({
  plan,
  onSelect,
  isSelected,
  isLoading,
  prebookDone,
}: {
  plan: RatePlan;
  onSelect: () => void;
  isSelected: boolean;
  isLoading: boolean;
  prebookDone: boolean;
}) {
  const cancelDisplay = toJST(plan.cancelDeadline);
  const taxLine = plan.taxesAndFees
    ? ` (${plan.taxesAndFees.description} ${formatPrice(plan.taxesAndFees.amount, plan.currency)}${plan.taxesAndFees.included ? ' incl.' : ' excl.'})`
    : '';

  let buttonLabel = 'Select plan';
  if (isSelected && isLoading) buttonLabel = 'Confirming…';
  else if (isSelected && prebookDone) buttonLabel = 'Plan selected';

  return (
    <div
      className={[
        'rounded-[4px] border bg-[var(--bsj-bg-card)] p-5 transition-colors',
        isSelected && prebookDone
          ? 'border-[var(--bsj-primary)]'
          : 'border-[var(--bsj-border)]',
      ].join(' ')}
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
          {plan.planName}
        </p>
        <p className="text-[18px] font-medium text-[var(--bsj-text)]">
          {formatPrice(plan.totalPrice, plan.currency)}
        </p>
      </div>

      {plan.roomName && (
        <p className="mt-1.5 text-[14px] leading-[1.6] text-[var(--bsj-text)]">
          {plan.roomName}
        </p>
      )}

      <p className="mt-2 text-[12px] text-[var(--bsj-text-muted)]">
        {plan.boardLabel}{taxLine}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {plan.refundable ? (
          <span className="inline-flex rounded-[3px] bg-[var(--bsj-confirmed-bg)] px-2 py-0.5 text-[11px] font-semibold text-[var(--bsj-confirmed)]">
            Refundable
          </span>
        ) : (
          <span className="inline-flex rounded-[3px] bg-[var(--bsj-ask-bg)] px-2 py-0.5 text-[11px] font-semibold text-[var(--bsj-ask)]">
            Non-refundable
          </span>
        )}
        {cancelDisplay && plan.refundable && (
          <span className="text-[11px] text-[var(--bsj-text-muted)]">
            Free cancellation until {cancelDisplay}
          </span>
        )}
      </div>

      {plan.remarks && (
        <p className="mt-2.5 text-[12px] leading-[1.65] text-[var(--bsj-text-muted)]">
          {plan.remarks}
        </p>
      )}

      <button
        onClick={onSelect}
        disabled={isLoading || (isSelected && prebookDone)}
        className={[
          'mt-4 w-full rounded-[4px] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors',
          isSelected && prebookDone
            ? 'border border-[var(--bsj-primary)] bg-[var(--bsj-bg)] text-[var(--bsj-primary)] cursor-default'
            : isLoading
            ? 'border border-[var(--bsj-border)] bg-[var(--bsj-bg)] text-[var(--bsj-text-light)] cursor-wait'
            : 'bg-[var(--bsj-primary)] text-white hover:bg-[var(--bsj-primary-hover)]',
        ].join(' ')}
        data-offer-id={plan.offerId}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

// ── BookingConfirmedCard ────────────────────────────────────────────────────

function BookingConfirmedCard({
  result,
  checkin,
  checkout,
  ratesCancelDeadline,
  onProceedToPayment,
}: {
  result: PrebookResult;
  checkin: string;
  checkout: string;
  ratesCancelDeadline: string | null;
  onProceedToPayment: () => void;
}) {
  const cancelDisplay = toJST(result.cancelDeadline ?? null);
  // Suppress cancellation warning when the shift is a minor rounding artifact (≤5 min)
  const cancelShiftIsMinor =
    cancelDiffMinutes(ratesCancelDeadline, result.cancelDeadline ?? null) <= 5;
  const showCancelWarning = result.cancellationChanged && !cancelShiftIsMinor;
  const hasChanges = showCancelWarning || result.boardChanged || result.priceChanged;

  return (
    <div className="mt-6 rounded-[4px] border border-[var(--bsj-primary)] bg-[var(--bsj-bg-card)] p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-primary)]">
        Booking terms confirmed
      </p>

      <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
            Dates
          </dt>
          <dd className="mt-0.5 text-[14px] text-[var(--bsj-text)]">
            {checkin} → {checkout}
          </dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
            Final price
          </dt>
          <dd className="mt-0.5 text-[18px] font-medium text-[var(--bsj-text)]">
            {formatPrice(result.totalPrice ?? 0, result.currency ?? 'JPY')}
          </dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
            Meal plan
          </dt>
          <dd className="mt-0.5 text-[14px] text-[var(--bsj-text)]">
            {result.boardLabel}
          </dd>
        </div>
        <div>
          <dt className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
            Cancellation
          </dt>
          <dd className="mt-0.5 text-[14px] text-[var(--bsj-text)]">
            {result.refundable ? (
              cancelDisplay ? (
                <>Free until {cancelDisplay}</>
              ) : (
                'Refundable'
              )
            ) : (
              'Non-refundable'
            )}
          </dd>
        </div>
      </dl>

      {hasChanges && (
        <div className="mt-4 rounded-[3px] border border-[var(--bsj-border)] bg-[var(--bsj-bg-subtle)] px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
            Terms updated during confirmation
          </p>
          <ul className="mt-1.5 space-y-0.5">
            {showCancelWarning && (
              <li className="text-[12px] text-[var(--bsj-text-muted)]">
                Cancellation deadline was updated — please review the final terms above.
              </li>
            )}
            {result.boardChanged && (
              <li className="text-[12px] text-[var(--bsj-text-muted)]">
                Meal plan was updated during confirmation.
              </li>
            )}
            {result.priceChanged && (
              <li className="text-[12px] text-[var(--bsj-text-muted)]">
                Price changed by {result.priceDifferencePercent?.toFixed(1)}% during confirmation.
              </li>
            )}
          </ul>
        </div>
      )}

      <p className="mt-4 text-[11px] text-[var(--bsj-text-light)]">
        Final price and cancellation terms are confirmed before payment.
      </p>

      <button
        onClick={onProceedToPayment}
        className="mt-4 w-full rounded-[4px] bg-[var(--bsj-primary)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--bsj-primary-hover)]"
      >
        Proceed to payment
      </button>
    </div>
  );
}

// ── CheckAvailability ──────────────────────────────────────────────────────

export default function CheckAvailability({
  liteapiId,
  hotelName,
  bookingUrl,
}: CheckAvailabilityProps) {
  const defaults = getDefaultDates();
  const [checkin, setCheckin] = useState(defaults.checkin);
  const [checkout, setCheckout] = useState(defaults.checkout);
  const [adults, setAdults] = useState(2);

  const [searchStatus, setSearchStatus] = useState<
    'idle' | 'loading' | 'results' | 'unavailable' | 'error'
  >('idle');
  const [plans, setPlans] = useState<RatePlan[]>([]);

  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number | null>(null);
  const [selectedRatesCancelDeadline, setSelectedRatesCancelDeadline] = useState<string | null>(null);
  const [prebookStatus, setPrebookStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [prebookResult, setPrebookResult] = useState<PrebookResult | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PLANS_PAGE_SIZE);
  const confirmedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prebookStatus === 'loading' && confirmedRef.current) {
      confirmedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [prebookStatus]);

  const search = useCallback(async () => {
    if (!checkin || !checkout) return;
    setSearchStatus('loading');
    setPlans([]);
    setSelectedPlanIndex(null);
    setSelectedRatesCancelDeadline(null);
    setPrebookStatus('idle');
    setPrebookResult(null);
    setVisibleCount(PLANS_PAGE_SIZE);

    try {
      const qs = new URLSearchParams({
        checkin,
        checkout,
        adults: String(adults),
        currency: 'JPY',
        guestNationality: 'US',
      });
      const res = await fetch(`/api/stays/${liteapiId}/rates?${qs}`);
      const data: RatesApiResponse = await res.json();

      if (!res.ok || !data.available || data.plans.length === 0) {
        setSearchStatus('unavailable');
      } else {
        const sorted = [...data.plans].sort((a, b) => {
          if (a.totalPrice !== b.totalPrice) return a.totalPrice - b.totalPrice;
          if (a.refundable !== b.refundable) return a.refundable ? -1 : 1;
          return 0;
        });
        setPlans(sorted);
        setSearchStatus('results');
      }
    } catch {
      setSearchStatus('error');
    }
  }, [liteapiId, checkin, checkout, adults]);

  const selectPlan = useCallback(
    async (planIndex: number) => {
      const plan = plans[planIndex];
      if (!plan) return;

      setSelectedPlanIndex(planIndex);
      setSelectedRatesCancelDeadline(plan.cancelDeadline);
      setPrebookStatus('loading');
      setPrebookResult(null);

      try {
        const res = await fetch(`/api/stays/${liteapiId}/prebook`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ offerId: plan.offerId }),
        });
        const data: PrebookResult = await res.json();

        if (!res.ok || !data.success) {
          setPrebookStatus('error');
          setPrebookResult(data);
        } else {
          setPrebookStatus('success');
          setPrebookResult(data);
        }
      } catch {
        setPrebookStatus('error');
      }
    },
    [liteapiId, plans]
  );

  const showFallback =
    searchStatus === 'unavailable' ||
    searchStatus === 'error' ||
    prebookStatus === 'error';

  return (
    <section className="border-t border-[var(--bsj-border)] py-8">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
        Check availability
      </h2>

      <div className="mt-5 flex flex-wrap items-end gap-3">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="ca-checkin"
            className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]"
          >
            Check-in
          </label>
          <input
            id="ca-checkin"
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className="rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-3 py-2 text-[13px] text-[var(--bsj-text)] focus:outline-none focus:ring-1 focus:ring-[var(--bsj-primary)]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="ca-checkout"
            className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]"
          >
            Check-out
          </label>
          <input
            id="ca-checkout"
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-3 py-2 text-[13px] text-[var(--bsj-text)] focus:outline-none focus:ring-1 focus:ring-[var(--bsj-primary)]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="ca-adults"
            className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]"
          >
            Adults
          </label>
          <input
            id="ca-adults"
            type="number"
            min={1}
            max={9}
            value={adults}
            onChange={(e) => setAdults(Math.max(1, Number(e.target.value)))}
            className="w-20 rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-3 py-2 text-[13px] text-[var(--bsj-text)] focus:outline-none focus:ring-1 focus:ring-[var(--bsj-primary)]"
          />
        </div>

        <button
          onClick={search}
          disabled={searchStatus === 'loading' || !checkin || !checkout}
          className="rounded-[4px] bg-[var(--bsj-primary)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--bsj-primary-hover)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {searchStatus === 'loading' ? 'Searching…' : 'Search availability'}
        </button>
      </div>

      {searchStatus === 'loading' && (
        <p className="mt-6 text-[13px] text-[var(--bsj-text-muted)]">
          Checking rates…
        </p>
      )}

      {searchStatus === 'results' && plans.length > 0 && (
        <div className="mt-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {plans.slice(0, visibleCount).map((plan, i) => (
              <PlanCard
                key={plan.offerId || i}
                plan={plan}
                onSelect={() => selectPlan(i)}
                isSelected={selectedPlanIndex === i}
                isLoading={selectedPlanIndex === i && prebookStatus === 'loading'}
                prebookDone={selectedPlanIndex === i && prebookStatus === 'success'}
              />
            ))}
          </div>

          <div className="mt-5">
            <p className="text-[11px] text-[var(--bsj-text-light)]">
              Showing {Math.min(visibleCount, plans.length)} of {plans.length} plan{plans.length !== 1 ? 's' : ''}
            </p>
            {plans.length > visibleCount && (
              <button
                onClick={() => setVisibleCount((c) => c + PLANS_PAGE_SIZE)}
                className="mt-3 w-full rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] transition-colors hover:border-[var(--bsj-text-light)] hover:text-[var(--bsj-text)] sm:w-[280px]"
              >
                Show {Math.min(PLANS_PAGE_SIZE, plans.length - visibleCount)} more plans
              </button>
            )}
          </div>

          {selectedPlanIndex === null && (
            <p className="mt-4 text-[11px] text-[var(--bsj-text-light)]">
              Final price and cancellation terms are confirmed before payment.
            </p>
          )}

          {selectedPlanIndex !== null && (
            <div ref={confirmedRef} style={{ scrollMarginTop: '80px' }}>
              {prebookStatus === 'loading' && (
                <div className="mt-6 rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
                    Confirming your plan…
                  </p>
                  <p className="mt-2 text-[13px] leading-[1.7] text-[var(--bsj-text-muted)]">
                    Checking availability and locking in your rate.
                  </p>
                </div>
              )}

              {prebookStatus === 'success' && prebookResult && (
                <BookingConfirmedCard
                  result={prebookResult}
                  checkin={checkin}
                  checkout={checkout}
                  ratesCancelDeadline={selectedRatesCancelDeadline}
                  onProceedToPayment={() => setModalOpen(true)}
                />
              )}

              {prebookStatus === 'error' && (
                <div className="mt-6">
                  <p className="text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
                    We could not confirm this plan. Please try another date or use the booking link below.
                  </p>
                  <div className="mt-4">
                    <StayBookingCta bookingUrl={bookingUrl} liteapiId={liteapiId} />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {(searchStatus === 'unavailable' || searchStatus === 'error') && (
        <div className="mt-6">
          <p className="text-[14px] leading-[1.75] text-[var(--bsj-text-muted)]">
            Online rates are not available here yet. Please use the booking link below.
          </p>
          <div className="mt-4">
            <StayBookingCta bookingUrl={bookingUrl} liteapiId={liteapiId} />
          </div>
        </div>
      )}

      {modalOpen &&
        prebookResult &&
        selectedPlanIndex !== null &&
        plans[selectedPlanIndex] && (
          <StayPaymentModal
            hotelName={hotelName}
            liteapiId={liteapiId}
            offerId={plans[selectedPlanIndex].offerId}
            initialPrice={prebookResult.totalPrice ?? plans[selectedPlanIndex].totalPrice}
            currency={prebookResult.currency ?? plans[selectedPlanIndex].currency}
            boardLabel={prebookResult.boardLabel ?? plans[selectedPlanIndex].boardLabel}
            refundable={prebookResult.refundable ?? plans[selectedPlanIndex].refundable}
            cancelDeadline={prebookResult.cancelDeadline ?? plans[selectedPlanIndex].cancelDeadline}
            checkin={checkin}
            checkout={checkout}
            onClose={() => setModalOpen(false)}
          />
        )}
    </section>
  );
}
