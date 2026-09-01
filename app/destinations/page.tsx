import BhutanCityExplorer from "@/components/BhutanCityExplorer";
import { metadataForPath } from "@/lib/seo-config";
import { loadSeoState } from "@/lib/seo-store";

export async function generateMetadata() {
  const seo = await loadSeoState();
  return metadataForPath("/destinations", seo.pages);
}

export default function DestinationsPage() {
  return (
    <>
      <section className="inner-hero-dashboard inner-hero-dashboard--destinations">
        <div className="page-container">
          <div className="inner-hero-top"><span>BHUTAN CENTER / DESTINATIONS</span><span>4 CORE CITIES</span></div>
          <div className="inner-hero-grid">
            <h1>สำรวจภูฏาน<br/><span>ผ่าน 4 เมืองหลัก.</span></h1>
            <p>พาโร ทิมพู พูนาคา และกังเต คือแกนหลักของแพ็กเกจ Bhutan Center กดแต่ละเมืองเพื่อดูจุดเที่ยวและเข้าใจเส้นทางก่อนเลือกแพ็กเกจ</p>
          </div>
        </div>
      </section>

      <section className="section section-map">
        <div className="page-container"><BhutanCityExplorer /></div>
      </section>
    </>
  );
}
