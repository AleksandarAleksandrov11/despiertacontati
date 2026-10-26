import { calculadoraIndividual } from "@/content/calculadora";
import type { Puntos } from "@/lib/matriz";
import { ArcanoTitle } from "./lectura";

function LineaLinaje({ label, partes, valores }: { label: string; partes: string[]; valores: [number, number, number] }) {
  return (
    <article className="flex h-full flex-col rounded-[1.25rem] bg-crema p-7 sm:p-8">
      <h3 className="text-h3">{label}</h3>
      <p className="nums mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
        <span>
          {partes[0]} <strong className="font-medium text-ciruela">{valores[0]}</strong>
        </span>
        <span aria-hidden>+</span>
        <span>
          {partes[1]} <strong className="font-medium text-ciruela">{valores[1]}</strong>
        </span>
      </p>
      <div className="mt-6 border-t border-ciruela/10 pt-6">
        <ArcanoTitle numero={valores[2]} />
      </div>
    </article>
  );
}

export function Linaje({ puntos, masculino, femenino }: { puntos: Puntos; masculino: number; femenino: number }) {
  const copy = calculadoraIndividual.linaje;
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <LineaLinaje label={copy.paterna.label} partes={copy.paterna.partes} valores={[puntos.f, puntos.h, masculino]} />
      <LineaLinaje label={copy.materna.label} partes={copy.materna.partes} valores={[puntos.g, puntos.i, femenino]} />
      {[
        { ...copy.centro, numero: puntos.k },
        { ...copy.union, numero: puntos.k1 },
      ].map((item) => (
        <article key={item.label} className="rounded-[1.25rem] bg-crema/70 p-7 sm:p-8">
          <p className="eyebrow">{item.label}</p>
          <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
          <div className="mt-6">
            <ArcanoTitle numero={item.numero} />
          </div>
        </article>
      ))}
    </div>
  );
}
