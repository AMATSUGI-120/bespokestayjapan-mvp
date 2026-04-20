'use client';

import { useState, useEffect, useRef } from 'react';
import { HotelResult, GuestInfo } from '@/lib/types';

declare global {
  interface Window {
    LiteAPIPayment: new (config: {
      publicKey: string;
      secretKey: string;
      targetElement: string;
      returnUrl: string;
    }) => { handlePayment: () => void };
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
  const sdkInitialized = useRef(false);

  useEffect(() => {
    if (step !== 'payment' || !secretKey || !transactionId || sdkInitialized.current) return;
    sdkInitialized.current = true;

    sessionStorage.setItem(
      `liteapi_booking_${transactionId}`,
      JSON.stringify({ prebookId, transactionId, guestInfo })
    );

    const init = () => {
      const pubKey = process.env.NEXT_PUBLIC_LITEAPI_KEY ?? '';
      console.log('[PaymentModal] SDK init — publicKey:', pubKey ? pubKey.substring(0, 10) + '...' : '(EMPTY! NEXT_PUBLIC_LITEAPI_KEY is not set)', '| secretKey:', secretKey ? secretKey.substring(0, 8) + '...' : '(EMPTY!)', '| transactionId:', transactionId);

      if (!pubKey) {
        console.error('[PaymentModal] FATAL: NEXT_PUBLIC_LITEAPI_KEY is undefined. Check Vercel env vars (must be a live_... key for Production).');
        return;
      }
      if (!secretKey) {
        console.error('[PaymentModal] FATAL: secretKey is empty. /api/prebook did not return a secretKey — check that usePaymentSdk:true is being sent and the LiteAPI account supports it.');
        return;
      }

      const liteAPIConfig = {
        publicKey: pubKey,
        secretKey: secretKey,
        targetElement: '#liteapi-payment-form',
        returnUrl: `${window.location.origin}/booking/success?tid=${transactionId}`,
      };
      console.log('[PaymentModal] liteAPIConfig:', JSON.stringify(liteAPIConfig, null, 2));
      new window.LiteAPIPayment(liteAPIConfig).handlePayment();
    };

    if (document.querySelector('script[data-liteapi-sdk]')) {
      init();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://payment-wrapper.liteapi.travel/dist/liteAPIPayment.js?v=a1';
    script.setAttribute('data-liteapi-sdk', 'true');
    script.onload = init;
    document.head.appendChild(script);
  }, [step, secretKey, transactionId, prebookId, guestInfo]);

  const handlePrebook = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/prebook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ offerId: hotel.liteapiOfferId, margin: hotel.margin }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Prebook failed');

      console.log('[PaymentModal] /api/prebook response:', {
        prebookId: data.prebookId || '(empty)',
        secretKey: data.secretKey ? data.secretKey.substring(0, 8) + '...' : '(EMPTY!)',
        transactionId: data.transactionId || '(empty)',
        totalPrice: data.totalPrice,
      });

      setPrebookId(data.prebookId);
      setSecretKey(data.secretKey || null);
      setTransactionId(data.transactionId);
      if (data.totalPrice > 0) setConfirmedPrice(data.totalPrice);
      setStep('confirm');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleProceedToPayment = () => {
    sdkInitialized.current = false;
    setStep('payment');
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
        {step === 'prebook' && (
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
              {isLoading
                ? 'Verifying your special price with the hotel... (Est. 5–10 sec)'
                : 'Continue to Payment'}
            </button>
          </form>
        )}

        {/* Step 2: Confirm Booking */}
        {step === 'confirm' && (
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
            <p className="text-sm text-gray-500 text-center mb-5">
              Enter your card details below. Your payment is processed securely by Stripe.
            </p>

            <div
              id="liteapi-payment-form"
              className="min-h-[220px] rounded-xl border border-gray-100 bg-gray-50 p-2"
            />

            <p className="text-xs text-gray-400 text-center mt-5">
              🔒 Your card information is encrypted and never stored on our servers.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
