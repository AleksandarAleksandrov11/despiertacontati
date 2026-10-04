"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useReducedMotion } from "motion/react";
import type { Testimonio } from "@/content/testimonios";

export function TestimonialsCarousel({ items, label, short = false }: { items: Testimonio[]; label: string; short?: boolean }) {
  const reduce = useReducedMotion();
  const [viewportRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    reduce ? [] : [AutoScroll({ speed: 0.6, startDelay: 600, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  return (
    <div
      ref={viewportRef}
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
      className="cursor-grab overflow-hidden active:cursor-grabbing [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
    >
      <ul className="flex touch-pan-y">
        {items.map((item) => (
          <li key={item.name} className={`min-w-0 shrink-0 grow-0 pl-5 ${short ? "basis-[75%] sm:basis-[45%] lg:basis-[30%] xl:basis-[26%]" : "basis-[85%] sm:basis-[55%] lg:basis-[38%] xl:basis-[32%]"}`}>
            <figure className="flex h-full flex-col justify-between rounded-[1.75rem] border border-ciruela/10 bg-crema/70 p-7 sm:p-9">
              <blockquote className="font-serif text-[clamp(1.3rem,1.15rem+0.6vw,1.65rem)] leading-snug text-ciruela">
                <p>{short ? item.short : item.text}</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-between gap-4 text-sm">
                <span className="font-medium text-ciruela">{item.name}</span>
                <span className="eyebrow">{item.service}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
