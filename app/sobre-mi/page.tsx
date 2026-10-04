import type { Metadata } from "next";
import { sobreMi } from "@/content/paginas";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { Manifiesto } from "@/components/sections/sobre-mi/manifiesto";
import { Recorrido } from "@/components/sections/sobre-mi/recorrido";
import { Herramientas } from "@/components/sections/sobre-mi/herramientas";
import { Cifras } from "@/components/sections/sobre-mi/cifras";
import { PhotoMarquee } from "@/components/sections/photo-marquee";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { breadcrumbJsonLd, pageMetadata, personJsonLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tati, terapeuta holística en Valencia | Despierta con Tati",
  description:
    "Soy Tati, terapeuta holística en Valencia con más de 20 años de experiencia y profesora de Reiki desde 2006. Práctica y al grano, sin humo ni misticismo.",
  path: "/sobre-mi",
});

export default function SobreMiPage() {
  const page = sobreMi;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Sobre mí", path: "/sobre-mi" }]),
          { "@context": "https://schema.org", "@type": "ProfilePage", mainEntity: personJsonLd() },
        ]}
      />
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} image={page.image} tone="rosa" blobs="b">
        <p className="w-full max-w-lg text-lead text-ink-soft">{page.intro}</p>
        <Button href={site.cta.primary.href} magnetic>
          {site.cta.primary.label}
        </Button>
      </PageHeader>
      <Manifiesto lines={page.manifiesto} label={page.manifiestoLabel} />
      <Recorrido eyebrow={page.recorrido.eyebrow} title={page.recorrido.title} />
      <PhotoMarquee />
      <Herramientas eyebrow={page.herramientas.eyebrow} title={page.herramientas.title} items={page.herramientas.items} />
      <Section tone="rosa" labelledBy="lema">
        <Reveal className="mx-auto max-w-5xl text-center">
          <h2 id="lema" className="text-h1">
            {page.lema.lead} <span className="script-accent text-[1.3em] text-rosa-deep">{page.lema.script}</span>.
          </h2>
        </Reveal>
      </Section>
      <Cifras cifras={page.cifras} sealAlt={page.sello.alt} title={page.cifrasTitle} />
      <CtaBlock tone="salvia" />
    </>
  );
}
