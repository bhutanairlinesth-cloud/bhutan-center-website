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
      <section className="home-hero-dashboard">
        <div className="hero-dashboard-grid">
          <div className="hero-dashboard-copy">
            <div className="hero-brandline">
              <span>BHUTAN CENTER</span>
              <span className="live-dot"><i></i> THAILAND · SINCE 2013</span>
            </div>

            <h1>เที่ยวภูฏาน<br/><span>ให้เข้าใจมากกว่า</span><br/>แค่ไปถึง.</h1>

            <p>
              Private Journey ที่ออกแบบจากวันเดินทางของคุณ ดูแลครบตั้งแต่ Bhutan Airlines,
              Visa + SDF, โรงแรม, ไกด์, รถ และรายละเอียดตลอดทริป
            </p>

            <div className="hero-dashboard-actions">
              <Link href="/packagetour-bhutan-new" className="primary-pill primary-pill--large">เลือกแพ็กเกจ <span>↗</span></Link>
              <Link href="/packagetours-bhutan-booking" className="link-arrow">ให้เราช่วยออกแบบ <span>→</span></Link>
            </div>

            <div className="hero-dashboard-stats">
              <div><span>PRIVATE FROM</span><strong>2</strong><small>guests</small></div>
              <div><span>EXPERTISE</span><strong>10+</strong><small>years</small></div>
              <div><span>MAIN DESTINATIONS</span><strong>4</strong><small>cities</small></div>
            </div>
          </div>

          <div className="hero-dashboard-visual">
            <div className="hero-photo-main">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Punakha_dzong.jpg" alt="Punakha Dzong Bhutan" />
              <div className="photo-hud photo-hud--top">
                <span>LIVE DESTINATION</span><strong>PUNAKHA</strong>
              </div>
              <div className="photo-hud photo-hud--bottom">
                <span>27.5921° N</span><span>89.8797° E</span>
              </div>
            </div>

            <div className="hero-floating-card hero-floating-card--route">
              <span>POPULAR ROUTE</span>
              <strong>Paro → Thimphu → Punakha</strong>
              <small>4D3N / 5D4N</small>
            </div>

            <div className="hero-floating-card hero-floating-card--status">
              <i></i>
              <div><span>TRIP PLANNING</span><strong>Available</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-strip">
        <div className="dashboard-strip-grid">
          <div className="strip-intro">
            <span className="section-code">ONE TEAM / ONE JOURNEY</span>
            <strong>ทุกอย่างที่ต้องใช้<br/>ในการไปภูฏาน</strong>
          </div>
          <div className="strip-services">
            <div><span>01</span><strong>Flight</strong><small>Bhutan Airlines</small></div>
            <div><span>02</span><strong>Visa + SDF</strong><small>Documentation</small></div>
            <div><span>03</span><strong>Hotel</strong><small>3–5 star</small></div>
            <div><span>04</span><strong>Guide</strong><small>Private guide</small></div>
            <div><span>05</span><strong>Transport</strong><small>Private vehicle</small></div>
          </div>
        </div>
      </section>

      <section className="section section-map">
        <div className="page-container">
          <BhutanCityExplorer />
        </div>
      </section>

      <section className="section section-packages-dashboard">
        <div className="page-container">
          <div className="section-heading-dashboard">
            <div>
              <span className="section-code">CHOOSE YOUR JOURNEY</span>
              <h2>เริ่มจากจำนวนวัน<br/>แล้วค่อยเลือกจังหวะ.</h2>
            </div>
            <p>
              โปรแกรมหลักมี 4, 5 และ 6 วัน แต่ละแพ็กเกจบอกชัดว่าไปเมืองไหน
              และกดดูบนแผนที่ได้ทันทีว่าแต่ละเมืองมีอะไรให้เที่ยว
            </p>
          </div>
          <PackageDashboard packages={packages} />
        </div>
      </section>

      <section className="section split-dashboard">
        <div className="page-container split-dashboard-grid">
          <div className="split-photo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Paro_Taktsang%2C_Taktsang_Palphug_Monastery%2C_Tiger%27s_Nest_-views_from_the_trekking_path-_during_LGFC_-_Bhutan_2019_%28210%29.jpg" alt="Tiger's Nest Bhutan" />
            <div className="split-photo-label"><span>PARO</span><strong>Tiger’s Nest</strong></div>
          </div>

          <div className="split-dashboard-copy">
            <span className="section-code">WHY BHUTAN CENTER</span>
            <h2>ไม่ต้องรู้ทุกอย่าง<br/>ก่อนจะเริ่มวางทริป.</h2>
            <p>
              คุณแค่บอกวันที่ จำนวนคน และสิ่งที่อยากเห็น ทีมเราจะช่วยจัดการส่วนที่ซับซ้อน
              ตั้งแต่เที่ยวบิน เอกสาร ไปจนถึงเส้นทางและที่พัก
            </p>

            <div className="reason-list">
              <div><span>01</span><strong>เลือกวันเดินทางเอง</strong><p>Private Tour เริ่มได้ตั้งแต่ 2 ท่าน ไม่ต้องรอกรุ๊ปใหญ่</p></div>
              <div><span>02</span><strong>ราคาอยู่จุดเดียว</strong><p>เชื่อมกับ Bhutan Pricing เพื่อให้ราคาแพ็กเกจหน้าเว็บอัปเดตจากหลังบ้าน</p></div>
              <div><span>03</span><strong>SEO เดิมยังอยู่</strong><p>รักษา URL และโครง SEO สำคัญของเว็บไซต์เดิมเพื่อลดความเสี่ยงต่อ Ranking</p></div>
            </div>

            <Link href="/bhutan" className="link-arrow">รู้จัก Bhutan Center <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section planner-dashboard-section">
        <div className="page-container planner-dashboard">
          <div className="planner-dashboard-copy">
            <span className="section-code section-code--light">PLAN YOUR TRIP</span>
            <h2>ส่งวันเดินทางมา.<br/>ที่เหลือให้เราจัดการ.</h2>
            <p>กรอกข้อมูลสั้น ๆ เพื่อให้ทีมช่วยเลือกแพ็กเกจและคำนวณราคาตามวันเดินทางจริง</p>
            <div className="planner-badges">
              <span>Private 2+</span><span>3–5 Star</span><span>Economy / Business</span><span>Quotation</span>
            </div>
          </div>
          <BookingForm compact />
        </div>
      </section>
    </>
  );
}
