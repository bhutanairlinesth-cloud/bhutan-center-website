"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BrandMark from "./BrandMark";
import { publicPaths } from "@/lib/public-paths";

const nav = [
  { href: publicPaths.packages, label: "แพ็กเกจ" },
  { href: publicPaths.destinations, label: "สำรวจภูฏาน" },
  { href: "/bhutan-airlines", label: "Bhutan Airlines" },
  { href: publicPaths.hotels, label: "โรงแรม" },
  { href: publicPaths.travelInfo, label: "ก่อนเดินทาง" },
  { href: publicPaths.journal, label: "Journal" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <BrandMark />
        </Link>

        <nav className={`nav-main ${open ? "open" : ""}`}>
          {nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link className="mobile-nav-extra" href={publicPaths.contact} onClick={() => setOpen(false)}>ติดต่อเรา</Link>
        </nav>

        <div className="nav-actions">
          <Link className="nav-text-link" href="/partner">For Agent</Link>
          <Link className="primary-pill" href={publicPaths.booking}>วางแผนทริป <span>↗</span></Link>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            <i></i><i></i>
          </button>
        </div>
      </div>
    </header>
  );
}
