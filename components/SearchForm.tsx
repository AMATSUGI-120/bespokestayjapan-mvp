'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { SearchConditions } from '@/lib/types';

interface SearchFormProps {
  onSearch: (conditions: SearchConditions) => void;
  isLoading?: boolean;
}

const formStyle: CSSProperties = {
  backgroundColor: 'transparent',
  borderTop: '1px solid var(--bsj-border)',
  borderBottom: '1px solid var(--bsj-border)',
  padding: '28px 0',
};

const labelStyle: CSSProperties = {
  color: 'var(--bsj-text-light)',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  lineHeight: 1.4,
  textTransform: 'uppercase',
};

const fieldStyle =
  'mt-2 w-full rounded-[4px] border border-[var(--bsj-border)] bg-[var(--bsj-bg-card)] px-3 py-3 text-sm text-[var(--bsj-text)] outline-none transition-colors focus:border-[var(--bsj-primary)]';

const noteStyle: CSSProperties = {
  color: 'var(--bsj-text-light)',
  fontSize: '11px',
  fontWeight: 500,
  lineHeight: 1.5,
  marginTop: '8px',
};

function addOneDay(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

export default function SearchForm({ onSearch, isLoading }: SearchFormProps) {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = addOneDay(today);

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
    <form onSubmit={handleSubmit} style={formStyle}>
      <div className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-2 lg:grid-cols-5">
        {/* City */}
        <div>
          <label style={labelStyle}>City</label>
          <select
            value={conditions.city}
            onChange={(e) => setConditions({ ...conditions, city: e.target.value })}
            className={fieldStyle}
          >
            <option value="Kyoto">Kyoto</option>
            <option value="Osaka">Osaka</option>
            <option value="Tokyo">Tokyo</option>
          </select>
        </div>

        {/* First condition filter */}
        <div>
          <label style={labelStyle}>Condition detail</label>
          <select
            value={conditions.petSize}
            onChange={(e) =>
              setConditions({
                ...conditions,
                petSize: e.target.value as SearchConditions['petSize'],
              })
            }
            className={fieldStyle}
          >
            <option value="small">Companion animal under 7kg</option>
            <option value="medium">Companion animal 7-15kg</option>
            <option value="large">Companion animal over 15kg</option>
            <option value="any">Any companion-animal size</option>
          </select>
        </div>

        {/* Guests */}
        <div>
          <label style={labelStyle}>Guests</label>
          <select
            value={conditions.guests}
            onChange={(e) => setConditions({ ...conditions, guests: Number(e.target.value) })}
            className={fieldStyle}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n === 5 ? '5+' : n} {n === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
          <p style={noteStyle}>Guests aged 12 and older.</p>
        </div>

        {/* Check-in */}
        <div>
          <label style={labelStyle}>Check-in</label>
          <input
            type="date"
            value={conditions.checkin}
            min={today}
            onChange={(e) => {
              const newCheckin = e.target.value;
              const minCheckout = addOneDay(newCheckin);
              const newCheckout =
                conditions.checkout <= newCheckin ? minCheckout : conditions.checkout;
              setConditions({ ...conditions, checkin: newCheckin, checkout: newCheckout });
            }}
            className={fieldStyle}
          />
        </div>

        {/* Check-out */}
        <div>
          <label style={labelStyle}>Check-out</label>
          <input
            type="date"
            value={conditions.checkout}
            min={addOneDay(conditions.checkin)}
            onChange={(e) => setConditions({ ...conditions, checkout: e.target.value })}
            className={fieldStyle}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm leading-[1.7] text-[var(--bsj-text-muted)]">
          Check details before you book. Availability and pricing are confirmed after the search.
        </p>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-[4px] bg-[var(--bsj-primary)] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--bsj-primary-hover)] disabled:bg-[var(--bsj-secondary)] sm:w-auto"
        >
          {isLoading ? 'Searching stays' : 'Browse curated stays'}
        </button>
      </div>
    </form>
  );
}
