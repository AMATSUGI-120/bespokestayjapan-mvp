'use client';

import { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    LiteAPIPayment: new (config: any) => { handlePayment: () => void };
  }
}

interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface StayPaymentModalProps {
  hotelName: string;
  liteapiId: string;
  offerId: string;
  initialPrice: number;
  currency: string;
  boardLabel: string;
  refundable: boolean;
  cancelDeadline: string | null;
  checkin: string;
  checkout: string;
  onClose: () => void;
}

type Step = 'guest_info' | 'confirm' | 'payment';

function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

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

export default function StayPaymentModal({
  hotelName,
  liteapiId: _liteapiId,
  offerId,
  initialPrice,
  currency,
  boardLabel,
  refundable,
  cancelDeadline,
  checkin,
  checkout,
  onClose,
}: StayPaymentModalProps) {
  const [step, setStep] = useState<Step>('guest_info');
  const [guestInfo, setGuestInfo] = useState<GuestInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [prebookId, setPrebookId] = useState<string | null>(null);
  const [secretKey, setSecretKey] = useState<string | null>(null);
  const [transactionId, setTransactionId] = useState<string | null>(null);

  const [sdkLoading, setSdkLoading] = useState(false);
  const [sdkError, setSdkError] = useState<string | null>(null);
  const sdkInitialized = useRef(false);

  const cancelDisplay = toJST(cancelDeadline);

  const STEPS: Step[] = ['guest_info', 'confirm', 'payment'];
  const stepIndex = STEPS.indexOf(step);

  const stepLabel =
    step === 'guest_info' ? 'Guest information' :
    step === 'confirm'    ? 'Confirm booking'   :
    'Secure payment';

  // SDK initialization — fires when step becomes 'payment'
  useEffect(() => {
    if (step !== 'payment' || !secretKey || !transactionId || sdkInitialized.current) return;

    if (!prebookId) {
      setSdkError('Booking session error: missing booking ID. Please go back and try again.');
      return;
    }

    sdkInitialized.current = true;
    setSdkLoading(true);
    setSdkError(null);

    // sessionStorage format consumed by BookingSuccessClient.tsx
    sessionStorage.setItem(
      `liteapi_booking_${transactionId}`,
      JSON.stringify({ prebookId, transactionId, guestInfo })
    );

    const initSdk = (apiKey: string) => {
      if (!apiKey) {
        setSdkError('Payment system error: API key is not configured.');
        setSdkLoading(false);
        return;
      }
      if (!secretKey) {
        setSdkError('Payment system error: session key missing. Please try again.');
        setSdkLoading(false);
        return;
      }

      const liteAPIConfig = {
        apiKey,
        publicKey: apiKey,
        secretKey,
        transactionId,
        targetElement: '#liteapi-payment-form',
        returnUrl: `${window.location.origin}/booking/success?tid=${transactionId}`,
      };

      const tryMount = (attemptsLeft: number) => {
        const el = document.getElementById('liteapi-payment-form');
        if (!el) {
          if (attemptsLeft > 0) { setTimeout(() => tryMount(attemptsLeft - 1), 400); return; }
          setSdkError('Payment system error: payment container not found. Please try again.');
          setSdkLoading(false);
          return;
        }
        if (el.childElementCount > 0) {
          setSdkLoading(false);
          return;
        }
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          new window.LiteAPIPayment(liteAPIConfig as any).handlePayment();
          setSdkLoading(false);
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 150);
        } catch (err: unknown) {
          const msg =
            err instanceof Error
              ? `Payment system error: ${err.message}`
              : 'Payment system error: failed to initialize.';
          setSdkError(msg);
          setSdkLoading(false);
        }
      };

      setTimeout(() => tryMount(3), 800);
    };

    const loadAndInit = () => {
      const apiKey = process.env.NEXT_PUBLIC_LITEAPI_ENV === 'sandbox' ? 'sandbox' : 'live';

      if (document.querySelector('script[data-liteapi-sdk]')) {
        if (!window.LiteAPIPayment) {
          setSdkError('Payment system error: SDK not ready. Please try again.');
          setSdkLoading(false);
          return;
        }
        initSdk(apiKey);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://payment-wrapper.liteapi.travel/dist/liteAPIPayment.js?v=a1';
      script.setAttribute('data-liteapi-sdk', 'true');
      script.onload = () => initSdk(apiKey);
      script.onerror = () => {
        setSdkError('Payment system error: failed to load payment script.');
        setSdkLoading(false);
      };
      document.head.appendChild(script);
    };

    loadAndInit();
  }, [step, secretKey, transactionId, prebookId, guestInfo]);

  const handleGuestInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStep('confirm');
  };

  const handleProceedToPayment = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/prebook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ offerId, margin: 15 }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Prebook failed');

      const newPrebookId: string = data.prebookId;
      const newSecretKey: string | null = data.secretKey || null;
      const newTransactionId: string = data.transactionId;

      if (!newPrebookId || !newSecretKey || !newTransactionId) {
        throw new Error('Booking session data is incomplete. Please try again.');
      }

      setPrebookId(newPrebookId);
      setSecretKey(newSecretKey);
      setTransactionId(newTransactionId);

      sdkInitialized.current = false;
      setStep('payment');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget && step !== 'payment') onClose();
      }}
    >
      <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[6px] bg-[var(--bsj-bg-card)] shadow-2xl">

        {/* Header */}
        <div className="flex items-start justify-between border-b border-[var(--bsj-border)] px-6 py-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
              {stepLabel}
            </p>
            <p className="mt-1 text-[15px] font-medium text-[var(--bsj-text)]">{hotelName}</p>
          </div>
          {step !== 'payment' && (
            <button
              onClick={onClose}
              aria-label="Close"
              className="ml-4 mt-0.5 text-[20px] font-light leading-none text-[var(--bsj-text-light)] transition-colors hover:text-[var(--bsj-text)]"
            >
              ×
            </button>
          )}
        </div>

        {/* Price summary bar */}
        <div className="border-b border-[var(--bsj-border)] bg-[var(--bsj-bg-subtle)] px-6 py-3">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
              {checkin} → {checkout} · {boardLabel}
            </p>
            <p className="shrink-0 text-[18px] font-medium text-[var(--bsj-text)]">
              {formatPrice(initialPrice, currency)}
            </p>
          </div>
          {refundable && cancelDisplay ? (
            <p className="mt-0.5 text-[11px] text-[var(--bsj-text-muted)]">
              Free cancellation until {cancelDisplay}
            </p>
          ) : !refundable ? (
            <p className="mt-0.5 text-[11px] text-[var(--bsj-text-muted)]">Non-refundable</p>
          ) : null}
        </div>

        {/* Step progress */}
        <div className="flex gap-1 px-6 pt-4">
          {STEPS.map((s, i) => (
            <div
              key={s}
              className={[
                'h-0.5 flex-1 rounded-full transition-colors',
                i <= stepIndex ? 'bg-[var(--bsj-primary)]' : 'bg-[var(--bsj-border)]',
              ].join(' ')}
            />
          ))}
        </div>

        {/* Step 1: Guest info */}
        {step === 'guest_info' && (
          <form onSubmit={handleGuestInfoSubmit} className="flex flex-col gap-4 p-6">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
                  First name
                </label>
                <input
                  type="text"
                  required
                  value={guestInfo.firstName}
                  onChange={(e) => setGuestInfo({ ...guestInfo, firstName: e.target.value })}
                  className="rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg)] px-3 py-2 text-[13px] text-[var(--bsj-text)] focus:outline-none focus:ring-1 focus:ring-[var(--bsj-primary)]"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
                  Last name
                </label>
                <input
                  type="text"
                  required
                  value={guestInfo.lastName}
                  onChange={(e) => setGuestInfo({ ...guestInfo, lastName: e.target.value })}
                  className="rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg)] px-3 py-2 text-[13px] text-[var(--bsj-text)] focus:outline-none focus:ring-1 focus:ring-[var(--bsj-primary)]"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
                Email
              </label>
              <input
                type="email"
                required
                value={guestInfo.email}
                onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
                className="rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg)] px-3 py-2 text-[13px] text-[var(--bsj-text)] focus:outline-none focus:ring-1 focus:ring-[var(--bsj-primary)]"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
                Phone
              </label>
              <input
                type="tel"
                required
                value={guestInfo.phone}
                onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                className="rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg)] px-3 py-2 text-[13px] text-[var(--bsj-text)] focus:outline-none focus:ring-1 focus:ring-[var(--bsj-primary)]"
                placeholder="+81 90 0000 0000"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-[4px] bg-[var(--bsj-primary)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--bsj-primary-hover)]"
            >
              Continue
            </button>
          </form>
        )}

        {/* Step 2: Confirm */}
        {step === 'confirm' && (
          <div className="flex flex-col gap-4 p-6">
            {isLoading ? (
              <div className="flex flex-col items-center gap-4 py-10">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--bsj-primary)] border-t-transparent" />
                <p className="text-[13px] text-[var(--bsj-text-muted)]">Confirming availability…</p>
              </div>
            ) : (
              <>
                <dl className="space-y-2.5 rounded-[4px] border border-[var(--bsj-border)] p-4 text-[13px]">
                  <div className="flex justify-between gap-4">
                    <dt className="text-[var(--bsj-text-light)]">Guest</dt>
                    <dd className="text-right text-[var(--bsj-text)]">
                      {guestInfo.firstName} {guestInfo.lastName}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[var(--bsj-text-light)]">Email</dt>
                    <dd className="text-right text-[var(--bsj-text)]">{guestInfo.email}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[var(--bsj-text-light)]">Phone</dt>
                    <dd className="text-right text-[var(--bsj-text)]">{guestInfo.phone}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-[var(--bsj-border)] pt-2.5">
                    <dt className="text-[var(--bsj-text-light)]">Dates</dt>
                    <dd className="text-right text-[var(--bsj-text)]">{checkin} → {checkout}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[var(--bsj-text-light)]">Meal plan</dt>
                    <dd className="text-right text-[var(--bsj-text)]">{boardLabel}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-[var(--bsj-text-light)]">Cancellation</dt>
                    <dd className="text-right text-[var(--bsj-text)]">
                      {refundable
                        ? cancelDisplay
                          ? `Free until ${cancelDisplay}`
                          : 'Refundable'
                        : 'Non-refundable'}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-[var(--bsj-border)] pt-2.5">
                    <dt className="font-semibold text-[var(--bsj-text)]">Total</dt>
                    <dd className="text-[17px] font-medium text-[var(--bsj-text)]">
                      {formatPrice(initialPrice, currency)}
                    </dd>
                  </div>
                </dl>

                {error && (
                  <p className="rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg-subtle)] px-4 py-3 text-[12px] text-[var(--bsj-text-muted)]">
                    {error}
                  </p>
                )}

                <button
                  onClick={handleProceedToPayment}
                  disabled={isLoading}
                  className="w-full rounded-[4px] bg-[var(--bsj-primary)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--bsj-primary-hover)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Proceed to payment
                </button>

                <button
                  onClick={() => { setError(null); setStep('guest_info'); }}
                  className="text-[11px] text-[var(--bsj-text-light)] transition-colors hover:text-[var(--bsj-text)]"
                >
                  Back
                </button>
              </>
            )}
          </div>
        )}

        {/* Step 3: Payment SDK */}
        {step === 'payment' && (
          <div className="p-6">
            {sdkError ? (
              <div className="rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg-subtle)] p-5 text-center">
                <p className="text-[13px] text-[var(--bsj-text-muted)]">{sdkError}</p>
                <button
                  onClick={() => {
                    sdkInitialized.current = false;
                    setSdkError(null);
                    setSdkLoading(false);
                    setStep('confirm');
                  }}
                  className="mt-3 text-[11px] text-[var(--bsj-text-light)] underline transition-colors hover:text-[var(--bsj-text)]"
                >
                  Go back
                </button>
              </div>
            ) : (
              <>
                {sdkLoading && (
                  <div className="flex flex-col items-center gap-4 py-10">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--bsj-primary)] border-t-transparent" />
                    <p className="text-[13px] text-[var(--bsj-text-muted)]">Preparing payment form…</p>
                  </div>
                )}
                {/* SDK-only container — no React children so reconciliation never touches SDK-injected DOM */}
                <div
                  id="liteapi-payment-form"
                  style={{ width: '100%', minHeight: '300px', display: 'block' }}
                />
                {!sdkLoading && (
                  <p className="mt-4 text-center text-[10px] text-[var(--bsj-text-light)]">
                    Your card information is encrypted and never stored on our servers.
                  </p>
                )}
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
