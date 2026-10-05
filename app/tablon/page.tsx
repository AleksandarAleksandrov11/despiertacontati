import type { Metadata } from "next";
import { tablonPage } from "@/content/paginas";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { AnuncioCard } from "@/components/sections/anuncio-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { eventJsonLd, getActiveAnuncios } from "@/lib/anuncios";
import { breadcrumbJsonLd, businessId, pageMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappHref } from "@/lib/utils";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: "Grupos de meditación y cursos de Reiki | Despierta con Tati",
  description:
    "Próximos grupos de meditación online y en Valencia, cursos de Reiki y meditaciones grabadas de Despierta con Tati. Apúntate o pide información sin compromiso.",
  path: "/tablon",
});

export default function TablonPage() {
  const anuncios = getActiveAnuncios();
  const events = anuncios
    .filter((anuncio) => anuncio.date)
    .map((anuncio) => eventJsonLd(anuncio, absoluteUrl("/tablon"), businessId, site.location.locality));

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Tablón", path: "/tablon" }]), ...events]} />
      <PageHeader eyebrow={tablonPage.eyebrow} title={tablonPage.title} subtitle={tablonPage.subtitle} image={tablonPage.image} tone="rosa" blobs="b" />
      <Section tone="crema" labelledBy="anuncios">
        <h2 id="anuncios" className="sr-only">
          {tablonPage.subtitle}
        </h2>
        {anuncios.length > 0 ? (
          <RevealGroup as="ul" className="grid gap-5 md:grid-cols-2">
            {anuncios.map((anuncio) => (
              <RevealItem as="li" key={anuncio.id}>
                <AnuncioCard anuncio={anuncio} />
              </RevealItem>
            ))}
          </RevealGroup>
        ) : (
          <Reveal className="mx-auto max-w-xl rounded-[2rem] border border-dashed border-ciruela/20 px-8 py-16 text-center">
            <div aria-hidden className="mx-auto mb-8 size-16 rounded-full bg-[radial-gradient(circle_at_35%_30%,#fbf7f2,#f1ecf6_60%,#e4d6ee)] animate-drift" />
            <p className="text-h3">{tablonPage.empty.title}</p>
            <p className="mt-3 text-ink-soft">{tablonPage.empty.text}</p>
            <div className="mt-8 flex justify-center">
              <Button href={whatsappHref()} variant="secondary" icon={<WhatsappIcon size={18} />}>
                {site.cta.whatsapp}
              </Button>
            </div>
          </Reveal>
        )}
      </Section>
      <CtaBlock tone="lavanda" />
    </>
  );
}
