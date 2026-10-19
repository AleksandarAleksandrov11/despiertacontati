"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { track } from "@vercel/analytics";
import { arcano } from "@/content/arcanos";
import { calculadoraForm, calculadoraPareja } from "@/content/calculadora";
import { useLenis } from "@/components/layout/smooth-scroll";
import { Button } from "@/components/ui/button";
import { calcularMatriz, calcularPareja, fechaParam, fechaTexto, fechaValida, limpiarNombre, parsearFecha, type Fecha } from "@/lib/matriz";
import { FechaCampos, fechaVacia, type FechaForm } from "./fecha-campos";
import { CalculadoraHero, ResultadosSection } from "./layout";
import { ArcanoTitle, LecturaCard, PropositoCard } from "./lectura";
import { MatrizEscena } from "./matriz-escena";
import { PdfButton, PdfCard } from "./pdf-card";

function toForm(fecha: Fecha | null, nombre: string): FechaForm {
  return fecha ? { dia: String(fecha.dia), mes: String(fecha.mes), anio: String(fecha.anio), nombre } : { ...fechaVacia, nombre };
}

function toFecha(form: FechaForm): Fecha {
  return { dia: Number(form.dia), mes: Number(form.mes), anio: Number(form.anio) };
}

export function CalculadoraPareja({ heading }: { heading: ReactNode }) {
  const copy = calculadoraPareja;
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const fecha1 = parsearFecha(params.get("fecha1"));
  const fecha2 = parsearFecha(params.get("fecha2"));
  const nombre1 = limpiarNombre(params.get("nombre1"));
  const nombre2 = limpiarNombre(params.get("nombre2"));
  const [forms, setForms] = useState<[FechaForm, FechaForm]>(() => [toForm(fecha1, nombre1), toForm(fecha2, nombre2)]);
  const [invalid, setInvalid] = useState<[boolean, boolean]>([false, false]);
  const [run, setRun] = useState(0);
  const stage = useRef<HTMLElement>(null);
  const scrollPending = useRef(Boolean(fecha1 && fecha2));

  const ready = fecha1 && fecha2;
  const key = ready ? `${fechaParam(fecha1)}-${fechaParam(fecha2)}-${nombre1}-${nombre2}-${run}` : "";

  useEffect(() => {
    if (!key || !scrollPending.current || !stage.current) return;
    scrollPending.current = false;
    if (lenis) lenis.scrollTo(stage.current, { offset: -72 });
    else stage.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [key, lenis]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const candidatas = [toFecha(forms[0]), toFecha(forms[1])] as const;
    const errores: [boolean, boolean] = [!fechaValida(candidatas[0]), !fechaValida(candidatas[1])];
    setInvalid(errores);
    if (errores[0] || errores[1]) return;
    const query = new URLSearchParams({ fecha1: fechaParam(candidatas[0]), fecha2: fechaParam(candidatas[1]) });
    const limpio1 = limpiarNombre(forms[0].nombre);
    const limpio2 = limpiarNombre(forms[1].nombre);
    if (limpio1) query.set("nombre1", limpio1);
    if (limpio2) query.set("nombre2", limpio2);
    track("calcular_matriz", { tipo: "pareja" });
    scrollPending.current = true;
    setRun((value) => value + 1);
    router.replace(`${pathname}?${query.toString()}`, { scroll: false });
  }

  const matriz = ready ? calcularPareja(fecha1, fecha2) : null;
  const personas = ready
    ? [
        { fecha: fecha1, nombre: nombre1, texto: fechaTexto(fecha1), centro: calcularMatriz(fecha1).puntos.e, fallback: copy.aportaFallback[0]! },
        { fecha: fecha2, nombre: nombre2, texto: fechaTexto(fecha2), centro: calcularMatriz(fecha2).puntos.e, fallback: copy.aportaFallback[1]! },
      ]
    : [];
  const fechas = personas.map((persona) => persona.texto).join(" y ");
  const nombres = nombre1 && nombre2 ? `${nombre1} y ${nombre2}` : "";
  const pdfHref = ready
    ? `/api/matriz/pdf?${new URLSearchParams({
        tipo: "pareja",
        fecha1: fechaParam(fecha1),
        fecha2: fechaParam(fecha2),
        ...(nombre1 ? { nombre1 } : {}),
        ...(nombre2 ? { nombre2 } : {}),
      }).toString()}`
    : "";
  const sumas = ready
    ? [
        `${fecha1.dia} + ${fecha2.dia} = ${matriz!.puntos.a}`,
        `${fecha1.mes} + ${fecha2.mes} = ${matriz!.puntos.b}`,
        `${fecha1.anio} + ${fecha2.anio} = ${matriz!.puntos.c}`,
      ]
    : [];

  return (
    <>
      <CalculadoraHero heading={heading}>
        <form onSubmit={onSubmit} noValidate className="rounded-[1.25rem] bg-crema/90 p-6 shadow-[0_30px_70px_-45px_rgba(63,46,58,0.45)] backdrop-blur sm:p-9">
          <div className="grid gap-8">
            {[0, 1].map((index) => (
              <div key={index}>
                <FechaCampos
                  idPrefix={`pareja-${index + 1}`}
                  value={forms[index]!}
                  onChange={(value) => setForms((current) => (index === 0 ? [value, current[1]] : [current[0], value]))}
                  invalid={invalid[index]!}
                  legend={copy.personas[index]}
                />
                <p aria-live="polite" className="mt-2 min-h-5 text-sm text-rosa-deep">
                  {invalid[index] ? calculadoraForm.error : ""}
                </p>
              </div>
            ))}
          </div>
          <Button type="submit" className="mt-2 w-full">
            {ready ? copy.recalcular : copy.submit}
          </Button>
          <p className="mt-4 text-center text-sm text-ink-soft">{calculadoraForm.privacidad}</p>
        </form>
      </CalculadoraHero>

      {matriz && ready && (
        <div key={key}>
          <section ref={stage} id="vuestra-matriz" aria-label={copy.stageLabel(fechas)} className="relative overflow-hidden bg-ciruela py-16 text-crema sm:py-24">
            <div aria-hidden className="blob -left-40 top-10 size-[30rem] bg-rosa/30" />
            <div aria-hidden className="blob -right-40 bottom-0 size-[28rem] bg-malva/35" />
            <div className="container-page relative">
              <MatrizEscena
                puntos={matriz.puntos}
                etiquetas={copy.etiquetas}
                pasos={copy.pasos}
                valores={[
                  null,
                  sumas[0]!,
                  sumas[1]!,
                  sumas[2]!,
                  String(matriz.puntos.d),
                  `${matriz.puntos.e} · ${arcano(matriz.puntos.e)?.nombre ?? ""}`,
                  null,
                  null,
                  null,
                ]}
                skip={copy.skip}
                label={copy.stageLabel(fechas)}
                title={copy.stageTitle(nombres)}
                subtitle={fechas}
                resultsId="lectura"
                resultsLabel={copy.verLectura}
                destacados={["e", "d", "dinero"]}
                variante="pareja"
                actions={<PdfButton href={pdfHref} tipo="pareja" label={copy.pdf.short} tone="dark" />}
              />
            </div>
          </section>

          <ResultadosSection id="lectura" eyebrow={copy.resultadosEyebrow} title={copy.resultadosTitle} tone="crema">
            <div className="grid gap-5 lg:grid-cols-12">
              <LecturaCard
                className="lg:col-span-12"
                size="lg"
                label={copy.centro.label}
                intro={copy.centro.text}
                numero={matriz.puntos.e}
                text={arcano(matriz.puntos.e)?.amor ?? ""}
              />
              {personas.map((persona) => (
                <article key={persona.fallback} className="rounded-[1.25rem] bg-rosa-polvo/60 p-7 sm:p-8 lg:col-span-6">
                  <p className="eyebrow">{copy.aporta(persona.nombre || persona.fallback)}</p>
                  <p className="mt-2 text-sm text-ink-soft">
                    {copy.aportaText} {persona.texto}
                  </p>
                  <div className="mt-6">
                    <ArcanoTitle numero={persona.centro} />
                  </div>
                </article>
              ))}
            </div>
          </ResultadosSection>

          <ResultadosSection id="propositos" eyebrow={copy.propositos.eyebrow} title={copy.propositos.title} text={copy.propositos.text} tone="lavanda">
            <ul className="grid gap-5 md:grid-cols-3">
              <li>
                <PropositoCard
                  label={copy.propositos.personal.label}
                  etapa={copy.propositos.personal.etapa}
                  partes={copy.propositos.personal.partes}
                  valores={[matriz.propositos.cielo, matriz.propositos.tierra]}
                  resultado={matriz.propositos.personal}
                  text={arcano(matriz.propositos.personal)?.proposito ?? ""}
                />
              </li>
              <li>
                <PropositoCard
                  label={copy.propositos.social.label}
                  etapa={copy.propositos.social.etapa}
                  partes={copy.propositos.social.partes}
                  valores={[matriz.propositos.masculino, matriz.propositos.femenino]}
                  resultado={matriz.propositos.social}
                  text={arcano(matriz.propositos.social)?.proposito ?? ""}
                />
              </li>
              <li>
                <PropositoCard
                  label={copy.propositos.espiritual.label}
                  etapa={copy.propositos.espiritual.etapa}
                  partes={copy.propositos.espiritual.partes}
                  valores={[matriz.propositos.personal, matriz.propositos.social]}
                  resultado={matriz.propositos.espiritual}
                  text={arcano(matriz.propositos.espiritual)?.proposito ?? ""}
                />
              </li>
            </ul>
          </ResultadosSection>

          <ResultadosSection id="mas-de-vuestra-matriz" eyebrow={copy.mas.eyebrow} title={copy.mas.title} text={copy.mas.text} tone="rosa">
            <div className="grid gap-5 lg:grid-cols-3">
              <LecturaCard label={copy.mas.aprendizajes.label} intro={copy.mas.aprendizajes.text} numero={matriz.puntos.d} text={arcano(matriz.puntos.d)?.sombra ?? ""} />
              <LecturaCard label={copy.mas.amor.label} intro={copy.mas.amor.text} numero={matriz.puntos.amor} text={arcano(matriz.puntos.amor)?.amor ?? ""} />
              <LecturaCard label={copy.mas.material.label} intro={copy.mas.material.text} numero={matriz.puntos.dinero} text={arcano(matriz.puntos.dinero)?.dinero ?? ""} />
            </div>
            <div className="mt-10 max-w-3xl">
              <PdfCard copy={copy.pdf} href={pdfHref} tipo="pareja" />
            </div>
          </ResultadosSection>
        </div>
      )}
    </>
  );
}
