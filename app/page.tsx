import Link from "next/link";
import PackageCard from "@/components/PackageCard";
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
      <section className="hero hero-modern">
        <div className="hero-image-layer" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />

        <div className="container hero-modern-grid">
          <div className="hero-content hero-content-modern">
            <div className="hero-kicker"><span>Bhutan Specialist</span><span>Since 2013</span></div>
            <h1>
              <span>Bhutan.</span>
              <em>Privately yours.</em>
            </h1>
            <p>
              ทริปภูฏานส่วนตัวที่เริ่มจากวันเดินทางของคุณ ไม่ใช่ตารางกรุ๊ปของเรา
              ดูแลครบตั้งแต่เที่ยวบิน วีซ่า SDF ที่พัก ไกด์ รถ ไปจนถึงรายละเอียดเล็ก ๆ ระหว่างทาง
            </p>
            <div className="hero-actions">
              <Link href="/packagetour-bhutan-new" className="button button--light">
                Explore journeys <span>↗</span>
              </Link>
              <Link href="/packagetours-bhutan-booking" className="button button--ghost-light">
                Plan my Bhutan
              </Link>
            </div>
          </div>

          <aside className="hero-journey-panel">
            <div className="journey-panel-head">
              <span>PLAN YOUR JOURNEY</span>
              <span>01 — 03</span>
            </div>
            <h2>เลือกจำนวนวันที่เหมาะกับคุณ</h2>
            <div className="journey-options">
              {packages.slice(0,3).map((item) => (
                <Link href={`/packages/${item.slug}`} className="journey-option" key={item.slug}>
                  <div>
                    <span>{item.duration}</span>
                    <strong>{item.name}</strong>
                  </div>
                  <span className="journey-option-arrow">↗</span>
                </Link>
              ))}
            </div>
            <Link href="/packagetours-bhutan-booking" className="journey-panel-bottom">
              ยังไม่แน่ใจ? ให้ทีมช่วยออกแบบทริป <span>→</span>
            </Link>
          </aside>
        </div>

        <div className="hero-bottomline">
          <div className="container hero-bottomline-inner">
            <div><strong>Private from 2</strong><span>เริ่มเดินทางได้ตั้งแต่ 2 ท่าน</span></div>
            <div><strong>Bhutan Airlines</strong><span>ดูแลเที่ยวบินและที่นั่ง</span></div>
            <div><strong>Licensed</strong><span>ใบอนุญาต 11/07261</span></div>
            <div className="hero-scroll">Scroll to discover <span>↓</span></div>
          </div>
        </div>
      </section>

      <section className="capability-section">
        <div className="container capability-rail">
          <div className="capability-label">
            <span>One team.</span>
            <strong>Everything Bhutan.</strong>
          </div>
          <div className="capability-list">
            <div><Icon name="plane"/><span>Flight</span></div>
            <div><Icon name="visa"/><span>Visa + SDF</span></div>
            <div><Icon name="hotel"/><span>Hotels</span></div>
            <div><Icon name="guide"/><span>Private Guide</span></div>
            <div><Icon name="car"/><span>Transport</span></div>
            <div><Icon name="route"/><span>Tailor-made</span></div>
          </div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="container">
          <div className="modern-section-head">
            <div>
              <span className="eyebrow">Curated journeys</span>
              <h2>Choose your<br/>pace in Bhutan.</h2>
            </div>
            <div className="modern-section-copy">
              <p>
                เริ่มจากทริปยอดนิยม แล้วปรับวันเดินทาง โรงแรม กิจกรรม และจังหวะของโปรแกรมให้เป็นของคุณ
                ราคาหน้าเว็บไซต์สามารถอัปเดตจาก Bhutan Pricing ได้จากจุดเดียว
              </p>
              <Link href="/packagetour-bhutan-new" className="text-link">View all journeys <span>↗</span></Link>
            </div>
          </div>

          <div className="packages-grid modern-packages-grid">
            {packages.slice(0,3).map((item, index) => (
              <div className={`package-slot package-slot-${index + 1}`} key={item.slug}>
                <PackageCard item={item} featured={index === 0}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="container story-grid">
          <div className="story-image story-image-main">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Punakha_dzong.jpg" alt="Punakha Dzong in Bhutan" />
            <div className="story-image-caption"><span>27.5921° N</span><strong>Punakha</strong></div>
          </div>

          <div className="story-copy">
            <span className="eyebrow">Bhutan, without the rush</span>
            <h2>ทริปที่ออกแบบรอบตัวคุณ ไม่ใช่ให้คุณวิ่งตามทริป</h2>
            <p>
              Bhutan Center เชี่ยวชาญเส้นทางภูฏานมาตั้งแต่ปี 2013 เราเน้นกลุ่มเล็กและ Private Tour
              เพื่อให้ทุกวันมีพื้นที่สำหรับการเดินทางจริง ๆ ทั้งการหยุดถ่ายรูป เปลี่ยนจังหวะ หรือเลือกที่พักให้ตรงกับสไตล์ของคุณ
            </p>
            <Link href="/bhutan" className="button button--dark">Our approach <span>↗</span></Link>
          </div>

          <div className="story-stat story-stat-a">
            <span>10+</span>
            <p>years of Bhutan expertise</p>
          </div>
          <div className="story-stat story-stat-b">
            <span>2+</span>
            <p>guests to start a private trip</p>
          </div>
          <div className="story-quote">
            <p>“Everything in one place — flight, visa, SDF, hotel, guide and transport.”</p>
            <span>BHUTAN CENTER</span>
          </div>
        </div>
      </section>

      <section className="section section--ink experience-section">
        <div className="container">
          <div className="modern-section-head modern-section-head--light">
            <div>
              <span className="eyebrow">Why travel with us</span>
              <h2>Less friction.<br/>More Bhutan.</h2>
            </div>
            <div className="modern-section-copy">
              <p>เราเก็บเรื่องยากไว้หลังบ้าน เพื่อให้สิ่งที่ลูกค้าเห็นมีแค่สิ่งที่จำเป็นต่อการตัดสินใจและการเดินทาง</p>
            </div>
          </div>

          <div className="experience-grid">
            <div className="experience-card">
              <span className="experience-number">01</span>
              <Icon name="route"/>
              <h3>Private & Flexible</h3>
              <p>เลือกวันเอง ปรับโรงแรม เพิ่มกิจกรรม และจัดจังหวะเดินทางให้เหมาะกับคนในทริป</p>
            </div>
            <div className="experience-card">
              <span className="experience-number">02</span>
              <Icon name="shield"/>
              <h3>One point of care</h3>
              <p>ตั๋ว วีซ่า SDF รถ โรงแรม และไกด์อยู่ใน flow เดียว ลดการตามงานหลายช่องทาง</p>
            </div>
            <div className="experience-card experience-card--accent">
              <span className="experience-number">03</span>
              <Icon name="plane"/>
              <h3>Bhutan expertise</h3>
              <p>ทีมที่ทำงานกับภูฏานโดยตรงและเข้าใจข้อจำกัดของเส้นทาง เอกสาร และฤดูกาลจริง</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section discover-section">
        <div className="container">
          <div className="modern-section-head">
            <div>
              <span className="eyebrow">Discover Bhutan</span>
              <h2>Three places.<br/>Three moods.</h2>
            </div>
            <div className="modern-section-copy">
              <p>พาโร ทิมพู และพูนาคา คือสามเมืองหลักที่ทำให้ทริปแรกของภูฏานครบทั้งธรรมชาติ วัฒนธรรม และสถาปัตยกรรม</p>
              <Link href="/bhutan-attractions" className="text-link">Explore Bhutan <span>↗</span></Link>
            </div>
          </div>

          <div className="destination-grid modern-destination-grid">
            <Link href="/bhutan#paro" className="destination-card destination-card--large">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Paro_Taktsang%2C_Taktsang_Palphug_Monastery%2C_Tiger%27s_Nest_-views_from_the_trekking_path-_during_LGFC_-_Bhutan_2019_%28210%29.jpg" alt="Paro Taktsang Tiger's Nest Bhutan"/>
              <div className="destination-index">01</div>
              <div className="destination-caption"><small>PARO</small><h3>พาโร</h3><p>Tiger’s Nest · Valley · Heritage</p></div>
            </Link>

            <Link href="/bhutan#thimphu" className="destination-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Tashichho_Dzong%2C_Bhutan_19.jpg" alt="Thimphu Bhutan"/>
              <div className="destination-index">02</div>
              <div className="destination-caption"><small>THIMPHU</small><h3>ทิมพู</h3><p>Capital · Culture · Contemporary Bhutan</p></div>
            </Link>

            <Link href="/bhutan#punakha" className="destination-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Punakha_dzong.jpg" alt="Punakha Bhutan"/>
              <div className="destination-index">03</div>
              <div className="destination-caption"><small>PUNAKHA</small><h3>พูนาคา</h3><p>Dzong · Rivers · Warm valley</p></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section planner-section">
        <div className="container booking-panel modern-booking-panel">
          <div className="booking-copy">
            <span className="eyebrow">Start with your dates</span>
            <h2>Tell us when.<br/>We’ll shape the rest.</h2>
            <p>
              ส่งวันที่ จำนวนคน และช่องทางติดต่อมาให้เรา ทีมจะช่วยแนะนำจำนวนวัน โปรแกรม
              และราคาให้เหมาะกับทริปจริง
            </p>
            <div className="booking-points">
              <span>Private from 2 guests</span>
              <span>Hotel 3–5 star</span>
              <span>Economy / Business</span>
              <span>Quotation support</span>
            </div>
          </div>
          <BookingForm compact />
        </div>
      </section>
    </>
  );
}
