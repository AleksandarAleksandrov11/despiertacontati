"use client";

import { useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import { codigoPersonal, type Mazo } from "@/content/codigo-personal";
import { FechaCampos, fechaVacia, type FechaForm } from "@/components/sections/calculadora/fecha-campos";
import { Button } from "@/components/ui/button";
import { calcularCodigo, carta, cartaEnPosicion, clavesVinculo, type Genero, type Mapa } from "@/lib/codigo-personal";
import { fechaTexto, fechaValida, type Fecha } from "@/lib/matriz";
import { cn } from "@/lib/utils";
import { Carta, TableroMapa } from "./tableros";

function SelectorGenero({ value, onChange, name }: { value: Genero; onChange: (genero: Genero) => void; name: string }) {
  const copy = codigoPersonal.vinculo;
  return (
    <fieldset>
      <legend className="eyebrow mb-2">{copy.genero}</legend>
      <div className="grid grid-cols-2 gap-2 rounded-full bg-ciruela/5 p-1">
        {(["mujer", "hombre"] as const).map((genero) => (
          <label
            key={genero}
            className={cn(
              "flex min-h-11 cursor-pointer items-center justify-center rounded-full px-4 text-[0.95rem] font-medium transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-malva-deep",
              value === genero ? "bg-ciruela text-crema" : "text-ciruela hover:bg-ciruela/10",
            )}
          >
            <input type="radio" name={name} value={genero} checked={value === genero} onChange={() => onChange(genero)} className="sr-only" />
            {genero === "mujer" ? copy.mujer : copy.hombre}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

type Persona = { fecha: Fecha; genero: Genero; mapa: Mapa; personal: number };

function MapaPersona({ mazo, persona, titulo }: { mazo: Mazo; persona: Persona; titulo: string }) {
  const copy = codigoPersonal.vinculo;
  const claves = clavesVinculo(persona.genero);
  return (
    <article className="rounded-[1.25rem] bg-crema/5 p-5 ring-1 ring-crema/10 sm:p-7">
      <h3 className="font-serif text-[1.7rem] leading-tight text-crema">{titulo}</h3>
      <p className="mt-1 text-sm text-crema/70">{copy.centro(carta(persona.personal), fechaTexto(persona.fecha))}</p>
      <div className="mt-6">
        <TableroMapa mazo={mazo} mapa={persona.mapa} claves={claves} compacto />
      </div>
      <p className="eyebrow mt-8 text-crema/70">{copy.claves}</p>
      <ul className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
        {claves.map((posicion) => (
          <li key={posicion} className="flex flex-col items-center gap-2 text-center">
            <Carta mazo={mazo} numero={cartaEnPosicion(persona.mapa, posicion)} sizes="(min-width: 1024px) 90px, 16vw" className="w-full" />
            <span className="text-[0.7rem] leading-tight text-crema/80">
              {copy.posiciones[posicion]} <span className="nums text-dorado-soft">({copy.carta(posicion)})</span>
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Vinculo({ mazo, fecha, personal, hoy }: { mazo: Mazo; fecha: Fecha; personal: number; hoy: Date }) {
  const copy = codigoPersonal.vinculo;
  const [genero1, setGenero1] = useState<Genero>("mujer");
  const [genero2, setGenero2] = useState<Genero>("hombre");
  const [form, setForm] = useState<FechaForm>(fechaVacia);
  const [invalid, setInvalid] = useState(false);
  const [otra, setOtra] = useState<Fecha | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const candidata = { dia: Number(form.dia), mes: Number(form.mes), anio: Number(form.anio) };
    if (!fechaValida(candidata)) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setOtra(candidata);
    track("comparar_vinculo");
  }

  const segunda = otra ? calcularCodigo(otra, hoy) : null;
  const personas: [Persona, Persona] | null =
    otra && segunda
      ? [
          { fecha, genero: genero1, mapa: calcularCodigo(fecha, hoy).mapaNatal, personal },
          { fecha: otra, genero: genero2, mapa: segunda.mapaNatal, personal: segunda.personal },
        ]
      : null;
  const filas = personas
    ? clavesVinculo(personas[0].genero).map((posicionA, index) => {
        const posicionB = clavesVinculo(personas[1].genero)[index]!;
        const a = cartaEnPosicion(personas[0].mapa, posicionA);
        const b = cartaEnPosicion(personas[1].mapa, posicionB);
        const posiciones = posicionA === posicionB ? String(posicionA) : `${posicionA}/${posicionB}`;
        return { label: copy.posiciones[posicionA]!, posiciones, a, b, coincide: a === b };
      })
    : [];
  const coincidencias = filas.filter((fila) => fila.coincide);

  return (
    <section id="vinculo" aria-labelledby="vinculo-title" className="section-pad relative overflow-hidden bg-lavanda">
      <div className="container-page relative">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <p className="eyebrow mb-5">{copy.eyebrow}</p>
          <h2 id="vinculo-title" className="text-h2">
            {copy.title}
          </h2>
          <p className="mt-5 text-lead text-ink-soft">{copy.text}</p>
        </div>
        <form onSubmit={onSubmit} noValidate className="grid gap-6 rounded-[1.25rem] bg-crema/90 p-6 sm:p-9 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-5">
            <p className="font-serif text-2xl text-ciruela">{copy.persona1}</p>
            <p className="text-ink-soft">{copy.centro(carta(personal), fechaTexto(fecha))}</p>
            <SelectorGenero name="genero-1" value={genero1} onChange={setGenero1} />
          </div>
          <div className="flex flex-col gap-5">
            <FechaCampos idPrefix="vinculo" value={form} onChange={setForm} invalid={invalid} showName={false} legend={copy.persona2} />
            <SelectorGenero name="genero-2" value={genero2} onChange={setGenero2} />
            <p aria-live="polite" className="min-h-5 text-sm text-rosa-deep">
              {invalid ? copy.error : ""}
            </p>
          </div>
          <div className="lg:col-span-2">
            <Button type="submit" className="w-full sm:w-auto">
              {copy.submit}
            </Button>
          </div>
        </form>

        {personas && (
          <div className="mt-10 rounded-[1.5rem] bg-ciruela p-5 text-crema sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <MapaPersona mazo={mazo} persona={personas[0]} titulo={copy.persona1} />
              <MapaPersona mazo={mazo} persona={personas[1]} titulo={copy.persona2} />
            </div>
            <div aria-live="polite" className="mt-8 rounded-[1.25rem] bg-crema p-6 text-ciruela sm:p-8">
              <h3 className="text-h3">{copy.resumen}</h3>
              <ul className="mt-5 grid gap-2.5">
                {filas.map((fila) => (
                  <li key={fila.label} className={cn("flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl px-4 py-2.5", fila.coincide ? "bg-dorado-soft/40" : "bg-lavanda/70")}>
                    <span>
                      {fila.label} <span className="nums text-sm text-ink-soft">({copy.carta(fila.posiciones)})</span>
                    </span>
                    <span className="nums font-medium">
                      {copy.persona1} {fila.a} · {copy.persona2} {fila.b}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-ink-soft">
                {coincidencias.length > 0
                  ? `${copy.coinciden} ${coincidencias.map((fila) => fila.label.toLowerCase()).join(", ")}.`
                  : copy.sinCoincidencias}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
