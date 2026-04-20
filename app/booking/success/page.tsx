export default function BookingSuccess() {
  return (
    <main className="min-h-screen bg-teal-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-extrabold text-teal-700 mb-3">Booking Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Your reservation has been successfully completed. A confirmation email will be sent to your inbox.
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
