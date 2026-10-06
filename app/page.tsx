import type { Metadata } from "next";
import { inicio } from "@/content/paginas";
import { faqs } from "@/content/faqs";
import { Hero } from "@/components/sections/home/hero";
import { TeSuena } from "@/components/sections/home/te-suena";
import { Metodo } from "@/components/sections/home/metodo";
import { Destacados } from "@/components/sections/home/destacados";
import { TablonPreview } from "@/components/sections/home/tablon-preview";
import { TestimoniosHome } from "@/components/sections/home/testimonios-home";
import { KeywordMarquee } from "@/components/sections/keyword-marquee";
import { PhotoMarquee } from "@/components/sections/photo-marquee";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBlock } from "@/components/sections/cta-block";
import { JsonLd } from "@/components/ui/json-ld";
import { pageMetadata, siteJsonLd } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = pageMetadata({
  title: "Reiki, meditación y tarot terapéutico en Valencia | Despierta con Tati",
  description:
    "Terapeuta holística en Valencia con más de 20 años de experiencia. Reiki, meditación y tarot terapéutico, presencial y online, para recuperar la calma.",
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
      <PhotoMarquee />
      <TablonPreview />
      <TestimoniosHome />
      <FaqSection eyebrow={inicio.faq.eyebrow} title={inicio.faq.title} faqs={faqs.inicio} />
      <CtaBlock />
    </>
  );
}
