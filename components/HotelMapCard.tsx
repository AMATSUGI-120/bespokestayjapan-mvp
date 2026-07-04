'use client';

import { useMemo, useState } from 'react';

interface HotelMapCardProps {
  hotelName: string;
  region?: string | null;
  address?: string | null;
}

function clean(value: string | null | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : null;
}

function buildMapQuery({ hotelName, region, address }: HotelMapCardProps): string {
  return [clean(hotelName), clean(address), clean(region)].filter(Boolean).join(', ');
}

export default function HotelMapCard({ hotelName, region, address }: HotelMapCardProps) {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const query = useMemo(
    () => buildMapQuery({ hotelName, region, address }),
    [hotelName, region, address]
  );
  const encodedQuery = encodeURIComponent(query);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
  const embedUrl = `https://www.google.com/maps?q=${encodedQuery}&output=embed`;
  const displayLocation = clean(address) ?? clean(region) ?? 'Japan';

  return (
    <section className="mt-8 border-t border-[var(--bsj-border)] pt-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
        Area map
      </p>
      <div className="mt-4 overflow-hidden border border-[var(--bsj-border-strong)] bg-[var(--bsj-bg)]">
        {isMapVisible ? (
          <iframe
            title={`${hotelName} area map`}
            src={embedUrl}
            className="h-[260px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="relative min-h-[210px] overflow-hidden bg-[#d8d8d0]">
            <div className="absolute inset-0 opacity-90">
              <div className="absolute left-[12%] top-0 h-full w-px bg-[#aaa99f]" />
              <div className="absolute left-[34%] top-0 h-full w-px bg-[#aaa99f]" />
              <div className="absolute left-[67%] top-0 h-full w-px bg-[#aaa99f]" />
              <div className="absolute left-0 top-[24%] h-px w-full bg-[#aaa99f]" />
              <div className="absolute left-0 top-[52%] h-px w-full bg-[#aaa99f]" />
              <div className="absolute left-0 top-[78%] h-px w-full bg-[#aaa99f]" />
              <div className="absolute left-[24%] top-[18%] h-[150%] w-px -rotate-[34deg] bg-[#7f8179]" />
              <div className="absolute left-[74%] top-[-20%] h-[150%] w-px rotate-[28deg] bg-[#9a9b91]" />
              <div className="absolute left-[42%] top-[30%] h-[90%] w-[18px] -rotate-[22deg] bg-[#c4c4ba]" />
            </div>

            <div className="relative flex min-h-[210px] flex-col justify-between p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-[var(--bsj-border-strong)] bg-[var(--bsj-bg)] px-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)]">
                    Map
                  </span>
                  <p className="mt-4 max-w-[220px] text-[18px] font-medium leading-[1.25] text-[var(--bsj-text)]">
                    Check the area before choosing this stay.
                  </p>
                </div>
                <span className="mt-2 h-3 w-3 rounded-full bg-[var(--bsj-primary)] shadow-[0_0_0_6px_#eeeee8]" />
              </div>

              <div>
                <p className="text-[12px] leading-[1.65] text-[var(--bsj-text-muted)]">
                  Use Maps to confirm station access, luggage movement, and the
                  surrounding area before booking.
                </p>
                <p className="mt-3 text-[11px] leading-[1.5] text-[var(--bsj-text-light)]">
                  {displayLocation}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="border-t border-[var(--bsj-border)] p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => setIsMapVisible((value) => !value)}
              className="inline-flex min-h-10 items-center justify-center border border-[var(--bsj-border-strong)] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-text)] transition-colors hover:bg-[var(--bsj-bg-subtle)] active:bg-[var(--bsj-border)]"
            >
              {isMapVisible ? 'Hide map' : 'Show map'}
            </button>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--bsj-primary)] no-underline transition-colors hover:text-[var(--bsj-primary-hover)] hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
