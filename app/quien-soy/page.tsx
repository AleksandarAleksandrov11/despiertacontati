import type { Metadata } from "next";
import { quienSoy } from "@/content/paginas";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { Manifiesto } from "@/components/sections/quien-soy/manifiesto";
import { Recorrido } from "@/components/sections/quien-soy/recorrido";
import { Herramientas } from "@/components/sections/quien-soy/herramientas";
import { Cifras } from "@/components/sections/quien-soy/cifras";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/ui/json-ld";
import { Section } from "@/components/ui/section";
import { breadcrumbJsonLd, pageMetadata, personJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Quién soy: Tati, terapeuta holística en Valencia | Despierta con Tati",
  description:
    "Soy Tati, terapeuta holística en Valencia con más de 20 años de experiencia y profesora de Reiki desde 2006. Práctica y al grano, para que vuelvas a elegir tú.",
  path: "/quien-soy",
});

export default function QuienSoyPage() {
  const page = quienSoy;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: page.eyebrow, path: "/quien-soy" }]),
          { "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: personJsonLd() },
        ]}
      />
      <PageHeader
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
        image={page.image}
        imageSize="sm"
        circle
        tone="rosa"
        blobs="b"
      >
        <div className="w-full max-w-xl space-y-4 text-lead text-ink-soft">
          <p>{page.intro}</p>
          <p>{page.idea}</p>
        </div>
      </PageHeader>
      <Manifiesto lines={page.manifiesto} label={page.manifiestoLabel} />
      <Section tone="rosa" labelledBy="lema">
        <div className="mx-auto max-w-4xl text-center">
          <span aria-hidden className="mx-auto mb-10 block h-16 w-px bg-gradient-to-b from-transparent to-dorado" />
          <h2 id="lema" className="text-h1">
            {page.lema.lead} <span className="script-accent text-[1.3em] text-rosa-deep">{page.lema.script}</span>.
          </h2>
        </div>
      </Section>
      <Recorrido eyebrow={page.recorrido.eyebrow} title={page.recorrido.title} />
      <Herramientas eyebrow={page.herramientas.eyebrow} title={page.herramientas.title} items={page.herramientas.items} />
      <Cifras title={page.cifrasTitle} />
      <CtaBlock title={page.cta.title} text={page.cta.text} tone="salvia" primary={site.cta.services} />
    </>
  );
}
