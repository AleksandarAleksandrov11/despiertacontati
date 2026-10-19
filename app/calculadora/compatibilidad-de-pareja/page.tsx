import type { Metadata } from "next";
import { Suspense } from "react";
import { calculadoraFaqs, calculadoraHub, calculadoraPareja, rutasCalculadora } from "@/content/calculadora";
import { CalculadoraPareja } from "@/components/sections/calculadora/calculadora-pareja";
import { HeroFallback, HeroHeading } from "@/components/sections/calculadora/hero-heading";
import { Octograma } from "@/components/sections/calculadora/octograma";
import { FaqSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const description =
  "Calcula gratis la Matriz del Destino de tu pareja con vuestras dos fechas de nacimiento: la energía de vuestra relación, vuestros propósitos, el amor y el dinero en pareja, y vuestro PDF gratuito.";

export const metadata: Metadata = pageMetadata({
  title: "Matriz del Destino de pareja: compatibilidad gratis | Despierta con Tati",
  description,
  path: rutasCalculadora.pareja,
});

export default function MatrizParejaPage() {
  const copy = calculadoraPareja;
  const heading = <HeroHeading eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />;
  const individual = calculadoraHub.opciones[0]!;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Calculadoras", path: rutasCalculadora.hub },
          { name: "Compatibilidad de pareja", path: rutasCalculadora.pareja },
        ])}
      />
      <Suspense fallback={<HeroFallback heading={heading} campos={2} />}>
        <CalculadoraPareja heading={heading} />
      </Suspense>

      <Section tone="salvia" labelledBy="que-es-matriz">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={calculadoraHub.queEs.eyebrow} title={calculadoraHub.queEs.title} id="que-es-matriz" />
            {calculadoraHub.queEs.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 max-w-2xl text-lead text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[1.5rem] bg-ciruela p-8 text-crema sm:p-10">
              <Octograma className="w-28 text-crema" />
              <p className="eyebrow mt-6 text-crema">{individual.tag}</p>
              <p className="mt-3 font-serif text-[2rem] leading-tight">{individual.title}</p>
              <p className="mt-3 text-crema">{individual.text}</p>
              <div className="mt-7">
                <Button href={rutasCalculadora.individual} tone="dark">
                  {individual.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <FaqSection faqs={calculadoraFaqs} />
    </>
  );
}
