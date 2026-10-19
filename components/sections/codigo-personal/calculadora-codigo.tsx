"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent, type ReactNode } from "react";
import { Check, Share2 } from "lucide-react";
import { track } from "@vercel/analytics";
import { calculadoraForm } from "@/content/calculadora";
import { codigoPersonal, infoCodigoMessage, mazos, type Mazo } from "@/content/codigo-personal";
import type { Producto } from "@/content/tienda";
import { useLenis } from "@/components/layout/smooth-scroll";
import { FechaCampos, fechaVacia, type FechaForm } from "@/components/sections/calculadora/fecha-campos";
import { CalculadoraHero } from "@/components/sections/calculadora/layout";
import { PdfButton, PdfCard } from "@/components/sections/calculadora/pdf-card";
import { BuyBox } from "@/components/sections/tienda/buy-box";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { TrackedAnchor } from "@/components/ui/tracked";
import { calcularCodigo, carta } from "@/lib/codigo-personal";
import { fechaParam, fechaTexto, fechaValida, limpiarNombre, parsearFecha, type Fecha } from "@/lib/matriz";
import { cn, whatsappHref } from "@/lib/utils";
import { CicloVital, TableroMapa, TableroPerfil } from "./tableros";
import { Vinculo } from "./vinculo";

const sinSuscripcion = () => () => {};
const hoyCliente = () => new Date().toDateString();
const hoyServidor = () => null;

function toForm(fecha: Fecha | null, nombre: string): FechaForm {
  return fecha ? { dia: String(fecha.dia), mes: String(fecha.mes), anio: String(fecha.anio), nombre } : { ...fechaVacia, nombre };
}

export function SelectorMazo({ value, onChange }: { value: Mazo; onChange: (mazo: Mazo) => void }) {
  return (
    <fieldset>
      <legend className="eyebrow mb-2">{codigoPersonal.mazo}</legend>
      <div className="grid grid-cols-2 gap-2 rounded-full bg-ciruela/5 p-1">
        {mazos.map((mazo) => (
          <button
            key={mazo.id}
            type="button"
            aria-pressed={value === mazo.id}
            onClick={() => onChange(mazo.id)}
            className={cn(
              "min-h-11 rounded-full px-4 text-[0.95rem] font-medium transition-colors duration-300",
              value === mazo.id ? "bg-ciruela text-crema" : "text-ciruela hover:bg-ciruela/10",
            )}
          >
            {mazo.label}
          </button>
        ))}
      </div>
      <p className="mt-1.5 text-sm text-ink-soft">{codigoPersonal.mazoHint}</p>
    </fieldset>
  );
}

function Bloque({ id, title, children, aside }: { id: string; title: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <section aria-labelledby={`${id}-title`} className="border-t border-crema/10 pt-12 first:border-t-0 first:pt-0 sm:pt-16">
      <div className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <h2 id={`${id}-title`} className="font-serif text-[clamp(2rem,1.6rem+1.6vw,3rem)] leading-tight text-crema">
          {title}
        </h2>
        {aside}
      </div>
      {children}
    </section>
  );
}

export function CalculadoraCodigo({ producto, heading }: { producto: Producto; heading: ReactNode }) {
  const copy = codigoPersonal;
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const hoy = useSyncExternalStore(sinSuscripcion, hoyCliente, hoyServidor);
  const fecha = parsearFecha(params.get("fecha"));
  const nombre = limpiarNombre(params.get("nombre"));
  const mazo: Mazo = params.get("mazo") === "sopraffino" ? "sopraffino" : "rider";
  const [form, setForm] = useState<FechaForm>(() => toForm(fecha, nombre));
  const [invalid, setInvalid] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const [run, setRun] = useState(0);
  const stage = useRef<HTMLElement>(null);
  const scrollPending = useRef(Boolean(fecha));

  const fechaHoy = hoy ? new Date(hoy) : null;
  const resultado = fecha && fechaHoy ? calcularCodigo(fecha, fechaHoy) : null;
  const key = resultado && fecha ? `${fechaParam(fecha)}-${run}` : "";

  useEffect(() => {
    if (!key || !scrollPending.current || !stage.current) return;
    scrollPending.current = false;
    if (lenis) lenis.scrollTo(stage.current, { offset: -72 });
    else stage.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [key, lenis]);

  function navegar(query: URLSearchParams) {
    router.replace(`${pathname}?${query.toString()}`, { scroll: false });
  }

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
    if (mazo !== "rider") query.set("mazo", mazo);
    track("calcular_codigo_personal", { mazo });
    scrollPending.current = true;
    setRun((value) => value + 1);
    navegar(query);
  }

  function cambiarMazo(siguiente: Mazo) {
    const query = new URLSearchParams(params.toString());
    if (siguiente === "rider") query.delete("mazo");
    else query.set("mazo", siguiente);
    navegar(query);
  }

  async function compartir() {
    if (!resultado) return;
    const datos = { title: copy.perfil.title, text: copy.compartir.texto(resultado.personal, carta(resultado.anual)), url: window.location.href };
    track("compartir_codigo_personal");
    if (navigator.share) {
      try {
        await navigator.share(datos);
      } catch {
        return;
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(`${datos.text} ${datos.url}`);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 2500);
    } catch {
      window.prompt(copy.compartir.button, `${datos.text} ${datos.url}`);
    }
  }

  const texto = fecha ? fechaTexto(fecha) : "";
  const cumple = fecha ? `${String(fecha.dia).padStart(2, "0")}/${String(fecha.mes).padStart(2, "0")}` : "";
  const pdfHref = fecha
    ? `/api/codigo-personal/pdf?${new URLSearchParams({ fecha: fechaParam(fecha), ...(nombre ? { nombre } : {}), ...(mazo !== "rider" ? { mazo } : {}) }).toString()}`
    : "";

  return (
    <>
      <CalculadoraHero heading={heading}>
        <form onSubmit={onSubmit} noValidate className="rounded-[1.25rem] bg-crema/90 p-6 shadow-[0_30px_70px_-45px_rgba(63,46,58,0.45)] backdrop-blur sm:p-9">
          <FechaCampos idPrefix="codigo" value={form} onChange={setForm} invalid={invalid} legend={copy.formTitle} />
          <div className="mt-6">
            <SelectorMazo value={mazo} onChange={cambiarMazo} />
          </div>
          <p aria-live="polite" className="mt-3 min-h-6 text-sm text-rosa-deep">
            {invalid ? calculadoraForm.error : ""}
          </p>
          <Button type="submit" className="mt-2 w-full">
            {fecha ? copy.recalcular : copy.submit}
          </Button>
          <p className="mt-4 text-center text-sm text-ink-soft">{copy.privacidad}</p>
        </form>
      </CalculadoraHero>

      {resultado && fecha && fechaHoy && (
        <div key={key}>
          <section
            ref={stage}
            id="tu-codigo"
            aria-label={copy.resultadosLabel(texto)}
            className="relative overflow-hidden bg-ciruela py-16 text-crema sm:py-24"
          >
            <div aria-hidden className="blob -left-40 top-10 size-[30rem] bg-malva/35" />
            <div aria-hidden className="blob -right-40 top-1/3 size-[28rem] bg-rosa/25" />
            <div className="container-page relative flex flex-col gap-12 sm:gap-16">
              <header className="text-center">
                <p className="eyebrow text-crema/70">{texto}</p>
                <p className="mt-4 font-serif text-[clamp(2.4rem,1.8rem+2.4vw,4rem)] italic leading-tight">{copy.resultadosTitle(nombre)}</p>
                <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
                  {[
                    [copy.pills.personal, String(resultado.personal)],
                    [copy.pills.secundario, String(resultado.secundario)],
                    [copy.pills.desafio, String(resultado.desafio)],
                    [copy.pills.complementos, `${resultado.complementos[0]} · ${resultado.complementos[1]}`],
                    [copy.pills.anual, String(carta(resultado.anual))],
                  ].map(([label, valor]) => (
                    <li key={label} className="rounded-full border border-crema/20 bg-crema/5 px-4 py-2 text-sm">
                      {label}: <strong className="nums font-semibold text-dorado-soft">{valor}</strong>
                    </li>
                  ))}
                </ul>
              </header>

              <Bloque id="perfil" title={copy.perfil.title} aside={<p className="max-w-md text-crema/70">{copy.perfil.text}</p>}>
                <TableroPerfil
                  mazo={mazo}
                  personal={carta(resultado.personal)}
                  secundario={carta(resultado.secundario)}
                  complementos={resultado.complementos}
                  desafio={carta(resultado.desafio)}
                />
              </Bloque>

              <Bloque id="mapa-natal" title={copy.natal.title} aside={<p className="max-w-md text-crema/70">{copy.natal.text}</p>}>
                <TableroMapa mazo={mazo} mapa={resultado.mapaNatal} />
              </Bloque>

              <Bloque
                id="mapa-anual"
                title={copy.anual.title}
                aside={
                  <p className="text-crema/80 lg:text-right">
                    <span className="nums block font-serif text-[2.6rem] leading-none text-dorado-soft">{resultado.anioVigente}</span>
                    <span className="mt-2 block">
                      {copy.anual.arcano}: <strong className="nums text-dorado-soft">{carta(resultado.anual)}</strong>
                    </span>
                    <span className="block text-sm text-crema/60">{copy.anual.cambia(cumple)}</span>
                  </p>
                }
              >
                <p className="mb-8 max-w-3xl text-crema/75">{copy.anual.text}</p>
                <TableroMapa mazo={mazo} mapa={resultado.mapaAnual} />
              </Bloque>

              <Bloque
                id="mapa-del-anio"
                title={copy.delAnio.title}
                aside={
                  <p className="text-crema/80 lg:text-right">
                    <span className="nums block font-serif text-[2.6rem] leading-none text-dorado-soft">{resultado.anioActual}</span>
                    <span className="mt-2 block">
                      {copy.delAnio.arcano}: <strong className="nums text-dorado-soft">{carta(resultado.arcanoDelAnio)}</strong>
                    </span>
                  </p>
                }
              >
                <p className="mb-8 max-w-3xl text-crema/75">{copy.delAnio.text}</p>
                <TableroMapa mazo={mazo} mapa={resultado.mapaDelAnio} />
              </Bloque>

              <section aria-labelledby="ciclo-title" className="border-t border-crema/10 pt-12 sm:pt-16">
                <details className="group">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                    <h2 id="ciclo-title" className="font-serif text-[clamp(2rem,1.6rem+1.6vw,3rem)] leading-tight text-crema">
                      {copy.ciclo.title}
                    </h2>
                    <span className="rounded-full border border-crema/30 px-5 py-2.5 text-sm text-crema transition-colors group-open:bg-crema group-open:text-ciruela">
                      <span className="group-open:hidden">{copy.ciclo.summary}</span>
                      <span className="hidden group-open:inline">{copy.ciclo.ocultar}</span>
                    </span>
                  </summary>
                  <p className="mb-10 mt-6 max-w-3xl text-crema/75">{copy.ciclo.text}</p>
                  <CicloVital mazo={mazo} ciclo={resultado.ciclo} />
                </details>
              </section>

              <div className="flex flex-wrap justify-center gap-3 border-t border-crema/10 pt-12">
                <PdfButton href={pdfHref} tipo={mazo} evento="descarga_pdf_codigo" label={copy.pdf.button} tone="dark" />
                <button
                  type="button"
                  onClick={compartir}
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-crema/35 px-7 py-3 text-[0.95rem] font-medium text-crema transition-colors duration-500 hover:border-crema/80 hover:bg-white/5"
                >
                  {copiado ? <Check size={18} strokeWidth={1.5} aria-hidden /> : <Share2 size={18} strokeWidth={1.25} aria-hidden />}
                  <span aria-live="polite">{copiado ? copy.compartir.copiado : copy.compartir.button}</span>
                </button>
              </div>
            </div>
          </section>

          <Vinculo mazo={mazo} fecha={fecha} personal={resultado.personal} hoy={fechaHoy} />

          <section id="lectura-completa" aria-labelledby="lectura-codigo-title" className="section-pad relative overflow-hidden bg-crema">
            <div className="container-page relative grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-5">{copy.lectura.eyebrow}</p>
                <h2 id="lectura-codigo-title" className="text-h2">
                  {copy.lectura.title}
                </h2>
                <p className="mt-5 text-lead text-ink-soft">{copy.lectura.text}</p>
                <ol className="mt-8 grid gap-3 sm:grid-cols-2">
                  {producto.incluye.map((item, index) => (
                    <li key={item.titulo} className="flex items-center gap-3 rounded-2xl bg-rosa-polvo/70 px-5 py-4">
                      <span className="nums font-serif text-2xl text-rosa-deep">{index + 1}</span>
                      <span className="text-ciruela">{item.titulo}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-10">
                  <PdfCard copy={copy.pdf} href={pdfHref} tipo={mazo} evento="descarga_pdf_codigo" />
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <BuyBox producto={producto} detalle={`Nací el ${texto}.`} origen="codigo-personal" />
                  <TrackedAnchor
                    href={whatsappHref(infoCodigoMessage(texto, nombre))}
                    target="_blank"
                    rel="noopener noreferrer"
                    event="click_info_whatsapp"
                    data={{ producto: producto.slug, origen: "codigo-personal" }}
                    className="mt-5 flex min-h-11 items-center justify-center gap-2 font-medium text-ciruela"
                  >
                    <WhatsappIcon size={18} />
                    <span className="link-underline-static">{copy.lectura.cta}</span>
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
