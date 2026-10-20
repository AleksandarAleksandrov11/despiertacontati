import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { rutasCalculadora } from "@/content/calculadora";
import { codigoFaqs, codigoPersonal, creditos } from "@/content/codigo-personal";
import { getProducto } from "@/content/tienda";
import { HeroFallback, HeroHeading } from "@/components/sections/calculadora/hero-heading";
import { CalculadoraCodigo } from "@/components/sections/codigo-personal/calculadora-codigo";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/ui/json-ld";
import { Section, SectionHeading } from "@/components/ui/section";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

const description =
  "Calcula gratis tu arcano personal y tu Código Personal con tu fecha de nacimiento: tarot numerológico con el método Tarot Pragmático de Raúl Muñoz Jara. Tu carta personal, tus cinco cartas y tu PDF.";

export const metadata: Metadata = pageMetadata({
  title: "Tu Arcano Personal y Código Personal: tarot numerológico | Despierta con Tati",
  description,
  path: rutasCalculadora.codigo,
});

export default function CodigoPersonalPage() {
  const copy = codigoPersonal;
  const producto = getProducto("tu-codigo-personal");
  if (!producto) notFound();
  const heading = <HeroHeading eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Calculadoras", path: rutasCalculadora.hub },
          { name: "Arcano y Código Personal", path: rutasCalculadora.codigo },
        ])}
      />
      <Suspense fallback={<HeroFallback heading={heading} campos={1} />}>
        <CalculadoraCodigo producto={producto} heading={heading} />
      </Suspense>

      <Section tone="salvia" labelledBy="creditos-raul">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={creditos.metodo} title={creditos.title} id="creditos-raul" />
            <p className="mt-5 max-w-2xl text-lead text-ink-soft">{creditos.text}</p>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {[
                [creditos.webLabel, creditos.web],
                [creditos.instagramLabel, creditos.instagram],
                [creditos.verOriginal, creditos.original],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 font-medium text-ciruela">
                    <span className="link-underline-static">{label}</span>
                    <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-soft">{creditos.autor}</p>
          </div>
          <div className="lg:col-span-5">
            <a
              href={creditos.web}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto block w-full max-w-[20rem] rounded-[1.5rem] bg-white p-8 shadow-[0_30px_70px_-45px_rgba(63,46,58,0.45)]"
            >
              <Image src="/tarot/tarot-pragmatico.webp" alt={creditos.logoAlt} width={320} height={320} sizes="(min-width: 1024px) 256px, 60vw" className="h-auto w-full" />
            </a>
          </div>
        </div>
      </Section>

      <FaqSection faqs={codigoFaqs} />
    </>
  );
}
