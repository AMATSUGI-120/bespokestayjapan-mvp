<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


<claude-mem-context>
# Memory Context

# [bespokestayjapan-mvp] recent context, 2026-05-07 8:39am GMT+9

Legend: 🎯session 🔴bugfix 🟣feature 🔄refactor ✅change 🔵discovery ⚖️decision 🚨security_alert 🔐security_note
Format: ID TIME TYPE TITLE
Fetch details: get_observations([IDs]) | Search: mem-search skill

Stats: 48 obs (19,846t read) | 413,428t work | 95% savings

### May 1, 2026
1 5:06p ⚖️ LiteAPI Price Display Changed to Net Price (margin=0)
2 " 🔵 Price Display Architecture: Current State Before Net Price Refactor
3 " 🔵 PaymentModal Also Displays Price and Passes margin to /api/prebook
4 5:07p 🔴 Search Route: finalPrice Changed to Net Price (margin no longer applied to display price)
5 " ✅ HotelCard: "incl. X% service fee" Label Removed from Price Display
6 5:09p 🔵 Vercel Project Linked: bespokestayjapan-mvp — Broader Uncommitted Changes Detected
7 5:10p 🟣 Net Price Display Deployed to Production: bespokestayjapan.com
### May 3, 2026
59 2:05p 🔵 bespokestayjapan-mvp: No photo URL fields in LiteAPI integration or data model
60 2:06p 🔵 Supabase hotels table has no photo column; LiteAPI used via raw fetch (no SDK)
61 " 🔵 LiteAPI docs at docs.liteapi.travel/reference not machine-readable via WebFetch
62 " 🔵 LiteAPI docs site is a JavaScript-rendered SPA — endpoint paths unreachable via WebFetch
63 " 🔵 LiteAPI GET /v3.0/data/hotels endpoint confirmed to exist (returns 401, not 404)
64 " 🔵 Google Maps Platform Places API moved to subscription plans (March 2025) — no simple free tier
65 2:08p 🔵 Google Maps $200/month free credit expired Feb 28, 2025; Place Details Photos is a distinct billable SKU
66 " 🔵 Google Places API photo pricing confirmed: $7/1K requests, 1,000 free/month cap
67 " 🔵 LiteAPI GET /data/hotels endpoint confirmed to return hotel photos
68 2:09p 🔵 LiteAPI /data/hotels real API call returned empty — API key extraction from .env.local may have failed
69 " 🔵 .env.local contains only placeholder values — real LiteAPI credentials not configured locally
70 2:10p 🔵 LiteAPI has single-hotel detail endpoint GET /data/hotel (singular) with confirmed image gallery response
71 " 🔵 LiteAPI OpenAPI spec not publicly accessible — both spec URLs require auth or return empty
72 2:11p 🔵 LiteAPI hotel photo JSON field names confirmed: hotelImages array with url/caption; main_photo field; includeHotelData=true for rates
73 2:12p 🔵 LiteAPI hotelImages schema definitively confirmed: url, caption, order, defaultImage fields
74 " 🔵 LiteAPI hotelImages schema fully confirmed with thumbnailUrl; room photos use failoverPhoto from Booking.com CDN
75 2:24p ⚖️ Decided to use Google Places API for hotel photos instead of manual LiteAPI /data/hotel approach
76 2:27p ✅ Created docs/google-places-api-setup.md with full implementation plan and cost estimates
### May 6, 2026
77 10:57p 🔵 Bespoke Stay Japan — Design Reference Analysis: Design Hotels
78 11:04p 🔵 Bespoke Stay Japan — Design Reference Analysis 2: i-escape.com
79 11:10p 🔵 Bespoke Stay Japan — Design Reference Analysis 3: Accessible Japan
80 11:12p 🔵 Bespoke Stay Japan — Design Reference Analysis 4: Resort Glamping.com
S23 Resort Glamping.com (Reference 4) design analysis — villa/glamping presentation, amenity tag systems, pet-friendly UX patterns, and high-price domestic Japan stay conventions (May 6 at 11:17 PM)
81 11:18p 🔵 Bespoke Stay Japan — Design Reference Analysis 5: Tattoo Friendly Onsen
S25 Bespoke Stay Japan — 4-site design reference analysis phase complete; Resort Glamping.com analysis delivered and final synthesis formula locked (May 6 at 11:19 PM)
S26 Tattoo Friendly Onsen (Reference 5) analysis initiated — conditional directory design, regional classification, and verification status display patterns (May 6 at 11:22 PM)
### May 7, 2026
S27 Tattoo Friendly Onsen (Reference 5) design analysis — conditional directory, verification status badges, regional classification, and anxiety-dissolving trust architecture (May 7 at 12:28 AM)
S28 Rexby (Reference 6) design analysis — map integration, local guide presentation, and bookmark-worthy travel guide UX patterns for Bespoke Stay Japan (May 7 at 12:30 AM)
82 12:34a 🔵 Bespoke Stay Japan — Design Reference Analysis 6: Rexby
S29 Codex adversarial review of 6-site design analysis complete — critical corrections, priority reorder, and central product truth established for Bespoke Stay Japan (May 7 at 12:35 AM)
83 12:36a 🟣 Bespoke Stay Japan MVP — Project Directory Created, Implementation Phase Started
85 " ⚖️ Codex Independent Review of 6-Site Design Analysis — Critical Corrections and Priority Reorder
86 " ⚖️ Bespoke Stay Japan — Product Scope Expanded Beyond Pet-Only to Multi-Condition Travel Directory
S30 Strategic reframe: Bespoke Stay Japan expanded from pet-only to multi-condition Japan travel directory; unified design direction document requested across 13 sections (May 7 at 12:36 AM)
84 12:37a ⚖️ Bespoke Stay Japan — Reference Site Design Analysis Framework Established
S31 Bespoke Stay Japan — full unified design direction document produced across 13 sections; awaiting CEO approval before implementation begins (May 7 at 12:45 AM)
S32 Codex Review 2 complete — MVP scope, badge safety corrections, and final Phase 1 component list confirmed before implementation begins (May 7 at 12:47 AM)
87 12:51a ⚖️ Second Codex Review Initiated — MVP Feasibility Check on Full Design Direction Document
89 12:53a ⚖️ Codex Review 2 — MVP Scope Reduction and Critical Badge System Safety Corrections
90 " 🟣 Bespoke Stay Japan Phase 1 Redesign — Implementation Approved and Initiated
88 " ⚖️ Bespoke Stay Japan — Unified Design Direction Established for MVP
S33 Phase 1 implementation initiated — full homepage build approved and underway at /Users/ai-company/bespokestayjapan-mvp (May 7 at 12:58 AM)
91 12:59a 🔵 Bespoke Stay Japan MVP — Existing Codebase Structure Mapped
92 " 🔵 Existing Homepage Has Prohibited Patterns — Emoji Icons, Fake Claims, Teal SaaS Palette
93 " 🔵 layout.tsx Uses Geist Fonts — Fraunces and Inter Must Be Added for Design Direction
94 " 🔵 HotelCard.tsx Data Model Reveals Pet-Only Schema — New PropertyCard Needs Condition-Agnostic Design
95 " 🔵 next.config.ts Has Production CSP — Google Fonts for Fraunces Requires img-src/font-src Addition
96 " 🟣 Design Token System Implemented in globals.css — Full BSJ CSS Variable System Live
97 1:06a 🟣 VerificationBadge component added to bespokestayjapan-mvp
98 " 🔵 bespokestayjapan-mvp project stack and design token inventory confirmed
99 1:07a 🟣 VerificationBadge.tsx written and TypeScript-verified clean

Access 413k tokens of past work via get_observations([IDs]) or mem-search skill.
</claude-mem-context>