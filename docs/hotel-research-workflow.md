# BSJ Hotel Research Workflow

Updated: 2026-07-12 JST

## Purpose

BSJ hotel research should not rely on random keyword searches alone. The
repeatable workflow is:

1. Start from category-specific candidate sources.
2. Collect candidate hotels.
3. Re-check each hotel on official sources.
4. Audit practical surroundings and traveler fit.
5. Extract unclear points for human confirmation.
6. Publish only when the caveats and evidence are clear enough.

The goal is not to create a generic hotel list. The goal is to build researched
stay profiles for travelers with real constraints.

## Source Priority

Use sources in this order:

1. Official hotel site
2. Official FAQ / rules / access / bath / restaurant / pet pages
3. Official destination or tourism pages
4. Category-specific candidate sites
5. Major OTAs and Japanese booking sites
6. Google Maps and reviews as hints only
7. Blogs and social posts as discovery hints only

Category-specific sites are for candidate discovery. They are not enough by
themselves to mark something as confirmed on BSJ.

## Candidate Source Map

### Tattoo / Bath

Use for candidate discovery:

- Tattoo Japan: tattoo-friendly facility discovery by category and prefecture.
- Other tattoo-friendly onsen / sento / ryokan lists.
- Onsen town official sites where tattoo policy is published.
- Hotel or ryokan pages mentioning private bath, family bath, public bath, or
  tattoo cover rules.

BSJ confirmation rules:

- Separate public bath, private reservable bath, and in-room bath.
- Do not treat "tattoo-friendly" as a single binary label.
- If the source is not the hotel itself, use `tattoo-consideration` until the
  hotel policy is confirmed.
- If the rule depends on covering, size, bath type, or time slot, capture that
  in `caution_notes`.

### Pet-Friendly

Use for candidate discovery:

- Holiday Inu-bu / 休日いぬ部.
- Rakuten Travel pet-friendly feature.
- Jalan pet-friendly feature.
- Pet-yado style pet accommodation directories.
- Official hotel pet policy pages.

BSJ confirmation rules:

- Extract allowed pet type: small dog, medium dog, large dog, cat, small animal.
- Extract size, breed, number limit, fees, room type, required documents, and
  whether pets can be left alone in the room.
- Audit nearby parks, riverside walks, pet-friendly cafes, and veterinary
  clinics when possible.
- If the source says only "pet-friendly" without conditions, mark human check.

### Food / Dietary

Use for candidate discovery:

- HappyCow for nearby vegan / vegetarian food environment and B&B-style leads.
- Vegewel for plant-based restaurants and area context.
- Halal Gourmet Japan for halal food environment.
- Muslim-friendly travel resources.
- Hotel official breakfast, restaurant, allergy, halal, vegetarian, vegan, and
  advance-request pages.

BSJ confirmation rules:

- Do not equate vegetarian with no fish-based dashi.
- Separate allergy response from preference response.
- Record whether the hotel restaurant itself supports the need or whether only
  nearby restaurants are suitable.
- For allergies, always use careful language and avoid safety guarantees.

### Luggage-Friendly

Use for candidate discovery:

- Hotel official FAQ pages.
- Chain hotel FAQ pages.
- OTA pages mentioning luggage storage, lockers, shipping, baggage room, or
  airport shuttle.
- Search terms around station proximity, luggage forwarding, and checkout-day
  storage.

BSJ confirmation rules:

- Separate before check-in storage, after checkout storage, and multi-day
  storage.
- Check luggage shipping receiving rules and how early luggage can arrive.
- Check front desk hours and whether storage is staffed.
- Audit station distance, exit, elevators, and whether walking with a large bag
  is realistic.

### Family / Long Stay / Self-Catering

Use for candidate discovery:

- MIMARU official site and similar apartment hotel brands.
- Tokyu Stay official site and other washer/dryer hotel brands.
- Apartment hotel and serviced apartment brands.
- Hotel pages mentioning kitchen, kitchenette, laundry, family rooms, bunk beds,
  connecting rooms, or multi-bedroom rooms.

BSJ confirmation rules:

- Extract kitchen, cooking utensils, microwave, refrigerator, washer/dryer,
  coin laundry, room size, bed layout, and child policy.
- Audit nearby supermarkets, convenience stores, parks, clinics, and pharmacies.
- Separate "family accepted" from actually family-practical.

### Access-Friendly

Use for candidate discovery:

- Official hotel accessibility / barrier-free pages.
- OTA barrier-free filters only as hints.
- Wheelmap and public accessibility resources for surrounding facilities.
- Station elevator maps and official station information.

BSJ confirmation rules:

- Never imply full wheelchair accessibility unless exact evidence supports it.
- Extract elevator, step-free entrance, room bathroom details, accessible toilet,
  parking, station elevator, and slope/stair issues.
- Use "access-friendly" to mean clearer access information or easier movement,
  not a guarantee.

### Private Villa / Private Stay

Use for candidate discovery:

- Official villa, machiya, townhouse, apartment hotel, and private rental brands.
- Japanese machiya operator sites.
- OTA pages mentioning entire unit, private entrance, kitchen, private bath, or
  laundry.

BSJ confirmation rules:

- Confirm whether the unit is fully private.
- Extract check-in method, staff availability, luggage storage, rules, stairs,
  kitchen, bath, laundry, and noise/quiet-hour notes.

## Search Escalation Rule

For each category, run research in this order:

1. Category source search
   - Example: Tattoo Japan Kyoto hotels, Holiday Inu-bu Kansai, HappyCow Kyoto.
2. Candidate hotel name search
   - Search the hotel name in English and Japanese.
3. Official site check
   - Find official FAQ, access, rules, bath, restaurant, pet, and luggage pages.
4. Surroundings check
   - Station distance, park, clinic, pharmacy, supermarket, convenience store,
     coin laundry, airport or Shinkansen access.
5. Ambiguity extraction
   - List what is still unclear.
6. Human check task
   - Create email/phone questions only for the points that matter.
7. Keyword refinement
   - Record which search terms found useful candidates and which produced noise.

## Required Research Fields

For every candidate, capture:

- hotel_name
- city
- prefecture
- area
- official_url
- candidate_source_url
- category_source_type
- possible_category_tags
- source_confidence
- nearest_station
- walking_minutes
- station_exit_or_elevator_notes
- nearby_park_notes
- nearby_clinic_or_hospital_notes
- nearby_pharmacy_notes
- nearby_supermarket_or_convenience_notes
- luggage_practicality_notes
- traveler_fit_notes
- unclear_points
- suggested_human_check_questions
- source_urls
- research_status
- last_researched_at
- last_directly_confirmed_at
- last_content_updated_at
- recheck_due_at
- human_check_due_at
- follow_up_due_at
- confirmation_status
- confirmation_status_note

## Research Status

Use these statuses:

- `candidate`
- `researching`
- `needs_human_check`
- `ready_for_profile`
- `ready_for_import`
- `published`
- `do_not_use`
- `recheck_due`

## Human Check Trigger

Create a human check task when any of these are unclear:

- tattoo rule by bath type
- private bath vs in-room bath wording
- pet size, breed, room, fee, or document requirements
- allergy / halal / vegan support details
- luggage storage before/after checkout
- luggage shipping receiving rules
- access details that could affect mobility
- late check-in or unstaffed check-in
- source conflict between official, OTA, and reviews
- information date is old or unclear

## Scheduled Codex Loop

Recommended weekly Codex schedule:

1. Pick one category and one region.
2. Search category-specific sources first.
3. Add 10-20 candidates to the research sheet.
4. Fully research 5-10 of them.
5. Extract unclear points and human check questions.
6. Update source-quality notes and keyword refinements.
7. Prepare ready profiles only after evidence is clear.

Suggested first loops:

1. Kansai tattoo + private bath
2. Kansai luggage-friendly
3. Kansai family / self-catering
4. Kansai food-friendly
5. Kansai pet-friendly
6. Kansai access-friendly

## n8n Role

n8n should manage workflow state, not primary research.

Use n8n for:

- scheduled reminders
- Google Sheets status checks
- human check due notifications
- source URL recheck queue
- weekly summary of `ready_for_profile` and `needs_human_check`

Avoid using n8n as the main research engine unless API costs and data sources
are approved.

## Quality Bar

Do not publish a stay just because it appears on a category site.

BSJ should add value by:

- checking the official source
- separating confirmed facts from hints
- showing practical surroundings
- naming what remains unclear
- recording caution notes
- creating human confirmation tasks when needed
