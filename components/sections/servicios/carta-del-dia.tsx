"use client";

import Image from "next/image";
import { useState, useSyncExternalStore, type CSSProperties } from "react";
import { track } from "@vercel/analytics";
import { site } from "@/content/site";
import { tarotPage } from "@/content/servicios";
import { BrandSymbol } from "@/components/ui/brand-symbol";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const clave = "dct-carta-del-dia";
const evento = "dct-carta-del-dia";

function hoy() {
  const fecha = new Date();
  return `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;
}

function leer() {
  try {
    return window.localStorage.getItem(clave);
  } catch {
    return null;
  }
}

function suscribir(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(evento, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(evento, callback);
  };
}

function guardar(valor: string | null) {
  try {
    if (valor === null) window.localStorage.removeItem(clave);
    else window.localStorage.setItem(clave, valor);
  } catch {
    return;
  }
  window.dispatchEvent(new Event(evento));
}

function cartaGuardada(raw: string | null) {
  if (!raw) return null;
  const [dia, carta] = raw.split("|");
  const numero = Number(carta);
  return dia === hoy() && Number.isInteger(numero) && numero >= 0 && numero < 22 ? numero : null;
}

const abanico = [-15, -10, -5, 0, 5, 10, 15];

const cartaAlAzar = () => Math.floor(Math.random() * 22);

function Reverso() {
  return (
    <span className="absolute inset-0 grid place-items-center rounded-[0.7rem] border border-dorado/60 bg-[radial-gradient(circle_at_50%_40%,#6b4f63,#3f2e3a_70%)] [backface-visibility:hidden]">
      <span aria-hidden className="absolute inset-1.5 rounded-[0.5rem] border border-dorado/30" />
      <BrandSymbol size={48} eager={false} className="h-auto w-1/2 opacity-90" />
    </span>
  );
}

export function CartaDelDia() {
  const copy = tarotPage.cartaDelDia;
  const raw = useSyncExternalStore(suscribir, leer, () => null);
  const guardada = cartaGuardada(raw);
  const [elegida, setElegida] = useState<{ posicion: number; carta: number } | null>(null);
  const carta = elegida?.carta ?? guardada;
  const datos = carta === null ? null : copy.cartas[carta]!;

  function elegir(posicion: number) {
    const numero = cartaAlAzar();
    setElegida({ posicion, carta: numero });
    guardar(`${hoy()}|${numero}`);
    track("carta_del_dia", { carta: String(numero) });
  }

  return (
    <div className="flex flex-col items-center">
      {carta === null || !datos ? (
        <ul className="flex justify-center pt-6">
          {abanico.map((angulo, index) => (
            <li
              key={angulo}
              className="carta-in -ml-6 first:ml-0 sm:-ml-10"
              style={{ transform: `rotate(${angulo}deg) translateY(${Math.abs(angulo) * 0.9}px)`, "--d": `${index * 70}ms` } as CSSProperties}
            >
              <button
                type="button"
                onClick={() => elegir(index)}
                aria-label={copy.elegir(index + 1)}
                className="relative block h-[7.8rem] w-[4.4rem] rounded-[0.7rem] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[var(--ease-breath)] hover:-translate-y-4 focus-visible:-translate-y-4 sm:h-[14.5rem] sm:w-[8.4rem]"
              >
                <Reverso />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid w-full max-w-4xl items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
          <div className="mx-auto [perspective:1200px]">
            <div
              className={cn(
                "relative h-[22rem] w-[12.8rem] [transform-style:preserve-3d] sm:h-[26rem] sm:w-[15.2rem]",
                elegida ? "animate-[voltear_1s_cubic-bezier(0.22,1,0.36,1)_both]" : "[transform:rotateY(180deg)]",
              )}
            >
              <Reverso />
              <span className="absolute inset-0 overflow-hidden rounded-[0.7rem] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.7)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <Image src={`/tarot/rws/${carta}.webp`} alt={datos.nombre} width={420} height={720} sizes="(min-width: 640px) 244px, 205px" className="size-full object-cover" />
              </span>
            </div>
          </div>
          <div aria-live="polite" className="text-center md:text-left">
            <p className="eyebrow text-crema/70">{copy.resultado}</p>
            <p className="mt-4 font-serif text-[clamp(2.4rem,1.9rem+2vw,3.6rem)] leading-none text-crema">{datos.nombre}</p>
            <p className="mt-6 max-w-md font-serif text-[clamp(1.35rem,1.15rem+0.8vw,1.8rem)] italic leading-snug text-crema/90 md:max-w-none">{datos.mensaje}</p>
            <p className="mt-6 text-sm text-crema/70">{copy.manana}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-start">
              <Button href="/tienda#crono-tarot" tone="dark">
                {copy.lectura}
              </Button>
              <Button href={site.social.tarot.url} variant="link" tone="dark" icon={<InstagramIcon size={18} />}>
                {site.social.tarot.handle}
              </Button>
            </div>
          </div>
        </div>
      )}
      <p className="mt-10 text-center text-xs text-crema/70">{copy.mazo}</p>
    </div>
  );
}
