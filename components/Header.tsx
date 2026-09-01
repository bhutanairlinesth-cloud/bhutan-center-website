"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import BrandMark from "./BrandMark";
import { publicPaths } from "@/lib/public-paths";

const nav = [
  { href: publicPaths.packages, label: "Journeys" },
  { href: "/bhutan-airlines", label: "Bhutan Airlines" },
  { href: publicPaths.destinations, label: "Discover" },
  { href: publicPaths.travelInfo, label: "Travel Guide" },
  { href: publicPaths.journal, label: "Journal" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (pathname.startsWith("/admin")) return null;

  return (
    <header className="site-header">
      <div className="header-frame">
        <Link href="/" className="brand-link" onClick={() => setOpen(false)} aria-label="Bhutan Center home">
          <BrandMark />
        </Link>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {nav.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href={publicPaths.visa} onClick={() => setOpen(false)}>Visa</Link>
          <Link href={publicPaths.contact} onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        <div className="header-actions">
          <span className="language-pill">TH</span>
          <Link className="button button--small header-cta" href={publicPaths.booking}>
            Plan a trip <span>↗</span>
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
