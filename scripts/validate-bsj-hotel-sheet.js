#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

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

function parseCSV(text) {
  text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const rows = [];
  let i = 0;
  const n = text.length;

  function parseField() {
    if (i >= n || text[i] === '\n' || text[i] === ',') return '';
    if (text[i] !== '"') {
      let field = '';
      while (i < n && text[i] !== ',' && text[i] !== '\n') field += text[i++];
      return field;
    }

    i++;
    let field = '';
    while (i < n) {
      if (text[i] === '"' && text[i + 1] === '"') {
        field += '"';
        i += 2;
      } else if (text[i] === '"') {
        i++;
        break;
      } else {
        field += text[i++];
      }
    }
    return field;
  }

  while (i < n) {
    const row = [];
    row.push(parseField());
    while (i < n && text[i] === ',') {
      i++;
      row.push(parseField());
    }
    if (i < n && text[i] === '\n') i++;
    if (row.length === 1 && row[0] === '' && i >= n) break;
    rows.push(row);
  }
  return rows;
}

function csvToObjects(text) {
  const rows = parseCSV(text);
  if (rows.length === 0) return { headers: [], rows: [] };

  const headers = rows[0].map((h) => h.trim());
  const objects = rows.slice(1)
    .filter((row) => row.some((cell) => cell.trim() !== ''))
    .map((row, index) => {
      const obj = { __rowNum: index + 2 };
      headers.forEach((h, idx) => { obj[h] = row[idx] ?? ''; });
      return obj;
    });

  return { headers, rows: objects };
}

function str(value) {
  return (value ?? '').trim();
}

const CANONICAL_TAGS = new Set([
  'pet-friendly',
  'tattoo-friendly',
  'tattoo-consideration',
  'private-villa',
  'self-catering',
  'private-bath',
  'luggage-friendly',
  'access-friendly',
  'english-friendly',
  'family-friendly',
  'food-friendly',
]);

const TAG_ALIASES = {
  'English-friendly': ['english-friendly'],
  'private-villas': ['private-villa'],
  'tattoo-friendly-private-bath': ['tattoo-friendly', 'private-bath'],
};

function normalizeTag(raw) {
  const trimmed = str(raw);
  if (!trimmed) return [];
  const lower = trimmed.toLowerCase();
  return TAG_ALIASES[trimmed] ?? TAG_ALIASES[lower] ?? [lower];
}

function parseTags(raw) {
  const tags = [];
  const seen = new Set();

  for (const item of str(raw).split('|')) {
    for (const tag of normalizeTag(item)) {
      if (tag && !seen.has(tag)) {
        seen.add(tag);
        tags.push(tag);
      }
    }
  }

  return tags;
}

function stableHotelKey(row) {
  return str(row.hotel_key) || str(row.liteapi_id);
}

const REQUIRED_HEADERS = [
  'final_publication_status',
  'listing_title',
  'city',
  'area',
  'listing_short_description',
  'listing_best_for',
  'listing_condition_details',
  'listing_verified_notes',
  'listing_caution_notes',
  'listing_category_tags',
  'listing_source_urls',
];

const REQUIRED_READY_FIELDS = [
  ['stable hotel key', stableHotelKey],
  ['listing_title', (row) => str(row.listing_title)],
  ['city', (row) => str(row.city)],
  ['area', (row) => str(row.area)],
  ['listing_short_description', (row) => str(row.listing_short_description)],
  ['listing_best_for', (row) => str(row.listing_best_for)],
  ['listing_condition_details', (row) => str(row.listing_condition_details)],
  ['listing_verified_notes', (row) => str(row.listing_verified_notes)],
  ['listing_caution_notes', (row) => str(row.listing_caution_notes)],
  ['listing_category_tags', (row) => str(row.listing_category_tags)],
  ['listing_source_urls', (row) => str(row.listing_source_urls)],
];

const CONDITION_REQUIREMENTS = [
  {
    tag: 'self-catering',
    field: 'listing_kitchen_summary',
  },
  {
    tag: 'private-bath',
    field: 'listing_bath_summary',
  },
  {
    tag: 'tattoo-friendly',
    field: 'listing_bath_summary',
  },
  {
    tag: 'tattoo-consideration',
    field: 'listing_bath_summary',
  },
  {
    tag: 'luggage-friendly',
    field: 'listing_luggage_summary',
  },
  {
    tag: 'access-friendly',
    field: 'listing_access_summary',
  },
];

function main() {
  const args = parseArgs();
  const inputPath = args.input;

  if (!inputPath) {
    console.error('Usage: node scripts/validate-bsj-hotel-sheet.js --input <csv>');
    process.exit(1);
  }

  const csvText = fs.readFileSync(path.resolve(inputPath), 'utf-8');
  const { headers, rows } = csvToObjects(csvText);
  const headerSet = new Set(headers);
  const errors = [];
  const warnings = [];
  const statusCounts = new Map();
  const seenReadyKeys = new Map();

  for (const header of REQUIRED_HEADERS) {
    if (!headerSet.has(header)) {
      errors.push(`Missing required header: ${header}`);
    }
  }

  for (const row of rows) {
    const rowNum = row.__rowNum;
    const status = str(row.final_publication_status) || '(blank)';
    statusCounts.set(status, (statusCounts.get(status) ?? 0) + 1);

    if (status !== 'ready_for_listing') continue;

    const key = stableHotelKey(row);
    if (key) {
      const previousReadyRow = seenReadyKeys.get(key);
      if (previousReadyRow) {
        warnings.push(`Row ${rowNum}: duplicate ready_for_listing stable hotel key "${key}" also appears on row ${previousReadyRow}`);
      } else {
        seenReadyKeys.set(key, rowNum);
      }
    }

    for (const [label, getter] of REQUIRED_READY_FIELDS) {
      if (!getter(row)) {
        errors.push(`Row ${rowNum}: ready_for_listing missing ${label}`);
      }
    }

    const tags = parseTags(row.listing_category_tags);
    if (tags.length === 0) {
      errors.push(`Row ${rowNum}: ready_for_listing has no valid category tags`);
    }

    for (const tag of tags) {
      if (!CANONICAL_TAGS.has(tag)) {
        warnings.push(`Row ${rowNum}: non-canonical category tag "${tag}"`);
      }
    }

    for (const requirement of CONDITION_REQUIREMENTS) {
      if (tags.includes(requirement.tag) && !str(row[requirement.field])) {
        errors.push(`Row ${rowNum}: tag "${requirement.tag}" requires ${requirement.field}`);
      }
    }

    if (tags.includes('food-friendly')) {
      const hasFoodSupport =
        str(row.listing_kitchen_summary) ||
        str(row.official_food_status) ||
        /food|diet|vegetarian|vegan|halal|allerg/i.test(str(row.listing_condition_details));

      if (!hasFoodSupport) {
        errors.push('Row ' + rowNum + ': tag "food-friendly" requires food context, kitchen summary, or official_food_status');
      }
    }
  }

  console.log('\nBSJ hotel sheet validation');
  console.log(`Input rows : ${rows.length}`);
  console.log('Statuses   :');
  for (const [status, count] of Array.from(statusCounts.entries()).sort()) {
    console.log(`  ${status}: ${count}`);
  }
  console.log(`Warnings   : ${warnings.length}`);
  console.log(`Errors     : ${errors.length}`);

  if (warnings.length > 0) {
    console.log('\nWarnings:');
    warnings.forEach((warning) => console.log(`  - ${warning}`));
  }

  if (errors.length > 0) {
    console.log('\nErrors:');
    errors.forEach((error) => console.log(`  - ${error}`));
    process.exit(1);
  }

  console.log('\nOK: sheet is ready for conversion.');
}

main();
