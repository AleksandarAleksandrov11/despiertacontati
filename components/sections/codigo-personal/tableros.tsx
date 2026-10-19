import type { CSSProperties } from "react";
import Image from "next/image";
import { ases, codigoPersonal, mazos, nombreCarta, type Mazo } from "@/content/codigo-personal";
import { romano, type CicloAnio, type Mapa } from "@/lib/codigo-personal";
import { cn } from "@/lib/utils";

type As = (typeof ases)[number]["id"];

export function Carta({
  mazo,
  numero,
  label,
  destacada = false,
  sizes,
  delay = 0,
  className,
}: {
  mazo: Mazo;
  numero: number | As;
  label?: string;
  destacada?: boolean;
  sizes: string;
  delay?: number;
  className?: string;
}) {
  const esAs = typeof numero === "string";
  const nombre = esAs ? ases.find((item) => item.id === numero)!.nombre : `${numero} · ${nombreCarta(numero, mazo)}`;
  const [width, height] = esAs && mazo === "rider" ? [171, 294] : [360, mazos.find((item) => item.id === mazo)!.alto];
  return (
    <figure className={cn("carta-in flex min-w-0 flex-col items-center", className)} style={{ "--d": `${delay}ms` } as CSSProperties}>
      <span
        className={cn(
          "relative block w-full overflow-hidden rounded-[0.55rem] bg-crema/10 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.6)]",
          mazo === "rider" ? "aspect-[360/638]" : "aspect-[1/2]",
          destacada && "ring-2 ring-dorado ring-offset-2 ring-offset-ciruela",
        )}
      >
        <Image src={`/tarot/${mazo}/${numero}.webp`} alt={nombre} width={width} height={height} sizes={sizes} className="size-full object-cover" />
      </span>
      {label && <figcaption className="mt-2.5 text-center text-[0.8rem] font-medium leading-tight text-crema/85">{label}</figcaption>}
    </figure>
  );
}

export function TableroPerfil({
  mazo,
  personal,
  secundario,
  complementos,
  desafio,
}: {
  mazo: Mazo;
  personal: number;
  secundario: number;
  complementos: [number, number];
  desafio: number;
}) {
  const copy = codigoPersonal.perfil;
  const sizes = "(min-width: 1024px) 150px, 22vw";
  const celdas: { numero: number | As; label?: string; destacada?: boolean }[] = [
    { numero: "asespadas" },
    { numero: personal, label: copy.personal, destacada: true },
    { numero: secundario, label: copy.secundario },
    { numero: "ascopas" },
    { numero: "asoros" },
    { numero: complementos[0], label: copy.complemento1 },
    { numero: complementos[1], label: copy.complemento2 },
    { numero: "asbastos" },
  ];
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-14">
      <div className="grid w-full max-w-[40rem] grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-5">
        {celdas.map((celda, index) => (
          <Carta key={index} mazo={mazo} numero={celda.numero} label={celda.label ?? " "} destacada={celda.destacada} sizes={sizes} delay={index * 60} />
        ))}
      </div>
      <Carta mazo={mazo} numero={desafio} label={copy.desafio} destacada sizes={sizes} delay={520} className="w-[24%] max-w-[9.5rem] lg:w-[9.5rem]" />
    </div>
  );
}

export function TableroMapa({ mazo, mapa, claves = [], compacto = false }: { mazo: Mazo; mapa: Mapa; claves?: number[]; compacto?: boolean }) {
  const sizes = compacto ? "(min-width: 1024px) 60px, 12vw" : "(min-width: 1024px) 110px, 13vw";
  return (
    <div className={cn("grid gap-y-4", !compacto && "lg:grid-cols-[1fr_auto] lg:items-center lg:gap-x-10")}>
      <ol className="grid gap-y-3">
        {mapa.filas.map((fila, filaIndex) => (
          <li key={filaIndex}>
            <span className="sr-only">{codigoPersonal.septenario(filaIndex + 1)}</span>
            <ol className={cn("grid grid-cols-7", compacto ? "gap-1" : "gap-1.5 sm:gap-3")}>
              {fila.map((numero, index) => {
                const posicion = filaIndex * 7 + index + 1;
                const clave = claves.includes(posicion);
                return (
                  <li key={posicion} className="flex flex-col items-center gap-1">
                    <span className={cn("nums text-[0.65rem] leading-none sm:text-xs", clave ? "font-semibold text-dorado-soft" : "text-crema/70")}>
                      <span className="sr-only">{codigoPersonal.posicion(posicion)}</span>
                      <span aria-hidden>{posicion}</span>
                    </span>
                    <Carta
                      mazo={mazo}
                      numero={numero}
                      destacada={posicion === 1 || clave}
                      sizes={sizes}
                      delay={compacto ? 0 : posicion * 25}
                      className="w-full"
                    />
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>
      {!compacto && (
        <div className="mx-auto w-[22%] max-w-[8.5rem] lg:w-[8.5rem]">
          <Carta mazo={mazo} numero={mapa.desafio} label={codigoPersonal.desafio} destacada sizes="(min-width: 1024px) 136px, 22vw" delay={560} />
        </div>
      )}
    </div>
  );
}

export function CicloVital({ mazo, ciclo }: { mazo: Mazo; ciclo: CicloAnio[] }) {
  const copy = codigoPersonal.ciclo;
  return (
    <ol className="grid grid-cols-4 gap-x-3 gap-y-6 sm:grid-cols-6 lg:grid-cols-8">
      {ciclo.map((item, index) => (
        <li key={item.anio} className="flex flex-col items-center gap-2 text-center">
          <span className="nums text-sm font-medium text-dorado-soft">{item.anio}</span>
          {item.carta ? (
            <Carta mazo={mazo} numero={item.arcano} destacada sizes="80px" className="w-16" label={index === 0 ? copy.nacimiento : copy.ahora} />
          ) : (
            <span className="nums grid size-16 place-items-center rounded-full bg-crema/10 font-serif text-[1.35rem] text-dorado-soft ring-1 ring-crema/15">
              {romano(item.arcano)}
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
