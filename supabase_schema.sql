-- BespokeStay Japan: Supabase テーブル定義
-- Supabase Dashboard > SQL Editor で実行してください

-- ホテルマスターテーブル
CREATE TABLE hotels (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  liteapi_id TEXT,
  city TEXT NOT NULL,
  area TEXT NOT NULL,
  type TEXT NOT NULL,
  layer INTEGER NOT NULL CHECK (layer IN (1, 2, 3)),
  recommended_margin DECIMAL(4,2) NOT NULL,
  price_range TEXT,
  pet_size_limit_kg INTEGER,
  pet_fee_per_night INTEGER DEFAULT 0,
  pet_fee_per_stay INTEGER,
  pet_additional_fee INTEGER,
  pet_max_pets INTEGER DEFAULT 1,
  pet_dogs BOOLEAN DEFAULT true,
  pet_cats BOOLEAN DEFAULT false,
  pet_other TEXT,
  pet_vaccination_required BOOLEAN DEFAULT false,
  pet_notes TEXT,
  amenities TEXT[],
  nearby_parks TEXT[],
  nearby_vets TEXT[],
  english_support BOOLEAN DEFAULT true,
  access_info TEXT,
  booking_url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 予約テーブル (Webhook受信用)
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  booking_id TEXT UNIQUE NOT NULL,
  confirmation_number TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  confirmed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- サンプルデータ (京都 ペット可ホテル)
INSERT INTO hotels (name, liteapi_id, city, area, type, layer, recommended_margin, price_range, pet_size_limit_kg, pet_fee_per_night, pet_max_pets, pet_dogs, amenities, nearby_parks, english_support, booking_url)
VALUES
  ('The Thousand Kyoto', 'lp71969', 'Kyoto', 'Kyoto Station', 'Hotel', 2, 0.06, '¥30,000-50,000', 10, 3000, 2, true, ARRAY['Dog run', 'Pet bed', 'Welcome treats'], ARRAY['Umekoji Park'], true, 'https://www.the-thousand-kyoto.com'),
  ('Noku Kyoto', 'lp72100', 'Kyoto', 'Nijo', 'Ryokan', 3, 0.12, '¥50,000-100,000', 25, 5000, 2, true, ARRAY['Pet shower', 'Dog run', 'Room service'], ARRAY['Kyoto Gyoen', 'Nijo Castle Park'], true, 'https://nokukyoto.com'),
  ('Hotel Granvia Kyoto', 'lp72200', 'Kyoto', 'Kyoto Station', 'Hotel', 1, 0.03, '¥15,000-25,000', 7, 2000, 1, true, ARRAY['Pet bed', 'Bowl set'], ARRAY['Umekoji Park'], true, 'https://www.granvia-kyoto.co.jp');
