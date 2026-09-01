import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const baseUrl = process.env.BHUTAN_PRICING_API_URL?.replace(/\/$/, "");
  const adults = Number(body.adults || 0);
  const children = Number(body.children || 0);
  const pax = Number(body.pax || 0) || (adults + children || undefined);
  const lead = {
    name: body.name,
    travel_date: body.travel_date || null,
    pax,
    adults: adults || undefined,
    children,
    package_slug: body.package_slug || null,
    hotel_level: body.hotel_level || null,
    cabin_class: body.cabin_class || null,
    contact: body.contact,
    note: body.note || null,
    source: "bhutancenter.org",
    channel: "retail",
  };

  if (!baseUrl) {
    return NextResponse.json({ ok: true, demo: true, message: "Demo mode: connect BHUTAN_PRICING_API_URL to save leads." });
  }

  const response = await fetch(`${baseUrl}/public/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.BHUTAN_PRICING_API_KEY ? { Authorization: `Bearer ${process.env.BHUTAN_PRICING_API_KEY}` } : {}),
    },
    body: JSON.stringify(lead),
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, message: "Could not create lead in Bhutan Pricing." }, { status: 502 });
  }

  const data = await response.json().catch(() => ({}));
  return NextResponse.json({ ok: true, data });
}
