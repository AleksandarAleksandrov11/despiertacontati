import type { Metadata } from "next";
import { tarotPage } from "@/content/servicios";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { CartaDelDia } from "@/components/sections/servicios/carta-del-dia";
import { TarotCards } from "@/components/sections/servicios/tarot-cards";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { TiltCard } from "@/components/ui/tilt-card";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const description =
  "Tarot terapéutico online: Crono Tarot, lecturas concretas en vídeo y PDF, sesiones en directo de 30 o 50 minutos y tu carta del día. Tarot Rider-Waite, para decidir tú.";

const accents = ["var(--color-chakra-plexo)", "var(--color-chakra-corazon)", "var(--color-chakra-tercer-ojo)"];

export const metadata: Metadata = pageMetadata({
  title: "Tarot terapéutico online | Despierta con Tati",
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
            name: "Tarot terapéutico online",
            description,
            path: "/servicios/tarot-terapeutico",
            serviceType: "Tarot terapéutico",
            offers: page.formatos.items.map((item) => item.title),
          }),
        ]}
      />
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} image={page.image} tone="crema">
        <Button href="/tienda#crono-tarot" magnetic>
          {page.shopCta}
        </Button>
        <Button href={site.social.tarot.url} variant="link" icon={<InstagramIcon size={18} />}>
          {site.social.tarot.label}
        </Button>
      </PageHeader>

      <Section tone="rosa" labelledBy="dentro-fuera">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SiteImage
              name={page.dentroFuera.image}
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="aspect-[4/3] lg:aspect-[4/5]"
            />
          </div>
          <div className="lg:col-span-7">
            <div>
              <h2 id="dentro-fuera" className="text-h2">
                {page.dentroFuera.title}
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[page.dentroFuera.inside, page.dentroFuera.outside].map((item, index) => (
                <div key={item.label} className="rounded-[1.25rem] bg-crema/80 p-7">
                  <div aria-hidden className="relative mb-6 size-14">
                    <span className="absolute inset-0 rounded-full border border-ciruela/20" />
                    {index === 0 ? (
                      <span className="absolute inset-3.5 rounded-full bg-chakra-corazon/60" />
                    ) : (
                      <span className="absolute -right-2 top-3.5 size-7 rounded-full bg-chakra-plexo/70" />
                    )}
                  </div>
                  <h3 className="text-h3">{item.label}</h3>
                  <p className="mt-3 text-ink-soft">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="ciruela" labelledBy="ansiedad">
        <div aria-hidden className="absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dorado/20" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 id="ansiedad" className="text-h2 text-crema">
            {page.ansiedad}
          </h2>
        </div>
      </Section>

      <Section tone="crema" labelledBy="formatos-tarot">
        <div>
          <SectionHeading eyebrow={page.formatos.eyebrow} title={page.formatos.title} text={page.formatos.note} id="formatos-tarot" />
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {page.formatos.items.map((item, index) => (
            <li key={item.title}>
              <TiltCard as="article" className="h-full" innerClassName="flex h-full flex-col p-7 sm:p-8">
                <span aria-hidden className="block h-1 w-12 rounded-full" style={{ backgroundColor: accents[index] }} />
                <h3 className="mt-8 text-h2">{item.title}</h3>
                <p className="mt-4 flex-1 text-ink-soft">{item.text}</p>
                <div className="mt-8">
                  <Button href={item.href} variant="link">
                    {page.formatos.link}
                  </Button>
                </div>
              </TiltCard>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="ciruela" id="carta-del-dia" labelledBy="carta-del-dia-title">
        <div className="mb-10 text-center sm:mb-14">
          <SectionHeading eyebrow={page.cartaDelDia.eyebrow} title={page.cartaDelDia.title} text={page.cartaDelDia.text} id="carta-del-dia-title" align="center" tone="dark" />
        </div>
        <CartaDelDia />
      </Section>

      <Section tone="lavanda" labelledBy="cartas-title">
        <div>
          <SectionHeading eyebrow={page.cartas.eyebrow} title={page.cartas.title} id="cartas-title" align="center" />
        </div>
        <TarotCards />
      </Section>

      <Section tone="salvia" labelledBy="tarot-instagram">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
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
        </div>
      </Section>

      <FaqSection faqs={faqs.tarot} />
      <CtaBlock title={page.cta.title} text={page.cta.text} whatsappMessage={page.ctaWhatsapp} primary={{ label: page.shopCta, href: "/tienda#crono-tarot" }} />
    </>
  );
}
