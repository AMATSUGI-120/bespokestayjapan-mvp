import { test } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateCancellationSafety } from '../lib/cancellationPolicy';

// Confirmed real data from LiteAPI production response (2026-05-20 session)
const REAL_POLICY = [
  {
    cancelTime: '2026-06-14 10:00:00',
    timezone: 'GMT',
    amount: 23609.43,
    currency: 'JPY',
    type: 'amount',
  },
  {
    cancelTime: '2026-06-28 10:00:00',
    timezone: 'GMT',
    amount: 23609.43,
    currency: 'JPY',
    type: 'amount',
  },
];

// Case A: now is before the first penalty tier → free cancel
test('Case A: now before first penalty tier → safe + isFreeCancellationNow=true', () => {
  const now = new Date('2026-05-20T00:00:00Z');
  const result = evaluateCancellationSafety(
    { refundableTag: 'RFN', cancelPolicyInfos: REAL_POLICY },
    now
  );

  assert.equal(result.isRefundable, true, 'isRefundable');
  assert.equal(result.isFreeCancellationNow, true, 'isFreeCancellationNow');
  assert.equal(result.penaltyAmountNow, 0, 'penaltyAmountNow');
  assert.equal(result.penaltyCurrency, 'JPY', 'penaltyCurrency');
  assert.equal(result.riskLevel, 'safe', 'riskLevel');
  assert.equal(result.refundableTag, 'RFN', 'refundableTag');
  assert.equal(result.policyTimezone, 'GMT', 'policyTimezone');
  // freeCancellationUntil should point to the first penalty entry
  assert.ok(
    result.freeCancellationUntil?.startsWith('2026-06-14'),
    `freeCancellationUntil should start with 2026-06-14, got ${result.freeCancellationUntil}`
  );
});

// Case B: now is after the first penalty tier → danger
test('Case B: now after first penalty tier → danger + penaltyAmountNow=23609.43', () => {
  const now = new Date('2026-06-15T00:00:00Z');
  const result = evaluateCancellationSafety(
    { refundableTag: 'RFN', cancelPolicyInfos: REAL_POLICY },
    now
  );

  assert.equal(result.isRefundable, true, 'isRefundable');
  assert.equal(result.isFreeCancellationNow, false, 'isFreeCancellationNow');
  assert.equal(result.penaltyAmountNow, 23609.43, 'penaltyAmountNow');
  assert.equal(result.penaltyCurrency, 'JPY', 'penaltyCurrency');
  assert.equal(result.riskLevel, 'danger', 'riskLevel');
});

// Case C: NRFN → always danger regardless of cancelPolicyInfos
test('Case C: NRFN → danger', () => {
  const result = evaluateCancellationSafety({ refundableTag: 'NRFN' });

  assert.equal(result.isRefundable, false, 'isRefundable');
  assert.equal(result.isFreeCancellationNow, false, 'isFreeCancellationNow');
  assert.equal(result.riskLevel, 'danger', 'riskLevel');
});

// Edge: exactly on the boundary (cancelTime == now) → penalty applies
test('Boundary: now == first cancelTime → danger (penalty tier starts)', () => {
  const now = new Date('2026-06-14T10:00:00Z');
  const result = evaluateCancellationSafety(
    { refundableTag: 'RFN', cancelPolicyInfos: REAL_POLICY },
    now
  );

  assert.equal(result.isFreeCancellationNow, false, 'isFreeCancellationNow at boundary');
  assert.equal(result.penaltyAmountNow, 23609.43, 'penaltyAmountNow at boundary');
  assert.equal(result.riskLevel, 'danger', 'riskLevel at boundary');
});

// Edge: no policy data at all → unknown
test('No policy data → unknown', () => {
  const result = evaluateCancellationSafety({});
  assert.equal(result.riskLevel, 'unknown', 'riskLevel');
  assert.equal(result.isFreeCancellationNow, false, 'isFreeCancellationNow');
});

// Edge: RFN with empty cancelPolicyInfos but cancelDeadline fallback in future → safe
test('Fallback cancelDeadline in future → safe', () => {
  const now = new Date('2026-05-20T00:00:00Z');
  const result = evaluateCancellationSafety(
    {
      refundableTag: 'RFN',
      cancelDeadline: '2026-06-14 10:00:00',
      cancelTimezone: 'GMT',
    },
    now
  );
  assert.equal(result.isFreeCancellationNow, true, 'isFreeCancellationNow');
  assert.equal(result.riskLevel, 'safe', 'riskLevel');
});

// Edge: RFN with non-UTC timezone → caution (comparison may be inaccurate)
test('Non-UTC timezone → caution even if free now', () => {
  const now = new Date('2026-05-20T00:00:00Z');
  const result = evaluateCancellationSafety(
    {
      refundableTag: 'RFN',
      cancelPolicyInfos: [
        { cancelTime: '2026-06-14 10:00:00', amount: 23609, currency: 'JPY', timezone: 'Asia/Tokyo' },
      ],
    },
    now
  );
  assert.equal(result.riskLevel, 'caution', `riskLevel should be caution, got ${result.riskLevel}`);
  assert.equal(result.policyTimezone, 'Asia/Tokyo', 'policyTimezone');
});
