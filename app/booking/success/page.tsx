import { Suspense } from 'react';
import BookingSuccessClient from './BookingSuccessClient';

export default function BookingSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[var(--bsj-bg)] px-6 py-20">
          <div className="mx-auto flex min-h-[60vh] max-w-xl items-center justify-center">
            <div className="w-full border-t border-b border-[var(--bsj-border)] py-12 text-center">
              <div className="mx-auto mb-6 h-8 w-8 animate-spin rounded-full border border-[var(--bsj-border-strong)] border-t-[var(--bsj-primary)]" />
              <p className="text-sm font-medium text-[var(--bsj-text-muted)]">
                Confirming your booking
              </p>
            </div>
          </div>
        </main>
      }
    >
      <BookingSuccessClient />
    </Suspense>
  );
}
