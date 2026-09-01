export default function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand-mark ${light ? "brand-mark--light" : ""}`} aria-label="Bhutan Center">
      <img src="/images/bhutan-center-logo.png" alt="Bhutan Center" className="brand-mark__logo" />
    </div>
  );
}
