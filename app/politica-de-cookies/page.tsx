import type { Metadata } from "next";
import { politicaCookies } from "@/content/legal";
import { LegalPage } from "@/components/sections/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: politicaCookies.metaTitle,
  description: politicaCookies.metaDescription,
  defaultImage: true,
  path: "/politica-de-cookies",
});

export default function PoliticaCookiesPage() {
  return <LegalPage document={politicaCookies} />;
}
