import Link from "next/link";
import PackageCard from "@/components/PackageCard";
import SectionIntro from "@/components/SectionIntro";
import BookingForm from "@/components/BookingForm";
import { Icon } from "@/components/Icons";
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
      <section className="hero">
        <div className="container hero-content">
          <span className="hero-kicker">Bhutan Specialist Since 2013</span>
          <h1>Bhutan, <em>made personal.</em></h1>
          <p>เที่ยวภูฏานในแบบของคุณ ดูแลครบตั้งแต่เที่ยวบิน วีซ่า SDF ที่พัก ไกด์ รถ และโปรแกรมส่วนตัว โดยทีมที่เชี่ยวชาญเส้นทางภูฏานมากกว่า 10 ปี</p>
          <div className="hero-actions">
            <Link href="/packagetour-bhutan-new" className="button button--gold">ดูแพ็กเกจภูฏาน <span>→</span></Link>
            <Link href="/packagetours-bhutan-booking" className="button button--outline-light">วางแผนทริปกับเรา</Link>
          </div>
        </div>
        <div className="hero-facts">
          <div className="hero-fact"><strong>2013</strong><span>ดูแลเส้นทางภูฏานตั้งแต่</span></div>
          <div className="hero-fact"><strong>2+</strong><span>Private trip เริ่ม 2 ท่าน</span></div>
          <div className="hero-fact"><strong>11/07261</strong><span>ใบอนุญาตนำเที่ยว</span></div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-grid">
          <div className="trust-item"><Icon name="shield"/><div><strong>Bhutan Specialist</strong><small>ประสบการณ์กว่า 10 ปี</small></div></div>
          <div className="trust-item"><Icon name="route"/><div><strong>Private & Flexible</strong><small>เลือกวันและปรับทริปได้</small></div></div>
          <div className="trust-item"><Icon name="plane"/><div><strong>Bhutan Airlines</strong><small>ดูแลเที่ยวบินครบในที่เดียว</small></div></div>
          <div className="trust-item"><Icon name="calendar"/><div><strong>Year-round Journey</strong><small>วางแผนเดินทางได้ตลอดปี</small></div></div>
        </div>
      </section>

      <div className="container service-grid">
        <div className="service-card"><Icon name="visa"/><strong>Visa & SDF</strong><span>ดูแลเอกสารและขั้นตอนยื่นวีซ่าภูฏาน</span></div>
        <div className="service-card"><Icon name="plane"/><strong>Flight Booking</strong><span>จอง Bhutan Airlines และดูแลเที่ยวบิน</span></div>
        <div className="service-card"><Icon name="hotel"/><strong>Hotels</strong><span>คัดที่พักตามสไตล์และงบประมาณ</span></div>
        <div className="service-card"><Icon name="guide"/><strong>Private Guide</strong><span>ไกด์ท้องถิ่นดูแลตลอดการเดินทาง</span></div>
        <div className="service-card"><Icon name="car"/><strong>Private Transport</strong><span>รถส่วนตัวตามจำนวนผู้เดินทาง</span></div>
        <div className="service-card"><Icon name="route"/><strong>Tailor-made</strong><span>ออกแบบเส้นทางใหม่ให้เหมาะกับคุณ</span></div>
      </div>

      <section className="section">
        <div className="container">
          <SectionIntro eyebrow="Popular journeys" title="เลือกทริปที่เข้ากับเวลาของคุณ" body="ทุกแพ็กเกจเป็น Private Tour และสามารถปรับวันเดินทาง ที่พัก หรือรายละเอียดบางส่วนได้ ราคาในเว็บไซต์สามารถเชื่อมจาก Bhutan Pricing เพื่ออัปเดตจากหลังบ้านจุดเดียว" />
          <div className="packages-grid">
            {packages.slice(0,3).map((item) => <PackageCard item={item} key={item.slug}/>) }
          </div>
          <div style={{marginTop:32}}><Link href="/packagetour-bhutan-new" className="text-link">ดูแพ็กเกจทั้งหมด <span>→</span></Link></div>
        </div>
      </section>

      <section className="split section--white">
        <div className="split-media"><img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Punakha_dzong.jpg" alt="Punakha Dzong Bhutan" /></div>
        <div className="split-content">
          <span className="eyebrow">Why Bhutan Center</span>
          <h2>เราไม่ได้ขายแค่ทัวร์<br/>แต่ดูแลทั้งการเดินทาง</h2>
          <p>ตั้งแต่เปิดตัวในปี 2013 Bhutan Center ให้บริการเส้นทางภูฏานโดยเน้นกลุ่มขนาดเล็กและทริปส่วนตัว ลูกค้าสามารถกำหนดวันเดินทางเอง และให้ทีมช่วยออกแบบรายละเอียดให้เหมาะกับจังหวะการเดินทางของแต่ละคน</p>
          <p>เราให้ความสำคัญกับความชัดเจนเรื่องราคา เอกสาร และขั้นตอนก่อนเดินทาง พร้อมแนวทาง Paperless และการท่องเที่ยวอย่างรับผิดชอบ</p>
          <Link href="/bhutan" className="button button--outline">รู้จัก Bhutan Center</Link>
        </div>
      </section>

      <section className="section section--forest">
        <div className="container">
          <SectionIntro eyebrow="The Bhutan Center difference" title="Three things we care about" body="ความง่าย ความมั่นใจ และประสบการณ์ที่เหมาะกับผู้เดินทางจริง" />
          <div className="value-grid">
            <div className="value-card"><span className="value-number">01</span><h3>Private & Flexible</h3><p>ไม่ต้องรอกรุ๊ปใหญ่ เลือกวันเดินทาง ปรับโรงแรม หรือเพิ่มกิจกรรมให้เข้ากับสไตล์ของคุณได้</p></div>
            <div className="value-card"><span className="value-number">02</span><h3>Everything in one place</h3><p>เที่ยวบิน วีซ่า SDF โรงแรม ไกด์ รถ และโปรแกรมอยู่ในทีมเดียว ลดการประสานงานหลายจุด</p></div>
            <div className="value-card"><span className="value-number">03</span><h3>Bhutan Expertise</h3><p>ทีมงานทำงานบนเส้นทางภูฏานมากกว่า 10 ปี พร้อมเครือข่ายท้องถิ่นและการดูแลก่อน–ระหว่างเดินทาง</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro eyebrow="Discover Bhutan" title="Three places. One unforgettable journey." body="เมืองหลักที่อยู่ในแพ็กเกจยอดนิยม และเป็นจุดเริ่มต้นของการทำความรู้จักราชอาณาจักรบนเทือกเขาหิมาลัย" />
          <div className="destination-grid">
            <Link href="/bhutan#paro" className="destination-card"><img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Paro_Taktsang%2C_Taktsang_Palphug_Monastery%2C_Tiger%27s_Nest_-views_from_the_trekking_path-_during_LGFC_-_Bhutan_2019_%28210%29.jpg" alt="Paro Bhutan"/><div className="destination-caption"><small>Paro</small><h3>พาโร</h3><p>หุบเขาแห่งวัดทักซัง สนามบินนานาชาติ และสถาปัตยกรรมภูฏาน</p></div></Link>
            <Link href="/bhutan#punakha" className="destination-card"><img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Punakha_dzong.jpg" alt="Punakha Bhutan"/><div className="destination-caption"><small>Punakha</small><h3>พูนาคา</h3><p>อดีตเมืองหลวงและหนึ่งในซองที่งดงามที่สุด</p></div></Link>
            <Link href="/bhutan#thimphu" className="destination-card"><img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Tashichho_Dzong%2C_Bhutan_19.jpg" alt="Bhutan Himalaya"/><div className="destination-caption"><small>Thimphu</small><h3>ทิมพู</h3><p>เมืองหลวงที่ผสานชีวิตร่วมสมัยเข้ากับประเพณีได้อย่างเป็นธรรมชาติ</p></div></Link>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container booking-panel">
          <div className="booking-copy">
            <span className="eyebrow">Plan your Bhutan</span>
            <h2>เริ่มจากวันเดินทางของคุณ</h2>
            <p>บอกเราเพียงช่วงวัน จำนวนคน และสิ่งที่อยากได้ ทีมงานจะช่วยเลือกโปรแกรมและคำนวณราคาให้เหมาะกับทริปจริง</p>
            <ul><li>Private tour เริ่มได้ตั้งแต่ 2 ท่าน</li><li>ปรับโรงแรมและกิจกรรมเสริมได้</li><li>ดูแลตั๋ว Bhutan Airlines + Visa + SDF</li><li>รับใบเสนอราคาเป็นลายลักษณ์อักษร</li></ul>
          </div>
          <BookingForm compact />
        </div>
      </section>
    </>
  );
}
