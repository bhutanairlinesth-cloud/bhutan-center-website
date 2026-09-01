import BookingForm from "@/components/BookingForm";
import { metadataForPath } from "@/lib/seo-config";
import { loadSeoState } from "@/lib/seo-store";

export async function generateMetadata() {
  const seo = await loadSeoState();
  return metadataForPath("/booking", seo.pages);
}

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ package?: string }> }) {
  const query = await searchParams;
  return (
    <>
      <section className="inner-hero-dashboard inner-hero-dashboard--booking">
        <div className="page-container">
          <div className="inner-hero-top"><span>BHUTAN CENTER / PLAN</span><span>PRIVATE JOURNEY</span></div>
          <div className="inner-hero-grid">
            <h1>บอกวันเดินทาง.<br/><span>เราออกแบบที่เหลือ.</span></h1>
            <p>ไม่จำเป็นต้องรู้ว่าจะเลือกแพ็กเกจไหน กรอกวันที่ จำนวนคน และระดับโรงแรมที่ต้องการ แล้วทีมช่วยวางทางเลือกให้</p>
          </div>
        </div>
      </section>

      <section className="section booking-dashboard-section">
        <div className="page-container booking-dashboard">
          <div className="booking-dashboard-info">
            <span className="section-code">HOW IT WORKS</span>
            <h2>3 ขั้นตอน<br/>จากไอเดียสู่ใบเสนอราคา</h2>
            <div className="booking-steps">
              <div><span>01</span><strong>ส่งข้อมูลคร่าว ๆ</strong><p>วันที่ จำนวนคน และช่องทางติดต่อ</p></div>
              <div><span>02</span><strong>ทีมช่วยจัดเส้นทาง</strong><p>เลือกจำนวนวัน เมือง โรงแรม และเที่ยวบิน</p></div>
              <div><span>03</span><strong>รับใบเสนอราคา</strong><p>ราคาตามวันเดินทางจริง พร้อมเงื่อนไขชัดเจน</p></div>
            </div>
          </div>
          <BookingForm defaultPackage={query.package ?? ""}/>
        </div>
      </section>
    </>
  );
}
