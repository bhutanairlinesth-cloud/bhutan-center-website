"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import BrandMark from "./BrandMark";
import { publicPaths } from "@/lib/public-paths";

const nav = [
  { href: publicPaths.packages, label: "แพ็กเกจ" },
  { href: "/bhutan-airlines", label: "Bhutan Airlines" },
  { href: publicPaths.visa, label: "วีซ่าภูฏาน" },
  { href: publicPaths.destinations, label: "Explore Bhutan" },
  { href: publicPaths.travelInfo, label: "ก่อนเดินทาง" },
  { href: publicPaths.journal, label: "Journal" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (pathname.startsWith("/admin")) return null;
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-link" onClick={() => setOpen(false)}>
          <BrandMark />
        </Link>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {nav.map((item) => (
            <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <Link href={publicPaths.contact} onClick={() => setOpen(false)}>ติดต่อเรา</Link>
          <Link className="button button--small" href={publicPaths.booking} onClick={() => setOpen(false)}>วางแผนทริป</Link>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          <span /> <span />
        </button>
      </div>
    </header>
  );
}
