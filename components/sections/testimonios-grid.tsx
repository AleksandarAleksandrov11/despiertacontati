"use client";

import { AnimatePresence, m } from "motion/react";
import { useState } from "react";
import { testimonios } from "@/content/testimonios";
import { testimoniosPage } from "@/content/paginas";
import { cn } from "@/lib/utils";

const servicios = Array.from(new Set(testimonios.map((item) => item.service)));
const filtros = [testimoniosPage.all, ...servicios];
const palette = [
  "var(--color-chakra-corazon)",
  "var(--color-chakra-tercer-ojo)",
  "var(--color-chakra-plexo)",
  "var(--color-chakra-garganta)",
  "var(--color-chakra-sacro)",
];

function accentFor(service: string) {
  return palette[servicios.indexOf(service) % palette.length];
}

export function TestimoniosGrid() {
  const [filtro, setFiltro] = useState(testimoniosPage.all);
  const items = filtro === testimoniosPage.all ? testimonios : testimonios.filter((item) => item.service === filtro);

  return (
    <>
      <div role="group" aria-label={testimoniosPage.filterLabel} className="flex flex-wrap gap-x-8 gap-y-2">
        {filtros.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={filtro === option}
            onClick={() => setFiltro(option)}
            className={cn(
              "inline-flex min-h-11 items-center font-serif text-2xl transition-colors duration-500",
              filtro === option ? "text-ciruela" : "text-ink-soft hover:text-ciruela",
            )}
          >
            <span className={cn("link-underline", filtro === option && "[background-size:100%_1px]")}>{option}</span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {items.length} {testimoniosPage.eyebrow.toLowerCase()}
      </p>
      <m.ul key={filtro} className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence>
          {items.map((item, index) => (
            <m.li
              key={item.name}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 break-inside-avoid"
            >
              <figure className="rounded-[1.25rem] border border-ciruela/10 bg-crema p-7 sm:p-8">
                <p className="eyebrow flex items-center gap-2.5">
                  <span aria-hidden className="size-2 rounded-full" style={{ backgroundColor: accentFor(item.service) }} />
                  {item.service}
                </p>
                <blockquote className="mt-5 font-serif text-[clamp(1.3rem,1.15rem+0.5vw,1.6rem)] leading-snug">
                  <p>{item.text}</p>
                </blockquote>
                <figcaption className="mt-6 text-sm font-medium">{item.name}</figcaption>
              </figure>
            </m.li>
          ))}
        </AnimatePresence>
      </m.ul>
    </>
  );
}
