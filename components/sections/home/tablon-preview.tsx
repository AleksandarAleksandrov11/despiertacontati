import { ArrowUpRight } from "lucide-react";
import { inicio } from "@/content/paginas";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt-card";
import { getActiveAnuncios } from "@/lib/anuncios";
import { whatsappHref } from "@/lib/utils";

export function TablonPreview() {
  const anuncios = getActiveAnuncios();
  if (anuncios.length === 0) return null;

  return (
    <Section tone="rosa" labelledBy="tablon-title">
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <Reveal>
          <SectionHeading eyebrow={inicio.tablon.eyebrow} title={inicio.tablon.title} id="tablon-title" />
        </Reveal>
        <Reveal>
          <Button href="/tablon" variant="link">
            {inicio.tablon.link}
          </Button>
        </Reveal>
      </div>
      <RevealGroup as="ul" className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {anuncios.slice(0, 4).map((anuncio) => {
          const href =
            anuncio.cta.kind === "whatsapp" ? whatsappHref(anuncio.cta.message) : `/contacto?servicio=${anuncio.cta.topic}`;
          const external = anuncio.cta.kind === "whatsapp";
          return (
            <RevealItem as="li" key={anuncio.id}>
              <TiltCard className="h-full" innerClassName="h-full bg-crema/85">
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full min-h-56 flex-col justify-between p-7"
                >
                  <span className="eyebrow">{anuncio.type}</span>
                  <span className="mt-8 block font-serif text-[1.65rem] leading-tight">{anuncio.title}</span>
                  <span className="mt-6 inline-flex items-center gap-2 font-medium text-ciruela">
                    <span className="link-underline-static">{anuncio.cta.label}</span>
                    <ArrowUpRight size={18} strokeWidth={1.25} aria-hidden className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </TiltCard>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
