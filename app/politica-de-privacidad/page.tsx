import type { Metadata } from "next";
import { politicaPrivacidad } from "@/content/legal";
import { LegalPage } from "@/components/sections/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: politicaPrivacidad.metaTitle,
  description: politicaPrivacidad.metaDescription,
  defaultImage: true,
  path: "/politica-de-privacidad",
});

export default function PoliticaPrivacidadPage() {
  return <LegalPage document={politicaPrivacidad} />;
}
