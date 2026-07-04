# BSJ Condition Icon System

Updated: 2026-07-04 JST

## Purpose

BSJ uses original, text-first condition icons to make photo-light hotel profiles
and guide pages easier to scan on mobile.

The icons should feel like quiet facility signage, not tourism decoration.

## Style Rules

- Use original inline SVG through `components/ConditionIcon.tsx`.
- Keep icons monochrome and inherit `currentColor`.
- Use thin linework, rounded joins, and simple geometry.
- Pair icons with text labels whenever the meaning may be unclear.
- Avoid emoji, stock icon packs, stereotyped Japan motifs, and decorative
  illustration.

## Current Icons

| Condition | Icon direction |
| --- | --- |
| `tattoo-friendly` | Arm with small tattoo marks and check. |
| `tattoo-consideration` | Arm with tattoo marks and question cue. |
| `private-bath` | Bath with private-use cue. |
| `luggage-friendly` | Suitcase with movement cue. |
| `self-catering` | Fork/knife style kitchen cue. |
| `pet-friendly` | Paw mark. |
| `english-friendly` | Speech panels. |
| `family-friendly` | Adult/child figures. |
| `food-friendly` | Utensil and leaf. |
| `access-friendly` | Access/elevator-style panel with check. |
| `private-villa` | House/villa outline. |

## Usage

- `ConditionTag` shows a small icon plus label.
- `PropertyCard` uses circular icon marks above the stay name.
- `ConditionBrowser` uses the same icon system for top-page condition entry
  points.

Future condition-specific status icons, such as `cover-required`,
`in-room-bath`, or `public-bath-restricted`, should be added to the same
component rather than introduced as one-off SVGs.
