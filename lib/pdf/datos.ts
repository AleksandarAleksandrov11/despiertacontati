import { infoIndividualMessage, infoParejaMessage, rutasCalculadora } from "@/content/calculadora";
import { getProducto } from "@/content/tienda";
import { calcularMatriz, calcularPareja, fechaParam, fechaTexto, limpiarNombre, parsearFecha, type Fecha, type Matriz } from "@/lib/matriz";
import { formatPrice } from "@/lib/tienda";
import { absoluteUrl, whatsappHref } from "@/lib/utils";

export type Persona = { fecha: Fecha; texto: string; nombre: string; centro: number };

type Comun = {
  matriz: Matriz;
  precio: string | null;
  compraUrl: string;
  infoUrl: string;
  archivo: string;
};

export type DatosPdf = (Comun & { tipo: "individual"; persona: Persona }) | (Comun & { tipo: "pareja"; personas: [Persona, Persona] });

function persona(fecha: Fecha, nombre: string): Persona {
  return { fecha, texto: fechaTexto(fecha), nombre, centro: calcularMatriz(fecha).puntos.e };
}

function archivo(...fechas: Fecha[]) {
  return `matriz-del-destino-${fechas.map((fecha) => fechaTexto(fecha).replace(/\//g, "-")).join("-y-")}.pdf`;
}

export function datosDesdeParams(params: URLSearchParams): DatosPdf | null {
  const tipo = params.get("tipo");
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
      compraUrl: `${absoluteUrl(rutasCalculadora.individual)}?${query.toString()}#lectura-completa`,
      infoUrl: whatsappHref(infoIndividualMessage(texto, nombre)),
      archivo: archivo(fecha),
    };
  }
  if (tipo === "pareja") {
    const fecha1 = parsearFecha(params.get("fecha1"));
    const fecha2 = parsearFecha(params.get("fecha2"));
    if (!fecha1 || !fecha2) return null;
    const nombre1 = limpiarNombre(params.get("nombre1"));
    const nombre2 = limpiarNombre(params.get("nombre2"));
    const personas: [Persona, Persona] = [persona(fecha1, nombre1), persona(fecha2, nombre2)];
    const query = new URLSearchParams({
      fecha1: fechaParam(fecha1),
      fecha2: fechaParam(fecha2),
      ...(nombre1 ? { nombre1 } : {}),
      ...(nombre2 ? { nombre2 } : {}),
    });
    const producto = getProducto("matriz-del-destino-pareja");
    return {
      tipo,
      personas,
      matriz: calcularPareja(fecha1, fecha2),
      precio: producto?.precio ? formatPrice(producto.precio) : null,
      compraUrl: `${absoluteUrl(rutasCalculadora.pareja)}?${query.toString()}#lectura-completa`,
      infoUrl: whatsappHref(infoParejaMessage(personas.map((item) => ({ fecha: item.texto, nombre: item.nombre })))),
      archivo: archivo(fecha1, fecha2),
    };
  }
  return null;
}
