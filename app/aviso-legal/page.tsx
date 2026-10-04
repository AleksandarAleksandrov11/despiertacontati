import type { Metadata } from "next";
import { avisoLegal } from "@/content/legal";
import { LegalPage } from "@/components/sections/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: avisoLegal.metaTitle,
  description: avisoLegal.metaDescription,
  defaultImage: true,
  path: "/aviso-legal",
});

export default function AvisoLegalPage() {
  return <LegalPage document={avisoLegal} />;
}
