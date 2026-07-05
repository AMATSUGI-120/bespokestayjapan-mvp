# Booking Support Policy

Updated: 2026-07-06 JST

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

## Phrase Cards and Confirmation Support

BSJ may offer phrase cards and Japanese confirmation support as travel
preparation tools. These products should reduce communication uncertainty, not
replace the user's own booking decision.

Allowed confirmation support:

- Draft Japanese inquiry messages for the user to send.
- Send a Japanese email inquiry to a facility when the service scope is clear.
- Summarize the facility reply in English.
- Attach or quote the original Japanese reply when appropriate.
- Label the result as Confirmed, Partially confirmed, Not confirmed, or No
  reply.
- Explain caveats, confidence level, response date, and suggested next action.
- Prepare follow-up questions when the answer is unclear.

Do not promise:

- A positive reply.
- Availability.
- Acceptance of tattoos, pets, dietary needs, accessibility needs, or luggage.
- Allergy-safe, medical-safe, or risk-free outcomes.
- That one staff reply represents all staff, all dates, or future policy.

Phrase cards should include practical disclaimers where needed, especially for
allergies, medical issues, tattoos, bathing rules, and facility policies.

## Email and Phone Confirmation

Use email-first confirmation whenever possible.

Email is preferred because:

- The facility reply can be preserved.
- The original Japanese text can be included in delivery.
- The confirmation date and exact wording are easier to audit.
- The information can be structured for future internal reference.

Phone confirmation should be treated as weaker evidence and should usually be an
add-on, not the default.

If phone confirmation is offered, delivery notes must say something like:

"This is a summary of a phone conversation with the facility. It is not an
official written confirmation from the facility. Policies may vary by staff
member, date, or situation. Please reconfirm directly before booking or at
check-in."

## Restaurant and Activity Support

Restaurant and activity support may become a separate service line from hotel
support. It can be explored because it is not the same as arranging
accommodation, but scope must still be controlled carefully.

Allowed restaurant/activity support may include:

- Drafting inquiry messages.
- Checking dietary restrictions, allergens, menus, age limits, tattoo rules,
  meeting points, language support, accessibility notes, or cancellation rules.
- Summarizing replies in English.
- Helping users understand what they need to confirm before they reserve.

Future reservation assistance for restaurants or activities may be considered
only after separate review of legal, platform, payment, cancellation, privacy,
and liability requirements.

If BSJ later offers restaurant or activity reservation help, the page copy and
forms must clearly state:

- Whether BSJ is only confirming details or also requesting a reservation.
- Who pays the restaurant, venue, or activity provider.
- Who is responsible for cancellation, no-show fees, changes, and refunds.
- That BSJ does not guarantee availability, acceptance, safety, or service
  quality.
- That medical, allergy, and accessibility decisions remain the user's
  responsibility.

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

## Confirmation Data Reuse

Confirmation work can create valuable internal knowledge, but customer-specific
requests must be handled carefully.

Rules:

- Do not publish a customer's request context, personal details, travel dates,
  or private correspondence as-is.
- Remove personal information before using a reply as internal reference data.
- Reconfirm or generalize facility information before turning it into public BSJ
  content.
- Store confirmation date, source type, facility name, topic, reply status, and
  confidence level.
- Treat old replies as time-sensitive. Policies may change.

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
