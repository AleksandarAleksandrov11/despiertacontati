import type { CSSProperties } from "react";
import { inicio } from "@/content/paginas";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { FadeUp, SplitText } from "@/components/ui/split-text";
import { RotatingWord } from "@/components/ui/rotating-word";
import { SiteImage } from "@/components/ui/site-image";
import { Stat } from "@/components/ui/stat";

export function Hero() {
  const { hero } = inicio;
  const { experience } = site.facts;
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-crema pb-20 pt-28 lg:pb-16 lg:pt-28">
      <div aria-hidden className="blob -left-40 -top-32 size-[30rem] bg-rosa-polvo animate-drift" />
      <div aria-hidden className="blob -bottom-40 left-1/3 size-[26rem] bg-lavanda animate-drift-slow" />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <FadeUp as="p" className="eyebrow mb-8 flex items-center gap-3">
            <span aria-hidden className="size-1.5 rounded-full bg-rosa" />
            {hero.eyebrow}
          </FadeUp>
          <h1 className="font-serif text-ciruela">
            <span className="block text-[clamp(4.5rem,2.6rem+8.5vw,10rem)] leading-[0.88] tracking-[-0.025em]">
              <SplitText text={hero.title} delay={100} />
              <span aria-hidden className="split-char text-rosa" style={{ "--d": "460ms" } as CSSProperties}>
                .
              </span>
            </span>
            <FadeUp
              as="span"
              delay={600}
              className="mt-7 flex max-w-xl items-start gap-4 text-[clamp(1.5rem,1.2rem+1.3vw,2.35rem)] italic leading-[1.2] text-ciruela/90"
            >
              <span aria-hidden className="mt-[0.65em] h-px w-10 shrink-0 bg-dorado sm:w-14" />
              <span>{hero.subtitle}</span>
            </FadeUp>
          </h1>
          <FadeUp as="p" delay={800} className="mt-6 max-w-md text-lead text-ink-soft sm:pl-[4.5rem]">
            {hero.support}
          </FadeUp>
          <FadeUp delay={950} className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:pl-[4.5rem]">
            <Button href={site.cta.primary.href} magnetic>
              {site.cta.primary.label}
            </Button>
            <Button href={site.cta.services.href} variant="secondary">
              {site.cta.services.label}
            </Button>
          </FadeUp>
          <FadeUp delay={1100} className="mt-12 border-t border-ciruela/10 pt-8 sm:ml-[4.5rem]">
            <Stat value={experience.value} prefix={experience.prefix} lines={experience.lines} />
          </FadeUp>
        </div>

        <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:col-span-5 lg:max-w-[26rem] lg:justify-self-end">
          <SiteImage
            name={hero.image}
            shape="arch"
            priority
            sizes="(min-width: 1024px) 26rem, (min-width: 640px) 24rem, 80vw"
            className="aspect-[3/4] shadow-[0_40px_80px_-40px_rgba(63,46,58,0.45)]"
          />
          <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-ciruela/10 bg-crema/95 px-7 py-2 shadow-[0_20px_40px_-25px_rgba(63,46,58,0.45)] backdrop-blur">
            <RotatingWord words={hero.rotating} className="script-accent text-[2.4rem] text-rosa-deep" />
          </p>
        </div>
      </div>
    </section>
  );
}
