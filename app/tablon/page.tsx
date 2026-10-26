import type { Metadata } from "next";
import { tablonPage } from "@/content/paginas";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { AnuncioCard } from "@/components/sections/anuncio-card";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { CtaBlock } from "@/components/sections/cta-block";
import { BrandSymbol } from "@/components/ui/brand-symbol";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { eventJsonLd, getActiveAnuncios } from "@/lib/anuncios";
import { breadcrumbJsonLd, businessId, pageMetadata } from "@/lib/seo";
import { absoluteUrl, whatsappHref } from "@/lib/utils";

export const revalidate = 3600;

export const metadata: Metadata = pageMetadata({
  title: "Grupos de meditación y novedades | Despierta con Tati",
  description:
    "Próximos grupos de meditación online, la guía gratuita Tu primera pausa, novedades de la tienda y lo último de Despierta con Tati en Instagram.",
  path: "/tablon",
});

export default function TablonPage() {
  const anuncios = getActiveAnuncios();
  const events = anuncios
    .filter((anuncio) => anuncio.date)
    .map((anuncio) => eventJsonLd(anuncio, absoluteUrl("/tablon"), businessId));
  const instagram = tablonPage.instagram;

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Tablón", path: "/tablon" }]), ...events]} />
      <PageHeader
        eyebrow={tablonPage.eyebrow}
        title={tablonPage.title}
        subtitle={tablonPage.subtitle}
        tone="rosa"
        blobs="b"
        aside={<BrandSymbol size={360} className="h-auto w-full max-w-[16rem] animate-[spin_60s_linear_infinite] motion-reduce:animate-none sm:max-w-[20rem]" />}
      />
      <Section tone="crema" labelledBy="anuncios">
        <h2 id="anuncios" className="sr-only">
          {tablonPage.anunciosTitle}
        </h2>
        {anuncios.length > 0 ? (
          <ul className="grid gap-5 md:grid-cols-2">
            {anuncios.map((anuncio) => (
              <li key={anuncio.id}>
                <AnuncioCard anuncio={anuncio} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto max-w-xl rounded-[1.25rem] border border-dashed border-ciruela/20 px-8 py-16 text-center">
            <p className="text-h3">{tablonPage.empty.title}</p>
            <p className="mt-3 text-ink-soft">{tablonPage.empty.text}</p>
            <div className="mt-8 flex justify-center">
              <Button href={whatsappHref()} variant="secondary" icon={<WhatsappIcon size={18} />}>
                {site.cta.whatsapp}
              </Button>
            </div>
          </div>
        )}
      </Section>
      <Section tone="lavanda" id="instagram" labelledBy="instagram-title">
        <div>
          <SectionHeading eyebrow={instagram.eyebrow} title={instagram.title} text={instagram.text} id="instagram-title" />
        </div>
        <div className="mt-12">
          <InstagramFeed />
        </div>
      </Section>
      <CtaBlock tone="rosa" primary={site.cta.services} />
    </>
  );
}
