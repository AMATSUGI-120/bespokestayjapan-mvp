'use client';

import { HotelResult } from '@/lib/types';
import HotelCard from './HotelCard';

interface HotelListProps {
  hotels: HotelResult[];
  onBookNow: (hotel: HotelResult) => void;
  guests: number;
}

export default function HotelList({ hotels, onBookNow, guests }: HotelListProps) {
  if (hotels.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p className="text-2xl mb-2">No hotels found</p>
        <p className="text-sm">Try adjusting your search conditions.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-500 mb-4">
        Showing top {hotels.length} recommended hotel{hotels.length > 1 ? 's' : ''}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onBookNow={onBookNow} guests={guests} />
        ))}
      </div>
    </div>
  );
}
