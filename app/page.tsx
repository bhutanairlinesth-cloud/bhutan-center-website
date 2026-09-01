import Link from "next/link";
import BhutanCityExplorer from "@/components/BhutanCityExplorer";
import PackageDashboard from "@/components/PackageDashboard";
import BookingForm from "@/components/BookingForm";
import { getPublicPackages } from "@/lib/pricing-source";
import { metadataForPath } from "@/lib/seo-config";
import { loadSeoState } from "@/lib/seo-store";

export async function generateMetadata() {
  const seo = await loadSeoState();
  return metadataForPath("/", seo.pages);
}

export default async function HomePage() {
  const packages = await getPublicPackages();

  return (
    <>
      <section className="hero-neon">
        <div className="hero-photo" />
        <div className="hero-vignette" />
        <div className="hero-grid-lines" />

        <div className="page-container hero-neon-grid">
          <div className="hero-neon-copy">
            <div className="hero-status"><i></i><span>BHUTAN SPECIALIST · THAILAND · SINCE 2013</span></div>
            <h1>ภูฏาน<br/><span>ในจังหวะของคุณ.</span></h1>
            <p>Private Journey ที่ออกแบบจากวันเดินทางของคุณ ดูแลครบทั้ง Bhutan Airlines, Visa + SDF, โรงแรม, ไกด์ รถ และเส้นทาง — โดยทีมเดียวตั้งแต่เริ่มจนกลับถึงไทย</p>
            <div className="hero-actions">
              <Link href="/packagetour-bhutan-new" className="neon-button">ดูแพ็กเกจ <span>↗</span></Link>
              <Link href="/packagetours-bhutan-booking" className="ghost-button">ให้เราช่วยวางทริป</Link>
            </div>
            <div className="hero-stat-grid">
              <div><small>PRIVATE FROM</small><strong>2</strong><span>guests</span></div>
              <div><small>BHUTAN EXPERIENCE</small><strong>10+</strong><span>years</span></div>
              <div><small>CORE DESTINATIONS</small><strong>4</strong><span>cities</span></div>
              <div><small>FULL SERVICE</small><strong>1</strong><span>team</span></div>
            </div>
          </div>

          <div className="hero-map-card">
            <div className="hero-map-head"><div><span>INTERACTIVE ROUTE MAP</span><strong>สำรวจภูฏานผ่าน 4 เมืองหลัก</strong></div><small>27.5° N · 90.4° E</small></div>
            <div className="hero-mini-map">
              <svg viewBox="0 0 1000 500" role="img" aria-label="Bhutan map">
                <defs>
                  <filter id="glow"><feGaussianBlur stdDeviation="6" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <path className="map-shape" d="M73 300 C91 285 100 261 112 240 C132 205 158 184 181 155 C207 122 229 86 267 64 C307 41 351 44 389 58 C419 69 430 91 464 91 C499 91 523 78 554 89 C586 101 607 117 642 117 C675 117 699 103 730 111 C760 119 790 140 821 143 C852 147 865 139 881 158 C895 174 885 194 878 211 C871 228 878 244 897 257 C917 270 936 263 948 281 C960 300 946 317 936 332 C927 346 936 362 941 377 C946 394 935 405 916 407 C886 411 864 399 837 410 C816 419 799 436 776 425 C749 413 729 415 701 423 C675 431 650 427 621 426 C590 425 568 431 540 423 C514 416 492 403 466 405 C442 407 421 425 396 431 C366 439 335 437 305 432 C281 427 264 418 241 416 C214 413 191 417 169 404 C151 393 135 384 115 381 C95 378 84 366 86 349 C88 334 74 323 63 315 C56 310 61 305 73 300 Z"/>
                <path className="map-ridge" d="M132 348 C245 335 347 316 448 294 C550 272 645 267 743 286 C813 299 856 319 913 347"/>
                <path className="map-ridge" d="M188 221 C293 205 377 188 479 178 C581 169 686 173 802 203"/>
                <path className="map-route" d="M205 287 C250 282 278 270 310 268 S380 236 425 238 S486 264 542 274"/>
              </svg>
              <div className="mini-pin mini-pin--paro"><i></i><span>Paro</span></div>
              <div className="mini-pin mini-pin--thimphu"><i></i><span>Thimphu</span></div>
              <div className="mini-pin mini-pin--punakha"><i></i><span>Punakha</span></div>
              <div className="mini-pin mini-pin--gangtey"><i></i><span>Gangtey</span></div>
            </div>
            <div className="hero-map-detail">
              <div><small>SELECTED DESTINATION</small><h3><span>พาโร</span> · Paro</h3><p>ประตูสู่ภูฏาน เมืองหุบเขาที่รวม Tiger’s Nest, Paro Dzong และสนามบินนานาชาติ</p><div className="mini-tags"><span>2,280 m</span><span>5 places</span><span>1–2 nights</span></div></div>
              <div><small>PLACES TO DISCOVER</small><ol><li><b>01</b><span>Tiger’s Nest</span></li><li><b>02</b><span>Paro Dzong</span></li><li><b>03</b><span>Kyichu Lhakhang</span></li></ol></div>
            </div>
          </div>
        </div>
      </section>

      <section className="neon-service-strip">
        <div className="page-container neon-service-grid">
          <div className="neon-service-lead"><span className="micro-label">ONE TEAM · EVERYTHING BHUTAN</span><strong>ทุกอย่างที่ต้องใช้<br/>ในการไปภูฏาน</strong></div>
          <div><span>01</span><strong>Flight</strong><small>Bhutan Airlines</small></div>
          <div><span>02</span><strong>Visa + SDF</strong><small>Documentation</small></div>
          <div><span>03</span><strong>Hotels</strong><small>3–5 star</small></div>
          <div><span>04</span><strong>Guide</strong><small>Private guide</small></div>
          <div><span>05</span><strong>Transport</strong><small>Private vehicle</small></div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-container">
          <div className="neon-section-head"><div><span className="micro-label">CURATED JOURNEYS</span><h2>เลือกจำนวนวัน.<br/><span>แล้วดูเส้นทางทันที.</span></h2></div><p>แต่ละแพ็กเกจบอกชัดว่าผ่านเมืองไหน ราคาเริ่มต้นเท่าไร และกดเข้าไปดูสถานที่เที่ยวในแต่ละเมืองได้โดยไม่ต้องไล่อ่านโปรแกรมยาว ๆ</p></div>
          <PackageDashboard packages={packages} />
        </div>
      </section>

      <section className="section section-map-neon">
        <div className="page-container">
          <BhutanCityExplorer title="4 เมืองหลัก · คนละอารมณ์" />
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-container">
          <div className="neon-section-head"><div><span className="micro-label">WHY BHUTAN CENTER</span><h2>เรื่องยากอยู่หลังบ้าน.<br/><span>หน้าเว็บเหลือแค่สิ่งที่ต้องรู้.</span></h2></div><p>เที่ยวบิน วีซ่า SDF โรงแรม รถ ไกด์ และราคาแพ็กเกจเชื่อมเป็น flow เดียว ลดการตามข้อมูลหลายช่องทาง</p></div>
          <div className="neon-feature-grid">
            <article style={{["--feature-glow" as string]:"#4ee0d8"}}><span>01</span><div className="feature-icon">✈</div><h3>Bhutan Airlines</h3><p>เที่ยวบิน · ตารางบิน · ที่นั่ง · ขอราคา</p></article>
            <article style={{["--feature-glow" as string]:"#62dd9f"}}><span>02</span><div className="feature-icon">✓</div><h3>Visa + SDF</h3><p>เอกสารและค่าธรรมเนียมจัดการใน flow เดียว</p></article>
            <article style={{["--feature-glow" as string]:"#ffc85c"}}><span>03</span><div className="feature-icon">▦</div><h3>Hotels</h3><p>เลือกระดับ 3–5 ดาวและอัปเกรดได้</p></article>
            <article style={{["--feature-glow" as string]:"#ff72a5"}}><span>04</span><div className="feature-icon">⌁</div><h3>Private Journey</h3><p>เลือกวันเอง ปรับเมือง กิจกรรม และจังหวะทริป</p></article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-container airline-neon-card">
          <div className="airline-neon-photo"><img src="/images/hero-bhutan.png" alt="Bhutan landscape and dzong"/></div>
          <div className="airline-neon-copy"><span className="micro-label micro-label--gold">BHUTAN AIRLINES</span><h2>บินจากกรุงเทพฯ<br/>สู่พาโร.</h2><p>ดูแลการจองเที่ยวบิน Bhutan Airlines พร้อมเชื่อมเข้ากับแพ็กเกจและวันเดินทางของคุณใน flow เดียว</p><div className="airport-route"><div><small>BANGKOK</small><strong>BKK</strong></div><i>✈</i><div><small>PARO</small><strong>PBH</strong></div></div><Link href="/bhutan-airlines" className="gold-button">ดูข้อมูลเที่ยวบิน <span>↗</span></Link></div>
        </div>
      </section>

      <section className="section section-cta-neon">
        <div className="page-container planner-neon">
          <div className="planner-neon-copy"><span className="micro-label">PLAN YOUR JOURNEY</span><h2>ส่งวันเดินทางมา.<br/>ที่เหลือให้เราจัดการ.</h2><p>กรอกข้อมูลสั้น ๆ ทีมจะช่วยเลือกแพ็กเกจ เมือง โรงแรม และคำนวณราคาตามวันเดินทางจริง</p><div className="mini-tags"><span>Private 2+</span><span>3–5 Star</span><span>Economy / Business</span><span>Quotation</span></div></div>
          <BookingForm compact />
        </div>
      </section>
    </>
  );
}
