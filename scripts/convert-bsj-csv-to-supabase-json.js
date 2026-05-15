#!/usr/bin/env node
'use strict';

const fs   = require('fs');
const path = require('path');

// ─── CLI args ─────────────────────────────────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  const result = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      result[args[i].slice(2)] = args[i + 1];
      i++;
    }
  }
  return result;
}

// ─── RFC 4180 CSV parser ──────────────────────────────────────────────────────
function parseCSV(text) {
  // Normalize line endings
  text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const rows = [];
  let i = 0;
  const n = text.length;

  function parseField() {
    if (i >= n || text[i] === '\n' || text[i] === ',') return '';
    if (text[i] === '"') {
      i++; // skip opening quote
      let field = '';
      while (i < n) {
        if (text[i] === '"' && text[i + 1] === '"') {
          field += '"';
          i += 2;
        } else if (text[i] === '"') {
          i++; // skip closing quote
          break;
        } else {
          field += text[i++];
        }
      }
      return field;
    } else {
      let field = '';
      while (i < n && text[i] !== ',' && text[i] !== '\n') {
        field += text[i++];
      }
      return field;
    }
  }

  while (i < n) {
    const row = [];
    row.push(parseField());
    while (i < n && text[i] === ',') {
      i++;
      row.push(parseField());
    }
    if (i < n && text[i] === '\n') i++;
    // Skip completely empty trailing rows
    if (row.length === 1 && row[0] === '' && i >= n) break;
    rows.push(row);
  }
  return rows;
}

function csvToObjects(text) {
  const rows = parseCSV(text);
  if (rows.length === 0) return [];
  const headers = rows[0];
  return rows.slice(1)
    .filter(row => row.some(cell => cell.trim() !== ''))
    .map(row => {
      const obj = {};
      headers.forEach((h, idx) => { obj[h] = row[idx] ?? ''; });
      return obj;
    });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function parseCategoryTags(raw) {
  if (!raw || !raw.trim()) return [];
  const seen = new Set();
  const result = [];
  for (const t of raw.split('|')) {
    const tag = t.trim();
    if (tag && !seen.has(tag)) {
      seen.add(tag);
      result.push(tag);
    }
  }
  return result;
}

function firstUrl(urlsString) {
  if (!urlsString || !urlsString.trim()) return '';
  return urlsString.split('|')[0].trim();
}

function str(val) {
  return (val ?? '').trim();
}

// Count non-empty listing_* fields — used for duplicate resolution
const LISTING_FIELDS = [
  'listing_title', 'listing_short_description', 'listing_key_highlights',
  'listing_best_for', 'listing_condition_details', 'listing_access_summary',
  'listing_luggage_summary', 'listing_kitchen_summary', 'listing_bath_summary',
  'listing_english_support_summary', 'listing_rules_summary',
  'listing_verified_notes', 'listing_caution_notes',
  'listing_category_tags', 'listing_source_urls',
];
function listingFieldCount(row) {
  return LISTING_FIELDS.filter(f => row[f] && row[f].trim()).length;
}

// ─── Row conversion ───────────────────────────────────────────────────────────
function convertRow(row) {
  return {
    liteapi_id:               str(row.liteapi_id),
    name:                     str(row.listing_title),
    city:                     str(row.city),
    area:                     str(row.area),
    address:                  str(row.address),
    type:                     'Hotel',
    layer:                    2,
    recommended_margin:       0.15,
    booking_url:              firstUrl(row.listing_source_urls),
    short_description:        str(row.listing_short_description),
    key_highlights:           str(row.listing_key_highlights),
    best_for:                 str(row.listing_best_for),
    condition_details:        str(row.listing_condition_details),
    access_summary:           str(row.listing_access_summary),
    luggage_summary:          str(row.listing_luggage_summary),
    kitchen_summary:          str(row.listing_kitchen_summary),
    bath_summary:             str(row.listing_bath_summary),
    english_support_summary:  str(row.listing_english_support_summary),
    rules_summary:            str(row.listing_rules_summary),
    verified_notes:           str(row.listing_verified_notes),
    caution_notes:            str(row.listing_caution_notes),
    category_tags:            parseCategoryTags(row.listing_category_tags),
    source_urls:              str(row.listing_source_urls),
    final_publication_status: str(row.final_publication_status),
    final_listing_priority:   str(row.final_listing_priority),
    is_published:             false,
  };
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(obj) {
  const warnings = [];
  for (const field of ['liteapi_id', 'name', 'city', 'area', 'booking_url', 'short_description']) {
    if (!obj[field] || !obj[field].trim()) {
      warnings.push(`(${obj.liteapi_id || '?'}): required field "${field}" is empty`);
    }
  }
  if (!Array.isArray(obj.category_tags) || obj.category_tags.length === 0) {
    warnings.push(`(${obj.liteapi_id}): category_tags is empty or not an array`);
  }
  return warnings;
}

// ─── Preview markdown ─────────────────────────────────────────────────────────
function buildPreview(hotels, skipped, warnings) {
  const lines = [];
  lines.push('# BSJ CSV → Supabase JSON 変換結果プレビュー');
  lines.push('');
  lines.push(`生成日時: ${new Date().toISOString()}`);
  lines.push('');
  lines.push('## サマリー');
  lines.push('');
  lines.push(`- 出力件数: **${hotels.length}件**`);
  lines.push(`- スキップ件数: ${skipped.length}件`);
  lines.push(`- バリデーション警告: ${warnings.length}件`);
  lines.push('');

  if (warnings.length > 0) {
    lines.push('## ⚠️ バリデーション警告');
    lines.push('');
    warnings.forEach(w => lines.push(`- ${w}`));
    lines.push('');
  }

  if (skipped.length > 0) {
    lines.push('## スキップされた行');
    lines.push('');
    skipped.forEach(s => lines.push(`- ${s}`));
    lines.push('');
  }

  lines.push('## 出力ホテル一覧');
  lines.push('');
  lines.push('| # | liteapi_id | name | city | area | category_tags | booking_url | priority |');
  lines.push('|---|---|---|---|---|---|---|---|');
  hotels.forEach((h, i) => {
    const tags = h.category_tags.join(', ');
    const url  = h.booking_url.length > 50 ? h.booking_url.slice(0, 47) + '...' : h.booking_url;
    const name = h.name.length > 45 ? h.name.slice(0, 42) + '...' : h.name;
    lines.push(`| ${i + 1} | \`${h.liteapi_id}\` | ${name} | ${h.city} | ${h.area} | ${tags} | ${url} | ${h.final_listing_priority} |`);
  });
  lines.push('');

  return lines.join('\n');
}

// ─── Main ─────────────────────────────────────────────────────────────────────
function main() {
  const args = parseArgs();
  const inputPath   = args.input;
  const outputPath  = args.output;
  const previewPath = args.preview;

  if (!inputPath || !outputPath) {
    console.error('Usage: node scripts/convert-bsj-csv-to-supabase-json.js \\');
    console.error('         --input <csv> --output <json> [--preview <md>]');
    process.exit(1);
  }

  console.log(`\nReading: ${inputPath}`);
  const csvText = fs.readFileSync(path.resolve(inputPath), 'utf-8');
  const allRows = csvToObjects(csvText);
  console.log(`Total CSV rows: ${allRows.length}`);

  const skipped  = [];
  const warnings = [];
  const hotels   = [];
  const seenIds  = new Map(); // liteapi_id → index in hotels[]

  for (let i = 0; i < allRows.length; i++) {
    const row    = allRows[i];
    const rowNum = i + 2; // row 1 = header
    const id     = str(row.liteapi_id);
    const status = str(row.final_publication_status);

    // ── Filter
    if (status !== 'ready_for_listing') {
      skipped.push(`Row ${rowNum} (${id || 'no id'}): final_publication_status="${status}"`);
      continue;
    }
    if (!id) {
      skipped.push(`Row ${rowNum}: liteapi_id empty`);
      continue;
    }
    if (!str(row.listing_title)) {
      skipped.push(`Row ${rowNum} (${id}): listing_title empty`);
      continue;
    }
    if (!str(row.listing_short_description)) {
      skipped.push(`Row ${rowNum} (${id}): listing_short_description empty`);
      continue;
    }
    if (!str(row.listing_category_tags)) {
      skipped.push(`Row ${rowNum} (${id}): listing_category_tags empty`);
      continue;
    }

    // ── Duplicate check
    if (seenIds.has(id)) {
      const existingIdx   = seenIds.get(id);
      const existingCount = listingFieldCount(allRows[existingIdx]);
      const currentCount  = listingFieldCount(row);
      if (currentCount > existingCount) {
        const msg = `DUPLICATE liteapi_id "${id}": row ${rowNum} replaces earlier row (${currentCount} vs ${existingCount} listing fields filled)`;
        console.warn(`⚠ ${msg}`);
        warnings.push(msg);
        hotels[existingIdx] = convertRow(row);
        skipped.push(`Row ${existingIdx + 2} (${id}): superseded by row ${rowNum} (more listing fields)`);
      } else {
        const msg = `DUPLICATE liteapi_id "${id}": row ${rowNum} skipped — earlier row kept (${existingCount} vs ${currentCount} listing fields)`;
        console.warn(`⚠ ${msg}`);
        warnings.push(msg);
        skipped.push(`Row ${rowNum} (${id}): duplicate liteapi_id — earlier row kept`);
      }
      continue;
    }

    // ── Convert + validate
    const converted = convertRow(row);
    const rowWarnings = validate(converted);
    rowWarnings.forEach(w => {
      console.warn(`⚠ Row ${rowNum} ${w}`);
      warnings.push(`Row ${rowNum} ${w}`);
    });

    seenIds.set(id, hotels.length);
    hotels.push(converted);
  }

  // ── Summary
  console.log(`\nResult:`);
  console.log(`  Exported : ${hotels.length} hotels`);
  console.log(`  Skipped  : ${skipped.length} rows`);
  console.log(`  Warnings : ${warnings.length}`);
  if (warnings.length > 0) {
    warnings.forEach(w => console.log(`    ⚠ ${w}`));
  }

  // ── Write JSON
  const outDir = path.dirname(path.resolve(outputPath));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.resolve(outputPath), JSON.stringify(hotels, null, 2), 'utf-8');
  console.log(`\n✓ JSON   → ${outputPath}`);

  // ── Write preview
  if (previewPath) {
    const previewDir = path.dirname(path.resolve(previewPath));
    fs.mkdirSync(previewDir, { recursive: true });
    fs.writeFileSync(path.resolve(previewPath), buildPreview(hotels, skipped, warnings), 'utf-8');
    console.log(`✓ Preview → ${previewPath}`);
  }
}

main();
