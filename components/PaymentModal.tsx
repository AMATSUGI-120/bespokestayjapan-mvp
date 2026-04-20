'use client';

import { useState } from 'react';
import { HotelResult, GuestInfo } from '@/lib/types';

interface PaymentModalProps {
  hotel: HotelResult;
  onClose: () => void;
}

export default function PaymentModal({ hotel, onClose }: PaymentModalProps) {
  const [guestInfo, setGuestInfo] = useState<GuestInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<'prebook' | 'confirm' | 'redirect'>('prebook');
  const [prebookId, setPrebookId] = useState<string | null>(null);
  const [confirmedPrice, setConfirmedPrice] = useState<number>(hotel.finalPrice);

  const handlePrebook = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Step 1: Prebook
      const prebookRes = await fetch('/api/prebook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          offerId: hotel.liteapiOfferId,
          margin: hotel.margin,
        }),
      });

      const prebookData = await prebookRes.json();

      if (!prebookRes.ok) {
        throw new Error(prebookData.error ?? 'Prebook failed');
      }

      setPrebookId(prebookData.prebookId);
      if (prebookData.totalPrice && prebookData.totalPrice > 0) {
        setConfirmedPrice(prebookData.totalPrice);
      }
      setStep('confirm');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBook = async () => {
    if (!prebookId) return;
    setIsLoading(true);
    setError(null);

    try {
      // Step 2: Book -> paymentUrl取得
      const bookRes = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prebookId,
          guestInfo,
          margin: hotel.margin,
        }),
      });

      const bookData = await bookRes.json();

      if (!bookRes.ok) {
        throw new Error(bookData.error ?? 'Booking failed');
      }

      setStep('redirect');

      // Step 3: Stripe Checkout へリダイレクト
      window.location.href = bookData.paymentUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setStep('prebook');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Complete Booking</h2>
            <p className="text-sm text-gray-500 mt-0.5">{hotel.name}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-light leading-none"
          >
            ×
          </button>
        </div>

        {/* Price Summary */}
        <div className="px-6 py-4 bg-teal-50 border-b">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total (incl. fees)</span>
            <span className="text-2xl font-extrabold text-teal-700">
              ¥{confirmedPrice.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Payment processed by Stripe (via LiteAPI)</p>
        </div>

        {step === 'redirect' ? (
          <div className="p-8 text-center">
            <div className="animate-spin text-4xl mb-4">⏳</div>
            <p className="text-gray-700 font-semibold">Redirecting to Stripe...</p>
          </div>
        ) : step === 'confirm' ? (
          <div className="p-6 flex flex-col gap-4">
            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700 space-y-1">
              <p><span className="font-semibold">Name:</span> {guestInfo.firstName} {guestInfo.lastName}</p>
              <p><span className="font-semibold">Email:</span> {guestInfo.email}</p>
              <p><span className="font-semibold">Phone:</span> {guestInfo.phone}</p>
            </div>

            {error && (
              <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">{error}</p>
            )}

            <p className="text-sm text-gray-500 text-center">
              You will be redirected to Stripe to complete payment securely.
            </p>

            <button
              onClick={handleBook}
              disabled={isLoading}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-300 text-white font-bold py-3 rounded-xl transition-colors text-base"
            >
              {isLoading ? 'Processing...' : 'Confirm & Pay'}
            </button>

            <button
              onClick={() => setStep('prebook')}
              className="w-full text-gray-500 hover:text-gray-700 text-sm py-2"
            >
              Back
            </button>
          </div>
        ) : (
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
              {isLoading ? 'Verifying your special price with the hotel... (Est. 5-10 sec)' : 'Continue to Payment'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
