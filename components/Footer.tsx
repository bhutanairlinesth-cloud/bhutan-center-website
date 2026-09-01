"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "./BrandMark";
import { publicPaths } from "@/lib/public-paths";

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="site-footer">
      <div className="container footer-lead">
        <span className="eyebrow">Bhutan Center · Bangkok</span>
        <h2>Bhutan is closer than you think.</h2>
        <div>
          <p>ให้ทีมที่ทำเส้นทางภูฏานโดยเฉพาะ ช่วยเปลี่ยนวันเดินทางของคุณให้เป็นทริปที่ลงตัว</p>
          <Link href={publicPaths.booking} className="button button--light">Start planning <span>↗</span></Link>
        </div>
      </div>

      <div className="container footer-grid">
        <div className="footer-brand-column">
          <BrandMark light />
          <p className="footer-intro">
            Private journeys to Bhutan. ดูแลเที่ยวบิน วีซ่า SDF ที่พัก ไกด์ รถ และรายละเอียดตลอดการเดินทาง
          </p>
          <p className="muted-light">ใบอนุญาตนำเที่ยวเลขที่ 11/07261</p>
        </div>

        <div>
          <h4>Journeys</h4>
          <Link href={publicPaths.packages}>แพ็กเกจภูฏาน</Link>
          <Link href="/bhutan-airlines">Bhutan Airlines</Link>
          <Link href={publicPaths.hotels}>Hotels</Link>
          <Link href={publicPaths.visa}>Visa & SDF</Link>
        </div>

        <div>
          <h4>Discover</h4>
          <Link href={publicPaths.destinations}>Places</Link>
          <Link href={publicPaths.travelInfo}>Before you go</Link>
          <Link href={publicPaths.aboutBhutan}>About Bhutan</Link>
          <Link href={publicPaths.journal}>Journal</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p>52/13 ชั้น 5 สีลมคอนโด<br/>ซอยศาลาแดง 2 แขวงสีลม<br/>เขตบางรัก กรุงเทพฯ 10500</p>
          <p>
            <a href="tel:+6626304500">+66 2 630 4500</a>
            <a href="mailto:info@omgexp.com">info@omgexp.com</a>
          </p>
          <Link href="/partner" className="footer-partner">Travel Agent / Partner ↗</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Bhutan Center · OMG Experience</span>
        <span>Private journeys. Thoughtfully arranged.</span>
      </div>
    </footer>
  );
}
