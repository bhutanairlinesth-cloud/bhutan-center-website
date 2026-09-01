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
      <div className="container footer-grid">
        <div>
          <BrandMark light />
          <p className="footer-intro">ผู้เชี่ยวชาญด้านการเดินทางภูฏาน ดูแลตั้งแต่ตั๋วเครื่องบิน วีซ่า ที่พัก ไกด์ รถ ไปจนถึงการออกแบบทริปส่วนตัว</p>
          <p className="muted-light">ใบอนุญาตนำเที่ยวเลขที่ 11/07261</p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link href={publicPaths.packages}>แพ็กเกจภูฏาน</Link>
          <Link href="/bhutan-airlines">Bhutan Airlines</Link>
          <Link href={publicPaths.visa}>วีซ่าภูฏาน</Link>
          <Link href={publicPaths.hotels}>ที่พักในภูฏาน</Link>
        </div>
        <div>
          <h4>Plan</h4>
          <Link href={publicPaths.booking}>วางแผนทริป</Link>
          <Link href={publicPaths.travelInfo}>รู้ไว้ก่อนไปภูฏาน</Link>
          <Link href={publicPaths.destinations}>สถานที่ท่องเที่ยว</Link>
          <Link href={publicPaths.aboutBhutan}>รู้จักภูฏาน</Link>
          <Link href={publicPaths.journal}>Journal</Link>
          <Link href={publicPaths.contact}>ติดต่อเรา</Link>
        </div>
        <div>
          <h4>Bhutan Center</h4>
          <p>52/13 ชั้น 5 สีลมคอนโด<br/>ซอยศาลาแดง 2 แขวงสีลม<br/>เขตบางรัก กรุงเทพฯ 10500</p>
          <p><a href="tel:+6626304500">+66 2 630 4500</a><br/><a href="mailto:info@omgexp.com">info@omgexp.com</a></p>
          <Link href="/partner" className="footer-partner">สำหรับบริษัททัวร์ / Partner</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Bhutan Center · affiliated with OMG Experience</span>
        <span>Private journeys. Thoughtfully arranged.</span>
      </div>
    </footer>
  );
}
