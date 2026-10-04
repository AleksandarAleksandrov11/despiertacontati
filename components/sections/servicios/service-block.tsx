import type { Servicio } from "@/content/servicios";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section, type SectionTone } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { cn } from "@/lib/utils";

export function ServiceBlock({ servicio, reverse, tone }: { servicio: Servicio; reverse: boolean; tone: SectionTone }) {
  return (
    <Section tone={tone} labelledBy={`servicio-${servicio.slug}`}>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className={cn("mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none", reverse && "lg:order-2")}>
          <SiteImage
            name={servicio.image}
            shape="arch"
            sizes="(min-width: 1024px) 42vw, (min-width: 640px) 448px, 90vw"
            className="aspect-[4/5]"
          />
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="flex items-center gap-4">
            <span className="font-serif text-6xl italic text-ciruela/25 sm:text-7xl">{servicio.number}</span>
            <span className="eyebrow flex items-center gap-2.5">
              <span aria-hidden className="size-2 rounded-full" style={{ backgroundColor: servicio.accent }} />
              {servicio.step}
            </span>
          </p>
          <h2 id={`servicio-${servicio.slug}`} className="mt-4 text-h1">
            {servicio.name}
          </h2>
          <p className="mt-6 max-w-lg text-lead text-ink-soft">{servicio.summary}</p>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-soft">
            {servicio.formats.map((format) => (
              <li key={format} className="flex items-center gap-2.5">
                <span aria-hidden className="h-px w-4 bg-dorado" />
                {format}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href={servicio.href} variant="link">
              {servicio.more}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
