export interface CancelPolicyInfoInput {
  cancelTime?: string | null;
  amount?: number | null;
  currency?: string | null;
  timezone?: string | null;
  type?: string | null;
}

export interface CancellationEvalInput {
  refundableTag?: string | null;
  cancelPolicyInfos?: CancelPolicyInfoInput[] | null;
  // Simplified fallbacks (from prebook response when full infos unavailable)
  refundable?: boolean;
  cancelDeadline?: string | null;
  cancelTimezone?: string | null;
}

export type RiskLevel = 'safe' | 'caution' | 'danger' | 'unknown';

export interface CancellationSafetyResult {
  refundableTag: string | null;
  isRefundable: boolean;
  isFreeCancellationNow: boolean;
  freeCancellationUntil: string | null; // ISO 8601 of the first penalty start time
  penaltyAmountNow: number | null;
  penaltyCurrency: string | null;
  policyTimezone: string | null;
  riskLevel: RiskLevel;
  humanReadableSummary: string;
  rawPolicyDebug: CancelPolicyInfoInput[];
}

// Timezones treated as equivalent to UTC for comparison accuracy
const UTC_LIKE = new Set(['GMT', 'UTC', 'gmt', 'utc']);

// Parse LiteAPI cancelTime string as UTC.
// LiteAPI format: "YYYY-MM-DD HH:MM:SS" (GMT assumed per existing codebase convention)
function parseCancelTimeUTC(cancelTime: string | null | undefined): Date | null {
  if (!cancelTime) return null;
  try {
    const iso = cancelTime.trim().replace(' ', 'T');
    const withTz = /Z$|[+-]\d{2}:\d{2}$/.test(iso) ? iso : iso + 'Z';
    const d = new Date(withTz);
    return isNaN(d.getTime()) ? null : d;
  } catch {
    return null;
  }
}

export function evaluateCancellationSafety(
  input: CancellationEvalInput,
  now: Date = new Date()
): CancellationSafetyResult {
  const refundableTag = input.refundableTag ?? null;
  const infos: CancelPolicyInfoInput[] = input.cancelPolicyInfos ?? [];
  const policyTimezone = infos[0]?.timezone ?? input.cancelTimezone ?? null;

  // Hard non-refundable — no ambiguity
  if (refundableTag === 'NRFN') {
    return {
      refundableTag,
      isRefundable: false,
      isFreeCancellationNow: false,
      freeCancellationUntil: null,
      penaltyAmountNow: null,
      penaltyCurrency: null,
      policyTimezone,
      riskLevel: 'danger',
      humanReadableSummary: 'Non-refundable — cancellation will incur full charges.',
      rawPolicyDebug: infos,
    };
  }

  // No policy data at all
  if (!refundableTag && infos.length === 0 && !input.cancelDeadline) {
    return {
      refundableTag: null,
      isRefundable: false,
      isFreeCancellationNow: false,
      freeCancellationUntil: null,
      penaltyAmountNow: null,
      penaltyCurrency: null,
      policyTimezone: null,
      riskLevel: 'unknown',
      humanReadableSummary: 'Cancellation policy information is not available.',
      rawPolicyDebug: [],
    };
  }

  // Fallback path: cancelDeadline only, no cancelPolicyInfos
  if (infos.length === 0 && input.cancelDeadline) {
    const deadline = parseCancelTimeUTC(input.cancelDeadline);
    const tz = policyTimezone ?? 'GMT';
    const isNonUTC = !UTC_LIKE.has(tz);

    if (!deadline) {
      return {
        refundableTag,
        isRefundable: refundableTag === 'RFN' || (input.refundable ?? false),
        isFreeCancellationNow: false,
        freeCancellationUntil: input.cancelDeadline,
        penaltyAmountNow: null,
        penaltyCurrency: null,
        policyTimezone: tz,
        riskLevel: 'caution',
        humanReadableSummary: `Cancellation deadline found but format could not be parsed: "${input.cancelDeadline}".`,
        rawPolicyDebug: [],
      };
    }

    const isFreeCancellationNow = now.getTime() < deadline.getTime();
    return {
      refundableTag,
      isRefundable: refundableTag === 'RFN' || (input.refundable ?? false),
      isFreeCancellationNow,
      freeCancellationUntil: deadline.toISOString(),
      penaltyAmountNow: isFreeCancellationNow ? 0 : null,
      penaltyCurrency: null,
      policyTimezone: tz,
      riskLevel: isNonUTC ? 'caution' : isFreeCancellationNow ? 'safe' : 'danger',
      humanReadableSummary: isFreeCancellationNow
        ? `Free cancellation available${isNonUTC ? ' (timezone may affect accuracy)' : ''} until ${deadline.toISOString()}.`
        : 'Free cancellation period has ended.',
      rawPolicyDebug: [],
    };
  }

  // Full evaluation using cancelPolicyInfos array.
  //
  // LiteAPI semantics (confirmed from real data):
  //   Each entry's cancelTime = "from this moment onwards, the penalty is amount."
  //   Implicitly, BEFORE the earliest entry's cancelTime = no penalty (free cancel).
  //
  // Algorithm:
  //   1. Sort entries ascending by cancelTime.
  //   2. currentEntry = last entry whose cancelTime ≤ now  (the tier that has "kicked in").
  //      If none have started yet, currentEntry = null → current penalty = 0 (free).
  //   3. freeCancellationUntil = cancelTime of the first entry with amount > 0
  //      (this is when the first penalty tier begins, past or future).
  const parsedInfos = infos.map((info) => ({
    ...info,
    _t: parseCancelTimeUTC(info.cancelTime),
  }));

  const hasUnparseable = parsedInfos.some((e) => e.cancelTime && !e._t);
  const isNonUTCTimezone = !!policyTimezone && !UTC_LIKE.has(policyTimezone);

  const sorted = [...parsedInfos].sort((a, b) => {
    if (!a._t) return -1;
    if (!b._t) return 1;
    return a._t.getTime() - b._t.getTime();
  });

  // Current tier: last entry whose cancelTime ≤ now.
  // IMPORTANT: do NOT fall back to sorted[0] when none have started.
  //   null here means "still before the first tier" → free.
  let currentEntry: (typeof sorted)[0] | null = null;
  for (const entry of sorted) {
    if (entry._t && entry._t.getTime() <= now.getTime()) {
      currentEntry = entry;
    }
  }

  const currentAmount = currentEntry?.amount ?? 0;
  // Currency: prefer current tier; fall back to first penalty entry
  const firstPenaltyEntry = sorted.find((e) => (e.amount ?? 0) > 0);
  const penaltyCurrency =
    currentEntry?.currency ?? firstPenaltyEntry?.currency ?? null;

  // Free cancel deadline = cancelTime of the earliest entry with amount > 0
  const deadlineDate = firstPenaltyEntry?._t ?? null;
  const freeCancellationUntil = deadlineDate ? deadlineDate.toISOString() : null;

  const isFreeCancellationNow = currentAmount === 0;
  const penaltyAmountNow = currentAmount;

  const caveats: string[] = [];
  if (isNonUTCTimezone)
    caveats.push(`Timezone is ${policyTimezone} — comparison uses UTC approximation.`);
  if (hasUnparseable) caveats.push('Some policy time entries could not be parsed.');

  let riskLevel: RiskLevel;
  let humanReadableSummary: string;

  if (isFreeCancellationNow && refundableTag === 'RFN' && !isNonUTCTimezone && !hasUnparseable) {
    riskLevel = 'safe';
    humanReadableSummary = deadlineDate
      ? `Free cancellation is available now. Deadline: ${deadlineDate.toISOString()}.`
      : 'Free cancellation appears available. No penalty deadline detected.';
  } else if (!isFreeCancellationNow && currentAmount > 0) {
    riskLevel = 'danger';
    humanReadableSummary = [
      `Cancellation penalty applies: ${currentAmount} ${penaltyCurrency ?? ''}.`.trim(),
      ...caveats,
    ].join(' ');
  } else {
    riskLevel = 'caution';
    humanReadableSummary = [
      isFreeCancellationNow
        ? 'Plan appears free to cancel, but policy could not be fully verified.'
        : 'Current penalty status is uncertain.',
      ...caveats,
    ].join(' ');
  }

  return {
    refundableTag,
    isRefundable: refundableTag === 'RFN',
    isFreeCancellationNow,
    freeCancellationUntil,
    penaltyAmountNow,
    penaltyCurrency,
    policyTimezone,
    riskLevel,
    humanReadableSummary,
    rawPolicyDebug: infos,
  };
}
