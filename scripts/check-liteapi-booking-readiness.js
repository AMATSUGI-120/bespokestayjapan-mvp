#!/usr/bin/env node
'use strict';

/**
 * check-liteapi-booking-readiness.js
 *
 * Queries Supabase for hotels with private-villa / self-catering / private-bath tags,
 * calls LiteAPI rates API for each, and classifies booking readiness.
 *
 * Checks:
 *   1-7.  Rates availability, roomTypes count, offerId, price, classification
 *   8.    Is auto-selection safe for 1-roomType private stays?
 *   9.    Pet-related hotelRemarks present?
 *   10.   All-NRFN hotels (need warning UI)
 *   11.   Fixed test dates: 2026-06-15 / 2026-06-16
 *
 * Output:
 *   data/liteapi-booking-readiness.json
 *   data/liteapi-booking-readiness-report.md
 */

const fs   = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// ─── env ──────────────────────────────────────────────────────────────────────
function loadEnv() {
  const p = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(p)) return;
  for (const raw of fs.readFileSync(p, 'utf-8').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq < 0) continue;
    const k = line.slice(0, eq).trim();
    const v = line.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    if (k && v && !process.env[k]) process.env[k] = v;
  }
}

// ─── Fixed test dates (check 11) ──────────────────────────────────────────────
const TEST_CHECKIN  = '2026-06-15';
const TEST_CHECKOUT = '2026-06-16';
const TEST_GUESTS   = 2;

// ─── Classification (checks 1-7, C subdivided into C1/C2/C3) ─────────────────
function classify(hotel, apiResult) {
  // C1: API-level failure — invalid ID, network error, hotel not in response
  // NOTE: Some C1 hotels have valid liteapi_ids for /data/hotel (photos) but are
  //       not bookable via /hotels/rates — they may be data-only listings in LiteAPI.
  if (apiResult.error) {
    const isNotFound = apiResult.error.includes('not found');
    return {
      grade:  'C1',
      label:  'api_error_or_invalid_hotel',
      reason: isNotFound
        ? `Not found in rates API — hotel may be data-only in LiteAPI (not bookable via rates endpoint): ${apiResult.error}`
        : apiResult.error,
    };
  }

  const rooms = apiResult.roomTypes ?? [];

  // C2: API responded normally but 0 roomTypes → no inventory on test dates
  //     (may recover on different dates — do NOT classify as D)
  if (rooms.length === 0) {
    return {
      grade:  'C2',
      label:  'no_inventory_on_test_dates',
      reason: 'API responded OK but returned 0 roomTypes — no availability for test dates. Retry with different dates.',
    };
  }

  // C3: roomTypes returned but missing offerId or price in all of them
  const withOffer = rooms.filter(r => r.offerId && r.price > 0);
  if (withOffer.length === 0) {
    return {
      grade:  'C3',
      label:  'incomplete_booking_data',
      reason: `${rooms.length} roomType(s) returned but none had both a valid offerId and price > 0`,
    };
  }

  const isPrivateVilla = (hotel.category_tags ?? []).includes('private-villa');

  if (rooms.length === 1) {
    return {
      grade:  'A',
      label:  'booking_ready_private_stay',
      reason: isPrivateVilla
        ? '1 roomType (private-villa) — auto-selection safe, no room-choice UI needed'
        : '1 roomType — auto-selection safe',
    };
  }
  return {
    grade:  'B',
    label:  'rates_available_but_needs_room_selection',
    reason: `${rooms.length} roomTypes returned — room selection UI recommended before booking`,
  };
}

// ─── Check 8: auto-selection safety for 1-room private stays ─────────────────
function checkAutoSelectionSafe(hotel, roomTypes) {
  if (roomTypes.length !== 1) return null;
  const room = roomTypes[0];
  const issues = [];
  if (!room.offerId)  issues.push('offerId missing');
  if (room.price <= 0) issues.push('price is 0');
  return {
    autoSelectionSafe: issues.length === 0,
    issues,
    verdict: issues.length === 0
      ? 'Safe — single offerId can be passed directly to prebook'
      : `Unsafe — ${issues.join(', ')}`,
  };
}

// ─── Check 9: pet-related hotelRemarks ───────────────────────────────────────
const PET_PATTERN = /pet|dog|cat|犬|猫|ペット|animal/i;
function extractPetRemarks(rawHotelData) {
  const remarks = [];
  // hotelRemarks at hotel level
  if (rawHotelData?.hotelRemarks) {
    const r = String(rawHotelData.hotelRemarks);
    if (PET_PATTERN.test(r)) remarks.push(`hotelRemarks: ${r.slice(0, 200)}`);
  }
  // remarks inside roomTypes
  for (const room of rawHotelData?.roomTypes ?? []) {
    const fields = [room.remarks, room.description, room.boardDescription];
    for (const f of fields) {
      if (f && PET_PATTERN.test(String(f))) {
        remarks.push(`room[${room.name ?? '?'}].field: ${String(f).slice(0, 150)}`);
      }
    }
    for (const rate of room.rates ?? []) {
      if (rate.remarks && PET_PATTERN.test(String(rate.remarks))) {
        remarks.push(`rate.remarks: ${String(rate.remarks).slice(0, 150)}`);
      }
    }
  }
  return remarks;
}

// ─── Check 10: all-NRFN detection ────────────────────────────────────────────
function checkAllNrfn(roomTypes) {
  if (roomTypes.length === 0) return false;
  return roomTypes.every(r => r.refundableTag === 'NRFN');
}

// ─── LiteAPI call ─────────────────────────────────────────────────────────────
async function fetchRates(liteapiId) {
  const body = {
    hotelIds:         [liteapiId],
    checkin:          TEST_CHECKIN,
    checkout:         TEST_CHECKOUT,
    occupancies:      [{ adults: TEST_GUESTS }],
    guestNationality: 'JP',
    currency:         'JPY',
  };

  let res, data;
  try {
    res  = await fetch('https://api.liteapi.travel/v3.0/hotels/rates', {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key':    process.env.LITEAPI_SECRET_KEY,
      },
      body: JSON.stringify(body),
    });
    data = await res.json();
  } catch (e) {
    return { error: `Network error: ${e.message}` };
  }

  if (!res.ok) {
    const msg = data?.message ?? data?.error?.description ?? `HTTP ${res.status}`;
    return { error: `API error ${res.status}: ${msg}` };
  }

  const hotelData = (data.data ?? []).find(h => (h.hotelId ?? h.id) === liteapiId);
  if (!hotelData) return { error: 'Hotel not found in rates response (invalid liteapi_id or sold out)' };

  const rawRooms = hotelData.roomTypes ?? [];

  const roomTypes = rawRooms.map(room => {
    const price =
      room.retailRate?.total?.[0]?.amount ??
      room.retailRate?.suggestedSellingRate?.[0]?.amount ??
      room.rates?.[0]?.retailRate?.total?.[0]?.amount ??
      room.price?.total ??
      room.price?.finalRate ??
      room.price?.net ??
      room.price?.amount ??
      0;

    const offerId = room.offerId ?? room.rates?.[0]?.offerId ?? '';

    const refundableTag =
      room.rates?.[0]?.cancellationPolicies?.refundableTag ??
      room.refundableTag ?? '';

    const cancelPolicies =
      room.cancellationPolicies?.cancelPolicyInfos ??
      room.rates?.[0]?.cancellationPolicies?.cancelPolicyInfos ?? [];

    return {
      name:          room.name ?? room.roomName ?? '(unnamed)',
      offerId,
      price,
      currency:      room.price?.currency ?? 'JPY',
      boardType:     room.boardType ?? room.boardCode ?? room.mealPlan ?? null,
      refundableTag,
      cancelDeadline: cancelPolicies[0]?.cancelTime ?? null,
      hasValidOffer:  !!offerId && price > 0,
    };
  });

  // check 9: pet remarks from raw response
  const petRemarks = extractPetRemarks(hotelData);

  return {
    roomTypes,
    rawRoomCount: rawRooms.length,
    petRemarks,
  };
}

// ─── Markdown report ──────────────────────────────────────────────────────────
function buildMarkdown(results) {
  const gradeOrder = ['A', 'B', 'C1', 'C2', 'C3', 'D'];
  const gradeLabel = {
    A:  'booking_ready_private_stay',
    B:  'rates_available_but_needs_room_selection',
    C1: 'api_error_or_invalid_hotel',
    C2: 'no_inventory_on_test_dates',
    C3: 'incomplete_booking_data',
    D:  'official_or_ota_fallback_recommended',
  };
  const gradeEmoji = { A: '✅', B: '🟡', C1: '🔴', C2: '🟠', C3: '🟤', D: '⛔' };

  const byGrade = {};
  for (const g of gradeOrder) byGrade[g] = results.filter(r => r.grade === g);

  const allNrfn    = results.filter(r => r.allNrfn);
  const hasPetNote = results.filter(r => (r.petRemarks ?? []).length > 0);
  const unsafeAuto = results.filter(r => r.autoSelection && !r.autoSelection.autoSelectionSafe);

  const lines = [];
  lines.push('# LiteAPI Booking Readiness Report');
  lines.push('');
  lines.push(`**調査日時:** ${new Date().toISOString()}`);
  lines.push(`**テスト日程:** ${TEST_CHECKIN} → ${TEST_CHECKOUT} (${TEST_GUESTS}名)`);
  lines.push(`**対象タグ:** private-villa / self-catering / private-bath`);
  lines.push(`**対象件数:** ${results.length}件`);
  lines.push('');

  // Summary
  lines.push('## サマリー');
  lines.push('');
  lines.push('| Grade | 分類 | 件数 |');
  lines.push('|---|---|---|');
  for (const g of gradeOrder) {
    lines.push(`| ${gradeEmoji[g]} **${g}** | ${gradeLabel[g]} | ${byGrade[g].length}件 |`);
  }
  lines.push('');
  lines.push('**追加チェック結果:**');
  lines.push('');
  lines.push(`- ✅ **Check 8** — 1 roomType で auto-selection 安全: ${results.filter(r => r.autoSelection?.autoSelectionSafe).length}件`);
  lines.push(`- ⚠️ **Check 8** — auto-selection 不安全 (offerId/price 欠落): ${unsafeAuto.length}件`);
  lines.push(`- 🐾 **Check 9** — pet 関連 hotelRemarks あり: ${hasPetNote.length}件`);
  lines.push(`- 🔴 **Check 10** — 全 roomType が NRFN（要警告UI）: ${allNrfn.length}件`);
  lines.push('');
  lines.push('> **C2 補足:** C2 は API 正常・在庫なしのため別日程で再調査すれば復活する可能性があります。D とは区別してください。');
  lines.push('');

  // Per-grade detail
  for (const g of gradeOrder) {
    const group = byGrade[g];
    if (group.length === 0) continue;

    lines.push(`## ${gradeEmoji[g]} Grade ${g} — ${gradeLabel[g]} (${group.length}件)`);
    lines.push('');

    for (const r of group) {
      const privateMark = (r.category_tags ?? []).includes('private-villa') ? ' 🏠' : '';
      lines.push(`### ${r.name}${privateMark}`);
      lines.push(`- **liteapi_id:** \`${r.liteapi_id}\``);
      lines.push(`- **city / area:** ${r.city} / ${r.area}`);
      lines.push(`- **category_tags:** ${(r.category_tags ?? []).join(', ')}`);
      lines.push(`- **判定理由:** ${r.reason}`);

      // Check 8
      if (r.autoSelection) {
        lines.push(`- **Check 8 (auto-select):** ${r.autoSelection.verdict}`);
      }

      // Check 9
      if ((r.petRemarks ?? []).length > 0) {
        lines.push(`- **Check 9 (pet remarks):**`);
        r.petRemarks.forEach(rem => lines.push(`  - ${rem}`));
      }

      // Check 10
      if (r.allNrfn) {
        lines.push(`- **Check 10 (NRFN):** ⚠️ 全 roomType が Non-Refundable — 要警告UI`);
      }

      if (r.roomTypes && r.roomTypes.length > 0) {
        lines.push('');
        lines.push('  | # | name | price | offerId (先頭20文字) | boardType | refundable | cancelDeadline |');
        lines.push('  |---|---|---|---|---|---|---|');
        r.roomTypes.forEach((room, i) => {
          const offerShort  = room.offerId ? room.offerId.slice(0, 20) + '…' : '(none)';
          const priceStr    = room.price > 0 ? `¥${room.price.toLocaleString()}` : '(none)';
          const cancelStr   = room.cancelDeadline
            ? new Date(room.cancelDeadline).toLocaleDateString('ja-JP')
            : '-';
          lines.push(`  | ${i + 1} | ${room.name} | ${priceStr} | \`${offerShort}\` | ${room.boardType ?? '-'} | ${room.refundableTag || '-'} | ${cancelStr} |`);
        });
      } else if (r.error) {
        lines.push(`- **エラー:** \`${r.error}\``);
      }
      lines.push('');
    }
  }

  // Booking-ready summary (Grade A)
  lines.push('## ✅ Booking-Ready ホテル一覧 (Grade A)');
  lines.push('');
  if (byGrade['A'].length === 0) {
    lines.push('*Grade A のホテルはありませんでした。*');
  } else {
    lines.push('| liteapi_id | name | city | area | price | auto-select | NRFN |');
    lines.push('|---|---|---|---|---|---|---|');
    for (const r of byGrade['A']) {
      const room      = r.roomTypes[0];
      const priceStr  = room.price > 0 ? `¥${room.price.toLocaleString()}` : '-';
      const autoSafe  = r.autoSelection?.autoSelectionSafe ? '✅ safe' : '⚠️ check';
      const nrfnMark  = r.allNrfn ? '⚠️ NRFN' : '✅ RFN';
      lines.push(`| \`${r.liteapi_id}\` | ${r.name} | ${r.city} | ${r.area} | ${priceStr} | ${autoSafe} | ${nrfnMark} |`);
    }
  }
  lines.push('');

  // NRFN warning list (Check 10)
  if (allNrfn.length > 0) {
    lines.push('## ⚠️ Check 10 — NRFN ホテル（警告UI が必要）');
    lines.push('');
    lines.push('| liteapi_id | name | city | grade |');
    lines.push('|---|---|---|---|');
    for (const r of allNrfn) {
      lines.push(`| \`${r.liteapi_id}\` | ${r.name} | ${r.city} | ${r.grade} |`);
    }
    lines.push('');
  }

  // Pet remarks list (Check 9)
  if (hasPetNote.length > 0) {
    lines.push('## 🐾 Check 9 — Pet 関連 Remarks あり');
    lines.push('');
    for (const r of hasPetNote) {
      lines.push(`**${r.liteapi_id}** — ${r.name}`);
      r.petRemarks.forEach(rem => lines.push(`- ${rem}`));
      lines.push('');
    }
  }

  return lines.join('\n');
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  loadEnv();

  console.log('\n=== LiteAPI Booking Readiness Check ===');
  console.log(`テスト日程: ${TEST_CHECKIN} → ${TEST_CHECKOUT} (${TEST_GUESTS}名)`);
  console.log('対象タグ: private-villa / self-catering / private-bath');

  const sb = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } }
  );

  const { data: hotels, error: dbErr } = await sb
    .from('hotels')
    .select('liteapi_id, name, city, area, category_tags, final_publication_status, is_published')
    .overlaps('category_tags', ['private-villa', 'self-catering', 'private-bath'])
    .order('city');

  if (dbErr) { console.error('Supabase error:', dbErr.message); process.exit(1); }
  console.log(`\n対象ホテル: ${hotels.length}件\n`);

  const results = [];

  for (const hotel of hotels) {
    const isPet = (hotel.category_tags ?? []).includes('pet-friendly');
    process.stdout.write(`  [${hotel.liteapi_id}] ${hotel.name.slice(0, 42).padEnd(42)} `);

    const apiResult = await fetchRates(hotel.liteapi_id);
    const classif   = classify(hotel, apiResult);
    const roomTypes = apiResult.roomTypes ?? [];

    // Check 8: auto-selection safety (only for 1-room results)
    const autoSelection = checkAutoSelectionSafe(hotel, roomTypes);

    // Check 9: pet remarks (only relevant for pet-tagged hotels)
    const petRemarks = isPet ? (apiResult.petRemarks ?? []) : [];

    // Check 10: all-NRFN
    const allNrfn = checkAllNrfn(roomTypes);

    const result = {
      liteapi_id:               hotel.liteapi_id,
      name:                     hotel.name,
      city:                     hotel.city,
      area:                     hotel.area,
      category_tags:            hotel.category_tags,
      is_published:             hotel.is_published,
      final_publication_status: hotel.final_publication_status,
      grade:                    classif.grade,
      label:                    classif.label,
      reason:                   classif.reason,
      roomTypes,
      rawRoomCount:             apiResult.rawRoomCount ?? 0,
      error:                    apiResult.error ?? null,
      // Check 8
      autoSelection,
      // Check 9
      petRemarks,
      hasPetRemarks:            petRemarks.length > 0,
      // Check 10
      allNrfn,
      checked_at:               new Date().toISOString(),
    };
    results.push(result);

    const em    = { A: '✅', B: '🟡', C1: '🔴', C2: '🟠', C3: '🟤', D: '⛔' };
    const rooms = roomTypes.length > 0 ? `${roomTypes.length}部屋` : 'error';
    const nrfn  = allNrfn ? ' ⚠️NRFN' : '';
    const pet   = petRemarks.length > 0 ? ' 🐾' : '';
    console.log(`${em[classif.grade]} ${classif.grade} (${rooms})${nrfn}${pet}`);

    await new Promise(r => setTimeout(r, 300));
  }

  // Summary
  const counts = { A: 0, B: 0, C1: 0, C2: 0, C3: 0, D: 0 };
  results.forEach(r => { counts[r.grade] = (counts[r.grade] ?? 0) + 1; });
  const allNrfnCount  = results.filter(r => r.allNrfn).length;
  const petNoteCount  = results.filter(r => r.hasPetRemarks).length;
  const autoSafeCount = results.filter(r => r.autoSelection?.autoSelectionSafe).length;

  console.log('\n─── 結果サマリー ────────────────────────────────────────────');
  console.log(`  ✅ A  (booking_ready_private_stay)              : ${counts.A}件`);
  console.log(`  🟡 B  (rates_available_but_needs_room_selection): ${counts.B}件`);
  console.log(`  🔴 C1 (api_error_or_invalid_hotel)             : ${counts.C1}件`);
  console.log(`  🟠 C2 (no_inventory_on_test_dates)             : ${counts.C2}件  ← 別日程で再調査`);
  console.log(`  🟤 C3 (incomplete_booking_data)                : ${counts.C3}件`);
  console.log(`  ⛔ D  (official_or_ota_fallback_recommended)   : ${counts.D}件`);
  console.log(`  ✅ Check 8 — 1部屋 auto-selection 安全          : ${autoSafeCount}件`);
  console.log(`  ⚠️  Check 10 — 全 roomType が NRFN              : ${allNrfnCount}件`);
  console.log(`  🐾 Check 9  — pet remarks あり                  : ${petNoteCount}件`);

  const outDir = path.join(process.cwd(), 'data');
  fs.mkdirSync(outDir, { recursive: true });

  const jsonPath = path.join(outDir, 'liteapi-booking-readiness.json');
  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\n✓ JSON   → ${jsonPath}`);

  const mdPath = path.join(outDir, 'liteapi-booking-readiness-report.md');
  fs.writeFileSync(mdPath, buildMarkdown(results), 'utf-8');
  console.log(`✓ Report → ${mdPath}`);
}

main().catch(err => {
  console.error('\nFATAL:', err.message ?? err);
  process.exit(1);
});
