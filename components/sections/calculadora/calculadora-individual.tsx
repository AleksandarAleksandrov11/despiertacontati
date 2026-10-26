"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { track } from "@vercel/analytics";
import { arcano } from "@/content/arcanos";
import { calculadoraForm, calculadoraIndividual, detalleIndividual, infoIndividualMessage } from "@/content/calculadora";
import type { Producto } from "@/content/tienda";
import { useLenis } from "@/components/layout/smooth-scroll";
import { BuyBox } from "@/components/sections/tienda/buy-box";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { TrackedAnchor } from "@/components/ui/tracked";
import { calcularMatriz, fechaParam, fechaTexto, fechaValida, limpiarNombre, parsearFecha } from "@/lib/matriz";
import { productHref } from "@/lib/tienda";
import { whatsappHref } from "@/lib/utils";
import { FechaCampos, fechaVacia, type FechaForm } from "./fecha-campos";
import { CalculadoraHero, ResultadosSection } from "./layout";
import { BloqueadaCard, LecturaCard, PropositoCard, TrioCard } from "./lectura";
import { Linaje } from "./linaje";
import { MatrizEscena } from "./matriz-escena";
import { PdfButton } from "./pdf-card";

function Descubrelo({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-8">
      <Button href={href}>{label}</Button>
    </div>
  );
}

function toForm(fecha: { dia: number; mes: number; anio: number } | null, nombre: string): FechaForm {
  return fecha ? { dia: String(fecha.dia), mes: String(fecha.mes), anio: String(fecha.anio), nombre } : { ...fechaVacia, nombre };
}

export function CalculadoraIndividual({ producto, heading }: { producto: Producto; heading: ReactNode }) {
  const copy = calculadoraIndividual;
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const fecha = parsearFecha(params.get("fecha"));
  const nombre = limpiarNombre(params.get("nombre"));
  const [form, setForm] = useState<FechaForm>(() => toForm(fecha, nombre));
  const [invalid, setInvalid] = useState(false);
  const [run, setRun] = useState(0);
  const [instant] = useState(() => typeof window !== "undefined" && window.location.hash === "#lectura-completa");
  const stage = useRef<HTMLDivElement>(null);
  const scrollPending = useRef(Boolean(fecha) && !instant);

  const key = fecha ? `${fechaParam(fecha)}-${nombre}-${run}` : "";

  useEffect(() => {
    if (!key || !scrollPending.current || !stage.current) return;
    scrollPending.current = false;
    if (lenis) lenis.scrollTo(stage.current, { offset: -72 });
    else stage.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [key, lenis]);

  useEffect(() => {
    if (!instant || !key) return;
    const id = window.setTimeout(() => {
      const target = document.getElementById("lectura-completa");
      if (!target) return;
      if (lenis) lenis.scrollTo(target, { offset: -72, immediate: true });
      else target.scrollIntoView();
    }, 60);
    return () => window.clearTimeout(id);
  }, [instant, key, lenis]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const candidata = { dia: Number(form.dia), mes: Number(form.mes), anio: Number(form.anio) };
    if (!fechaValida(candidata)) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    const query = new URLSearchParams({ fecha: fechaParam(candidata) });
    const limpio = limpiarNombre(form.nombre);
    if (limpio) query.set("nombre", limpio);
    track("calcular_matriz", { tipo: "individual" });
    scrollPending.current = true;
    setRun((value) => value + 1);
    router.replace(`${pathname}?${query.toString()}`, { scroll: false });
  }

  const matriz = fecha ? calcularMatriz(fecha) : null;
  const texto = fecha ? fechaTexto(fecha) : "";
  const pdfHref = fecha
    ? `/api/matriz/pdf?${new URLSearchParams({ tipo: "individual", fecha: fechaParam(fecha), ...(nombre ? { nombre } : {}) }).toString()}`
    : "";

  return (
    <>
      <CalculadoraHero heading={heading}>
        <form onSubmit={onSubmit} noValidate className="rounded-[1.25rem] bg-crema/90 p-6 shadow-[0_30px_70px_-45px_rgba(63,46,58,0.45)] backdrop-blur sm:p-9">
          <FechaCampos idPrefix="matriz" value={form} onChange={setForm} invalid={invalid} legend={copy.formTitle} />
          <p aria-live="polite" className="mt-3 min-h-6 text-sm text-rosa-deep">
            {invalid ? calculadoraForm.error : ""}
          </p>
          <Button type="submit" className="mt-2 w-full">
            {fecha ? copy.recalcular : copy.submit}
          </Button>
          <p className="mt-4 text-center text-sm text-ink-soft">{calculadoraForm.privacidad}</p>
        </form>
      </CalculadoraHero>

      {matriz && fecha && (
        <div key={key}>
          <section ref={stage} id="tu-matriz" aria-label={copy.stageLabel(texto)} className="relative overflow-hidden bg-ciruela py-16 text-crema sm:py-24">
            <div aria-hidden className="blob -left-40 top-10 size-[30rem] bg-malva/35" />
            <div aria-hidden className="blob -right-40 bottom-0 size-[28rem] bg-rosa/25" />
            <div className="container-page relative">
              <MatrizEscena
                puntos={matriz.puntos}
                etiquetas={copy.etiquetas}
                pasos={copy.pasos}
                valores={[
                  null,
                  String(fecha.dia),
                  String(fecha.mes),
                  `${fecha.anio} = ${matriz.puntos.c}`,
                  String(matriz.puntos.d),
                  `${matriz.puntos.e} · ${arcano(matriz.puntos.e)?.nombre ?? ""}`,
                  null,
                  null,
                  null,
                  null,
                ]}
                skip={copy.skip}
                label={copy.stageLabel(texto)}
                title={copy.stageTitle(nombre)}
                subtitle={texto}
                resultsId="lectura"
                resultsLabel={copy.verLectura}
                instant={instant}
                destacados={["e", "a", "b", "d", "dinero"]}
                edades={matriz.edades}
                propositos={matriz.propositos}
                actions={<PdfButton href={pdfHref} tipo="individual" label={copy.pdf.short} tone="dark" />}
              />
            </div>
          </section>

          <ResultadosSection id="lectura" eyebrow={copy.resultadosEyebrow} title={copy.resultadosTitle} tone="crema">
            <div className="grid gap-5 lg:grid-cols-12">
              <LecturaCard
                className="lg:col-span-12"
                size="lg"
                label={copy.posiciones.centro.label}
                intro={copy.posiciones.centro.text}
                numero={matriz.puntos.e}
                text={arcano(matriz.puntos.e)?.luz ?? ""}
              />
              <LecturaCard
                className="lg:col-span-6"
                label={copy.posiciones.energia.label}
                intro={copy.posiciones.energia.text}
                numero={matriz.puntos.a}
                text={matriz.puntos.a === matriz.puntos.e ? copy.repetida : (arcano(matriz.puntos.a)?.luz ?? "")}
              />
              <LecturaCard
                className="lg:col-span-6"
                label={copy.posiciones.talento.label}
                intro={copy.posiciones.talento.text}
                numero={matriz.puntos.b}
                text={arcano(matriz.puntos.b)?.talento ?? ""}
              />
              <TrioCard
                className="lg:col-span-6"
                label={copy.trios.talentos.label}
                intro={copy.trios.talentos.text}
                numeros={[matriz.puntos.b, matriz.puntos.b2, matriz.puntos.b1]}
              />
              <TrioCard
                className="lg:col-span-6"
                label={copy.trios.cola.label}
                intro={copy.trios.cola.text}
                numeros={[matriz.puntos.d1, matriz.puntos.d2, matriz.puntos.d]}
              />
            </div>
          </ResultadosSection>

          <ResultadosSection id="propositos" eyebrow={copy.propositos.eyebrow} title={copy.propositos.title} text={copy.propositos.text} tone="lavanda">
            <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <li>
                <PropositoCard
                  label={copy.propositos.personal.label}
                  etapa={copy.propositos.personal.etapa}
                  partes={copy.propositos.personal.partes}
                  valores={[matriz.propositos.cielo, matriz.propositos.tierra]}
                  resultado={matriz.propositos.personal}
                />
              </li>
              <li>
                <PropositoCard
                  label={copy.propositos.social.label}
                  etapa={copy.propositos.social.etapa}
                  partes={copy.propositos.social.partes}
                  valores={[matriz.propositos.masculino, matriz.propositos.femenino]}
                  resultado={matriz.propositos.social}
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
              <li>
                <PropositoCard
                  label={copy.propositos.planetario.label}
                  etapa={copy.propositos.planetario.etapa}
                  partes={copy.propositos.planetario.partes}
                  valores={[matriz.propositos.social, matriz.propositos.espiritual]}
                  resultado={matriz.propositos.planetario}
                />
              </li>
            </ul>
            <Descubrelo href={productHref(producto)} label={copy.descubrelo} />
          </ResultadosSection>

          <ResultadosSection id="linaje" eyebrow={copy.linaje.eyebrow} title={copy.linaje.title} text={copy.linaje.text} tone="lavanda">
            <Linaje puntos={matriz.puntos} masculino={matriz.propositos.masculino} femenino={matriz.propositos.femenino} />
            <Descubrelo href={productHref(producto)} label={copy.descubrelo} />
          </ResultadosSection>

          <ResultadosSection id="lo-que-guarda" eyebrow={copy.bloqueadas.eyebrow} title={copy.bloqueadas.title} text={copy.bloqueadas.text} tone="salvia">
            <ul className="grid gap-5 md:grid-cols-2">
              <li>
                <BloqueadaCard
                  label={copy.bloqueadas.aprendizajes.label}
                  intro={copy.bloqueadas.aprendizajes.text}
                  numero={matriz.puntos.d}
                  text={arcano(matriz.puntos.d)?.sombra ?? ""}
                  lock={copy.bloqueadas.lock}
                />
              </li>
              <li>
                <BloqueadaCard
                  label={copy.bloqueadas.material.label}
                  intro={copy.bloqueadas.material.text}
                  numero={matriz.puntos.dinero}
                  text={arcano(matriz.puntos.dinero)?.dinero ?? ""}
                  lock={copy.bloqueadas.lock}
                />
              </li>
            </ul>
          </ResultadosSection>

          <section id="lectura-completa" aria-labelledby="lectura-completa-title" className="section-pad relative overflow-hidden bg-crema">
            <div className="container-page relative grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-5">{copy.completa.eyebrow}</p>
                <h2 id="lectura-completa-title" className="text-h2">
                  {copy.completa.title}
                </h2>
                <p className="mt-5 text-lead text-ink-soft">{copy.completa.text}</p>
                <ol className="mt-8 grid gap-3 sm:grid-cols-2">
                  {copy.completa.claves.map((clave, index) => (
                    <li key={clave} className="flex items-center gap-3 rounded-2xl bg-rosa-polvo/70 px-5 py-4">
                      <span className="nums font-serif text-2xl text-rosa-deep">{index + 1}</span>
                      <span className="text-ciruela">{clave}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 font-serif text-[1.35rem] italic text-ciruela">{copy.completa.mas}</p>
                <p className="mt-6 text-ink-soft">{copy.completa.formato}</p>
              </div>
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <BuyBox producto={producto} detalle={detalleIndividual(texto, nombre)} origen="calculadora" />
                  <TrackedAnchor
                    href={whatsappHref(infoIndividualMessage(texto, nombre))}
                    target="_blank"
                    rel="noopener noreferrer"
                    event="click_info_whatsapp"
                    data={{ producto: producto.slug, origen: "calculadora" }}
                    className="mt-5 flex min-h-11 items-center justify-center gap-2 font-medium text-ciruela"
                  >
                    <WhatsappIcon size={18} />
                    <span className="link-underline-static">{copy.completa.info}</span>
                  </TrackedAnchor>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
