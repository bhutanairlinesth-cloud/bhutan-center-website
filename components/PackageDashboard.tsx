"use client";

import { useState } from "react";
import Link from "next/link";
import type { TourPackage } from "@/lib/packages";
import { formatTHB } from "@/lib/packages";

export default function PackageDashboard({ packages }: { packages: TourPackage[] }) {
  const [active, setActive] = useState(packages[0]?.slug || "");
  const current = packages.find((p) => p.slug === active) || packages[0];

  if (!current) return null;

  return (
    <div className="package-dashboard">
      <div className="package-dashboard__nav">
        <div className="package-dashboard__nav-head">
          <span>PACKAGES</span>
          <small>{packages.length} OPTIONS</small>
        </div>

        {packages.map((item, index) => (
          <button
            key={item.slug}
            onClick={() => setActive(item.slug)}
            className={current.slug === item.slug ? "active" : ""}
          >
            <span className="package-nav-no">0{index + 1}</span>
            <span>
              <strong>{item.name}</strong>
              <small>{item.duration}</small>
            </span>
            <span className="package-nav-price">฿{formatTHB(item.priceFrom)}</span>
          </button>
        ))}
      </div>

      <div className="package-dashboard__visual">
        <img src={current.image} alt={current.name} />
        <div className="package-visual-overlay">
          <span>{current.badge}</span>
          <strong>{current.duration}</strong>
        </div>
        <div className="package-route-chips">
          {current.cities.map((city) => <span key={city}>{city}</span>)}
        </div>
      </div>

      <div className="package-dashboard__detail">
        <div className="package-detail-label">PRIVATE JOURNEY</div>
        <h3>{current.name}</h3>
        <p>{current.overview}</p>

        <div className="package-mini-stats">
          <div><span>DAYS</span><strong>{current.days}</strong></div>
          <div><span>NIGHTS</span><strong>{current.nights}</strong></div>
          <div><span>CITIES</span><strong>{current.cities.length}</strong></div>
        </div>

        <div className="package-dashboard__price">
          <div><span>ราคาเริ่มต้น</span><strong>฿{formatTHB(current.priceFrom)}</strong><small>/ ท่าน</small></div>
          <Link className="dashboard-arrow" href={`/packages/${current.slug}`}>↗</Link>
        </div>

        <Link className="dashboard-primary" href={`/packages/${current.slug}`}>
          ดูรายละเอียดแพ็กเกจ <span>→</span>
        </Link>
      </div>
    </div>
  );
}
