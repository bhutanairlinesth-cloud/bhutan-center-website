import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatTHB } from "@/lib/packages";
import { getPublicPackage } from "@/lib/pricing-source";
import { packagePublicPath } from "@/lib/public-paths";
import { loadSeoState } from "@/lib/seo-store";
import { metadataForPath } from "@/lib/seo-config";
import BhutanCityExplorer from "@/components/BhutanCityExplorer";

type SearchParams = Promise<{ slug?: string | string[] }>;

function getSlug(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export async function generateMetadata(
  { searchParams }: { searchParams: SearchParams }
): Promise<Metadata> {
  const params = await searchParams;
  const slug = getSlug(params.slug);

  if (!slug) return { title: "แพ็กเกจภูฏาน | Bhutan Center", robots: { index: false, follow: false } };

  const item = await getPublicPackage(slug);
  if (!item) return { title: "แพ็กเกจภูฏาน | Bhutan Center" };

  const seo = await loadSeoState();
  const configured = metadataForPath(`/packages/${item.slug}`, seo.pages);
  const canonical = `https://www.bhutancenter.org${packagePublicPath(item.slug)}`;

  return {
    ...configured,
    title: configured.title || `${item.name} ${item.duration}`,
    description: configured.description || item.shortDescription,
    alternates: configured.alternates || { canonical },
    robots: configured.robots || { index: true, follow: true },
    openGraph: configured.openGraph || {
      title: `${item.name} ${item.duration} | Bhutan Center`,
      description: item.shortDescription,
      url: canonical,
      images: [{ url: item.image }],
    },
  };
}

export default async function PackageDetailPage(
  { searchParams }: { searchParams: SearchParams }
) {
  const params = await searchParams;
  const slug = getSlug(params.slug);
  if (!slug) notFound();

  const item = await getPublicPackage(slug);
  if (!item) notFound();

  return (
    <>
      <section className="package-hero-dashboard">
        <div className="package-hero-media">
          <img src={item.image} alt={item.name} />
          <div className="package-hero-shade"></div>
          <div className="package-photo-code"><span>BHUTAN / {item.days}D{item.nights}N</span><span>{item.cities.length} DESTINATIONS</span></div>
        </div>

        <div className="package-hero-info">
          <div className="package-hero-breadcrumb">PACKAGES / {item.name.toUpperCase()}</div>
          <span className="package-badge-dashboard">{item.badge}</span>
          <h1>{item.name}</h1>
          <p>{item.overview}</p>

          <div className="package-route-dashboard">
            {item.cities.map((city, index) => (
              <div key={city}><span>{String(index + 1).padStart(2, "0")}</span><strong>{city}</strong></div>
            ))}
          </div>

          <div className="package-price-dashboard">
            <div><span>ราคาเริ่มต้น</span><strong>฿{formatTHB(item.priceFrom)}</strong><small>/ ท่าน</small></div>
            <Link href={`/packagetours-bhutan-booking?package=${item.slug}`} className="primary-pill primary-pill--large">ขอใบเสนอราคา <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section package-overview-section">
        <div className="page-container package-overview-grid">
          <div className="package-overview-sticky">
            <span className="section-code">TRIP AT A GLANCE</span>
            <h2>{item.duration}</h2>
            <div className="overview-metrics">
              <div><span>DAYS</span><strong>{item.days}</strong></div>
              <div><span>NIGHTS</span><strong>{item.nights}</strong></div>
              <div><span>CITIES</span><strong>{item.cities.length}</strong></div>
            </div>
            <p>{item.shortDescription}</p>
          </div>

          <div className="package-highlights-dashboard">
            <span className="section-code">HIGHLIGHTS</span>
            {item.highlights.map((highlight, index) => (
              <article key={highlight}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{highlight}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-map section-map--package">
        <div className="page-container">
          <BhutanCityExplorer
            cityNames={item.cities}
            compact
            title={`เมืองที่คุณจะได้ไปใน ${item.name}`}
          />
        </div>
      </section>

      <section className="section itinerary-dashboard-section">
        <div className="page-container">
          <div className="section-heading-dashboard">
            <div><span className="section-code">DAY BY DAY</span><h2>โปรแกรมการเดินทาง.</h2></div>
            <p>อ่านภาพรวมแต่ละวันแบบสั้นก่อน แล้วค่อยเปิดรายละเอียดเมื่อคุณต้องการ</p>
          </div>

          <div className="itinerary-dashboard">
            {item.itinerary.map((day) => (
              <article key={day.day}>
                <div className="day-number">DAY {String(day.day).padStart(2, "0")}</div>
                <h3>{day.title}</h3>
                <p>{day.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section include-dashboard-section">
        <div className="page-container include-dashboard-grid">
          <div className="include-panel include-panel--yes">
            <div className="include-panel-head"><span>INCLUDED</span><strong>รวมในแพ็กเกจ</strong></div>
            {item.includes.map((x, i) => <div className="include-row" key={x}><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p><b>✓</b></div>)}
          </div>
          <div className="include-panel">
            <div className="include-panel-head"><span>NOT INCLUDED</span><strong>ไม่รวม</strong></div>
            {item.excludes.map((x, i) => <div className="include-row" key={x}><span>{String(i+1).padStart(2,"0")}</span><p>{x}</p><b>—</b></div>)}
          </div>
        </div>
      </section>

      <section className="section package-final-cta">
        <div className="page-container package-final-card">
          <div><span className="section-code section-code--light">READY TO GO?</span><h2>{item.name}<br/>ในวันที่คุณเลือกเอง.</h2></div>
          <div><p>{item.priceNote}</p><Link href={`/packagetours-bhutan-booking?package=${item.slug}`} className="footer-cta-button">ขอราคาตามวันเดินทาง <span>↗</span></Link></div>
        </div>
      </section>
    </>
  );
}
