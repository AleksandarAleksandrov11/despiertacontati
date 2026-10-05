import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destacados } from "@/content/servicios";
import { inicio } from "@/content/paginas";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { TiltCard } from "@/components/ui/tilt-card";

export function Destacados() {
  return (
    <Section tone="lavanda" labelledBy="destacados-title">
      <div aria-hidden className="blob -left-32 top-1/4 size-[24rem] bg-rosa-polvo animate-drift" />
      <Reveal>
        <SectionHeading eyebrow={inicio.destacados.eyebrow} title={inicio.destacados.title} id="destacados-title" />
      </Reveal>
      <RevealGroup as="ul" className="mt-14 grid gap-5 md:grid-cols-3">
        {destacados.map((item) => (
          <RevealItem as="li" key={item.title}>
            <TiltCard className="h-full" innerClassName="flex h-full flex-col">
              <Link href={item.href} className="group flex h-full flex-col">
                <SiteImage
                  name={item.image}
                  shape="none"
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="aspect-[4/3]"
                  imgClassName="transition-transform duration-[1.6s] ease-[var(--ease-breath)] group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-h3">{item.title}</h3>
                  <p className="mt-3 flex-1 text-ink-soft">{item.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-medium">
                    <span className="link-underline-static">{item.cta}</span>
                    <ArrowRight size={18} strokeWidth={1.25} aria-hidden className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </TiltCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
