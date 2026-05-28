'use client';

// Production Test Safety Panel
// Purpose: shows cancellation risk assessment before payment during production testing.
// Remove this component (and its usage in CheckAvailability.tsx) once testing is complete.

import { useMemo, useEffect } from 'react';
import {
  evaluateCancellationSafety,
  type CancellationEvalInput,
  type RiskLevel,
} from '@/lib/cancellationPolicy';

export interface ProductionTestSafetyPanelProps {
  evalInput: CancellationEvalInput;
}

type StyleSet = { border: string; bg: string; badge: string; badgeText: string };

const RISK_STYLES: Record<RiskLevel, StyleSet> = {
  safe: {
    border: 'border-[var(--bsj-confirmed)]',
    bg: 'bg-[var(--bsj-confirmed-bg)]',
    badge: 'bg-[var(--bsj-confirmed)]',
    badgeText: 'text-white',
  },
  caution: {
    border: 'border-[var(--bsj-ask)]',
    bg: 'bg-[var(--bsj-ask-bg)]',
    badge: 'bg-[var(--bsj-ask)]',
    badgeText: 'text-white',
  },
  danger: {
    border: 'border-red-400',
    bg: 'bg-red-50',
    badge: 'bg-red-600',
    badgeText: 'text-white',
  },
  unknown: {
    border: 'border-[var(--bsj-border)]',
    bg: 'bg-[var(--bsj-unknown-bg)]',
    badge: 'bg-[var(--bsj-unknown)]',
    badgeText: 'text-white',
  },
};

const RISK_LABELS: Record<RiskLevel, string> = {
  safe: 'SAFE',
  caution: 'CAUTION',
  danger: 'DANGER',
  unknown: 'UNKNOWN',
};

const PAYMENT_WARNINGS: Record<RiskLevel, string> = {
  safe: "This plan appears to allow free cancellation at this time. Please still confirm the hotel's cancellation policy before payment.",
  caution: 'Cancellation policy could not be fully verified. Do not use this plan for production payment testing.',
  unknown: 'Cancellation policy could not be fully verified. Do not use this plan for production payment testing.',
  danger: 'This plan is not safe for production payment testing. Cancellation may incur charges.',
};

function formatUTCForDisplay(iso: string | null): string {
  if (!iso) return '—';
  try {
    return (
      new Date(iso).toLocaleString('en-US', {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }) + ' JST'
    );
  } catch {
    return iso;
  }
}

function Row({ label, value, valueClass }: { label: string; value: string; valueClass?: string }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--bsj-text-light)]">
        {label}
      </dt>
      <dd className={`mt-0.5 text-[13px] ${valueClass ?? 'text-[var(--bsj-text)]'}`}>{value}</dd>
    </div>
  );
}

export default function ProductionTestSafetyPanel({ evalInput }: ProductionTestSafetyPanelProps) {
  const result = useMemo(() => evaluateCancellationSafety(evalInput), [evalInput]);

  // Developer-only debug output — rawPolicyDebug contains no secrets
  useEffect(() => {
    console.debug('[ProductionTestSafetyPanel] riskLevel:', result.riskLevel);
    console.debug('[ProductionTestSafetyPanel] rawPolicyDebug:', result.rawPolicyDebug);
    console.debug('[ProductionTestSafetyPanel] fullResult:', {
      ...result,
      rawPolicyDebug: result.rawPolicyDebug,
    });
  }, [result]);

  const s = RISK_STYLES[result.riskLevel];

  return (
    <div className={`mt-4 rounded-[4px] border ${s.border} ${s.bg} p-4`}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--bsj-text-light)]">
          Production Test — Safety Panel
        </p>
        <span
          className={`inline-flex items-center rounded-[3px] px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] ${s.badge} ${s.badgeText}`}
        >
          {RISK_LABELS[result.riskLevel]}
        </span>
      </div>

      <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
        <Row label="Refundable Tag" value={result.refundableTag ?? '—'} />
        <Row
          label="Free Cancel Now"
          value={result.isFreeCancellationNow ? 'Yes' : 'No'}
          valueClass={
            result.isFreeCancellationNow
              ? 'text-[var(--bsj-confirmed)] font-semibold text-[13px]'
              : 'text-red-600 font-semibold text-[13px]'
          }
        />
        <Row
          label="Free Cancel Until"
          value={formatUTCForDisplay(result.freeCancellationUntil)}
        />
        <Row
          label="Penalty Now"
          value={
            result.penaltyAmountNow === null
              ? '—'
              : result.penaltyAmountNow === 0
              ? 'None'
              : `${result.penaltyAmountNow} ${result.penaltyCurrency ?? ''}`.trim()
          }
        />
        <Row label="Currency" value={result.penaltyCurrency ?? '—'} />
        <Row label="Policy Timezone" value={result.policyTimezone ?? '—'} />
      </dl>

      <p className="mt-3 text-[12px] leading-[1.65] text-[var(--bsj-text-muted)]">
        {result.humanReadableSummary}
      </p>

      <div className={`mt-3 rounded-[3px] border ${s.border} px-3 py-2`}>
        <p className="text-[11px] font-semibold leading-[1.5] text-[var(--bsj-text)]">
          {PAYMENT_WARNINGS[result.riskLevel]}
        </p>
      </div>

      {(result.riskLevel === 'danger' || result.riskLevel === 'caution') && (
        <p className="mt-2 text-[10px] text-[var(--bsj-text-light)]">
          rawPolicyDebug entries: {result.rawPolicyDebug.length} — see browser console for details.
        </p>
      )}
    </div>
  );
}
