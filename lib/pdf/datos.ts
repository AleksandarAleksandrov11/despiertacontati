import { infoIndividualMessage, rutasCalculadora } from "@/content/calculadora";
import { infoCodigoMessage, type Mazo } from "@/content/codigo-personal";
import { site } from "@/content/site";
import { getProducto } from "@/content/tienda";
import {
  calcularMatriz,
  edadCumplida,
  energiasDelAnio,
  fechaParam,
  fechaTexto,
  limpiarNombre,
  parsearFecha,
  type EnergiasAnio,
  type Fecha,
  type Matriz,
} from "@/lib/matriz";
import { calcularCodigo } from "@/lib/codigo-personal";
import { formatPrice, productHref } from "@/lib/tienda";
import { whatsappHref } from "@/lib/utils";
import type { DatosCodigo } from "./codigo-pdf";

export type Persona = { fecha: Fecha; texto: string; nombre: string };

type Comun = { matriz: Matriz; archivo: string };

export type DatosPdf = Comun & { tipo: "individual"; persona: Persona; precio: string | null; compraUrl: string; tiendaUrl: string; infoUrl: string };

export type DatosCompleta = Comun & { tipo: "completa"; persona: Persona; anio: EnergiasAnio | null };

function baseUrl(origin: string) {
  const propio = new URL(site.url).hostname.replace(/^www\./, "");
  const hostname = URL.canParse(origin) ? new URL(origin).hostname : "";
  const permitido = hostname === "localhost" || hostname.endsWith(".vercel.app") || hostname.replace(/^www\./, "") === propio;
  return permitido ? origin : site.url;
}

function hoyEnEspana() {
  const partes = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Madrid", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  const [year, month, day] = partes.split("-").map(Number);
  return new Date(year!, month! - 1, day!);
}

function persona(fecha: Fecha, nombre: string): Persona {
  return { fecha, texto: fechaTexto(fecha), nombre };
}

function archivo(fecha: Fecha) {
  return `matriz-del-destino-${fechaTexto(fecha).replace(/\//g, "-")}.pdf`;
}

export function datosDesdeParams(params: URLSearchParams, origin: string): DatosPdf | null {
  const tipo = params.get("tipo");
  const base = baseUrl(origin);
  if (tipo === "individual") {
    const fecha = parsearFecha(params.get("fecha"));
    if (!fecha) return null;
    const nombre = limpiarNombre(params.get("nombre"));
    const producto = getProducto("analisis-matriz-del-destino");
    const query = new URLSearchParams({ fecha: fechaParam(fecha), ...(nombre ? { nombre } : {}) });
    const texto = fechaTexto(fecha);
    return {
      tipo,
      persona: persona(fecha, nombre),
      matriz: calcularMatriz(fecha),
      precio: producto?.precio ? formatPrice(producto.precio) : null,
      compraUrl: `${base}${rutasCalculadora.individual}?${query.toString()}#lectura-completa`,
      tiendaUrl: producto ? `${base}${productHref(producto)}` : `${base}/tienda`,
      infoUrl: whatsappHref(infoIndividualMessage(texto, nombre)),
      archivo: archivo(fecha),
    };
  }
  return null;
}

export function datosCompleta(params: URLSearchParams): DatosCompleta | null {
  const fecha = parsearFecha(params.get("fecha"));
  if (!fecha) return null;
  const matriz = calcularMatriz(fecha);
  return {
    tipo: "completa",
    persona: persona(fecha, limpiarNombre(params.get("nombre"))),
    matriz,
    anio: energiasDelAnio(matriz.edades, edadCumplida(fecha, hoyEnEspana())),
    archivo: `lectura-completa-${archivo(fecha)}`,
  };
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
