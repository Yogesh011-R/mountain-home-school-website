---
name: Mountain Home School
description: Heritage school site for a 1911 Nilgiri day-and-boarding school — parchment, navy, brass.
colors:
  brick: "#A8342F"
  brick-deep: "#86261F"
  navy: "#1E2A4A"
  navy-deep: "#151E36"
  brass: "#B08A2E"
  brass-light: "#D9B862"
  brass-deep: "#77601C"
  mustard-tint: "#F1DFA6"
  mustard: "#E0B23C"
  gold-pale: "#E7CE8A"
  flame: "#F6D67A"
  navy-soft: "#26345A"
  card-navy: "#1B2440"
  brass-pale: "#CDBB8A"
  bronze: "#A07C22"
  bronze-ink: "#5A430E"
  grey: "#8E939B"
  grey-light: "#C9CED6"
  parchment-deep: "#EFE6D1"
  mount: "#F4E9CF"
  track: "#E9E1CC"
  bar: "#EDE6D3"
  sand: "#E4DFD0"
  haze: "#D5D8DF"
  fog: "#C5C9D2"
  soot: "#3A3530"
  house-red: "#B3312E"
  house-blue: "#2F5FA8"
  house-green: "#2E7D45"
  house-yellow: "#E3B120"
  parchment: "#F7F1E3"
  paper: "#FFFCF4"
  cream: "#FBF6E8"
  linen: "#EDE7D6"
  ink: "#24232B"
  ink-muted: "#565A63"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3rem to 7.5rem, breakpoint-stepped"
    fontWeight: 500
    lineHeight: 1.02
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2.25rem to 3rem"
    fontWeight: 600
    lineHeight: 1.08
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.08
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "0.75rem to 0.9375rem"
    fontWeight: 600
    letterSpacing: "0.1em to 0.14em"
rounded:
  control: "6px"
  card: "8px"
  frame: "2px"
spacing:
  container: "90rem"
  section-y: "4rem to 6rem"
  gutter: "1rem to 7.5rem"
components:
  button-primary:
    backgroundColor: "{colors.brick}"
    textColor: "#FFFFFF"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.brick-deep}"
    textColor: "#FFFFFF"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "3rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "3rem"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "1.75rem"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    height: "3rem"
---

# Design System: Mountain Home School

## Overview

**Creative North Star: "The Hill Archive"**

This is a school remembered as much as it is described: sepia photographs in brass mounts, beaded rules lifted from the crest, topographic contour lines running behind the footer like a survey map. Everything sits on warm paper, set in a Garamond serif that reads like a prize-day programme. The mood is warm, bookish, and unhurried — long reading measures, generous section spacing, motion limited to drifting mist and a single rising entrance.

**Key Characteristics:**
- Parchment page, paper cards, navy bands — flat tonal layering, never gray surfaces.
- Cormorant Garamond display over Source Sans body, tracked uppercase labels used sparingly.
- Mounted-print photography: near-square brass frames, vignette washes, sepia for archive material.
- Crest, uniform check, and contour lines recur as ornament; nothing decorative is invented per-page.

## Colors

Crest, uniform, and campus buildings supply the palette: brick red and brass from the crest, navy from the blazer, parchment and paper from aged print.

### Primary
- **Crest Brick** ({colors.brick}): the one action color. Links on light surfaces, primary buttons, eyebrows, step numerals, active accents. Never used for large fills.
- **Burnt Brick** ({colors.brick-deep}): hover and pressed states of brick elements only.

### Secondary
- **Blazer Navy** ({colors.navy}): dark bands, footers, headers, headings face. Body copy on navy is linen, headings cream.
- **Deep Navy** ({colors.navy-deep}): page washes behind heroes, mobile menu, form panels on dark.

### Tertiary
- **Crest Brass** ({colors.brass}): frames, rules, beads, hairline borders. Decorative metal, never body text on light.
- **Pale Brass** ({colors.brass-light}): labels and accents on navy, focus ring on dark.
- **Deep Brass** ({colors.brass-deep}): the focus ring on light surfaces. Chosen at 5.4:1 on parchment, not for looks.
- **Mustard Tint** ({colors.mustard-tint}): links on navy, notice bands, pressed filter chips.

### Neutral
- **Parchment** ({colors.parchment}): the page background everywhere.
- **Paper** ({colors.paper}): cards, inputs, photo mounts.
- **Cream** ({colors.cream}): headings on navy.
- **Linen** ({colors.linen}): body copy on navy.
- **Ink** ({colors.ink}): body text. **Muted Ink** ({colors.ink-muted}): secondary copy, capped at 68ch.
- **House colors** (red, blue, green, yellow) live in one static block and are the only colors that may arrive from content data.

### Named Rules
**The No-Gray-Surface Rule.** Secondary text on a colored surface is tinted from that surface (linen on navy, bronze-ink on mustard-tint), never gray.
**The Brick-Rarity Rule.** Brick appears on small elements — links, buttons, numerals. A brick band or brick card is a defect, not an accent.

## Typography

**Display Font:** Cormorant Garamond (weights 500–700, italics), fallback Georgia, serif.
**Body Font:** Source Sans 3 (weights 400–700), fallback system-ui, sans-serif. Self-hosted through the framework font pipeline, preloaded.

**Character:** The serif speaks (headlines, numerals, the school name); the sans works (body, labels, controls). Display is medium-weight, never black; emphasis comes from size and weight steps, never gradient or color tricks.

### Hierarchy
- **Display** (medium, 3rem → 5rem page heroes, up to 7.5rem on the alumni hero, leading 1.02): page headlines only, set as a single block, balanced wrapping.
- **Headline** (semibold, 2.25rem → 3rem, leading 1.08): section titles.
- **Title** (semibold, 1.875rem): card and subsection titles.
- **Body** (regular, 1.125rem, relaxed leading): capped measures — lede at 58ch, muted copy at 68ch.
- **Label** (semibold/bold, 0.75rem → 0.9375rem, 0.1–0.14em tracking, uppercase): eyebrows, kickers, captions, table headers. Carries information the nearby text does not repeat.

### Named Rules
**The No-Eyebrow-Above-Headings Rule.** A tracked label never sits above a section heading as furniture. It appears only where it adds information: news categories, batch years, class ranges.
**The Capitals-Are-Short Rule.** Uppercase settings stay short. A long uppercase string is a defect even inside a badge.

## Layout

One container (`90rem`) centers every width-limited band. Sections breathe vertically (4rem → 6rem) with tight internal groups; gutters run 1rem on mobile to 7.5rem on desktop. Content grids collapse single-column below the large breakpoint; tables keep a scrollable region wrapper that is keyboard-focusable with an accessible name. The sticky header reserves 6rem of scroll padding so anchors never hide beneath it.

## Elevation & Depth

**Flat by rest, tonal by layering.** Depth comes from paper-on-parchment bands, navy sections, and photographic vignette washes — not from lifted cards. Shadows exist but stay ambient: a soft mount shadow under framed prints, a pinned-note shadow on floating elements, inset vignette and hero washes that seat photos into the page.

### Shadow Vocabulary
- **Mount** (`0 1px 2px rgba(30,42,74,0.08), 0 14px 30px -20px rgba(30,42,74,0.45)`): framed photographs.
- **Pinned** (`0 10px 20px -14px rgba(30,42,74,0.5)`): floating notes and raised elements.
- **Vignette** (`inset 0 0 90px rgba(40,24,6,0.32)`): inside photo frames.
- **Wash** (`inset 0 0 260px rgba(5,8,18,0.6)`): full-bleed hero photos under the navy overlay.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow must answer to a material (mount, pin, wash) — a border plus a wide soft shadow together is the ghost-card defect.

## Shapes

Controls are softly rectangular (6px): buttons, inputs, tags. Cards and panels take 8px. Photographs stay near-square (2px) to read as mounted prints, with a thin brass frame and inner padding; archive material adds a sepia wash on an aged mount. Year-filter chips use a pointed pennant clip as the one geometric signature. Rule lines are brass hairlines; section dividers use the beaded rule (double rule, eight beads) echoing the beaded cross on the crest.

## Components

### Buttons
- **Shape:** 6px radius, semibold sans, no underline, min-height 44–48px, press depression of 1px on active.
- **Primary:** brick fill, white text; hover deepens to burnt brick.
- **Hover / Focus:** 150ms color transition; global focus ring is 3px deep-brass on light, pale-brass on navy.
- **Ghost:** transparent, cream text, for navy surfaces. **Outline:** navy-bordered on light, fills navy on hover.

### Chips
- **Style:** bordered paper chips for year/batch filters; navy fill with mustard-tint text when pressed (`aria-pressed` is the source of truth).
- **Eyebrow variant:** tracked uppercase kickers in brick (light) or pale brass (dark), information-bearing only.

### Cards / Containers
- **Corner Style:** 8px, hairline brass border on paper.
- **Navy variant:** navy fill, linen text, for dark bands.
- **Shadow Strategy:** flat at rest; optional half-pixel lift on hover for clickable cards only.
- **Internal Padding:** 1.5rem–2.5rem; list rows separate with hairline dividers, never nested cards.

### Inputs / Fields
- **Style:** paper fill, grey hairline (brass-tinted on dark panels), 6px radius, 48px minimum height, base-size text.
- **Focus:** the global 3px ring; never remove it for aesthetics.
- **Error / Disabled:** disabled pairs `disabled` or `aria-disabled` with an always-visible reason via `aria-describedby`; unconnected concept forms say so in plain text next to the submit.

### Navigation
- **Style:** sticky navy header, linen 15px semibold links with a 2px brass-light active underline; 48px menu button on small screens opening a full navy panel that closes on Escape and returns focus.
- **Footer:** four-column navy-deep grid with topographic contour art and a crest watermark; link hover always resolves to a light color on dark.

### PhotoFrame (signature)
- **Style:** near-square brass frame, paper or aged mount, vignette overlay, optional sepia and hover lift. Below-fold photos lazy-load; heroes are eager with high fetch priority.
- **Caption:** tracked uppercase muted strip; the mount variant joins the frame's bottom edge so caption and print read as one object.

### Links
- **Style:** brick with 1px underline offset on light; mustard-tint on navy, resolving to cream/white on hover — never brick on navy.
- **LinkArrow:** semibold brick link with an arrow glyph, 44px minimum height, dark variant in mustard-tint.

## Do's and Don'ts

### Do:
- **Do** keep every color behind a token; arbitrary hex in markup is a defect.
- **Do** write alt text that describes the specific photograph; mark ornament `decorative` so it is hidden from assistive tech.
- **Do** gate motion behind `prefers-reduced-motion` and keep it to mist drift plus one rising entrance per view.
- **Do** name scrollable regions (`tabindex="0"`, `role="region"`, label) wherever overflow scrolling exists.
- **Do** keep touch targets at 44px or above, including desktop nav links.

### Don't:
- **Don't** put brick text — or any plain link — on navy without the mustard-tint treatment.
- **Don't** nest cards, or pair a hairline border with a wide diffuse shadow.
- **Don't** lazy-load the hero image or ship `fetchpriority="high"` without `loading="eager"`.
- **Don't** use an eyebrow above a heading, gradient text, glassmorphism, or emoji-as-icon.
- **Don't** invent new hex values for one-off elements; extend the token file or reuse.
