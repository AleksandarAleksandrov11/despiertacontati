import { infoIndividualMessage, rutasCalculadora } from "@/content/calculadora";
import { infoCodigoMessage, type Mazo } from "@/content/codigo-personal";
import { site } from "@/content/site";
import { getProducto } from "@/content/tienda";
import { calcularMatriz, calcularPareja, edadEnAnios, fechaParam, fechaTexto, limpiarNombre, parsearFecha, type Fecha, type Matriz } from "@/lib/matriz";
import { calcularCodigo } from "@/lib/codigo-personal";
import { formatPrice } from "@/lib/tienda";
import { whatsappHref } from "@/lib/utils";
import type { DatosCodigo } from "./codigo-pdf";

export type Persona = { fecha: Fecha; texto: string; nombre: string; centro: number };

type Comun = { matriz: Matriz; archivo: string };

export type DatosPdf =
  | (Comun & { tipo: "individual"; persona: Persona; edad: number; precio: string | null; compraUrl: string; infoUrl: string })
  | (Comun & { tipo: "pareja"; personas: [Persona, Persona] });

function baseUrl(origin: string) {
  const propio = new URL(site.url).hostname.replace(/^www\./, "");
  const hostname = URL.canParse(origin) ? new URL(origin).hostname : "";
  const permitido = hostname === "localhost" || hostname.endsWith(".vercel.app") || hostname.replace(/^www\./, "") === propio;
  return permitido ? origin : site.url;
}

function persona(fecha: Fecha, nombre: string): Persona {
  return { fecha, texto: fechaTexto(fecha), nombre, centro: calcularMatriz(fecha).puntos.e };
}

function archivo(...fechas: Fecha[]) {
  return `matriz-del-destino-${fechas.map((fecha) => fechaTexto(fecha).replace(/\//g, "-")).join("-y-")}.pdf`;
}

export function datosDesdeParams(params: URLSearchParams, origin: string): DatosPdf | null {
  const tipo = params.get("tipo");
  const base = baseUrl(origin);
  if (tipo === "individual") {
    const fecha = parsearFecha(params.get("fecha"));
    if (!fecha) return null;
    const nombre = limpiarNombre(params.get("nombre"));
    const producto = getProducto("matriz-del-destino");
    const query = new URLSearchParams({ fecha: fechaParam(fecha), ...(nombre ? { nombre } : {}) });
    const texto = fechaTexto(fecha);
    return {
      tipo,
      persona: persona(fecha, nombre),
      matriz: calcularMatriz(fecha),
      precio: producto?.precio ? formatPrice(producto.precio) : null,
      compraUrl: `${base}${rutasCalculadora.individual}?${query.toString()}#lectura-completa`,
      infoUrl: whatsappHref(infoIndividualMessage(texto, nombre)),
      archivo: archivo(fecha),
      edad: edadEnAnios(fecha),
    };
  }
  if (tipo === "pareja") {
    const fecha1 = parsearFecha(params.get("fecha1"));
    const fecha2 = parsearFecha(params.get("fecha2"));
    if (!fecha1 || !fecha2) return null;
    const nombre1 = limpiarNombre(params.get("nombre1"));
    const nombre2 = limpiarNombre(params.get("nombre2"));
    return {
      tipo,
      personas: [persona(fecha1, nombre1), persona(fecha2, nombre2)],
      matriz: calcularPareja(fecha1, fecha2),
      archivo: archivo(fecha1, fecha2),
    };
  }
  return null;
}

export function datosCodigo(params: URLSearchParams, origin: string): DatosCodigo | null {
  const fecha = parsearFecha(params.get("fecha"));
  if (!fecha) return null;
  const nombre = limpiarNombre(params.get("nombre"));
  const mazo: Mazo = params.get("mazo") === "sopraffino" ? "sopraffino" : "rider";
  const producto = getProducto("tu-codigo-personal");
  const texto = fechaTexto(fecha);
  const query = new URLSearchParams({ fecha: fechaParam(fecha), ...(nombre ? { nombre } : {}), ...(mazo !== "rider" ? { mazo } : {}) });
  return {
    resultado: calcularCodigo(fecha),
    mazo,
    nombre,
    texto,
    precio: producto?.precio ? formatPrice(producto.precio) : null,
    compraUrl: `${baseUrl(origin)}${rutasCalculadora.codigo}?${query.toString()}#lectura-completa`,
    infoUrl: whatsappHref(infoCodigoMessage(texto, nombre)),
    archivo: `codigo-personal-${texto.replace(/\//g, "-")}.pdf`,
  };
}
