import PackageDashboard from "@/components/PackageDashboard";
import BhutanCityExplorer from "@/components/BhutanCityExplorer";
import { getPublicPackages } from "@/lib/pricing-source";
import { metadataForPath } from "@/lib/seo-config";
import { loadSeoState } from "@/lib/seo-store";

export async function generateMetadata() {
  const seo = await loadSeoState();
  return metadataForPath("/packages", seo.pages);
}

export default async function PackagesPage() {
  const packages = await getPublicPackages();

  return (
    <>
      <section className="inner-hero-dashboard">
        <div className="page-container">
          <div className="inner-hero-top"><span>BHUTAN CENTER / PACKAGES</span><span>PRIVATE JOURNEYS</span></div>
          <div className="inner-hero-grid">
            <h1>เลือกจำนวนวัน.<br/><span>แล้วดูเส้นทางบนแผนที่.</span></h1>
            <p>ทุกแพ็กเกจสามารถปรับวันเดินทาง โรงแรม และกิจกรรมได้ ราคาเริ่มต้นจะเชื่อมกับ Bhutan Pricing เพื่ออัปเดตจากหลังบ้านจุดเดียว</p>
          </div>
        </div>
      </section>

      <section className="section section-packages-dashboard">
        <div className="page-container">
          <PackageDashboard packages={packages} />
        </div>
      </section>

      <section className="section section-map section-map--soft">
        <div className="page-container">
          <BhutanCityExplorer title="4 เมืองหลักที่อยู่ในแพ็กเกจของเรา" />
        </div>
      </section>
    </>
  );
}
