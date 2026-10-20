import type { Metadata } from "next";
import { meditacionPage } from "@/content/servicios";
import { productosDe, tiendaPage } from "@/content/tienda";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { Respira } from "@/components/sections/respira";
import { GuiaBlock } from "@/components/sections/guia-block";
import { PriceTag } from "@/components/sections/tienda/price-tag";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { whatsappHref } from "@/lib/utils";

const description =
  "Clases de meditación en grupo online, meditaciones guiadas para descargar y una guía gratuita para empezar a meditar. Medita en lo cotidiano.";

export const metadata: Metadata = pageMetadata({
  title: "Clases de meditación online | Despierta con Tati",
  description,
  path: "/servicios/meditacion",
});

export default function MeditacionPage() {
  const page = meditacionPage;
  const packs = productosDe("meditaciones");
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Servicios", path: "/servicios" },
            { name: "Meditación", path: "/servicios/meditacion" },
          ]),
          serviceJsonLd({
            name: "Meditación online",
            description,
            path: "/servicios/meditacion",
            serviceType: "Meditación guiada",
            offers: ["Meditación grupal online", "Meditaciones guiadas para descargar"],
          }),
        ]}
      />
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} image={page.image} tone="lavanda" blobs="c">
        <Button href="#grupales" magnetic>
          {page.headerCta}
        </Button>
        <Button href="/tienda#meditaciones" variant="link">
          {page.grabadas.cta}
        </Button>
      </PageHeader>

      <Section tone="crema" labelledBy="filosofia">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="mx-auto w-full max-w-sm lg:order-2 lg:col-span-5 lg:max-w-none">
            <SiteImage
              name={page.filosofia.image}
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 384px, 90vw"
              className="aspect-[4/5]"
            />
          </div>
          <div className="lg:col-span-7">
            <h2 id="filosofia" className="text-h2">
              {page.filosofia.title}
            </h2>
            <p className="mt-6 max-w-xl text-lead text-ink-soft">{page.filosofia.text}</p>
          </div>
        </div>
      </Section>

      <Section tone="rosa" labelledBy="esponja">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <SiteImage
              name={page.esponja.image}
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 384px, 90vw"
              className="aspect-[4/5]"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">{page.esponja.eyebrow}</p>
            <h2 id="esponja" className="text-h1 italic">
              {page.esponja.title}
            </h2>
            <p className="mt-5 max-w-lg text-lead text-ink-soft">{page.esponja.text}</p>
            <ol className="mt-10 space-y-4">
              {page.esponja.steps.map((step, index) => (
                <li key={step} className="flex items-baseline gap-5 rounded-2xl bg-crema/70 px-6 py-5">
                  <span className="font-serif text-2xl italic text-rosa-deep">{index + 1}</span>
                  <span className="text-lead">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section tone="lavanda" id="grabadas" labelledBy="grabadas-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={page.grabadas.eyebrow} title={page.grabadas.title} text={page.grabadas.text} id="grabadas-title" />
            <div className="mt-10">
              <Button href="/tienda#meditaciones" magnetic>
                {page.grabadas.cta}
              </Button>
            </div>
          </div>
          <ul className="divide-y divide-ciruela/10 border-y border-ciruela/10 lg:col-span-7">
            {packs.map((pack) => (
              <li key={pack.slug} className="flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center">
                <div className="min-w-0">
                  <h3 className="font-serif text-[1.6rem] leading-tight">{pack.nombre}</h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {pack.formato}
                    {pack.duracionTotal ? ` · ${pack.duracionTotal}` : ""}
                    {pack.estado === "proximamente" ? ` · ${tiendaPage.card.soon}` : ""}
                  </p>
                </div>
                <PriceTag producto={pack} className="shrink-0 sm:text-right" />
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="crema" id="grupales" labelledBy="grupales-title" className="scroll-mt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:order-2 lg:col-span-6">
            <SiteImage name={page.grupales.image} sizes="(min-width: 1024px) 48vw, 90vw" className="aspect-[4/3]" />
          </div>
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={page.grupales.eyebrow} title={page.grupales.title} text={page.grupales.text} id="grupales-title" />
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href={whatsappHref(page.grupales.ctaWhatsapp)} icon={<WhatsappIcon size={18} />}>
                {page.grupales.cta}
              </Button>
              <Button href="/tablon" variant="link">
                {page.grupales.tablon}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <GuiaBlock tone="rosa" />
      <Respira />
      <FaqSection faqs={faqs.meditacion} />
      <CtaBlock whatsappMessage={page.ctaWhatsapp} primary={{ label: site.cta.primary.label, href: "/contacto?servicio=meditacion" }} />
    </>
  );
}
