# Booking Support Policy

Updated: 2026-07-04 JST

## Purpose

This document defines how Bespoke Stay Japan should handle booking-related
support, Japanese-only hotel listings, service copy, and future product design.

BSJ is a researched Japan stay information database and guide media. It should
help foreign travelers and foreign residents understand stay conditions before
they book, but it should not act as a hotel reservation agency.

This is an operational product policy, not legal advice. If BSJ later wants to
offer reservation handling, booking agency services, or concierge booking, get
professional legal advice and confirm the required travel-business setup first.

## Core Rule

BSJ helps users make their own booking decisions.

BSJ does not book accommodation on behalf of users.

## Do Not Offer

Do not create product flows, service pages, CTAs, forms, or copy that offer to:

- Reserve a hotel, ryokan, villa, or stay on behalf of a user.
- Fill in OTA or hotel reservation forms for a user.
- Submit user personal information to a hotel or OTA for booking.
- Take payment for accommodation.
- Confirm availability as if BSJ controls inventory.
- Guarantee a booking result, room type, rate, tattoo acceptance, dietary
  support, pet acceptance, luggage service, or accessibility outcome.
- Handle booking changes, cancellations, refunds, or dispute communication.
- Act as an intermediary between the traveler and hotel for the reservation
  contract.

Avoid phrases such as:

- "We will book this hotel for you."
- "Let us reserve your room."
- "BSJ handles your reservation."
- "Pay us and we will arrange your stay."
- "Guaranteed booking support."

## Allowed Support

BSJ may offer information, research, translation support, and planning tools.

Allowed examples:

- Researched hotel profiles.
- English explanations of Japanese hotel policies.
- Condition comparison tables.
- Google Maps or saved-map style planning resources.
- Google Sheet comparison resources.
- Japanese OTA reading guides.
- Inquiry email templates.
- Phone-call question lists for the traveler to use.
- Pre-booking checklists.
- "What to confirm before booking" notes.
- Source links to official sites, OTAs, Japanese booking references, Google
  Maps, tourism sites, or hotel policy pages.
- Product kits that package research, maps, sheets, and templates.

Good wording:

- "Use this checklist before booking."
- "Compare the conditions before you choose."
- "Send this inquiry template to the hotel."
- "Check the official site or OTA before booking."
- "Japanese booking reference."
- "This listing may be easier to confirm in Japanese."

## Japanese-Only Hotel Listings

Rakuten Travel, Jalan, and other Japanese booking sites can be valuable sources
for stays that are hard to find on overseas OTAs.

Use them carefully:

- Treat them as reference links or Japanese booking references.
- Do not assume they are easy for foreign travelers to use.
- Do not imply English support, foreign-card support, or smooth cancellation
  handling unless verified.
- Place them after the researched notes and caveats, not as aggressive primary
  CTAs.
- Explain when a Japanese source may contain more detail than overseas OTAs.

Suggested labels:

- "Japanese booking reference"
- "Check Japanese listing"
- "View Japanese source"
- "Official / Japanese source"

Avoid labels:

- "Book now"
- "Reserve through BSJ"
- "We can book this for you"

## Hotel Profile CTA Hierarchy

Use this priority when deciding external hotel links:

1. Official hotel site or official reservation page.
2. Overseas-friendly OTA if the exact hotel listing is verified and the
   affiliate program is active.
3. Google Maps listing if it helps users identify the property.
4. Japanese booking reference, such as Rakuten Travel or Jalan, when it provides
   useful details or is the only practical listing.
5. Source pages used for research.

CTA text should remain practical and neutral:

- "Check booking options"
- "Open official / source page"
- "Check Japanese listing"
- "Open map listing"

## Affiliate Link Rules

Affiliate links are allowed when they are useful and accurate.

Rules:

- Only use hotel OTA affiliate links when the exact hotel listing is verified.
- Do not use hotel name matching alone. Confirm the property by details such as
  address, city, facility name, room information, and listing context.
- Only use Travelpayouts links for programs that are active and approved.
- Do not use Booking.com through Travelpayouts while the connection request is
  declined.
- If Booking.com, Trip.com, Expedia, or Hotels.com are declined in
  Travelpayouts, their URLs may remain reference links only. Do not present them
  as affiliate or preferred booking links.
- Klook hotel links may be used only after exact-property verification in the
  Klook / Travelpayouts flow and successful affiliate link generation.
- Use `rel="sponsored"` for affiliate links.
- Keep caveats and verification notes visible before external CTAs.
- Do not let affiliate availability decide whether a hotel is recommended.

Implementation:

- Manage hotel external links in `lib/external-links.ts`.
- Add affiliate overrides one hotel/provider at a time after verification.
- Do not hard-code affiliate links inside page components.
- Record each hotel affiliate addition in `docs/hotel-external-link-audit.md`
  with the stable hotel key, provider, affiliate URL, exact-match evidence, and
  confirmation date.

## Product Design

Paid products should be planning tools, not reservation services.

Good product formats:

- Stay planning kit
- Google Map
- Google Sheet comparison table
- Inquiry template pack
- Pre-booking checklist
- Japanese OTA reading guide
- Condition-specific hotel shortlist

Good product examples:

- Kansai Tattoo-Friendly Stay Kit
- Kyoto & Osaka Private Bath Stay Map
- Japan Dietary Restriction Travel Kit
- Japan Luggage-Free Travel Kit
- Long-Stay Japan Hotel Checklist
- Japanese-Only Stay Booking Checklist

Avoid product promises:

- "We reserve the hotel for you."
- "Guaranteed hotel booking."
- "No need to contact the hotel yourself."
- "We handle cancellation or changes."

## Human Service Boundary

If BSJ later offers human help, keep it in the research and preparation zone
unless legal/commercial setup changes.

Allowed service positioning:

- Custom stay research.
- Shortlist creation.
- Policy translation and explanation.
- Drafting inquiry messages.
- Preparing questions for the traveler to ask.
- Explaining differences between official, overseas OTA, and Japanese OTA
  listings.

Do not position the service as:

- Reservation agency.
- Travel agency.
- Booking concierge.
- Hotel booking代行.
- Payment or cancellation handler.

If a traveler needs someone to complete the booking process for them, route them
to the hotel, OTA, or a properly registered travel business.

## Copy Checklist

Before publishing a page, product, or CTA, check:

- Does this imply BSJ will book a room for the user?
- Does this ask for personal data needed to complete a reservation?
- Does this imply BSJ guarantees availability, price, or acceptance?
- Does this turn a Japanese OTA link into the main promise?
- Are caveats shown before external CTAs?
- Is the user still making the final booking decision themselves?

If any answer creates reservation-agency ambiguity, rewrite the copy as
research, translation support, comparison, or pre-booking preparation.
