# Pinterest Automation Plan

Updated: 2026-07-12 JST

## Purpose

Pinterest should bring planning-stage travelers to BSJ guide pages and free
samples. Unlike Threads, Pinterest can become a search asset: pins may continue
to surface months after posting.

BSJ should use Pinterest for practical search intent:

- Japan luggage rules
- tattoo and bath wording
- eSIM and arrival setup
- dietary restriction checks
- private tours and transfers
- Kansai day trips
- family and long-stay planning

## Positioning

Pinterest pins should not look like generic travel inspiration or stock-photo
destination content. They should look like designed practical notes.

Default tone:

- Calm
- Useful
- Specific
- Searchable
- "Check before you book"

Avoid:

- "Japan's top baths" style hype
- clickbait superlatives
- claims that a stay, tour, or provider is guaranteed suitable
- heavy torii, sakura, calligraphy, red-black, or stereotyped Japan motifs
- misleading "official" language unless the source is official

## Formats

Use three formats:

1. Text video pin
   - Best for HyperFrames or similar tools.
   - 4 short frames: hook, problem, checks, CTA.
   - Use motion to make text feel rich without hotel photos.

2. Static text pin
   - Best for evergreen search topics.
   - One strong headline and 3 compact bullets.

3. Checklist pin
   - Best for lead magnets.
   - Shows 3-5 sample checklist items, then sends users to email signup for the
     full sample pack.

## Design System

Use a photo-less BSJ Pinterest template:

- Size: 1000 x 1500 px or 1080 x 1920 px.
- Background: warm off-white or pale gray.
- Text: charcoal.
- Accent: quiet navy and muted brass.
- Logo: small "Bespoke Stay Japan" text mark only.
- Icons: small BSJ condition icons where useful.
- Motion: subtle slide, fade, underline draw, or type reveal.
- No loud gradients.
- No emoji.

## HyperFrames Script Structure

Each text video should fit this structure:

Frame 1: Hook

- State the travel worry in plain English.
- Example: "Shinkansen luggage rules? Do not guess at the station."

Frame 2: Practical problem

- Name the hidden friction.
- Example: "Oversized bags may need a reserved luggage area."

Frame 3: What to check

- Give 2-3 concrete checks.
- Example: "Bag size. Seat type. Train route."

Frame 4: CTA

- Send users to a guide or free sample.
- Example: "Save the BSJ checklist before you book."

## CTA Rules

Use soft CTAs:

- Read the guide
- Save the checklist
- Get the free planning sample
- Check before you book
- Compare the details before booking

Avoid hard CTAs:

- Book now
- Best deal
- Guaranteed
- Top 10
- Must-see

## Link and UTM Rules

Use:

- `utm_source=pinterest`
- `utm_medium=social`
- `utm_campaign=<campaign>`
- `utm_content=<pin_key>`

The CSV should keep `target_url` clean. n8n or the manual posting workflow can
append UTM parameters before posting.

## Boards

Initial boards:

- Japan Travel Planning
- Japan Luggage and Transport
- Japan Hotels and Stays
- Japan Food and Dietary Needs
- Japan Day Trips and Experiences
- Japan Arrival Checklist

## Posting Frequency

Start conservative:

- 1-2 pins per day
- Mix text video and static text pins
- Reuse a guide topic with different hooks, but do not post the same wording
  repeatedly

Initial split:

- 60% text video pins
- 25% static text pins
- 15% checklist / lead magnet pins

## Queue File

Initial local queue:

`data/pinterest-pin-queue.csv`

Recommended columns:

- `pin_key`
- `status`
- `scheduled_date_jst`
- `platform`
- `format`
- `topic`
- `board`
- `pin_title`
- `pin_description`
- `frame_1`
- `frame_2`
- `frame_3`
- `cta`
- `target_url`
- `utm_campaign`
- `template`
- `notes`

Status values:

- `draft`
- `ready`
- `scheduled`
- `posted`
- `failed`
- `needs_review`
- `skip`

## n8n Workflow Shape

First phase should stay semi-automated:

1. Read `pinterest-pin-queue` from Google Sheets.
2. Pick rows with `status = ready` and due `scheduled_date_jst`.
3. Generate the UTM URL from `target_url`, `utm_campaign`, and `pin_key`.
4. Send the row to a manual design step or HyperFrames input.
5. After the asset is exported, publish or queue in Pinterest.
6. Update the row with posted URL, posted date, and status.

Do not fully automate image/video generation and posting until the first 30
pins are reviewed manually.

## Human Review Rules

Before publishing a pin:

- Check that the claim is cautious and useful.
- Check that the target URL matches the topic.
- Check that the text is readable on mobile.
- Check that the CTA does not imply booking agency service.
- Check that affiliate links use `sponsored` handling on site pages where
  relevant.

## Measurement

Track:

- impressions
- saves
- outbound clicks
- email signup clicks from Pinterest traffic
- guide page engagement in PostHog
- affiliate click events where relevant

Early success signal:

The first goal is not immediate sales. It is identifying which worries earn
saves and outbound clicks.
