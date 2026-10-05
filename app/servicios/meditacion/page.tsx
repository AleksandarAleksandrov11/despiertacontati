import type { Metadata } from "next";
import { meditacionPage, clasesGrupales } from "@/content/servicios";
import { meditaciones, meditacionWhatsapp } from "@/content/meditaciones";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { Respira } from "@/components/sections/respira";
import { FaqSection } from "@/components/sections/faq-section";
import { Disclaimer } from "@/components/sections/disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { TiltCard } from "@/components/ui/tilt-card";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { whatsappHref } from "@/lib/utils";

const description =
  "Clases de meditación en grupo en Valencia y online, y meditaciones guiadas grabadas para la ansiedad, para dormir y para decidir. Medita en lo cotidiano.";

export const metadata: Metadata = pageMetadata({
  title: "Clases de meditación en Valencia y online | Despierta con Tati",
  description,
  path: "/servicios/meditacion",
});

export default function MeditacionPage() {
  const page = meditacionPage;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Servicios", path: "/servicios" },
            { name: "Meditación", path: "/servicios/meditacion" },
          ]),
          serviceJsonLd({
            name: "Meditación en Valencia y online",
            description,
            path: "/servicios/meditacion",
            serviceType: "Meditación guiada",
            offers: [...clasesGrupales, ...meditaciones.map((item) => `Meditación grabada: ${item.title}`)],
          }),
        ]}
      />
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} image={page.image} tone="lavanda" blobs="c">
        <Button href="/contacto?servicio=meditacion" magnetic>
          {site.cta.primary.label}
        </Button>
        <Button href="#grabadas" variant="link">
          {page.verGrabadas}
        </Button>
      </PageHeader>

      <Section tone="crema" labelledBy="filosofia">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 id="filosofia" className="text-h2">
            {page.filosofia.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lead text-ink-soft">{page.filosofia.text}</p>
        </Reveal>
      </Section>

      <Section tone="rosa" labelledBy="esponja">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
            <SiteImage
              name={page.esponja.image}
              shape="arch"
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 384px, 90vw"
              className="aspect-[4/5]"
            />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <p className="eyebrow mb-5">{page.esponja.eyebrow}</p>
            <h2 id="esponja" className="text-h1 italic">
              {page.esponja.title}
            </h2>
            <ol className="mt-10 space-y-4">
              {page.esponja.steps.map((step, index) => (
                <li key={step} className="flex items-baseline gap-5 rounded-2xl bg-crema/70 px-6 py-5">
                  <span className="font-serif text-2xl italic text-rosa-deep">{index + 1}</span>
                  <span className="text-lead">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section tone="lavanda" id="grabadas" labelledBy="grabadas-title">
        <Reveal>
          <SectionHeading eyebrow={page.grabadas.eyebrow} title={page.grabadas.title} text={page.grabadas.text} id="grabadas-title" />
        </Reveal>
        <RevealGroup as="ul" className="mt-14 grid gap-4 sm:grid-cols-2">
          {meditaciones.map((item) => (
            <RevealItem as="li" key={item.slug}>
              <TiltCard className="h-full" innerClassName="flex h-full flex-col p-7 sm:p-9">
                <p className="eyebrow flex items-center gap-2.5">
                  <span aria-hidden className="size-2 rounded-full" style={{ backgroundColor: item.accent }} />
                  {item.moment}
                </p>
                <h3 className="mt-6 text-h2">{item.title}</h3>
                <p className="mt-3 flex-1 text-ink-soft">{item.text}</p>
                <div className="mt-8">
                  <Button href={whatsappHref(meditacionWhatsapp(item.title))} variant="link">
                    {page.grabadasCta}
                  </Button>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="crema" labelledBy="grupales">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:order-2 lg:col-span-6">
            <SiteImage name={page.grupales.image} sizes="(min-width: 1024px) 48vw, 90vw" className="aspect-[4/3]" />
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <SectionHeading eyebrow={page.grupales.eyebrow} title={page.grupales.title} text={page.grupales.text} id="grupales" />
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href={whatsappHref(page.grupales.ctaWhatsapp)} icon={<WhatsappIcon size={18} />}>
                {page.grupales.cta}
              </Button>
              <Button href="/tablon" variant="link">
                {page.grupales.tablon}
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Respira />
      <FaqSection faqs={faqs.meditacion} />
      <Disclaimer />
      <CtaBlock whatsappMessage={page.ctaWhatsapp} />
    </>
  );
}
