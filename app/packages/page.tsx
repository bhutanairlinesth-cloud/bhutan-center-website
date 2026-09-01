import PackageCard from "@/components/PackageCard";
import SectionIntro from "@/components/SectionIntro";
import { getPublicPackages } from "@/lib/pricing-source";
import { metadataForPath } from "@/lib/seo-config";
import { loadSeoState } from "@/lib/seo-store";

export async function generateMetadata() {
  const seo = await loadSeoState();
  return metadataForPath("/packages", seo.pages);
}

export default async function PackagesPage() {
  const packages = await getPublicPackages();
  return <>
    <section className="page-hero"><div className="container"><span className="breadcrumbs">Bhutan Center / Packages</span><h1>Private journeys,<br/>built around you.</h1><p>เลือกแพ็กเกจตามจำนวนวันที่เหมาะกับคุณ ทุกโปรแกรมสามารถปรับรายละเอียด วันเดินทาง โรงแรม และกิจกรรมได้ โดยราคาแสดงผลจากแหล่งข้อมูลกลางเมื่อเชื่อม Bhutan Pricing แล้ว</p></div></section>
    <section className="section"><div className="container">
      <SectionIntro eyebrow="Choose your journey" title="เที่ยว 4, 5 หรือ 6 วัน" body="ราคาเริ่มต้นเป็นข้อมูลสำหรับวางแผนเบื้องต้น ราคาจริงขึ้นอยู่กับวันเดินทาง จำนวนผู้เดินทาง เที่ยวบิน และตัวเลือกที่พัก" />
      <div className="packages-grid">{packages.map(item => <PackageCard item={item} key={item.slug}/>)}</div>
    </div></section>
    <section className="section section--white"><div className="container callout"><div><h2>ยังเลือกไม่ได้ว่าโปรแกรมไหนเหมาะ?</h2><p>ส่งวันเดินทางและจำนวนคนมาให้เรา ทีมงานช่วยเทียบแพ็กเกจให้ได้</p></div><a className="button button--gold" href="/packagetours-bhutan-booking">ให้เราช่วยเลือก <span>→</span></a></div></section>
  </>;
}
