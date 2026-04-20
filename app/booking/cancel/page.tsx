export default function BookingCancel() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
        <div className="text-6xl mb-4">😿</div>
        <h1 className="text-3xl font-extrabold text-gray-700 mb-3">Booking Cancelled</h1>
        <p className="text-gray-500 mb-6">
          Your payment was not completed. No charges have been made.
        </p>
        <a
          href="/"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          Try Again
        </a>
      </div>
    </main>
  );
}
