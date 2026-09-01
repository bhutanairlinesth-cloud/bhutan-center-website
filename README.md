# Bhutan Center V8 — Soft Premium

Modern Next.js redesign for Bhutan Center, prepared for GitHub + Vercel and designed to connect to the existing Bhutan Pricing backend.

## What is included

- Modern responsive public website
- Dynamic tour package data layer (`BHUTAN_PRICING_API_URL`)
- Package inquiry / lead endpoint
- SEO-safe legacy URL rewrites for verified high-value Wix URLs
- Search metadata + canonical URLs + Open Graph
- `sitemap.xml` and `robots.txt`
- TravelAgency / Organization structured data
- **SEO & GEO Center** at `/admin/seo`
- Wix SEO Setup Checklist baseline imported: **166/174**, 44 pages, 8 visible pending tasks
- Redirect Manager for 301 / 308 migration rules
- Optional Supabase persistence for SEO admin state

## Run locally

```bash
npm install
npm run dev
```

Open:

- Website: `http://localhost:3000`
- SEO Center: `http://localhost:3000/admin/seo`

## Environment

Copy `.env.example` to `.env.local`.

### Bhutan Pricing

```env
BHUTAN_PRICING_API_URL=
BHUTAN_PRICING_API_KEY=
```

Expected endpoint:

`GET {BHUTAN_PRICING_API_URL}/public/packages`

Only public package fields should be returned. Do not expose internal cost, margin, agent price, invoice or operational notes.

### SEO Center persistence

```env
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
BHUTAN_ADMIN_TOKEN=
```

Run the SQL migration:

`supabase/migrations/20260901_seo_center.sql`

Without Supabase configuration, the SEO Center still works as a browser draft using `localStorage`.

## Important before replacing Wix

The existing Bhutan Center website already has Google history and ranking. Do **not** point the production domain to this project until the migration audit is complete.

Read:

- `docs/SEO_MIGRATION.md`
- `docs/INTEGRATION.md`
- `docs/SOURCES.md`

The migration strategy is to preserve existing URLs where possible, not to rename everything just because the new website has a cleaner route structure.


## GitHub Web Upload

This build is specifically compatible with GitHub's browser uploader.
It intentionally contains no folders named `[slug]` or `[...legacy]`.
Public package URLs still remain `/packages/<slug>` through Next.js rewrites.

## V4 redesign

The public website has been redesigned around an interactive Bhutan destination map inspired by a modern digital-dashboard experience.

Core destinations:
- Paro
- Thimphu
- Punakha
- Gangtey

Home and package-detail pages let visitors click destinations to see attractions. Package detail pages only enable destinations included in that package. SEO Center, Wix legacy URL preservation, Supabase hooks, sitemap, robots, and the Pricing integration architecture remain in place.

## V5 visual redesign

The public website was rebuilt around the dark cinematic / neon-glass visual language of the approved digital annual report reference: deep navy, real Bhutan photography, luminous cyan/green/gold accents, interactive map panels, and information-rich dashboard sections. SEO Center, legacy Wix URLs, redirects, sitemap/robots, package data integration, and admin functionality are retained.


## V6 design direction
Soft contemporary travel design: ivory, sage, blush and warm neutral palette; Anuphan + Manrope typography; rounded editorial layouts; interactive four-city Bhutan map; responsive package explorer; SEO/admin/pricing integration architecture preserved.


## V7 art direction

Soft luxury / Champagne Gold redesign with warm ivory surfaces, gold accents, Noto Serif Thai headings and IBM Plex Sans Thai body text. SEO Center and all migration safeguards are preserved.


## V8 design direction

- Champagne gold / warm ivory visual system
- Prompt loopless Thai sans-serif typography
- Larger readable type throughout the public site
- No interactive map in this version
- Simple content structure designed for easy management
- Home flow: Hero → Trust → Packages → Why us → Services → Bhutan Airlines → Destinations → Planner
- SEO Center, Wix SEO baseline, legacy URLs, redirects, sitemap, robots, and Bhutan Pricing integration hooks are preserved.


## V8.1 update
- Package cards redesigned for clearer hierarchy
- Entire card is now clickable
- Arrow button is no longer the only click target
- Cleaner footer with clearer CTA


## V8.4 Layout QA
- Restored missing desktop inner-page hero CSS.
- Fixed fixed-header / logo overlap on package pages.
- Redesigned Packages hero hierarchy.
- Added responsive desktop/tablet/mobile rules.
- Added missing base public utility classes detected by QA.


## V8.5 Premium Motion
- Soft scroll reveal for sections and cards
- Gentle parallax on large travel photography
- Gold scroll progress indicator
- Header depth transition on scroll
- Hover depth / cursor glow on interactive cards
- Button light sweep and link underline micro-interactions
- Animated form focus states
- Respects prefers-reduced-motion
