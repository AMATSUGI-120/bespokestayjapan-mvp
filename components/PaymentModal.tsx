'use client';

import { useState, useEffect, useRef } from 'react';
import { HotelResult, GuestInfo } from '@/lib/types';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    LiteAPIPayment: new (config: any) => { handlePayment: () => void };
  }
}

interface PaymentModalProps {
  hotel: HotelResult;
  onClose: () => void;
}

type Step = 'prebook' | 'confirm' | 'payment';

const STEPS: Step[] = ['prebook', 'confirm', 'payment'];

export default function PaymentModal({ hotel, onClose }: PaymentModalProps) {
  const [guestInfo, setGuestInfo] = useState<GuestInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<Step>('prebook');
  const [prebookId, setPrebookId] = useState<string | null>(null);
  const [secretKey, setSecretKey] = useState<string | null>(null);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [confirmedPrice, setConfirmedPrice] = useState<number>(hotel.finalPrice);
  const [sdkLoading, setSdkLoading] = useState(false);
  const [sdkError, setSdkError] = useState<string | null>(null);
  const sdkInitialized = useRef(false);

  useEffect(() => {
    if (step !== 'payment' || !secretKey || !transactionId || sdkInitialized.current) return;

    if (!prebookId) {
      setSdkError('Booking session error: missing booking ID. Please go back and try again.');
      return;
    }

    sdkInitialized.current = true;
    setSdkLoading(true);
    setSdkError(null);

    sessionStorage.setItem(
      `liteapi_booking_${transactionId}`,
      JSON.stringify({ prebookId, transactionId, guestInfo })
    );

    const initSdk = (apiKey: string) => {
      console.log('[PaymentModal] SDK init — apiKey:', apiKey || '(EMPTY!)', '| secretKey:', secretKey ? '(present)' : '(EMPTY!)', '| transactionId:', transactionId ? '…' + transactionId.slice(-4) : '(empty)');

      if (!apiKey) {
        const msg = 'Payment system error: API key is not configured. Please contact support.';
        console.error('[PaymentModal] FATAL: apiKey is empty.');
        setSdkError(msg);
        setSdkLoading(false);
        return;
      }
      if (!secretKey) {
        const msg = 'Payment system error: session key missing. Please try again.';
        console.error('[PaymentModal] FATAL: secretKey is empty.');
        setSdkError(msg);
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
        console.log(`[PaymentModal] mount attempt (${4 - attemptsLeft}/3) — el:`, el ? `found children=${el.childElementCount} w=${el.offsetWidth}` : 'NULL');

        if (!el) {
          if (attemptsLeft > 0) { setTimeout(() => tryMount(attemptsLeft - 1), 400); return; }
          setSdkError('Payment system error: payment container not found. Please try again.');
          setSdkLoading(false);
          return;
        }

        // Guard: only mount if container is still empty (prevent double-mount)
        if (el.childElementCount > 0) {
          console.log('[PaymentModal] container already has children — skipping mount');
          setSdkLoading(false);
          return;
        }

        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          new window.LiteAPIPayment(liteAPIConfig as any).handlePayment();
          setSdkLoading(false);
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 150);
        } catch (err: unknown) {
          console.error('[PaymentModal] LiteAPIPayment init error:', err);
          const msg = err instanceof Error ? `Payment system error: ${err.message}` : 'Payment system error: failed to initialize. Please try again.';
          setSdkError(msg);
          setSdkLoading(false);
        }
      };

      setTimeout(() => tryMount(3), 800);
    };

    const loadAndInit = async () => {
      const apiKey = process.env.NEXT_PUBLIC_LITEAPI_ENV === 'sandbox' ? 'sandbox' : 'live';
      console.log('[PaymentModal] hostname:', window.location.hostname, '| apiKey:', apiKey);

      if (document.querySelector('script[data-liteapi-sdk]')) {
        if (!window.LiteAPIPayment) {
          console.error('[PaymentModal] LiteAPIPayment not yet loaded — script tag exists but SDK is still loading');
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

  const handlePrebook = (e: React.FormEvent) => {
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
        body: JSON.stringify({
          offerId: hotel.liteapiOfferId,
          margin: hotel.margin,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Prebook failed');

      console.log('[PaymentModal] /api/prebook response:', {
        prebookId: data.prebookId || '(empty)',
        transactionId: data.transactionId || '(empty)',
        totalPrice: data.totalPrice,
      });

      const newPrebookId: string = data.prebookId;
      const newSecretKey: string | null = data.secretKey || null;
      const newTransactionId: string = data.transactionId;

      if (!newPrebookId || !newSecretKey || !newTransactionId) {
        throw new Error('Booking session data is incomplete. Please try again.');
      }

      setPrebookId(newPrebookId);
      setSecretKey(newSecretKey);
      setTransactionId(newTransactionId);
      if (data.totalPrice > 0) setConfirmedPrice(data.totalPrice);

      sdkInitialized.current = false;
      setStep('payment');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const stepIndex = STEPS.indexOf(step);
  const stepTitle =
    step === 'prebook' ? 'Guest Information' :
    step === 'confirm' ? 'Confirm Booking' :
    'Secure Payment';

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget && step !== 'payment') onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{stepTitle}</h2>
            <p className="text-sm text-gray-500 mt-0.5">{hotel.name}</p>
          </div>
          {step !== 'payment' && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-light leading-none"
              aria-label="Close"
            >
              ×
            </button>
          )}
        </div>

        {/* Price Summary */}
        <div className="px-6 py-4 bg-teal-50 border-b">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm">Total (incl. all fees)</span>
            <span className="text-2xl font-extrabold text-teal-700">
              ¥{confirmedPrice.toLocaleString()}
            </span>
          </div>
          {hotel.refundableTag === 'RFN' ? (
            <p className="text-xs text-green-600 font-semibold mt-1">
              ✓ Free cancellation{hotel.cancellationDeadline
                ? ` until ${new Date(hotel.cancellationDeadline).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}`
                : ''}
            </p>
          ) : hotel.refundableTag === 'NRFN' ? (
            <p className="text-xs text-red-500 font-semibold mt-1">✗ Non-refundable</p>
          ) : null}
          <p className="text-xs text-gray-400 mt-1">Secured by Stripe · Processed by LiteAPI</p>
        </div>

        {/* Step Progress Bar */}
        <div className="flex gap-1.5 px-6 pt-4">
          {STEPS.map((s, i) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i <= stepIndex ? 'bg-teal-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Step 1: Guest Information */}
        {step === 'prebook' && isLoading && (
          <div className="p-8 flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-gray-600 text-center">
              Verifying your special price with the hotel…<br />
              <span className="text-gray-400 text-xs">This may take up to 20 seconds</span>
            </p>
          </div>
        )}
        {step === 'prebook' && !isLoading && (
          <form onSubmit={handlePrebook} className="p-6 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-600">First Name</label>
                <input
                  type="text"
                  required
                  value={guestInfo.firstName}
                  onChange={(e) => setGuestInfo({ ...guestInfo, firstName: e.target.value })}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-600">Last Name</label>
                <input
                  type="text"
                  required
                  value={guestInfo.lastName}
                  onChange={(e) => setGuestInfo({ ...guestInfo, lastName: e.target.value })}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">Email</label>
              <input
                type="email"
                required
                value={guestInfo.email}
                onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
                className="border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-600">Phone</label>
              <input
                type="tel"
                required
                value={guestInfo.phone}
                onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                className="border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="+81 90 0000 0000"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-300 text-white font-bold py-3 rounded-xl transition-colors text-base mt-2"
            >
              Continue to Payment
            </button>
          </form>
        )}

        {/* Step 2: Confirm Booking */}
        {step === 'confirm' && isLoading && (
          <div className="p-8 flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-gray-600 text-center">
              Verifying your special price with the hotel…<br />
              <span className="text-gray-400 text-xs">This may take up to 20 seconds</span>
            </p>
          </div>
        )}
        {step === 'confirm' && !isLoading && (
          <div className="p-6 flex flex-col gap-4">
            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-semibold">Name:</span>{' '}
                {guestInfo.firstName} {guestInfo.lastName}
              </p>
              <p><span className="font-semibold">Email:</span> {guestInfo.email}</p>
              <p><span className="font-semibold">Phone:</span> {guestInfo.phone}</p>
            </div>

            <p className="text-sm text-gray-500 text-center">
              Please enter your card details on the next screen to complete payment securely.
            </p>

            {error && (
              <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">{error}</p>
            )}

            <button
              onClick={handleProceedToPayment}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition-colors text-base"
            >
              Proceed to Payment
            </button>

            <button
              onClick={() => setStep('prebook')}
              className="w-full text-gray-500 hover:text-gray-700 text-sm py-2"
            >
              Back
            </button>
          </div>
        )}

        {/* Step 3: LiteAPI Payment SDK */}
        {step === 'payment' && (
          <div className="p-6">
            {sdkError ? (
              <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-center">
                <p className="text-red-600 text-sm font-semibold">{sdkError}</p>
                <button
                  onClick={() => {
                    sdkInitialized.current = false;
                    setSdkError(null);
                    setSdkLoading(false);
                    setStep('confirm');
                  }}
                  className="mt-3 text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Go back
                </button>
              </div>
            ) : (
              <>
                {sdkLoading && (
                  <div className="flex flex-col items-center gap-4 py-8">
                    <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm text-gray-600">Preparing payment form…</p>
                  </div>
                )}
                {/* SDK-only container — no React children so reconciliation never touches SDK-injected DOM */}
                <div
                  id="liteapi-payment-form"
                  style={{ width: '100%', minHeight: '300px', display: 'block' }}
                />
                {!sdkLoading && (
                  <p className="text-xs text-gray-400 text-center mt-4">
                    🔒 Your card information is encrypted and never stored on our servers.
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
