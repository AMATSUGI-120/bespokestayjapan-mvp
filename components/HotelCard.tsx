'use client';

import { useState, useEffect } from 'react';
import { HotelResult } from '@/lib/types';

interface HotelCardProps {
  hotel: HotelResult;
  onBookNow: (hotel: HotelResult) => void;
  guests: number;
}

const matchConfig = {
  100: { label: 'Best fit' },
  80: { label: 'Strong fit' },
  60: { label: 'Flexible option' },
};

export default function HotelCard({ hotel, onBookNow, guests }: HotelCardProps) {
  const match = matchConfig[hotel.matchLevel];
  const [photos, setPhotos] = useState<string[]>(hotel.photo_urls ?? []);
  const [photoIdx, setPhotoIdx] = useState(0);
  const [photoLoading, setPhotoLoading] = useState(!hotel.photo_urls);

  useEffect(() => {
    if (hotel.photo_urls) return;
    setPhotoLoading(true);
    fetch('/api/hotel-photos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hotelId: hotel.id, hotelName: hotel.name }),
    })
      .then((r) => r.json())
      .then((data) => setPhotos(data.photos ?? []))
      .catch(() => {})
      .finally(() => setPhotoLoading(false));
  }, [hotel.id, hotel.name, hotel.photo_urls]);

  const prev = () => setPhotoIdx((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setPhotoIdx((i) => (i + 1) % photos.length);

  return (
    <article className="flex h-full flex-col">
      {/* Photo */}
      <div className="relative aspect-[4/5] w-full flex-shrink-0 overflow-hidden rounded-[6px] bg-[var(--bsj-bg-card)]">
        {photos.length > 0 ? (
          <>
            <img
              src={photos[photoIdx]}
              alt={hotel.name}
              className="w-full h-full object-cover"
            />
            {photos.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-xl leading-none text-white transition-colors hover:bg-black/55"
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-xl leading-none text-white transition-colors hover:bg-black/55"
                  aria-label="Next photo"
                >
                  ›
                </button>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPhotoIdx(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${i === photoIdx ? 'bg-white' : 'bg-white/50'}`}
                      aria-label={`Photo ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : photoLoading ? (
          <div className="h-full w-full animate-pulse bg-[var(--bsj-border)]" />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-6 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
            Photography pending
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col pt-5">
        {/* Match Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--bsj-border)] pb-3">
          <span className="inline-flex w-fit rounded-[3px] border border-[var(--bsj-border)] px-2 py-1 text-[10px] font-semibold uppercase leading-tight tracking-[0.08em] text-[var(--bsj-primary)]">
            {match.label}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
            {hotel.type} · {hotel.area}
          </span>
        </div>

        {/* Hotel Name */}
        <h3 className="mt-4 text-xl font-medium leading-tight text-[var(--bsj-text)]">{hotel.name}</h3>

        {/* AI Recommendation */}
        <p className="mt-4 border-l border-[var(--bsj-border-strong)] pl-4 text-sm leading-[1.7] text-[var(--bsj-text-muted)]">
          {hotel.recommendationReason}
        </p>

        {/* Price */}
        <div className="mt-5 flex flex-col gap-0.5">
          <div className="flex items-end gap-2">
            <span className="text-2xl font-medium text-[var(--bsj-text)]">
              ¥{hotel.finalPrice.toLocaleString()}
            </span>
            <span className="pb-0.5 text-sm text-[var(--bsj-text-muted)]">/ night</span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-light)]">
            Total for {guests ? `${guests} ${guests === 1 ? 'guest' : 'guests'}` : 'guests'}
          </span>
        </div>

        {/* Pet Policy */}
        <div className="mt-5 border-t border-[var(--bsj-border)] pt-4 text-sm text-[var(--bsj-text-muted)]">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--bsj-text-light)]">
            Condition notes
          </p>
          <ul className="space-y-1.5 leading-[1.6]">
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
              <li className="mt-1 text-xs text-[var(--bsj-text-light)]">{hotel.pet_notes}</li>
            )}
          </ul>
        </div>

        {/* Amenities */}
        {hotel.amenities && hotel.amenities.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {hotel.amenities.slice(0, 3).map((a) => (
              <span key={a} className="rounded-[3px] border border-[var(--bsj-border)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-muted)]">
                {a}
              </span>
            ))}
          </div>
        )}

        {/* Nearby Parks */}
        {hotel.nearby_parks && hotel.nearby_parks.length > 0 && (
          <p className="mt-4 text-xs leading-[1.6] text-[var(--bsj-text-light)]">
            Nearby green space: {hotel.nearby_parks.slice(0, 2).join(', ')}
          </p>
        )}

        {/* Cancellation Policy */}
        {hotel.refundableTag === 'RFN' ? (
          <div className="mt-4 border border-[var(--bsj-border)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--bsj-primary)]">
            Free cancellation
          </div>
        ) : hotel.refundableTag === 'NRFN' ? (
          <div className="mt-4 border border-[var(--bsj-border)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-muted)]">
            Non-refundable
          </div>
        ) : null}

        {/* Book Now */}
        {hotel.finalPrice > 0 && hotel.liteapiOfferId ? (
          <button
            onClick={() => onBookNow(hotel)}
            className="mt-6 w-full rounded-[4px] bg-[var(--bsj-primary)] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--bsj-primary-hover)]"
          >
            Check details before booking
          </button>
        ) : (
          <div className="mt-6 w-full rounded-[4px] border border-[var(--bsj-border)] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text-light)]">
            Price unavailable - try different dates
          </div>
        )}
      </div>
    </article>
  );
}
