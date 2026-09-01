import PackageCard from "@/components/PackageCard";
import { getPublicPackages } from "@/lib/pricing-source";
import { metadataForPath } from "@/lib/seo-config";
import { loadSeoState } from "@/lib/seo-store";

export async function generateMetadata(){const seo=await loadSeoState();return metadataForPath("/packages",seo.pages)}

export default async function PackagesPage(){
  const packages=await getPublicPackages();
  return <>
    <section className="inner-hero"><div className="page-container inner-hero-grid"><div><span className="section-label">BHUTAN JOURNEYS</span><h1>เลือกทริปจาก<br/><em>เวลาที่คุณมี</em></h1></div><p>แพ็กเกจคือจุดเริ่มต้น ทุกโปรแกรมสามารถปรับวันเดินทาง โรงแรม กิจกรรม และรายละเอียดให้เหมาะกับผู้เดินทางได้</p></div></section>
    <section className="section"><div className="page-container"><div className="package-grid package-grid--all">{packages.map((item,index)=><PackageCard item={item} featured={index===1} key={item.slug}/>)}</div></div></section>
    <section className="section compare-section"><div className="page-container"><div className="center-heading"><span className="section-label">QUICK COMPARE</span><h2>เลือกแบบไหนเหมาะกับคุณ?</h2></div><div className="compare-table"><div className="compare-row compare-row--head"><span></span>{packages.map(p=><strong key={p.slug}>{p.days} วัน {p.nights} คืน</strong>)}</div><div className="compare-row"><span>เหมาะกับ</span>{packages.map(p=><p key={p.slug}>{p.audience}</p>)}</div><div className="compare-row"><span>เมือง</span>{packages.map(p=><p key={p.slug}>{p.cities.join(" · ")}</p>)}</div><div className="compare-row"><span>รูปแบบ</span>{packages.map(p=><p key={p.slug}>Private Tour</p>)}</div><div className="compare-row"><span>โรงแรม</span>{packages.map(p=><p key={p.slug}>{p.hotel}</p>)}</div></div></div></section>
  </>;
}
