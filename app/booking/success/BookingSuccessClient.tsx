'use client';

import { useEffect, useRef, useState } from 'react';
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
  const bookingCalledRef = useRef(false);

  useEffect(() => {
    if (bookingCalledRef.current) return;
    bookingCalledRef.current = true;

    let controller: AbortController | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const doCleanup = () => {
      if (timeoutId !== null) clearTimeout(timeoutId);
      controller?.abort();
    };

    const tid = searchParams.get('tid');
    if (!tid) {
      setError('Invalid booking link — no transaction ID found.');
      setStatus('error');
      return doCleanup;
    }

    // H2: リロード二重予約防止 — 成功済みならAPIを再呼び出しせず確認画面を表示
    const confirmedRaw = sessionStorage.getItem(`liteapi_confirmed_${tid}`);
    if (confirmedRaw) {
      try {
        const confirmed = JSON.parse(confirmedRaw);
        setBookingId(confirmed.bookingId ?? null);
        setConfirmationNumber(confirmed.confirmationNumber ?? null);
        setStatus('confirmed');
        return doCleanup;
      } catch {
        // corrupted — fall through to normal flow
      }
    }

    const raw = sessionStorage.getItem(`liteapi_booking_${tid}`);
    if (!raw) {
      setError('Booking session expired or not found. Please try again from the search page.');
      setStatus('error');
      return doCleanup;
    }

    let session: BookingSession;
    try {
      session = JSON.parse(raw);
    } catch {
      setError('Booking data is corrupted. Please try again.');
      setStatus('error');
      return doCleanup;
    }

    controller = new AbortController();
    timeoutId = setTimeout(() => controller!.abort(), 30000);

    fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prebookId: session.prebookId,
        guestInfo: session.guestInfo,
        transactionId: session.transactionId,
      }),
      signal: controller.signal,
    })
      .then(async (res) => {
        if (timeoutId !== null) { clearTimeout(timeoutId); timeoutId = null; }
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? `Booking failed (HTTP ${res.status})`);
        return data;
      })
      .then((data) => {
        if (data.bookingId) {
          // 成功済みフラグを保存してリロード時の二重予約を防止
          sessionStorage.setItem(
            `liteapi_confirmed_${tid}`,
            JSON.stringify({ bookingId: data.bookingId, confirmationNumber: data.confirmationNumber ?? null })
          );
          sessionStorage.removeItem(`liteapi_booking_${tid}`);
          setBookingId(data.bookingId);
          setConfirmationNumber(data.confirmationNumber ?? null);
          setStatus('confirmed');
        } else {
          throw new Error(data.error ?? 'Booking confirmation failed');
        }
      })
      .catch((err: Error) => {
        if (timeoutId !== null) { clearTimeout(timeoutId); timeoutId = null; }
        if (err.name === 'AbortError') {
          setError('Request timed out (30s). Please contact support with your booking reference.');
        } else {
          setError(err.message);
        }
        setStatus('error');
      });

    return doCleanup;
  }, [searchParams]);

  if (status === 'loading') {
    return (
      <main className="min-h-screen bg-[var(--bsj-bg)] px-6 py-20">
        <div className="mx-auto flex min-h-[60vh] max-w-xl items-center justify-center">
          <div className="w-full border-t border-b border-[var(--bsj-border)] py-12 text-center">
            <div className="mx-auto mb-6 h-8 w-8 animate-spin rounded-full border border-[var(--bsj-border-strong)] border-t-[var(--bsj-primary)]" />
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
              Booking
            </p>
            <h1 className="text-2xl font-medium leading-tight text-[var(--bsj-text)]">
              Confirming your booking
            </h1>
            <p className="mt-4 text-sm leading-[1.7] text-[var(--bsj-text-muted)]">
              Please do not close this page.
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (status === 'error') {
    return (
      <main className="min-h-screen bg-[var(--bsj-bg)] px-6 py-20">
        <div className="mx-auto flex min-h-[60vh] max-w-xl items-center justify-center">
          <div className="w-full border-t border-b border-[var(--bsj-border)] py-12 text-center">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
              Booking
            </p>
            <h1 className="text-2xl font-medium leading-tight text-[var(--bsj-text)]">
              Booking could not be confirmed
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-[1.7] text-[var(--bsj-text-muted)]">
              {error}
            </p>
            <a
              href="/stays"
              className="mt-8 inline-flex rounded-[4px] bg-[var(--bsj-primary)] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white no-underline transition-colors hover:bg-[var(--bsj-primary-hover)]"
            >
              Browse stays
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bsj-bg)] px-6 py-20">
      <div className="mx-auto flex min-h-[60vh] max-w-xl items-center justify-center">
        <div className="w-full border-t border-b border-[var(--bsj-border)] py-12 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bsj-text-light)]">
            Booking confirmed
          </p>
          <h1 className="text-[clamp(32px,5vw,56px)] font-medium leading-[1] tracking-[0] text-[var(--bsj-text)]">
            Your stay is confirmed
          </h1>

          {(bookingId || confirmationNumber) && (
            <div className="mx-auto mt-8 inline-block border border-[var(--bsj-border)] px-5 py-4 text-left">
              {confirmationNumber && (
                <p className="text-sm text-[var(--bsj-text-muted)]">
                  Confirmation:{' '}
                  <span className="font-mono font-semibold text-[var(--bsj-text)]">{confirmationNumber}</span>
                </p>
              )}
              {bookingId && (
                <p className="mt-1 text-xs text-[var(--bsj-text-light)]">
                  Booking ID: <span className="font-mono">{bookingId}</span>
                </p>
              )}
            </div>
          )}

          <p className="mx-auto mt-7 max-w-md text-sm leading-[1.75] text-[var(--bsj-text-muted)]">
            Your reservation has been successfully completed.
            A confirmation email will be sent to your inbox shortly.
          </p>

          <a
            href="/stays"
            className="mt-8 inline-flex rounded-[4px] bg-[var(--bsj-primary)] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white no-underline transition-colors hover:bg-[var(--bsj-primary-hover)]"
          >
            Browse stays
          </a>
        </div>
      </div>
    </main>
  );
}
