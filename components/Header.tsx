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
  { href: publicPaths.visa, label: "Visa & SDF" },
  { href: publicPaths.journal, label: "Journal" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <BrandMark />
        </Link>

        <nav className={`nav-main ${open ? "open" : ""}`}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="mobile-only" href={publicPaths.contact} onClick={() => setOpen(false)}>
            ติดต่อเรา
          </Link>
        </nav>

        <div className="nav-actions">
          <Link href="/partner" className="nav-agent">For Agent</Link>
          <Link href={publicPaths.booking} className="neon-button neon-button--small">
            วางแผนทริป <span>↗</span>
          </Link>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            <i></i><i></i>
          </button>
        </div>
      </div>
    </header>
  );
}
