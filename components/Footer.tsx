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
      <div className="page-container footer-hero">
        <div>
          <span className="micro-label micro-label--gold">START YOUR JOURNEY</span>
          <h2>พร้อมไปภูฏาน<br/>เมื่อไหร่ บอกเรา.</h2>
        </div>
        <div>
          <p>ส่งวันที่ จำนวนคน และสิ่งที่อยากเห็นมาให้ทีม Bhutan Center เราจะช่วยจัดเส้นทาง เที่ยวบิน โรงแรม และราคาให้เหมาะกับทริปจริง</p>
          <Link href={publicPaths.booking} className="light-button">เริ่มวางแผนทริป <span>↗</span></Link>
        </div>
      </div>

      <div className="page-container footer-grid">
        <div className="footer-brand">
          <BrandMark light />
          <p>Bhutan Specialist in Thailand · Private Journey · Flight · Visa + SDF · Hotel · Guide · Transport</p>
          <small>ใบอนุญาตนำเที่ยวเลขที่ 11/07261</small>
        </div>
        <div><strong>JOURNEYS</strong><Link href={publicPaths.packages}>แพ็กเกจภูฏาน</Link><Link href="/bhutan-airlines">Bhutan Airlines</Link><Link href={publicPaths.hotels}>โรงแรม</Link></div>
        <div><strong>DISCOVER</strong><Link href={publicPaths.destinations}>พาโร · Paro</Link><Link href={publicPaths.destinations}>ทิมพู · Thimphu</Link><Link href={publicPaths.destinations}>พูนาคา · Punakha</Link><Link href={publicPaths.destinations}>กังเต · Gangtey</Link></div>
        <div><strong>CONTACT</strong><a href="tel:+6626304600">+66 2 630 4600</a><a href="mailto:info@omgexp.com">info@omgexp.com</a><p>52/13 ชั้น 5 สีลมคอนโด<br/>ซอยศาลาแดง 2 สีลม บางรัก<br/>กรุงเทพฯ 10500</p></div>
      </div>
      <div className="page-container footer-bottom"><span>© {new Date().getFullYear()} Bhutan Center · OMG Experience</span><span>Bangkok → Bhutan</span></div>
    </footer>
  );
}
