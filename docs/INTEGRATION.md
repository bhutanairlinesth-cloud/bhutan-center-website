# Bhutan Center V2 ↔ Bhutan Pricing integration

## Recommended architecture

Bhutan Pricing remains the **single source of truth** for pricing and internal operations.

```
Bhutan Pricing / Supabase
  ├─ Tour Programs
  ├─ Hotels
  ├─ Flight Settings
  ├─ Visa & Fees
  ├─ Price Channels (Retail / Agent)
  ├─ Quotation / Customer Tracking / Invoices
  └─ Public API (read-only + lead intake)
          ↓
BhutanCenter.org V2
  ├─ Home package cards
  ├─ /packages
  ├─ /packages/:slug (internally rewritten to /package?slug=...)
  └─ Booking / enquiry forms
```

The public website must **never** receive cost, margin, service-role credentials, agent-only pricing, invoice data or internal notes.

## Public Packages endpoint

Create this route in the existing Bhutan Pricing project:

`GET /api/public/packages`

Then configure this website:

```env
BHUTAN_PRICING_API_URL=https://YOUR-PRICING-APP.vercel.app/api
BHUTAN_PRICING_API_KEY=optional-server-to-server-secret
```

The website requests:

`GET {BHUTAN_PRICING_API_URL}/public/packages`

Accepted payload:

```json
{
  "packages": [
    {
      "id": "...",
      "slug": "wonders-of-bhutan",
      "name": "Wonders of Bhutan",
      "duration": "5 Days / 4 Nights",
      "days": 5,
      "nights": 4,
      "priceFrom": 66500,
      "priceNote": "ราคาเริ่มต้น...",
      "badge": "แพ็กเกจขายดี",
      "shortDescription": "...",
      "overview": "...",
      "cities": ["Paro", "Thimphu", "Punakha"],
      "highlights": ["..."],
      "includes": ["..."],
      "excludes": ["..."],
      "itinerary": [{"day":1,"title":"...","summary":"..."}],
      "airline": "Bhutan Airlines",
      "hotel": "3-star",
      "image": "https://...",
      "isActive": true
    }
  ]
}
```

Only `priceFrom` is required for a basic price sync. Other fields can continue using the website fallback until the Pricing backend is expanded.

## Lead endpoint

Create:

`POST /api/public/leads`

The V2 site sends:

```json
{
  "name": "Customer",
  "travel_date": "2026-11-15",
  "pax": 4,
  "adults": 3,
  "children": 1,
  "package_slug": "wonders-of-bhutan",
  "hotel_level": "4",
  "cabin_class": "economy",
  "contact": "...",
  "note": "...",
  "source": "bhutancenter.org",
  "channel": "retail"
}
```

Recommended action inside Bhutan Pricing: create or update a Customer Tracking record with source `Bhutan Center Website` and keep status as `New / Web enquiry` until staff reviews it.

## Retail vs Agent

Public pages consume **Retail / Direct Customer** only. `/partner` should submit an Agent enquiry but should not receive wholesale prices publicly. Agent quotations remain inside Bhutan Pricing's `Agent / Wholesale` price channel.

## Cache / price updates

The site uses a 60-second revalidation window. An edited published price in Bhutan Pricing should therefore appear on the public site in about one minute without redeploying the website.

## What I still need to make the connection exact

The current Bhutan Pricing source repository/ZIP or the exact Supabase schema/API route is needed to map its real table and column names. This V2 intentionally does not guess or modify the existing database schema.


## Recommended publish control in Bhutan Pricing

To keep Pricing operations separate from what customers see, expose a deliberate **Website / Publish** layer rather than returning internal quote rows directly. The public mapper should resolve these values from the existing Pricing logic:

- `website_visible` / published status
- `website_price_from` (Retail only, or an approved Retail-calculated price)
- `website_price_note`
- optional publish window / last updated timestamp

If those exact fields do not exist, map to equivalent existing fields instead of creating duplicates. A useful admin UX is a small **Website** panel inside Tour Programs with `Show on website`, `Display price`, `Price note`, and a Preview link.

This gives staff one place to change a public package price while keeping cost, margin, Agent/Wholesale and quote-specific calculations private.

---

## SEO Center integration

The redesign now contains `/admin/seo`, seeded from the supplied Wix SEO Setup Checklist (166/174 complete across the Step 2 baseline). See `docs/SEO_MIGRATION.md`.

Recommended architecture once Bhutan Pricing source code is connected:

`Bhutan Pricing authentication -> Website -> SEO Center -> website_seo_state -> public Next.js metadata/sitemap/redirect layer`

The current V2 already reads persisted SEO state from Supabase on the server. This lets a title, meta description, canonical or index setting edited in the admin affect the public metadata without hard-coding it in each page.
