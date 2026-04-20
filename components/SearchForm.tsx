'use client';

import { useState } from 'react';
import { SearchConditions } from '@/lib/types';

interface SearchFormProps {
  onSearch: (conditions: SearchConditions) => void;
  isLoading?: boolean;
}

export default function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [conditions, setConditions] = useState<SearchConditions>({
    city: 'Kyoto',
    petSize: 'small',
    guests: 2,
    checkin: today,
    checkout: tomorrow,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(conditions);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* City */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-600">City</label>
          <select
            value={conditions.city}
            onChange={(e) => setConditions({ ...conditions, city: e.target.value })}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value="Kyoto">Kyoto</option>
            <option value="Osaka">Osaka</option>
            <option value="Tokyo">Tokyo</option>
          </select>
        </div>

        {/* Pet Size */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-600">Pet Size</label>
          <select
            value={conditions.petSize}
            onChange={(e) =>
              setConditions({
                ...conditions,
                petSize: e.target.value as SearchConditions['petSize'],
              })
            }
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value="small">Small (&lt;7kg)</option>
            <option value="medium">Medium (7-15kg)</option>
            <option value="large">Large (15kg+)</option>
            <option value="any">Any Size</option>
          </select>
        </div>

        {/* Guests */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-600">Guests</label>
          <select
            value={conditions.guests}
            onChange={(e) => setConditions({ ...conditions, guests: Number(e.target.value) })}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n === 5 ? '5+' : n} {n === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
          <p className="text-xs font-bold text-gray-600">Currently supporting guests aged 12 and older.</p>
        </div>

        {/* Check-in */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-600">Check-in</label>
          <input
            type="date"
            value={conditions.checkin}
            min={today}
            onChange={(e) => setConditions({ ...conditions, checkin: e.target.value })}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-600">Check-out</label>
          <input
            type="date"
            value={conditions.checkout}
            min={conditions.checkin}
            onChange={(e) => setConditions({ ...conditions, checkout: e.target.value })}
            className="border border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-teal-600 hover:bg-teal-700 disabled:bg-teal-300 text-white font-bold px-10 py-3 rounded-xl transition-colors text-lg shadow-md"
        >
          {isLoading ? 'Searching...' : 'Find Pet-Friendly Hotels'}
        </button>
      </div>
    </form>
  );
}
