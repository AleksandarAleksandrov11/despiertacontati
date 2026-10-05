import type { Metadata } from "next";
import { servicios, serviciosPage, sesionesIndividuales, clasesGrupales } from "@/content/servicios";
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
    "Reiki, meditación y tarot terapéutico en Valencia y online. Sesiones individuales, clases grupales, meditaciones grabadas y cursos de Reiki con Tati.",
  path: "/servicios",
});

const tones: SectionTone[] = ["rosa", "crema", "lavanda"];

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
            offers: [...sesionesIndividuales, ...clasesGrupales, "Meditaciones grabadas", "Cursos de Reiki"],
          }),
        ]}
      />
      <PageHeader eyebrow={serviciosPage.eyebrow} title={serviciosPage.title} subtitle={serviciosPage.subtitle} image="piedrasChakras">
        <Button href={site.cta.primary.href} magnetic>
          {site.cta.primary.label}
        </Button>
      </PageHeader>
      {servicios.map((servicio, index) => (
        <ServiceBlock key={servicio.slug} servicio={servicio} reverse={index % 2 === 1} tone={tones[index]} />
      ))}
      <PorDonde />
      <Formatos />
      <FaqSection faqs={faqs.servicios} tone="lavanda" />
      <CtaBlock />
    </>
  );
}
