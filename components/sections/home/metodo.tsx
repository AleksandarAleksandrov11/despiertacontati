"use client";

import Link from "next/link";
import { m, useInView, useScroll, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { metodo } from "@/content/servicios";
import { SiteImage } from "@/components/ui/site-image";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Step = (typeof metodo.steps)[number];

function MethodStep({ step, index, onActive, active }: { step: Step; index: number; onActive: (i: number) => void; active: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <li ref={ref} className="relative pl-12 sm:pl-16">
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-2 flex size-[1.4rem] -translate-x-1/2 items-center justify-center rounded-full border bg-crema transition-all duration-700",
          active ? "scale-110 border-transparent" : "border-ciruela/20",
        )}
        style={active ? { boxShadow: `0 0 0 6px color-mix(in srgb, ${step.accent} 25%, transparent)` } : undefined}
      >
        <span className="size-2.5 rounded-full transition-colors duration-700" style={{ backgroundColor: active ? step.accent : "transparent" }} />
      </span>
      <div className={cn("transition-opacity duration-700", active ? "opacity-100" : "opacity-55")}>
        <p className="font-serif text-xl italic text-ink-soft">{step.number}</p>
        <h3 className="mt-1 text-h2">{step.step}</h3>
        <Link href={step.href} className="eyebrow mt-3 inline-flex min-h-11 items-center gap-2.5 hover:text-ciruela">
          <span aria-hidden className="size-2 rounded-full" style={{ backgroundColor: step.accent }} />
          <span className="link-underline">{step.tool}</span>
        </Link>
        <p className="mt-3 max-w-md text-lead text-ink-soft">{step.text}</p>
        <SiteImage
          name={step.image}
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="mt-8 aspect-[16/10] max-w-xl"
        />
      </div>
    </li>
  );
}

export function Metodo() {
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 60%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section aria-labelledby="metodo-title" className="section-pad relative bg-crema">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-32">
            <p className="eyebrow mb-5">{metodo.eyebrow}</p>
            <h2 id="metodo-title" className="text-h2">
              {metodo.title}
            </h2>
            <ol aria-hidden className="mt-10 hidden gap-3 lg:flex">
              {metodo.steps.map((step, index) => (
                <li
                  key={step.step}
                  className={cn(
                    "h-1 w-12 rounded-full transition-colors duration-700",
                    index <= active ? "" : "bg-ciruela/10",
                  )}
                  style={index <= active ? { backgroundColor: step.accent } : undefined}
                />
              ))}
            </ol>
          </Reveal>
        </div>
        <div className="relative lg:col-span-7">
          <span aria-hidden className="absolute bottom-0 left-0 top-3 w-px bg-ciruela/10" />
          <m.span
            aria-hidden
            className="absolute bottom-0 left-0 top-3 w-px origin-top bg-dorado"
            style={{ scaleY: progress }}
          />
          <ol ref={listRef} className="flex flex-col gap-20 sm:gap-28">
            {metodo.steps.map((step, index) => (
              <MethodStep key={step.step} step={step} index={index} active={active === index} onActive={setActive} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
