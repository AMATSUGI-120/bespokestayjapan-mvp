'use client';

import { HotelResult } from '@/lib/types';

interface HotelCardProps {
  hotel: HotelResult;
  onBookNow: (hotel: HotelResult) => void;
  guests: number;
}

const matchConfig = {
  100: { label: 'Perfect Match', emoji: '🌟', color: 'bg-teal-100 text-teal-800 border-teal-300' },
  80: { label: 'Great Option', emoji: '⭐', color: 'bg-blue-100 text-blue-800 border-blue-300' },
  60: { label: 'Budget-Friendly', emoji: '💛', color: 'bg-amber-100 text-amber-800 border-amber-300' },
};

export default function HotelCard({ hotel, onBookNow, guests }: HotelCardProps) {
  const match = matchConfig[hotel.matchLevel];

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 flex flex-col gap-4">
      {/* Match Badge */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold border ${match.color}`}>
          {match.emoji} {match.label}
        </span>
        <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
          {hotel.type} · {hotel.area}
        </span>
      </div>

      {/* Hotel Name */}
      <h3 className="text-xl font-bold text-gray-900 leading-tight">{hotel.name}</h3>

      {/* AI Recommendation */}
      <p className="text-sm text-teal-700 bg-teal-50 rounded-lg px-4 py-2 border border-teal-100 italic">
        {hotel.recommendationReason}
      </p>

      {/* Price */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-end gap-2">
          <span className="text-3xl font-extrabold text-gray-900">
            ¥{hotel.finalPrice.toLocaleString()}
          </span>
          <span className="text-gray-500 text-sm pb-1">/ night</span>
          <span className="text-xs text-gray-400 pb-1 ml-1">(incl. {Math.round(hotel.margin * 100)}% service fee)</span>
        </div>
        <span className="text-sm font-bold text-gray-500">
          Total for {guests ? `${guests} ${guests === 1 ? 'guest' : 'guests'}` : 'guests'}
        </span>
      </div>

      {/* Pet Policy */}
      <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-700">
        <p className="font-semibold text-gray-800 mb-2">Pet Policy</p>
        <ul className="space-y-1">
          <li>
            <span className="font-medium">Size limit:</span>{' '}
            {hotel.pet_size_limit_kg ? `Up to ${hotel.pet_size_limit_kg}kg` : 'No restriction'}
          </li>
          {hotel.pet_fee_per_night > 0 && (
            <li>
              <span className="font-medium">Pet fee:</span> ¥{hotel.pet_fee_per_night.toLocaleString()}/night
            </li>
          )}
          {hotel.pet_fee_per_stay && (
            <li>
              <span className="font-medium">Pet fee (stay):</span> ¥{hotel.pet_fee_per_stay.toLocaleString()}
            </li>
          )}
          <li>
            <span className="font-medium">Max pets:</span> {hotel.pet_max_pets}
          </li>
          {hotel.pet_dogs && <li>Dogs welcome</li>}
          {hotel.pet_cats && <li>Cats welcome</li>}
          {hotel.pet_notes && (
            <li className="text-gray-500 text-xs mt-1">{hotel.pet_notes}</li>
          )}
        </ul>
      </div>

      {/* Amenities */}
      {hotel.amenities && hotel.amenities.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {hotel.amenities.slice(0, 3).map((a) => (
            <span key={a} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">
              {a}
            </span>
          ))}
        </div>
      )}

      {/* Nearby Parks */}
      {hotel.nearby_parks && hotel.nearby_parks.length > 0 && (
        <p className="text-xs text-gray-500">
          Nearby parks: {hotel.nearby_parks.slice(0, 2).join(', ')}
        </p>
      )}

      {/* Book Now */}
      {hotel.finalPrice > 0 && hotel.liteapiOfferId ? (
        <button
          onClick={() => onBookNow(hotel)}
          className="mt-auto w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-xl transition-colors text-base shadow"
        >
          Book Now
        </button>
      ) : (
        <div className="mt-auto w-full bg-gray-100 text-gray-400 font-bold py-3 rounded-xl text-base text-center border border-gray-200">
          Price unavailable — please try different dates
        </div>
      )}
    </div>
  );
}
