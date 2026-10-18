import type { Metadata } from "next";
import { inicio } from "@/content/paginas";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { Hero } from "@/components/sections/home/hero";
import { TeSuena } from "@/components/sections/home/te-suena";
import { Metodo } from "@/components/sections/home/metodo";
import { Destacados } from "@/components/sections/home/destacados";
import { QuienSoyResumen } from "@/components/sections/home/quien-soy-resumen";
import { TiendaPreview } from "@/components/sections/home/tienda-preview";
import { TablonPreview } from "@/components/sections/home/tablon-preview";
import { TestimoniosHome } from "@/components/sections/home/testimonios-home";
import { KeywordMarquee } from "@/components/sections/keyword-marquee";
import { GuiaBlock } from "@/components/sections/guia-block";
import { Respira } from "@/components/sections/respira";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata, siteJsonLd } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = pageMetadata({
  title: "Reiki, meditación y tarot en Valencia y online | Despierta con Tati",
  description:
    "Tati, terapeuta holística en Valencia con más de 20 años de experiencia. Reiki, meditación, tarot y autoconocimiento. Recuerda quién eres y crea tu nueva vida.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={siteJsonLd()} />
      <Hero />
      <KeywordMarquee />
      <TeSuena />
      <Metodo />
      <Destacados />
      <GuiaBlock tone="rosa" />
      <Respira />
      <QuienSoyResumen />
      <TiendaPreview />
      <TablonPreview />
      <TestimoniosHome />
      <FaqSection eyebrow={inicio.faq.eyebrow} title={inicio.faq.title} faqs={faqs.inicio} />
      <CtaBlock title={inicio.cta.title} text={inicio.cta.text} primary={site.cta.services} />
    </>
  );
}
