import type { Metadata } from "next";
import { sobreMi } from "@/content/paginas";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { Manifiesto } from "@/components/sections/sobre-mi/manifiesto";
import { Recorrido } from "@/components/sections/sobre-mi/recorrido";
import { Herramientas } from "@/components/sections/sobre-mi/herramientas";
import { Cifras } from "@/components/sections/sobre-mi/cifras";
import { Galeria } from "@/components/sections/sobre-mi/galeria";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
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
      <Galeria eyebrow={page.galeria.eyebrow} title={page.galeria.title} items={page.galeria.items} />
      <Herramientas eyebrow={page.herramientas.eyebrow} title={page.herramientas.title} items={page.herramientas.items} />
      <Section tone="rosa" labelledBy="lema">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="mx-auto w-full max-w-xs lg:col-span-4 lg:max-w-none">
            <SiteImage
              name={page.lema.image}
              shape="circle"
              sizes="(min-width: 1024px) 28vw, 320px"
              className="aspect-square shadow-[0_40px_80px_-40px_rgba(63,46,58,0.45)]"
            />
          </Reveal>
          <Reveal className="text-center lg:col-span-8 lg:text-left" delay={0.1}>
            <h2 id="lema" className="text-h1">
              {page.lema.lead} <span className="script-accent text-[1.3em] text-rosa-deep">{page.lema.script}</span>.
            </h2>
          </Reveal>
        </div>
      </Section>
      <Cifras sealAlt={page.sello.alt} title={page.cifrasTitle} />
      <CtaBlock tone="salvia" />
    </>
  );
}
