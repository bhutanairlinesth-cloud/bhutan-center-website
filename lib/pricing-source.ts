import { fallbackPackages, TourPackage } from "./packages";

type PublicPackagePayload = Partial<TourPackage> & {
  slug: string;
  name: string;
  priceFrom?: number;
  price_from?: number;
};

function normalizePackage(remote: PublicPackagePayload, fallback?: TourPackage): TourPackage {
  const base = fallback ?? fallbackPackages[0];
  return {
    ...base,
    ...remote,
    id: remote.id ?? fallback?.id ?? remote.slug,
    slug: remote.slug,
    name: remote.name,
    priceFrom: Number(remote.priceFrom ?? remote.price_from ?? fallback?.priceFrom ?? 0),
    itinerary: remote.itinerary ?? fallback?.itinerary ?? [],
    highlights: remote.highlights ?? fallback?.highlights ?? [],
    includes: remote.includes ?? fallback?.includes ?? [],
    excludes: remote.excludes ?? fallback?.excludes ?? [],
    cities: remote.cities ?? fallback?.cities ?? [],
    isActive: remote.isActive ?? fallback?.isActive ?? true,
  };
}

export async function getPublicPackages(): Promise<TourPackage[]> {
  const baseUrl = process.env.BHUTAN_PRICING_API_URL?.replace(/\/$/, "");
  if (!baseUrl) return fallbackPackages;

  try {
    const response = await fetch(`${baseUrl}/public/packages`, {
      headers: process.env.BHUTAN_PRICING_API_KEY
        ? { Authorization: `Bearer ${process.env.BHUTAN_PRICING_API_KEY}` }
        : undefined,
      next: { revalidate: 60 },
    });
    if (!response.ok) throw new Error(`Pricing API ${response.status}`);

    const json = await response.json();
    const rows: PublicPackagePayload[] = Array.isArray(json) ? json : json.packages;
    if (!Array.isArray(rows) || rows.length === 0) return fallbackPackages;

    return rows
      .map((row) => normalizePackage(row, fallbackPackages.find((item) => item.slug === row.slug)))
      .filter((item) => item.isActive);
  } catch (error) {
    console.error("Bhutan Pricing API unavailable; using fallback package data.", error);
    return fallbackPackages;
  }
}

export async function getPublicPackage(slug: string): Promise<TourPackage | undefined> {
  const items = await getPublicPackages();
  return items.find((item) => item.slug === slug);
}
