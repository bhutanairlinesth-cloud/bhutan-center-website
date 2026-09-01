import { NextResponse } from "next/server";
import { getPublicPackages } from "@/lib/pricing-source";

export async function GET() {
  const packages = await getPublicPackages();
  return NextResponse.json({ packages, source: process.env.BHUTAN_PRICING_API_URL ? "bhutan-pricing" : "fallback" });
}
