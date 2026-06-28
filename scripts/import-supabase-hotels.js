#!/usr/bin/env node
'use strict';

/**
 * import-supabase-hotels.js
 *
 * Upsert hotels from data/supabase-hotels-import.json → Supabase public.hotels
 *
 * Usage:
 *   node scripts/import-supabase-hotels.js --dry-run          # preview only
 *   node scripts/import-supabase-hotels.js --hotel-key=kyoto-kumashu-an-machiya-house --dry-run
 *   node scripts/import-supabase-hotels.js --hotel-key=kyoto-kumashu-an-machiya-house   # single upsert
 *   node scripts/import-supabase-hotels.js --liteapi-id=lp656a1148 --dry-run             # legacy alias
 *   node scripts/import-supabase-hotels.js                    # full upsert (all hotels)
 *
 * Environment (reads from .env.local):
 *   NEXT_PUBLIC_SUPABASE_URL       required
 *   SUPABASE_SERVICE_ROLE_KEY      required (bypasses RLS for UPDATE)
 */

const fs   = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// ─── env ──────────────────────────────────────────────────────────────────────
function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return;
  for (const raw of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    const val = line.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    if (key && val && !process.env[key]) process.env[key] = val;
  }
}

// ─── CLI args ─────────────────────────────────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  const hotelKey =
    (args.find(a => a.startsWith('--hotel-key=')) ?? '').split('=')[1] ??
    (args.find(a => a.startsWith('--liteapi-id=')) ?? '').split('=')[1] ??
    null;

  return {
    dryRun: args.includes('--dry-run'),
    hotelKey,
  };
}

// ─── Fields ───────────────────────────────────────────────────────────────────
const UPDATE_FIELDS = [
  'name', 'city', 'area', 'type', 'layer', 'recommended_margin',
  'booking_url', 'short_description', 'key_highlights', 'best_for',
  'condition_details', 'access_summary', 'luggage_summary', 'kitchen_summary',
  'bath_summary', 'english_support_summary', 'rules_summary',
  'verified_notes', 'caution_notes', 'category_tags', 'source_urls',
  'final_publication_status', 'final_listing_priority',
];
// Never updated: id, created_at

// ─── Build payloads ───────────────────────────────────────────────────────────
function buildInsertPayload(hotel) {
  const now = new Date().toISOString();
  const isPublished = hotel.is_published === true;
  const payload = {
    // DB compatibility field. JSON uses hotel_key or legacy liteapi_id here.
    liteapi_id:        hotel.liteapi_id,
    is_published:      isPublished,
    published_at:      isPublished ? now : null,
    created_at:        now,
    updated_at:        now,
  };
  for (const f of UPDATE_FIELDS) {
    payload[f] = hotel[f] ?? defaultVal(f);
  }
  return payload;
}

function buildUpdatePayload(hotel, existing) {
  const now = new Date().toISOString();
  const isPublished = hotel.is_published === true;
  const payload = {
    is_published: isPublished,
    published_at: isPublished ? (existing?.published_at ?? now) : null,
    updated_at: now,
  };
  for (const f of UPDATE_FIELDS) {
    payload[f] = hotel[f] ?? defaultVal(f);
  }
  return payload;
}

function defaultVal(field) {
  if (field === 'layer')              return 2;
  if (field === 'recommended_margin') return 0.15;
  if (field === 'type')               return 'Hotel';
  return '';
}

// ─── Supabase client ──────────────────────────────────────────────────────────
function makeClient() {
  const url     = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const svcKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !svcKey) {
    console.error('ERROR: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.');
    process.exit(1);
  }
  return createClient(url, svcKey, { auth: { persistSession: false } });
}

// ─── Fetch existing compatibility IDs from hotels ─────────────────────────────
async function fetchExisting(supabase, ids) {
  const { data, error } = await supabase
    .from('hotels')
    .select('liteapi_id, is_published, published_at')
    .in('liteapi_id', ids);
  if (error) throw new Error(`Failed to fetch existing hotels: ${error.message}`);
  return new Map((data ?? []).map(r => [r.liteapi_id, r]));
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  loadEnv();
  const { dryRun, hotelKey } = parseArgs();

  // Load JSON
  const jsonPath = path.join(process.cwd(), 'data', 'supabase-hotels-import.json');
  if (!fs.existsSync(jsonPath)) {
    console.error(`ERROR: ${jsonPath} not found. Run convert-bsj-csv-to-supabase-json.js first.`);
    process.exit(1);
  }
  let hotels = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  // --hotel-key filter. --liteapi-id remains supported as a legacy alias.
  if (hotelKey) {
    hotels = hotels.filter(h => h.liteapi_id === hotelKey);
    if (hotels.length === 0) {
      console.error(`ERROR: hotel key "${hotelKey}" not found in JSON.`);
      process.exit(1);
    }
    console.log(`\n--hotel-key filter: processing 1 hotel (${hotelKey})`);
  }

  console.log(`\nMode     : ${dryRun ? 'DRY-RUN (no writes)' : 'LIVE'}`);
  console.log(`Hotels   : ${hotels.length}`);
  console.log(`JSON     : ${jsonPath}`);

  const supabase = makeClient();

  // Determine INSERT vs UPDATE for all hotels
  const allIds    = hotels.map(h => h.liteapi_id);
  const existingById = await fetchExisting(supabase, allIds);

  const toInsert = hotels.filter(h => !existingById.has(h.liteapi_id));
  const toUpdate = hotels.filter(h =>  existingById.has(h.liteapi_id));

  console.log(`\n  INSERT : ${toInsert.length} hotels (new)`);
  console.log(`  UPDATE : ${toUpdate.length} hotels (existing)`);

  // ── Dry-run: list only
  if (dryRun) {
    console.log('\n─── DRY-RUN PREVIEW ───────────────────────────────────────────────────\n');
    for (const h of hotels) {
      const action = existingById.has(h.liteapi_id) ? 'UPDATE' : 'INSERT';
      const tags   = Array.isArray(h.category_tags) ? h.category_tags.join(', ') : String(h.category_tags);
      console.log(`[${action}] ${h.liteapi_id}`);
      console.log(`        name : ${h.name}`);
      console.log(`        city : ${h.city}  area : ${h.area}`);
      console.log(`        tags : ${tags}`);
      console.log(`        published : ${h.is_published === true}`);
      console.log('');
    }
    console.log('─── DRY-RUN COMPLETE (nothing written) ─────────────────────────────────');
    return;
  }

  // ── Live: upsert
  let insertCount = 0;
  let updateCount = 0;
  let errorCount  = 0;
  const errors    = [];

  // INSERT new hotels
  for (const hotel of toInsert) {
    const payload = buildInsertPayload(hotel);
    const { error } = await supabase.from('hotels').insert(payload);
    if (error) {
      errorCount++;
      errors.push(`INSERT ${hotel.liteapi_id}: ${error.message}`);
      console.error(`  ✗ INSERT ${hotel.liteapi_id}: ${error.message}`);
    } else {
      insertCount++;
      console.log(`  ✓ INSERT ${hotel.liteapi_id} — ${hotel.name}`);
    }
  }

  // UPDATE existing hotels
  for (const hotel of toUpdate) {
    const payload = buildUpdatePayload(hotel, existingById.get(hotel.liteapi_id));
    const { error } = await supabase
      .from('hotels')
      .update(payload)
      .eq('liteapi_id', hotel.liteapi_id);
    if (error) {
      errorCount++;
      errors.push(`UPDATE ${hotel.liteapi_id}: ${error.message}`);
      console.error(`  ✗ UPDATE ${hotel.liteapi_id}: ${error.message}`);
    } else {
      updateCount++;
      console.log(`  ✓ UPDATE ${hotel.liteapi_id} — ${hotel.name}`);
    }
  }

  // ── Summary
  console.log('\n─── RESULT ─────────────────────────────────────────────────────────────');
  console.log(`  Total processed : ${hotels.length}`);
  console.log(`  INSERT          : ${insertCount}`);
  console.log(`  UPDATE          : ${updateCount}`);
  console.log(`  Errors          : ${errorCount}`);
  if (errors.length > 0) {
    console.log('\nErrors:');
    errors.forEach(e => console.log(`  ✗ ${e}`));
  }

  // ── Post-import SQL hint
  console.log('\n─── POST-IMPORT CHECK SQL ──────────────────────────────────────────────');
  console.log(`
Run this in Supabase SQL Editor to verify category_tags are stored as arrays.
The DB column is still named liteapi_id for compatibility, but values may be hotel_key:

  SELECT
    liteapi_id,
    name,
    category_tags,
    pg_typeof(category_tags)        AS col_type,
    array_length(category_tags, 1)  AS tag_count
  FROM public.hotels
  WHERE liteapi_id IN (${allIds.slice(0, 5).map(id => `'${id}'`).join(', ')}${allIds.length > 5 ? ', ...' : ''})
  ORDER BY liteapi_id;

  -- All rows should show col_type = "text[]" and tag_count >= 1
`);

  if (errorCount > 0) process.exit(1);
}

main().catch(err => {
  console.error('\nFATAL:', err.message ?? err);
  process.exit(1);
});
