import { Suspense } from 'react';
import BookingSuccessClient from './BookingSuccessClient';

export default function BookingSuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-teal-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
            <div className="animate-spin text-4xl mb-4">⏳</div>
            <p className="text-gray-600 font-semibold">Confirming your booking...</p>
          </div>
        </main>
      }
    >
      <BookingSuccessClient />
    </Suspense>
  );
}
