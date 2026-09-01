export default function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand-mark ${light ? "brand-mark--light" : ""}`} aria-label="Bhutan Center">
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 6c5 8 11 12 20 13-5 7-7 13-6 21-8-4-14-4-22 0 1-8-1-14-6-21 9-1 15-5 20-13Z" fill="none" stroke="currentColor" strokeWidth="2.2"/>
        <circle cx="32" cy="31" r="7" fill="none" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M32 13v11M32 38v13M14 31h11M39 31h11M20 19l7 7M37 36l8 8M44 19l-7 7M27 36l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
      <div>
        <strong>BHUTAN</strong>
        <span>CENTER</span>
      </div>
    </div>
  );
}
