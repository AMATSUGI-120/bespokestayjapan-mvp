'use client';

import { useState, useEffect } from 'react';
import SearchForm from '@/components/SearchForm';
import HotelList from '@/components/HotelList';
import PaymentModal from '@/components/PaymentModal';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import HeroSection from '@/components/HeroSection';
import ConditionBrowser from '@/components/ConditionBrowser';
import { FeaturedStays, type FeaturedHotelData } from '@/components/FeaturedStays';
import CustomShortlistCTA from '@/components/CustomShortlistCTA';
import VerificationExplainer from '@/components/VerificationExplainer';
import { SearchConditions, HotelResult } from '@/lib/types';

export default function Home() {
  // ── Search / booking state (unchanged) ──────────────────────────────────────
  const [results, setResults] = useState<HotelResult[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<HotelResult | null>(null);
  const [lastGuests, setLastGuests] = useState<number>(2);

  // ── Featured hotels for Hero + FeaturedStays ─────────────────────────────────
  const [featuredHotels, setFeaturedHotels] = useState<FeaturedHotelData[]>([]);

  useEffect(() => {
    fetch('/api/featured-stays')
      .then(r => r.json())
      .then((data: { hotels?: FeaturedHotelData[] }) =>
        setFeaturedHotels(data.hotels ?? [])
      )
      .catch(() => {
        // Silently fall back to example cards — FeaturedStays handles this
      });
  }, []);

  // Hero uses the top-ranked hotel's first photo (Kyoto/Osaka preferred)
  const heroHotel = featuredHotels[0] ?? null;
  const heroImageUrl = heroHotel?.photo_urls?.[0] ?? null;
  const heroImageAlt = heroHotel
    ? `${heroHotel.name} — ${heroHotel.type} in ${heroHotel.city}`
    : undefined;

  // ── Search handler (unchanged) ───────────────────────────────────────────────
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
    <>
      <SiteNav />

      <main>
        <HeroSection imageUrl={heroImageUrl} imageAlt={heroImageAlt} />

        <div id="stays">
          <ConditionBrowser />
        </div>

        <FeaturedStays hotels={featuredHotels.length > 0 ? featuredHotels : undefined} />

        <CustomShortlistCTA id="ask" />
        <VerificationExplainer id="how-it-works" />

        {/* Condition Search */}
        <section
          id="search"
          style={{
            background: 'var(--bsj-bg-subtle)',
            borderTop: '1px solid var(--bsj-border)',
          }}
          className="px-6 py-20"
        >
          <div className="max-w-[1180px] mx-auto">
            <p
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: 'var(--bsj-text-light)' }}
            >
              Search stays by condition
            </p>
            <h2
              className="mb-4 max-w-2xl text-[clamp(28px,4vw,46px)] font-medium leading-[1.08]"
              style={{ color: 'var(--bsj-text)' }}
            >
              Find stays that fit your travel constraints
            </h2>
            <p
              className="mb-10 max-w-xl text-[15px] leading-[1.75]"
              style={{ color: 'var(--bsj-text-muted)' }}
            >
              Browse curated stays and check practical details before you book.
              The first live filter supports companion-animal policies, with more
              condition filters being added.
            </p>
            <SearchForm onSearch={handleSearch} isLoading={isLoading} />
          </div>
        </section>

        {/* Results */}
        <section
          style={{ background: 'var(--bsj-bg-subtle)' }}
          className="px-6 pb-16"
        >
          <div className="max-w-5xl mx-auto">
            {isLoading && (
              <div
                className="text-center py-16"
                style={{ color: 'var(--bsj-text-muted)' }}
              >
                <p className="text-lg font-medium">
                  Searching for available stays...
                </p>
              </div>
            )}

            {error && (
              <div className="rounded-xl px-6 py-4 text-center border border-red-200 bg-red-50 text-red-700">
                {error}
              </div>
            )}

            {!isLoading && results !== null && (
              <HotelList
                hotels={results}
                onBookNow={setSelectedHotel}
                guests={lastGuests}
              />
            )}

            {!isLoading && results === null && !error && (
              <p
                className="text-center py-12 text-sm"
                style={{ color: 'var(--bsj-text-light)' }}
              >
                Choose your dates and condition details to browse curated stays.
              </p>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />

      {selectedHotel && (
        <PaymentModal
          hotel={selectedHotel}
          onClose={() => setSelectedHotel(null)}
        />
      )}
    </>
  );
}
