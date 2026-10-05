import { inicio } from "@/content/paginas";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";

export function SobreTati() {
  const { sobreTati } = inicio;
  return (
    <Section tone="crema" labelledBy="sobre-tati-title">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
          <SiteImage name={sobreTati.image} shape="arch" sizes="(min-width: 1024px) 36vw, 90vw" className="aspect-[4/5]" />
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="eyebrow mb-6">{sobreTati.eyebrow}</p>
          <h2 id="sobre-tati-title" className="sr-only">
            {site.person.shortName}
          </h2>
          <blockquote className="font-serif text-[clamp(1.9rem,1.4rem+2vw,3.4rem)] leading-[1.12] text-ciruela">
            <p>{sobreTati.quote}</p>
          </blockquote>
          <p aria-hidden className="script-accent mt-6 text-6xl text-rosa-deep">
            {sobreTati.signature}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
            <p className="flex items-center gap-4">
              <span className="font-serif text-5xl">{site.facts.experience}</span>
              <span className="text-sm text-ink-soft">{site.facts.experienceLabel}</span>
            </p>
            <Button href="/sobre-mi" variant="link">
              {sobreTati.link}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
