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
      <div className="footer-cta">
        <div>
          <span className="section-code section-code--light">START YOUR JOURNEY</span>
          <h2>พร้อมไปภูฏาน<br/>เมื่อไหร่ บอกเรา.</h2>
        </div>
        <div>
          <p>ส่งวันที่ จำนวนคน และสไตล์ที่ชอบ ทีม Bhutan Center จะช่วยวางเส้นทางและราคาให้เหมาะกับทริปจริง</p>
          <Link href={publicPaths.booking} className="footer-cta-button">เริ่มวางแผนทริป <span>↗</span></Link>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <BrandMark light />
          <p>ผู้เชี่ยวชาญการเดินทางภูฏานในประเทศไทย ดูแลแพ็กเกจ เที่ยวบิน วีซ่า SDF โรงแรม ไกด์ และรถในที่เดียว</p>
          <small>ใบอนุญาตนำเที่ยว 11/07261</small>
        </div>
        <div>
          <strong>EXPLORE</strong>
          <Link href={publicPaths.packages}>แพ็กเกจ</Link>
          <Link href={publicPaths.destinations}>สถานที่ท่องเที่ยว</Link>
          <Link href={publicPaths.hotels}>โรงแรม</Link>
          <Link href={publicPaths.journal}>Journal</Link>
        </div>
        <div>
          <strong>PLAN</strong>
          <Link href="/bhutan-airlines">Bhutan Airlines</Link>
          <Link href={publicPaths.visa}>Visa & SDF</Link>
          <Link href={publicPaths.travelInfo}>ก่อนเดินทาง</Link>
          <Link href={publicPaths.booking}>ขอใบเสนอราคา</Link>
        </div>
        <div>
          <strong>CONTACT</strong>
          <a href="tel:+6626304600">+66 2 630 4600</a>
          <a href="mailto:info@omgexp.com">info@omgexp.com</a>
          <p>52/13 ชั้น 5 สีลมคอนโด<br/>ซอยศาลาแดง 2 สีลม บางรัก<br/>กรุงเทพฯ 10500</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Bhutan Center · OMG Experience</span>
        <span>Bangkok → Bhutan</span>
      </div>
    </footer>
  );
}
