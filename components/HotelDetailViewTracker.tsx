'use client';

import { useEffect } from 'react';
import { trackHotelDetailView } from '@/lib/analytics';

interface Props {
  hotelId: string;
  hotelName: string;
  city?: string | null;
}

export default function HotelDetailViewTracker({ hotelId, hotelName, city }: Props) {
  useEffect(() => {
    trackHotelDetailView({ hotel_id: hotelId, hotel_name: hotelName, city });
  }, [hotelId, hotelName, city]);

  return null;
}
