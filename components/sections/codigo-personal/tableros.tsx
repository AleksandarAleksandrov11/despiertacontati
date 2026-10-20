import type { CSSProperties } from "react";
import Image from "next/image";
import { ases, codigoPersonal, mazos, nombreCarta, type Mazo } from "@/content/codigo-personal";
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
