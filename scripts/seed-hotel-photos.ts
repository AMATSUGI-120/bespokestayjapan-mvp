/**
 * seed-hotel-photos.ts
 *
 * One-time script to fetch hotel images from LiteAPI and store them in Supabase.
 * Does not touch booking flow, Stripe, or any payment logic.
 *
 * Usage:
 *   npx tsx scripts/seed-hotel-photos.ts                   # dry-run all hotels
 *   npx tsx scripts/seed-hotel-photos.ts --no-dry-run      # write to Supabase
 *   npx tsx scripts/seed-hotel-photos.ts --hotel-id=lp71969             # one hotel, dry-run
 *   npx tsx scripts/seed-hotel-photos.ts --hotel-id=lp71969 --no-dry-run
 *   npx tsx scripts/seed-hotel-photos.ts --limit=1 --no-dry-run
 *
 * Environment (reads from .env.local or process.env):
 *   LITEAPI_SECRET_KEY          required
 *   NEXT_PUBLIC_SUPABASE_URL    required
 *   SUPABASE_SERVICE_ROLE_KEY   preferred (needed for UPDATE if RLS is on)
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY  fallback if service role key is absent
 */

import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// ── env loading ───────────────────────────────────────────────────────────────

function loadEnvFile(filePath: string): Record<string, string> {
  if (!fs.existsSync(filePath)) return {};
  const env: Record<string, string> = {};
  const lines = fs.readFileSync(filePath, 'utf-8').split('\n');
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    const val = line.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    if (val) env[key] = val;
  }
  return env;
}

const envLocal = loadEnvFile(path.join(process.cwd(), '.env.local'));
const env = (key: string): string => process.env[key] ?? envLocal[key] ?? '';

// ── CLI args ──────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const isDryRun = !args.includes('--no-dry-run');
const hotelIdFlag = args.find(a => a.startsWith('--hotel-id='))?.split('=')[1];
const limitFlag = parseInt(args.find(a => a.startsWith('--limit='))?.split('=')[1] ?? '0', 10);

// ── types ─────────────────────────────────────────────────────────────────────

interface HotelImage {
  url?: string;
  thumbnailUrl?: string;
  caption?: string;
  order?: number | null;
  defaultImage?: boolean;
}

interface LiteApiHotelDetail {
  data?: {
    name?: string;
    main_photo?: string;
    hotelImages?: HotelImage[];
  };
  error?: { code: number; message: string };
}

interface SupabaseHotel {
  id: number;
  name: string;
  liteapi_id: string;
  photo_urls: string[] | null;
}

// ── helpers ───────────────────────────────────────────────────────────────────

function extractPhotoUrls(detail: LiteApiHotelDetail): string[] {
  const imgs = detail.data?.hotelImages ?? [];

  // Prefer the image flagged as defaultImage; fall back to first in array
  const primary = imgs.find(i => i.defaultImage) ?? imgs[0];

  const urls: string[] = [];

  if (primary?.thumbnailUrl) urls.push(primary.thumbnailUrl);
  if (primary?.url && primary.url !== primary.thumbnailUrl) urls.push(primary.url);

  // Also include up to 4 more distinct full-size URLs for future gallery use
  for (const img of imgs) {
    if (urls.length >= 5) break;
    if (img.url && !urls.includes(img.url)) urls.push(img.url);
  }

  // Final fallback: main_photo top-level field
  const mainPhoto = detail.data?.main_photo;
  if (mainPhoto && !urls.includes(mainPhoto)) urls.unshift(mainPhoto);

  return urls.filter(Boolean);
}

function urlDomain(url: string): string {
  try { return new URL(url).hostname; } catch { return url.slice(0, 30); }
}

// ── main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n=== seed-hotel-photos.ts ===');
  console.log(`Mode: ${isDryRun ? 'DRY-RUN (no DB writes)' : 'WRITE MODE'}`);
  if (hotelIdFlag) console.log(`Filter: --hotel-id=${hotelIdFlag}`);
  if (limitFlag) console.log(`Limit: ${limitFlag}`);
  console.log('');

  // Validate env
  const liteApiKey = env('LITEAPI_SECRET_KEY');
  const supabaseUrl = env('NEXT_PUBLIC_SUPABASE_URL');
  const serviceRoleKey = env('SUPABASE_SERVICE_ROLE_KEY');
  const anonKey = env('NEXT_PUBLIC_SUPABASE_ANON_KEY');
  const supabaseKey = serviceRoleKey || anonKey;

  if (!liteApiKey) {
    console.error('ERROR: LITEAPI_SECRET_KEY is not set. Add it to .env.local or export it.');
    process.exit(1);
  }
  if (!supabaseUrl || !supabaseKey) {
    console.error('ERROR: Supabase credentials missing. Need NEXT_PUBLIC_SUPABASE_URL and either SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY.');
    process.exit(1);
  }

  if (!serviceRoleKey) {
    console.warn('WARNING: SUPABASE_SERVICE_ROLE_KEY not found. Using anon key.');
    console.warn('         If RLS prevents UPDATE, add the service role key to .env.local.\n');
  } else {
    console.log('Using SUPABASE_SERVICE_ROLE_KEY for DB writes.\n');
  }

  const db = createClient(supabaseUrl, supabaseKey);

  // Fetch hotels from Supabase
  let query = db
    .from('hotels')
    .select('id, name, liteapi_id, photo_urls')
    .not('liteapi_id', 'is', null);

  if (hotelIdFlag) {
    query = query.eq('liteapi_id', hotelIdFlag);
  }

  const { data: hotels, error: dbError } = await query;

  if (dbError) {
    console.error('ERROR: Could not fetch hotels from Supabase:', dbError.message);
    if (dbError.message.includes('photo_urls') || dbError.message.includes('column')) {
      console.error('       → photo_urls column may not exist. Run scripts/migration_add_photo_urls.sql first.');
    }
    process.exit(1);
  }

  if (!hotels || hotels.length === 0) {
    console.log('No hotels found matching criteria.');
    process.exit(0);
  }

  // Filter to hotels without photos (skip if already seeded)
  const pending = (hotels as SupabaseHotel[]).filter(
    h => !h.photo_urls || h.photo_urls.length === 0
  );

  if (pending.length === 0) {
    console.log('All matching hotels already have photo_urls. Nothing to seed.');
    console.log('(To re-seed, clear photo_urls in Supabase first.)');
    process.exit(0);
  }

  const toProcess = limitFlag > 0 ? pending.slice(0, limitFlag) : pending;
  console.log(`Hotels to process: ${toProcess.length} (${pending.length - toProcess.length} skipped by --limit)\n`);

  let successCount = 0;
  let failCount = 0;

  for (const hotel of toProcess) {
    process.stdout.write(`[${hotel.liteapi_id}] ${hotel.name} ... `);

    // Call LiteAPI
    let detail: LiteApiHotelDetail;
    try {
      const res = await fetch(
        `https://api.liteapi.travel/v3.0/data/hotel?hotelId=${hotel.liteapi_id}`,
        { headers: { 'X-API-Key': liteApiKey } }
      );
      detail = await res.json() as LiteApiHotelDetail;

      if (!res.ok || detail.error) {
        const msg = detail.error?.message ?? `HTTP ${res.status}`;
        console.log(`FAIL (API error: ${msg})`);
        failCount++;
        continue;
      }
    } catch (err) {
      console.log(`FAIL (fetch error: ${err instanceof Error ? err.message : err})`);
      failCount++;
      continue;
    }

    const imgCount = detail.data?.hotelImages?.length ?? 0;
    const photoUrls = extractPhotoUrls(detail);

    if (photoUrls.length === 0) {
      console.log(`SKIP (0 images returned from LiteAPI)`);
      // Log full response keys for debugging
      console.log(`       Response keys: ${JSON.stringify(Object.keys(detail.data ?? {}))}`);
      failCount++;
      continue;
    }

    const domain = urlDomain(photoUrls[0]);
    console.log(`OK (${imgCount} images, selected ${photoUrls.length} URLs, domain: ${domain})`);
    console.log(`       Hero URL: ${photoUrls[0].slice(0, 80)}...`);

    if (isDryRun) {
      console.log('       [dry-run] skipping DB write\n');
      successCount++;
      continue;
    }

    // Write to Supabase
    const { error: updateError } = await db
      .from('hotels')
      .update({ photo_urls: photoUrls })
      .eq('id', hotel.id);

    if (updateError) {
      console.log(`       DB write FAILED: ${updateError.message}`);
      if (updateError.message.includes('column') && updateError.message.includes('photo_urls')) {
        console.log('       → Run scripts/migration_add_photo_urls.sql in Supabase Dashboard first.');
      } else if (updateError.code === '42501') {
        console.log('       → RLS policy is blocking UPDATE. Add SUPABASE_SERVICE_ROLE_KEY to .env.local.');
      }
      failCount++;
    } else {
      console.log('       DB write OK\n');
      successCount++;
    }
  }

  console.log('─'.repeat(50));
  console.log(`Done. Success: ${successCount} / ${toProcess.length}  Fail/Skip: ${failCount}`);
  if (isDryRun) console.log('(dry-run — no data was written to Supabase)');
  console.log('');
}

main().catch(err => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
