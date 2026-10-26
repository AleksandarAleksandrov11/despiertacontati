import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { calculadoraFaqs, calculadoraHub, calculadoraIndividual, rutasCalculadora } from "@/content/calculadora";
import { getProducto } from "@/content/tienda";
import { CalculadoraIndividual } from "@/components/sections/calculadora/calculadora-individual";
import { HeroFallback, HeroHeading } from "@/components/sections/calculadora/hero-heading";
import { FaqSection } from "@/components/sections/faq-section";
import { BrandSymbol } from "@/components/ui/brand-symbol";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const description =
  "Calcula gratis tu Matriz del Destino con tu fecha de nacimiento: mira cómo se construye, descubre tu energía personal, tu centro, tu talento y tus propósitos, y descarga tu PDF.";

export const metadata: Metadata = pageMetadata({
  title: "Calcula tu Matriz del Destino gratis | Despierta con Tati",
  description,
  path: rutasCalculadora.individual,
});

export default function MatrizIndividualPage() {
  const copy = calculadoraIndividual;
  const producto = getProducto("analisis-matriz-del-destino");
  if (!producto) notFound();
  const heading = <HeroHeading eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />;
  const codigo = calculadoraHub.opciones[1]!;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Calculadoras", path: rutasCalculadora.hub },
          { name: "Matriz del Destino", path: rutasCalculadora.individual },
        ])}
      />
      <Suspense fallback={<HeroFallback heading={heading} campos={1} />}>
        <CalculadoraIndividual producto={producto} heading={heading} />
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
            <div className="rounded-[1.5rem] bg-rosa-deep p-8 text-crema sm:p-10">
              <BrandSymbol size={120} eager={false} className="h-auto w-24 animate-[spin_60s_linear_infinite] motion-reduce:animate-none" />
              <p className="eyebrow mt-6 text-crema">{codigo.tag}</p>
              <p className="mt-3 font-serif text-[2rem] leading-tight">{codigo.title}</p>
              <p className="mt-3 text-crema">{codigo.text}</p>
              <div className="mt-7">
                <Button href={rutasCalculadora.codigo} tone="dark">
                  {codigo.cta}
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
