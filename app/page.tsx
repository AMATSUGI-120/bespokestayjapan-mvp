'use client';

import { useState } from 'react';
import SearchForm from '@/components/SearchForm';
import HotelList from '@/components/HotelList';
import PaymentModal from '@/components/PaymentModal';
import { SearchConditions, HotelResult } from '@/lib/types';

export default function Home() {
  const [results, setResults] = useState<HotelResult[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<HotelResult | null>(null);
  const [lastGuests, setLastGuests] = useState<number>(2);

  const handleSearch = async (conditions: SearchConditions) => {
    setLastGuests(conditions.guests);
    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(conditions),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? 'Search failed');
      }

      setResults(data.hotels);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero */}
      <section className="bg-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-200 text-sm font-semibold uppercase tracking-widest mb-3">
            BespokeStay Japan
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Find Pet-Friendly Hotels<br />in Japan
          </h1>
          <p className="text-teal-100 text-lg md:text-xl max-w-xl mx-auto">
            Verified conditions. Family-friendly. Any size dog.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-5xl mx-auto px-4 -mt-8">
        <SearchForm onSearch={handleSearch} isLoading={isLoading} />
      </section>

      {/* Results Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        {isLoading && (
          <div className="text-center py-16 text-gray-500">
            <div className="text-5xl mb-4 animate-bounce">🐾</div>
            <p className="text-lg font-medium">Searching for the perfect stay...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl text-center">
            {error}
          </div>
        )}

        {!isLoading && results !== null && (
          <HotelList hotels={results} onBookNow={setSelectedHotel} guests={lastGuests} />
        )}

        {!isLoading && results === null && !error && (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-4">🐕</div>
            <p className="text-lg">Enter your travel details above to find pet-friendly hotels.</p>
          </div>
        )}
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 border-t border-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl mb-2">🔍</p>
            <p className="font-bold text-gray-800">Verified Pet Policies</p>
            <p className="text-gray-500 text-sm mt-1">Every hotel is manually verified for pet conditions</p>
          </div>
          <div>
            <p className="text-3xl mb-2">💳</p>
            <p className="font-bold text-gray-800">Secure Payment</p>
            <p className="text-gray-500 text-sm mt-1">Powered by Stripe via LiteAPI</p>
          </div>
          <div>
            <p className="text-3xl mb-2">🌏</p>
            <p className="font-bold text-gray-800">English Support</p>
            <p className="text-gray-500 text-sm mt-1">Hotels with English-speaking staff</p>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {selectedHotel && (
        <PaymentModal
          hotel={selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
      )}
    </main>
  );
}
