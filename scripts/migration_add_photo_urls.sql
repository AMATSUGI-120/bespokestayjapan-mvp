-- Migration: Add photo_urls column to hotels table
-- Run in Supabase Dashboard > SQL Editor
-- Safe to run multiple times (IF NOT EXISTS guard)

ALTER TABLE hotels
  ADD COLUMN IF NOT EXISTS photo_urls TEXT[];

-- Verify
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'hotels'
  AND column_name = 'photo_urls';
