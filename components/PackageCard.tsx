import Link from "next/link";
import { formatTHB, TourPackage } from "@/lib/packages";
import { packagePublicPath } from "@/lib/public-paths";

export default function PackageCard({ item, featured = false }: { item: TourPackage; featured?: boolean }) {
  return (
    <article className={`package-card ${featured ? "package-card--featured" : ""}`}>
      <Link href={packagePublicPath(item.slug)} className="package-card__image-wrap">
        <img className="package-card__image" src={item.image} alt={`${item.name} Bhutan tour`} />
        <div className="package-card__topline">
          <span className="package-card__badge">{item.badge}</span>
          <span className="package-card__duration">{item.duration}</span>
        </div>
        <span className="package-card__arrow" aria-hidden="true">↗</span>
      </Link>

      <div className="package-card__body">
        <div className="package-card__meta">
          <span>{item.cities.join(" · ")}</span>
          <span>Private Journey</span>
        </div>
        <h3><Link href={packagePublicPath(item.slug)}>{item.name}</Link></h3>
        <p>{item.shortDescription}</p>

        <div className="package-card__footer">
          <div className="package-card__price">
            <small>From</small>
            <strong>฿{formatTHB(item.priceFrom)}</strong>
            <span>/ person</span>
          </div>
          <Link href={packagePublicPath(item.slug)} className="text-link">
            Explore journey <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
