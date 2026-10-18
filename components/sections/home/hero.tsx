import type { CSSProperties } from "react";
import { inicio } from "@/content/paginas";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { FadeUp, SplitText } from "@/components/ui/split-text";
import { SiteImage } from "@/components/ui/site-image";
import { Stat } from "@/components/ui/stat";

export function Hero() {
  const { hero } = inicio;
  const { experience } = site.facts;
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-crema pb-20 pt-28 lg:pb-16 lg:pt-28">
      <div aria-hidden className="blob -left-40 -top-32 size-[30rem] bg-rosa-polvo animate-drift" />
      <div aria-hidden className="blob -bottom-40 right-1/4 size-[26rem] bg-lavanda animate-drift-slow" />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <FadeUp as="p" className="eyebrow mb-8 flex items-center gap-3">
            <span aria-hidden className="size-1.5 rounded-full bg-rosa" />
            {hero.eyebrow}
          </FadeUp>
          <h1 className="font-serif text-ciruela">
            <span className="block text-[clamp(4.5rem,2.4rem+7.5vw,8.75rem)] leading-[0.88] tracking-[-0.025em]">
              <SplitText text={hero.title} delay={100} />
              <span aria-hidden className="split-char text-rosa" style={{ "--d": "460ms" } as CSSProperties}>
                .
              </span>
            </span>
            <FadeUp
              as="span"
              delay={600}
              className="mt-7 flex max-w-xl items-start gap-4 text-[clamp(1.5rem,1.2rem+1.2vw,2.2rem)] italic leading-[1.2] text-ciruela/90"
            >
              <span aria-hidden className="mt-[0.65em] h-px w-10 shrink-0 bg-dorado sm:w-14" />
              <span>{hero.subtitle}</span>
            </FadeUp>
          </h1>
          <FadeUp as="p" delay={800} className="mt-6 max-w-md text-lead text-ink-soft sm:pl-[4.5rem]">
            {hero.support}
          </FadeUp>
          <FadeUp delay={950} className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:pl-[4.5rem]">
            <Button href={site.cta.about.href} magnetic>
              {site.cta.about.label}
            </Button>
            <Button href={site.cta.services.href} variant="secondary">
              {site.cta.services.label}
            </Button>
          </FadeUp>
          <FadeUp delay={1100} className="mt-12 border-t border-ciruela/10 pt-8 sm:ml-[4.5rem]">
            <Stat value={experience.value} prefix={experience.prefix} lines={experience.lines} />
          </FadeUp>
        </div>

        <div className="relative lg:col-span-6">
          <SiteImage
            name={hero.image}
            priority
            sizes="(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 92vw"
            className="aspect-[3/2] shadow-[0_40px_80px_-40px_rgba(63,46,58,0.45)]"
          />
        </div>
      </div>
    </section>
  );
}
