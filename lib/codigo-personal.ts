import type { Fecha } from "./matriz";

export type Genero = "mujer" | "hombre";

export type Mapa = { filas: [number[], number[], number[]]; centro: number; desafio: number };

export type CicloAnio = { anio: number; arcano: number; carta: boolean };

export type CodigoPersonal = {
  personal: number;
  secundario: number;
  desafio: number;
  complementos: [number, number];
  anioVigente: number;
  anual: number;
  anioActual: number;
  arcanoDelAnio: number;
  mapaNatal: Mapa;
  mapaAnual: Mapa;
  mapaDelAnio: Mapa;
  ciclo: CicloAnio[];
};

export const sumarDigitos = (n: number) => [...String(Math.abs(n))].reduce((total, digito) => total + Number(digito), 0);

export const carta = (n: number) => (n === 22 ? 0 : n);

export const desafioDe = (n: number) => (carta(n) === 0 ? 21 : carta(n) - 1);

const romanos = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"];

export const romano = (n: number) => romanos[n] ?? String(n);

export function arcanoPersonal(dia: number, mes: number, anio: number) {
  let a = dia;
  let b = mes;
  let c = anio;
  for (let vuelta = 0; vuelta < 500; vuelta++) {
    let suma = a + b + c;
    if (suma >= 4 && suma <= 21) return suma;
    const simples = a < 10 && b < 10 && c < 10;
    if (suma === 22 && simples) return 22;
    if (suma > 22 && simples) {
      while (suma > 22) suma = sumarDigitos(suma);
      if (suma >= 4 && suma <= 21) return suma;
    }
    const mayor = Math.max(a, b, c);
    if (mayor === a) a = sumarDigitos(a);
    else if (mayor === b) b = sumarDigitos(b);
    else c = sumarDigitos(c);
  }
  return 0;
}

export function arcanoSecundario(p: number) {
  if (p === 22) return 4;
  if (p >= 4 && p <= 9) return p + 9;
  return sumarDigitos(p);
}

export function complementosDe(p: number): [number, number] {
  return p < 10 ? [0, p] : [Math.floor(p / 10), p % 10];
}

export function arcanoDelAnio(anio: number) {
  let suma = sumarDigitos(anio);
  while (suma > 22) suma = sumarDigitos(suma);
  return suma;
}

export function mapaDesde(centro: number): Mapa {
  const inicio = carta(centro);
  const cartas = Array.from({ length: 21 }, (_, index) => (inicio + index) % 22);
  return { filas: [cartas.slice(0, 7), cartas.slice(7, 14), cartas.slice(14, 21)], centro: inicio, desafio: desafioDe(centro) };
}

export function anioVigente(dia: number, mes: number, hoy: Date) {
  const cumple = new Date(hoy.getFullYear(), mes - 1, dia);
  return hoy < cumple ? hoy.getFullYear() - 1 : hoy.getFullYear();
}

export function calcularCodigo({ dia, mes, anio }: Fecha, hoy: Date): CodigoPersonal {
  const personal = arcanoPersonal(dia, mes, anio);
  const vigente = anioVigente(dia, mes, hoy);
  const anual = arcanoPersonal(dia, mes, vigente);
  const anioActual = hoy.getFullYear();
  const delAnio = arcanoDelAnio(anioActual);
  const ciclo: CicloAnio[] = [];
  for (let year = anio; year <= vigente; year++) {
    ciclo.push({ anio: year, arcano: carta(year === anio ? personal : arcanoPersonal(dia, mes, year)), carta: year === anio || year === vigente });
  }
  return {
    personal,
    secundario: arcanoSecundario(personal),
    desafio: desafioDe(personal),
    complementos: complementosDe(personal),
    anioVigente: vigente,
    anual,
    anioActual,
    arcanoDelAnio: delAnio,
    mapaNatal: mapaDesde(personal),
    mapaAnual: mapaDesde(anual),
    mapaDelAnio: mapaDesde(delAnio),
    ciclo,
  };
}

export const clavesVinculo = (genero: Genero) => [6, genero === "mujer" ? 3 : 4, 11, 15, 21];

export function cartaEnPosicion(mapa: Mapa, posicion: number) {
  return mapa.filas.flat()[posicion - 1]!;
}

export function hoyEnEspana() {
  const partes = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Madrid", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  const [year, month, day] = partes.split("-").map(Number);
  return new Date(year!, month! - 1, day!);
}
