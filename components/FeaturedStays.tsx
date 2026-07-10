import type { CSSProperties } from 'react';
import { PropertyCard } from './PropertyCard';
import type { VerificationVariant } from './VerificationBadge';
import type { ConditionTagVariant } from './ConditionTag';
import { formatCategoryTagLabel, getCategoryTagHref, normalizeCategoryTags } from '@/lib/category-tags';
import { getHotelProfileHref } from '@/lib/hotel-slug';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface FeaturedHotelData {
  id: number;
  name: string;
  city: string;
  area: string;
  type: string;
  amenities: string[] | null;
  pet_dogs: boolean;
  pet_cats: boolean;
  pet_notes: string | null;
  access_info: string | null;
  english_support: boolean;
  category_tags: string[] | null;
  short_description: string | null;
  best_for: string | null;
  caution_notes: string | null;
}

interface ConditionTagData {
  label: string;
  variant?: ConditionTagVariant;
  href?: string | null;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildTags(hotel: FeaturedHotelData): ConditionTagData[] {
  const categoryTags = normalizeCategoryTags(hotel.category_tags)
    .map((tag) => ({
      label: formatCategoryTagLabel(tag),
      variant: 'facility' as ConditionTagVariant,
      href: getCategoryTagHref(tag),
    }));

  if (categoryTags.length > 0) {
    return categoryTags.slice(0, 3);
  }

  const tags: ConditionTagData[] = [];

  // Stay type
  tags.push({ label: hotel.type, variant: 'stay-type' });

  // Pet info — only if actually stored
  if (hotel.pet_dogs && hotel.pet_cats) {
    tags.push({ label: 'Dogs & cats welcome', variant: 'facility' });
  } else if (hotel.pet_dogs) {
    tags.push({ label: 'Dogs welcome', variant: 'facility' });
  } else if (hotel.pet_cats) {
    tags.push({ label: 'Cats welcome', variant: 'facility' });
  }

  // First useful amenity (if not already covered)
  const amenities = hotel.amenities ?? [];
  const firstAmenity = amenities[0];
  if (firstAmenity && tags.length < 3) {
    tags.push({ label: firstAmenity, variant: 'facility' });
  }

  return tags.slice(0, 3);
}

function buildNote(hotel: FeaturedHotelData): string {
  if (hotel.short_description) return hotel.short_description;
  if (hotel.best_for) return hotel.best_for;
  if (hotel.pet_notes) return hotel.pet_notes;
  if (hotel.access_info) return hotel.access_info;
  return `${hotel.type} in ${[hotel.area, hotel.city].filter(Boolean).join(', ')}. Condition notes are being added as we verify this property.`;
}

function buildRegion(hotel: FeaturedHotelData): string {
  if (hotel.area && hotel.city) return `${hotel.area}, ${hotel.city}`;
  return hotel.city ?? hotel.area ?? '';
}

// ── Static example cards (fallback when no real data) ────────────────────────

const EXAMPLE_CARDS = [
  {
    stayType: 'Ryokan',
    verificationVariant: 'not-yet-checked' as VerificationVariant,
    name: 'Private Villa Example — Hakone Area',
    region: 'Hakone, Kanagawa',
    tags: [
      { label: 'Private onsen', variant: 'facility' as ConditionTagVariant },
      { label: 'Mountain setting', variant: 'access' as ConditionTagVariant },
    ],
    editorialNote:
      'Example card. When we research a property, we note pet policies, tattoo access, private bath availability, and more.',
    ctaHref: '/stays/private-villas',
  },
  {
    stayType: 'Guest house',
    verificationVariant: 'check-before-planning' as VerificationVariant,
    name: 'Countryside Inn Example — Nagano',
    region: 'Nagano Prefecture',
    tags: [
      { label: 'Shared onsen', variant: 'facility' as ConditionTagVariant },
      { label: 'Scenic area', variant: 'access' as ConditionTagVariant },
    ],
    editorialNote:
      'Tattoo and pet policies not confirmed from public sources for this example. We recommend checking directly before planning around them.',
    ctaHref: '/stays/tattoo-friendly',
  },
  {
    stayType: 'Hotel',
    verificationVariant: 'check-before-planning' as VerificationVariant,
    name: 'City Hotel Example — Kyoto',
    region: 'Kyoto',
    tags: [
      { label: 'Near station', variant: 'access' as ConditionTagVariant },
      { label: 'Luggage storage', variant: 'facility' as ConditionTagVariant },
    ],
    editorialNote:
      'Example card showing luggage-friendly and access notes. Condition notes appear here once researched.',
    ctaHref: '/stays/luggage-friendly',
  },
];

// ── Section styles ────────────────────────────────────────────────────────────

const sectionStyle: CSSProperties = {
  backgroundColor: 'var(--bsj-bg-subtle)',
  borderTop: '1px solid var(--bsj-border)',
  padding: '92px 24px',
};

const innerStyle: CSSProperties = { maxWidth: '1180px', margin: '0 auto' };

const eyebrowStyle: CSSProperties = {
  color: 'var(--bsj-text-light)',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.16em',
  lineHeight: 1.4,
  textTransform: 'uppercase',
};

const headingStyle: CSSProperties = {
  color: 'var(--bsj-text)',
  fontSize: 'clamp(28px, 4vw, 46px)',
  fontWeight: 500,
  lineHeight: 1.08,
  marginTop: '6px',
  letterSpacing: '0',
  maxWidth: '620px',
};

const subtextStyle: CSSProperties = {
  color: 'var(--bsj-text-muted)',
  fontSize: '15px',
  lineHeight: 1.75,
  marginTop: '16px',
  maxWidth: '560px',
};

// ── Component ─────────────────────────────────────────────────────────────────

interface FeaturedStaysProps {
  hotels?: FeaturedHotelData[];
  className?: string;
}

export function FeaturedStays({ hotels, className }: FeaturedStaysProps) {
  const hasRealData = Array.isArray(hotels) && hotels.length > 0;

  const cards = hasRealData
    ? hotels.slice(0, 3).map(hotel => ({
        stayType: hotel.type,
        verificationVariant: 'source-backed' as VerificationVariant,
        name: hotel.name,
        region: buildRegion(hotel),
        tags: buildTags(hotel),
        editorialNote: buildNote(hotel),
        bestFor: hotel.best_for,
        goodToKnow: hotel.caution_notes,
        ctaHref: getHotelProfileHref(hotel),
      }))
    : EXAMPLE_CARDS;

  return (
    <section className={className} style={sectionStyle}>
      <div style={innerStyle}>
        <div>
          <p style={eyebrowStyle}>
            {hasRealData ? 'Selected stay profiles' : 'Example stay profiles'}
          </p>
          <h2 style={headingStyle}>
            {hasRealData
              ? 'A small edit of researched places worth checking'
              : 'How we turn stay research into profiles'}
          </h2>
          <p style={subtextStyle}>
            {hasRealData
              ? 'Each profile is organized around practical travel constraints, source-backed notes, and what to confirm before relying on a listing.'
              : 'These examples show how Bespoke Stay Japan presents stay type, location, condition notes, and what still needs checking.'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {cards.map((card, i) => (
            <PropertyCard key={hasRealData ? (hotels![i]?.id ?? i) : i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedStays;
