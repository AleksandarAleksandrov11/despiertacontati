import type { Metadata } from "next";
import { tarotPage } from "@/content/servicios";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { TarotCards } from "@/components/sections/servicios/tarot-cards";
import { FaqSection } from "@/components/sections/faq-section";
import { Disclaimer } from "@/components/sections/disclaimer";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { whatsappHref } from "@/lib/utils";

const description =
  "Tarot terapéutico en Valencia y online: un espejo para ver tu situación con claridad y decidir mejor. También registros akáshicos y Matriz del Destino con Tati.";

export const metadata: Metadata = pageMetadata({
  title: "Tarot terapéutico en Valencia y online | Despierta con Tati",
  description,
  path: "/servicios/tarot-terapeutico",
});

export default function TarotPage() {
  const page = tarotPage;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Servicios", path: "/servicios" },
            { name: "Tarot terapéutico", path: "/servicios/tarot-terapeutico" },
          ]),
          serviceJsonLd({
            name: "Tarot terapéutico en Valencia y online",
            description,
            path: "/servicios/tarot-terapeutico",
            serviceType: "Tarot terapéutico",
            offers: ["Tarot terapéutico", ...page.complementarios.items.map((item) => item.title)],
          }),
        ]}
      />
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} image={page.image} tone="crema">
        <Button href="/contacto?servicio=tarot" magnetic>
          {site.cta.primary.label}
        </Button>
        <Button href={whatsappHref(page.ctaWhatsapp)} variant="link">
          {site.cta.whatsapp}
        </Button>
      </PageHeader>

      <Section tone="rosa" labelledBy="dentro-fuera">
        <Reveal>
          <h2 id="dentro-fuera" className="text-h2">
            {page.dentroFuera.title}
          </h2>
        </Reveal>
        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2">
          {[page.dentroFuera.inside, page.dentroFuera.outside].map((item, index) => (
            <RevealItem key={item.label} className="rounded-[1.75rem] bg-crema/80 p-8 sm:p-10">
              <div aria-hidden className="relative mb-8 size-20">
                <span className="absolute inset-0 rounded-full border border-ciruela/20" />
                {index === 0 ? (
                  <span className="absolute inset-5 rounded-full bg-chakra-corazon/60" />
                ) : (
                  <span className="absolute -right-3 top-5 size-10 rounded-full bg-chakra-plexo/70" />
                )}
              </div>
              <h3 className="text-h3">{item.label}</h3>
              <p className="mt-3 text-lead text-ink-soft">{item.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="ciruela" labelledBy="ansiedad">
        <div aria-hidden className="absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dorado/20" />
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <h2 id="ansiedad" className="text-h2 text-crema">
            {page.ansiedad}
          </h2>
        </Reveal>
      </Section>

      <Section tone="lavanda" labelledBy="cartas-title">
        <Reveal>
          <SectionHeading eyebrow={page.cartas.eyebrow} title={page.cartas.title} id="cartas-title" align="center" />
        </Reveal>
        <TarotCards />
      </Section>

      <Section tone="crema" labelledBy="complementarios">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading eyebrow={page.complementarios.eyebrow} title={page.complementarios.title} id="complementarios" />
          </Reveal>
          <RevealGroup as="ul" className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
            {page.complementarios.items.map((item) => (
              <RevealItem as="li" key={item.title} className="border-t border-ciruela/15 pt-8">
                <h3 className="text-h2">{item.title}</h3>
                <p className="mt-4 text-ink-soft">{item.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section tone="salvia" labelledBy="tarot-instagram">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow mb-4">{page.instagram.eyebrow}</p>
            <h2 id="tarot-instagram" className="text-h2 italic">
              {page.instagram.title}
            </h2>
            <p className="mt-4 max-w-md text-ink-soft">{page.instagram.text}</p>
          </div>
          <Button href={site.social.tarot.url} variant="secondary" icon={<InstagramIcon size={18} />}>
            {page.instagram.cta}
          </Button>
        </Reveal>
      </Section>

      <FaqSection faqs={faqs.tarot} />
      <Disclaimer />
      <CtaBlock whatsappMessage={page.ctaWhatsapp} />
    </>
  );
}
