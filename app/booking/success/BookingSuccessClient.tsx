'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { GuestInfo } from '@/lib/types';

type Status = 'loading' | 'confirmed' | 'error';

interface BookingSession {
  prebookId: string;
  transactionId: string;
  guestInfo: GuestInfo;
}

export default function BookingSuccessClient() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>('loading');
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [confirmationNumber, setConfirmationNumber] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const tid = searchParams.get('tid');
    if (!tid) {
      setError('Invalid booking link — no transaction ID found.');
      setStatus('error');
      return;
    }

    const raw = sessionStorage.getItem(`liteapi_booking_${tid}`);
    if (!raw) {
      setError('Booking session expired or not found. Please try again from the search page.');
      setStatus('error');
      return;
    }

    let session: BookingSession;
    try {
      session = JSON.parse(raw);
    } catch {
      setError('Booking data is corrupted. Please try again.');
      setStatus('error');
      return;
    }

    fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prebookId: session.prebookId,
        guestInfo: session.guestInfo,
        transactionId: session.transactionId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.bookingId) {
          sessionStorage.removeItem(`liteapi_booking_${tid}`);
          setBookingId(data.bookingId);
          setConfirmationNumber(data.confirmationNumber ?? null);
          setStatus('confirmed');
        } else {
          throw new Error(data.error ?? 'Booking confirmation failed');
        }
      })
      .catch((err: Error) => {
        setError(err.message);
        setStatus('error');
      });
  }, [searchParams]);

  if (status === 'loading') {
    return (
      <main className="min-h-screen bg-teal-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="animate-spin text-4xl mb-4">⏳</div>
          <h1 className="text-xl font-bold text-gray-700">Confirming your booking...</h1>
          <p className="text-gray-400 text-sm mt-2">Please do not close this page.</p>
        </div>
      </main>
    );
  }

  if (status === 'error') {
    return (
      <main className="min-h-screen bg-teal-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="text-5xl mb-4">⚠️</div>
          <h1 className="text-xl font-bold text-red-600 mb-2">Booking Error</h1>
          <p className="text-gray-500 text-sm mb-6">{error}</p>
          <a
            href="/"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Back to Search
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-teal-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-extrabold text-teal-700 mb-3">Booking Confirmed!</h1>

        {(bookingId || confirmationNumber) && (
          <div className="bg-teal-50 rounded-xl px-5 py-3 mb-5 inline-block">
            {confirmationNumber && (
              <p className="text-sm text-gray-600">
                Confirmation:{' '}
                <span className="font-mono font-bold text-teal-700">{confirmationNumber}</span>
              </p>
            )}
            {bookingId && (
              <p className="text-xs text-gray-400 mt-0.5">
                Booking ID: <span className="font-mono">{bookingId}</span>
              </p>
            )}
          </div>
        )}

        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Your reservation has been successfully completed.
          A confirmation email will be sent to your inbox shortly.
        </p>

        <a
          href="/"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          Back to Search
        </a>
      </div>
    </main>
  );
}
