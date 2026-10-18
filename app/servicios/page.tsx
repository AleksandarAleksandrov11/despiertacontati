import type { Metadata } from "next";
import { bloques, serviciosPage } from "@/content/servicios";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { ServiceBlock } from "@/components/sections/servicios/service-block";
import { PorDonde } from "@/components/sections/servicios/por-donde";
import { Formatos } from "@/components/sections/servicios/formatos";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import type { SectionTone } from "@/components/ui/section";

export const metadata: Metadata = pageMetadata({
  title: "Terapias holísticas en Valencia y online | Despierta con Tati",
  description:
    "Reiki y terapias energéticas, limpieza energética de casas, meditación, tarot y autoconocimiento en Valencia y online. Primero calma, después claridad y decisión.",
  path: "/servicios",
});

const tones: SectionTone[] = ["rosa", "crema", "lavanda", "crema", "rosa"];

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Servicios", path: "/servicios" }]),
          serviceJsonLd({
            name: "Terapias holísticas en Valencia y online",
            description: site.description,
            path: "/servicios",
            serviceType: "Terapia holística",
            offers: bloques.flatMap((bloque) => bloque.includes),
          }),
        ]}
      />
      <PageHeader eyebrow={serviciosPage.eyebrow} title={serviciosPage.title} subtitle={serviciosPage.subtitle} image="piedrasChakras">
        <p className="w-full max-w-lg text-lead text-ink-soft">{serviciosPage.orden}</p>
        <Button href={`#${bloques[0].slug}`} variant="secondary">
          {serviciosPage.headerCta}
        </Button>
      </PageHeader>
      {bloques.map((bloque, index) => (
        <ServiceBlock key={bloque.slug} bloque={bloque} reverse={index % 2 === 1} tone={tones[index]} />
      ))}
      <PorDonde />
      <Formatos />
      <FaqSection faqs={faqs.servicios} tone="lavanda" />
      <CtaBlock />
    </>
  );
}
