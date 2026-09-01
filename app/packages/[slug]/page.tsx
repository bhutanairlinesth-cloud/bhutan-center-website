import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatTHB } from "@/lib/packages";
import { getPublicPackage, getPublicPackages } from "@/lib/pricing-source";
import { packagePublicPath } from "@/lib/public-paths";
import { loadSeoState } from "@/lib/seo-store";
import { metadataForPath } from "@/lib/seo-config";

export async function generateStaticParams() {
  const items = await getPublicPackages();
  return items.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params;
  const item = await getPublicPackage(slug);
  if (!item) return { title: "แพ็กเกจภูฏาน" };
  const seo = await loadSeoState();
  const configured = metadataForPath(`/packages/${item.slug}`, seo.pages);
  const canonical = `https://www.bhutancenter.org${packagePublicPath(item.slug)}`;
  return {
    ...configured,
    title: configured.title || `${item.name} ${item.duration}`,
    description: configured.description || item.shortDescription,
    alternates: configured.alternates || { canonical },
    robots: configured.robots || { index: true, follow: true },
    openGraph: configured.openGraph || { title: `${item.name} ${item.duration} | Bhutan Center`, description: item.shortDescription, url: canonical, images: [{ url: item.image }] },
  };
}

export default async function PackageDetailPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const item = await getPublicPackage(slug);
  if (!item) notFound();
  return <>
    <section className="package-detail-hero">
      <div className="package-detail-copy">
        <span className="eyebrow">{item.duration} · {item.badge}</span>
        <h1>{item.name}</h1>
        <p className="lead">{item.overview}</p>
        <div className="package-stats">
          <div className="package-stat"><span>Route</span><strong>{item.cities.join(" · ")}</strong></div>
          <div className="package-stat"><span>Airline</span><strong>{item.airline}</strong></div>
          <div className="package-stat"><span>Style</span><strong>Private Tour</strong></div>
        </div>
        <div className="price-box"><small>เริ่มต้น</small><strong>฿{formatTHB(item.priceFrom)}</strong><span>/ ท่าน</span></div>
        <div><Link href={`/packagetours-bhutan-booking?package=${item.slug}`} className="button button--gold">ขอใบเสนอราคา <span>→</span></Link></div>
      </div>
      <div className="package-detail-image"><img src={item.image} alt={item.name}/></div>
    </section>

    <section className="section"><div className="container detail-layout">
      <div>
        <section className="detail-section"><span className="eyebrow">Tour highlights</span><h2>สิ่งที่คุณจะได้สัมผัส</h2><ul className="highlight-list">{item.highlights.map(x => <li key={x}>{x}</li>)}</ul></section>
        <section className="detail-section"><span className="eyebrow">Itinerary</span><h2>โปรแกรมการเดินทาง</h2><div className="timeline">{item.itinerary.map(day => <div className="timeline-item" key={day.day}><div className="timeline-day">D{day.day}</div><div><h3>{day.title}</h3><p>{day.summary}</p></div></div>)}</div></section>
        <section className="detail-section"><span className="eyebrow">What’s included</span><h2>ราคารวมอะไรบ้าง</h2><div className="include-grid"><div><h3>รวมในแพ็กเกจ</h3><ul className="check-list">{item.includes.map(x=><li key={x}>{x}</li>)}</ul></div><div><h3>ไม่รวม</h3><ul className="cross-list">{item.excludes.map(x=><li key={x}>{x}</li>)}</ul></div></div></section>
        <section className="detail-section"><span className="eyebrow">Good to know</span><h2>ก่อนตัดสินใจ</h2><p>แพ็กเกจเป็นทัวร์ส่วนตัว สามารถเลือกวันเดินทางเองได้ ราคาอาจเปลี่ยนแปลงตามอัตราแลกเปลี่ยน ราคาตั๋วเครื่องบิน จำนวนผู้เดินทาง และประกาศจากหน่วยงานที่เกี่ยวข้อง รายการทัวร์อาจปรับตามความเหมาะสมโดยยึดประโยชน์และความปลอดภัยของผู้เดินทางเป็นหลัก</p><p>หนังสือเดินทางควรมีอายุเหลือไม่น้อยกว่า 6 เดือนนับจากวันเดินทาง และควรมีหน้าว่างสำหรับการเดินทางเพียงพอ</p></section>
      </div>
      <aside className="sticky-booking"><span className="eyebrow">Plan this trip</span><h3>{item.name}</h3><p>{item.priceNote}</p><div className="price-box"><strong>฿{formatTHB(item.priceFrom)}</strong><span>/ ท่าน</span></div><Link href={`/packagetours-bhutan-booking?package=${item.slug}`} className="button">ขอราคาตามวันเดินทาง</Link><a href={process.env.NEXT_PUBLIC_LINE_URL || "https://lin.ee/"} className="button button--outline">คุยกับเราทาง LINE</a><hr/><small>โรงแรม: {item.hotel}<br/>เส้นทาง: {item.cities.join(" · ")}</small></aside>
    </div></section>
  </>;
}
