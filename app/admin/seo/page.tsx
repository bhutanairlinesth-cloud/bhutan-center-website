import type { Metadata } from "next";
import SeoCenter from "@/components/admin/SeoCenter";
import { loadSeoState } from "@/lib/seo-store";

export const metadata: Metadata = {
  title: "SEO Center — Bhutan Center Admin",
  robots: { index: false, follow: false },
};

export default async function SeoAdminPage() {
  const state = await loadSeoState();
  return <SeoCenter initialState={state} />;
}
