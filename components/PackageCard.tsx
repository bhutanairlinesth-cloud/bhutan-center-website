import Link from "next/link";
import { formatTHB, TourPackage } from "@/lib/packages";
import { packagePublicPath } from "@/lib/public-paths";

export default function PackageCard({ item, featured = false }: { item: TourPackage; featured?: boolean }) {
  return (
    <article className={`package-card ${featured ? "package-card--featured" : ""}`}>
      <Link href={packagePublicPath(item.slug)} className="package-card__image-wrap">
        <img className="package-card__image" src={item.image} alt={`${item.name} Bhutan tour`} />
        <span className="package-card__badge">{item.badge}</span>
      </Link>
      <div className="package-card__body">
        <div className="package-card__meta"><span>{item.duration}</span><span>{item.cities.join(" · ")}</span></div>
        <h3><Link href={packagePublicPath(item.slug)}>{item.name}</Link></h3>
        <p>{item.shortDescription}</p>
        <div className="package-card__footer">
          <div><small>เริ่มต้น</small><strong>฿{formatTHB(item.priceFrom)}</strong><span>/ ท่าน</span></div>
          <Link href={packagePublicPath(item.slug)} className="text-link">ดูรายละเอียด <span>↗</span></Link>
        </div>
      </div>
    </article>
  );
}
