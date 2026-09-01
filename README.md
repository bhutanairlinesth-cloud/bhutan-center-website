# Bhutan Center V4 — Interactive Map Dashboard

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
