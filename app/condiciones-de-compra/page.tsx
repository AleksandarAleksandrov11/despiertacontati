import type { Metadata } from "next";
import { condicionesCompra } from "@/content/legal";
import { LegalPage } from "@/components/sections/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: condicionesCompra.metaTitle,
  description: condicionesCompra.metaDescription,
  defaultImage: true,
  path: "/condiciones-de-compra",
});

export default function CondicionesCompraPage() {
  return <LegalPage document={condicionesCompra} />;
}
