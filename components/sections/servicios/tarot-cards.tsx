"use client";

import { m } from "motion/react";
import { useState } from "react";
import { tarotPage } from "@/content/servicios";
import { LotoIcon } from "@/components/ui/icons";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

const accents = ["var(--color-chakra-tercer-ojo)", "var(--color-chakra-corona)", "var(--color-chakra-plexo)"];

export function TarotCards() {
  const { cartas } = tarotPage;
  const [flipped, setFlipped] = useState<boolean[]>(cartas.items.map(() => false));

  return (
    <RevealGroup as="ul" className="mt-14 grid justify-items-center gap-8 sm:grid-cols-3 sm:gap-5 lg:gap-10">
      {cartas.items.map((card, index) => {
        const isFlipped = flipped[index];
        return (
          <RevealItem as="li" key={card.title} className="w-full max-w-[17rem]">
            <m.button
              type="button"
              aria-pressed={isFlipped}
              onClick={() => setFlipped((prev) => prev.map((value, i) => (i === index ? !value : value)))}
              whileHover={isFlipped ? undefined : { y: -8, rotateZ: index === 1 ? 0 : index === 0 ? -2 : 2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative block aspect-[2/3] w-full text-left [perspective:1200px]"
            >
              <span className="sr-only">{isFlipped ? card.title : `${cartas.flipLabel} ${index + 1}`}</span>
              <m.span
                className="absolute inset-0 block [transform-style:preserve-3d]"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[1.5rem] bg-ciruela p-[3px] shadow-[0_30px_60px_-30px_rgba(63,46,58,0.55)] [backface-visibility:hidden]"
                >
                  <span className="relative flex h-full w-full items-center justify-center rounded-[1.3rem] border border-dorado/50">
                    <span className="absolute inset-4 rounded-[1rem] border border-dorado/25" />
                    <span className="absolute size-40 rounded-full border border-dorado/20" />
                    <span className="absolute size-28 rounded-full border border-dorado/30" />
                    <span className="relative text-dorado-soft">
                      <LotoIcon size={44} />
                    </span>
                    <span className="absolute bottom-7 font-serif text-lg italic text-crema/70">0{index + 1}</span>
                  </span>
                </span>
                <span
                  className="absolute inset-0 flex flex-col justify-between rounded-[1.5rem] border border-ciruela/10 bg-crema p-7 shadow-[0_30px_60px_-30px_rgba(63,46,58,0.4)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  aria-hidden={!isFlipped}
                >
                  <span className="block h-1 w-12 rounded-full" style={{ backgroundColor: accents[index] }} />
                  <span>
                    <span className="block font-serif text-[clamp(1.6rem,1.3rem+1vw,2.2rem)] leading-tight text-ciruela">{card.title}</span>
                    <span className="mt-3 block text-ink-soft">{card.text}</span>
                  </span>
                </span>
              </m.span>
            </m.button>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
