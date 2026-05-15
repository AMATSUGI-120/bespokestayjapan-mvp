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
      <div className="py-16 text-center text-[var(--bsj-text-muted)]">
        <p className="mb-2 text-xl font-medium text-[var(--bsj-text)]">No stays found</p>
        <p className="text-sm">Try adjusting your dates or condition details.</p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
        Showing {hotels.length} curated stay{hotels.length > 1 ? 's' : ''}
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onBookNow={onBookNow} guests={guests} />
        ))}
      </div>
    </div>
  );
}
