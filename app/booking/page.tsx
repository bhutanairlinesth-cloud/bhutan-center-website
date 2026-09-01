import BookingForm from "@/components/BookingForm";
import { metadataForPath } from "@/lib/seo-config";
import { loadSeoState } from "@/lib/seo-store";

export async function generateMetadata() {
  const seo = await loadSeoState();
  return metadataForPath("/booking", seo.pages);
}

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ package?: string }> }){
  const query = await searchParams;
  return <>
    <section className="page-hero"><div className="container"><span className="breadcrumbs">Plan your journey</span><h1>Tell us your dates.<br/>We’ll shape the journey.</h1><p>กรอกข้อมูลคร่าว ๆ แล้วทีม Bhutan Center จะช่วยเลือกโปรแกรม คำนวณราคา และออกใบเสนอราคาตามวันเดินทางจริง</p></div></section>
    <section className="section"><div className="container booking-panel"><div className="booking-copy"><span className="eyebrow">Private Bhutan</span><h2>ออกแบบทริปของคุณ</h2><p>เหมาะทั้งลูกค้าที่เลือกแพ็กเกจแล้ว และลูกค้าที่ต้องการให้เราช่วยเริ่มออกแบบใหม่</p><ul><li>วันเดินทางและจำนวนผู้เดินทาง</li><li>ผู้ใหญ่ / เด็ก</li><li>ระดับโรงแรม</li><li>กิจกรรมเสริม</li><li>Economy / Business Class</li></ul></div><BookingForm defaultPackage={query.package ?? ""}/></div></section>
  </>;
}
