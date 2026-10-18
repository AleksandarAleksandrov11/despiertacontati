import type { Bloque } from "@/content/servicios";
import { serviciosPage } from "@/content/servicios";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section, type SectionTone } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { cn } from "@/lib/utils";

export function ServiceBlock({ bloque, reverse, tone }: { bloque: Bloque; reverse: boolean; tone: SectionTone }) {
  return (
    <Section tone={tone} id={bloque.slug} labelledBy={`servicio-${bloque.slug}`} className="scroll-mt-20">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className={cn("mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none", reverse && "lg:order-2")}>
          <SiteImage
            name={bloque.image}
            sizes="(min-width: 1024px) 42vw, (min-width: 640px) 448px, 90vw"
            className="aspect-[4/5]"
          />
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="flex items-center gap-4">
            <span className="font-serif text-6xl italic text-ciruela/25 sm:text-7xl">{bloque.number}</span>
            <span className="eyebrow flex items-center gap-2.5">
              <span aria-hidden className="size-2 rounded-full" style={{ backgroundColor: bloque.accent }} />
              {bloque.area}
            </span>
          </p>
          <h2 id={`servicio-${bloque.slug}`} className="mt-4 text-h1">
            {bloque.benefit}
          </h2>
          <p className="mt-6 max-w-lg text-lead text-ink-soft">{bloque.summary}</p>
          <p className="eyebrow mt-10">{serviciosPage.includesLabel}</p>
          <ul className="mt-4 grid max-w-xl gap-x-8 gap-y-2 sm:grid-cols-2">
            {bloque.includes.map((item) => (
              <li key={item} className="flex items-baseline gap-3 border-b border-ciruela/10 pb-2 font-serif text-[1.3rem] leading-snug">
                <span aria-hidden className="h-px w-4 shrink-0 translate-y-[-0.3em] bg-dorado" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-soft">
            {bloque.modality.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={bloque.href} variant="link">
              {bloque.more}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
