import type { Puntos } from "./matriz";

export const lienzo = { size: 400, centro: 200, radio: 164, anillo: 192 };

export type TipoPunto = "centro" | "personal" | "material" | "esquina" | "interno" | "corazon" | "canal" | "linaje";

export type PuntoMatriz = {
  key: keyof Puntos;
  x: number;
  y: number;
  r: number;
  tipo: TipoPunto;
  delay: number;
  soloIndividual?: boolean;
};

export type LineaMatriz = { id: string; d: string; tipo: "rombo" | "cuadrado" | "eje" | "diagonal" | "canal"; delay: number };

export const tiempos = {
  rombo: 0.3,
  vertices: [0.9, 1.2, 1.5, 1.8],
  ejes: 2.1,
  centro: 2.6,
  cuadrado: 3.0,
  esquinas: [3.3, 3.45, 3.6, 3.75],
  diagonales: 3.9,
  internos: 4.2,
  canal: 5.2,
  anillo: 5.5,
  final: 6.5,
};

export const pasosEnTiempo = {
  individual: [0, 0.9, 1.2, 1.5, 1.8, 2.6, 3.0, 4.2, 5.5, 6.5],
  pareja: [0, 0.9, 1.2, 1.5, 1.8, 2.6, 3.0, 4.2, 5.9],
};

export type Variante = keyof typeof pasosEnTiempo;

const { centro: c, radio: r } = lienzo;
const diag = r / Math.SQRT2;

export const redondear = (n: number) => Math.round(n * 1000) / 1000;

function haciaCentro(x: number, y: number, t: number) {
  return { x: redondear(x + (c - x) * t), y: redondear(y + (c - y) * t) };
}

const vertices = {
  a: { x: c - r, y: c },
  b: { x: c, y: c - r },
  c: { x: c + r, y: c },
  d: { x: c, y: c + r },
};

const esquinas = {
  f: { x: redondear(c - diag), y: redondear(c - diag) },
  g: { x: redondear(c + diag), y: redondear(c - diag) },
  h: { x: redondear(c + diag), y: redondear(c + diag) },
  i: { x: redondear(c - diag), y: redondear(c + diag) },
};

function buildPuntos(): PuntoMatriz[] {
  const list: PuntoMatriz[] = [];
  (["a", "b", "c", "d"] as const).forEach((key, index) => {
    list.push({ key, ...vertices[key], r: 17, tipo: key === "a" || key === "b" ? "personal" : "material", delay: tiempos.vertices[index]! });
  });
  list.push({ key: "e", x: c, y: c, r: 23, tipo: "centro", delay: tiempos.centro });
  (["f", "g", "h", "i"] as const).forEach((key, index) => {
    list.push({ key, ...esquinas[key], r: 14, tipo: "esquina", delay: tiempos.esquinas[index]! });
  });
  const internos: { key: keyof Puntos; desde: { x: number; y: number }; t: number; tipo: TipoPunto; r: number; soloIndividual?: boolean }[] = [
    { key: "a2", desde: vertices.a, t: 0.2, tipo: "interno", r: 10 },
    { key: "a1", desde: vertices.a, t: 0.38, tipo: "interno", r: 10 },
    { key: "a3", desde: vertices.a, t: 0.6, tipo: "corazon", r: 9, soloIndividual: true },
    { key: "b2", desde: vertices.b, t: 0.2, tipo: "interno", r: 10 },
    { key: "b1", desde: vertices.b, t: 0.38, tipo: "interno", r: 10 },
    { key: "b3", desde: vertices.b, t: 0.6, tipo: "corazon", r: 9, soloIndividual: true },
    { key: "c2", desde: vertices.c, t: 0.2, tipo: "interno", r: 10 },
    { key: "c1", desde: vertices.c, t: 0.38, tipo: "interno", r: 10 },
    { key: "d2", desde: vertices.d, t: 0.2, tipo: "interno", r: 10 },
    { key: "d1", desde: vertices.d, t: 0.38, tipo: "interno", r: 10 },
    { key: "k1", desde: vertices.c, t: 0.62, tipo: "linaje", r: 9, soloIndividual: true },
    { key: "k", desde: vertices.c, t: 0.77, tipo: "linaje", r: 9, soloIndividual: true },
    { key: "f2", desde: esquinas.f, t: 0.22, tipo: "interno", r: 9, soloIndividual: true },
    { key: "f1", desde: esquinas.f, t: 0.4, tipo: "interno", r: 9, soloIndividual: true },
    { key: "g2", desde: esquinas.g, t: 0.22, tipo: "interno", r: 9, soloIndividual: true },
    { key: "g1", desde: esquinas.g, t: 0.4, tipo: "interno", r: 9, soloIndividual: true },
    { key: "h2", desde: esquinas.h, t: 0.22, tipo: "interno", r: 9, soloIndividual: true },
    { key: "h1", desde: esquinas.h, t: 0.4, tipo: "interno", r: 9, soloIndividual: true },
    { key: "i2", desde: esquinas.i, t: 0.22, tipo: "interno", r: 9, soloIndividual: true },
    { key: "i1", desde: esquinas.i, t: 0.4, tipo: "interno", r: 9, soloIndividual: true },
  ];
  internos.forEach((item, index) => {
    list.push({
      key: item.key,
      ...haciaCentro(item.desde.x, item.desde.y, item.t),
      r: item.r,
      tipo: item.tipo,
      delay: redondear(tiempos.internos + index * 0.045),
      soloIndividual: item.soloIndividual,
    });
  });
  const c1 = haciaCentro(vertices.c.x, vertices.c.y, 0.38);
  const d1 = haciaCentro(vertices.d.x, vertices.d.y, 0.38);
  const x = { x: redondear((c1.x + d1.x) / 2), y: redondear((c1.y + d1.y) / 2) };
  list.push({ key: "x", ...x, r: 8.5, tipo: "canal", delay: tiempos.canal + 0.2 });
  list.push({ key: "dinero", x: redondear((x.x + c1.x) / 2), y: redondear((x.y + c1.y) / 2), r: 8.5, tipo: "canal", delay: tiempos.canal + 0.35 });
  list.push({ key: "amor", x: redondear((x.x + d1.x) / 2), y: redondear((x.y + d1.y) / 2), r: 8.5, tipo: "canal", delay: tiempos.canal + 0.45 });
  return list;
}

export const puntosMatriz = buildPuntos();

export function puntosVariante(variante: Variante) {
  return variante === "individual" ? puntosMatriz : puntosMatriz.filter((punto) => !punto.soloIndividual);
}

export type PuntoAnillo = { tramo: number; etapa: number; x: number; y: number; delay: number };

export type MarcaEdad = { edad: number; x: number; y: number; principal: boolean };

const anguloEdad = (edad: number) => Math.PI + (edad / 80) * Math.PI * 2;

const enAnillo = (edad: number, radio: number) => ({
  x: redondear(c + Math.cos(anguloEdad(edad)) * radio),
  y: redondear(c + Math.sin(anguloEdad(edad)) * radio),
});

export const puntosAnillo: PuntoAnillo[] = Array.from({ length: 8 }, (_, tramo) =>
  Array.from({ length: 7 }, (_, index) => ({
    tramo,
    etapa: index + 1,
    ...enAnillo(tramo * 10 + (index + 1) * 1.25, lienzo.anillo),
    delay: redondear(tiempos.anillo + (tramo * 7 + index) * 0.014),
  })),
).flat();

export const marcasEdad: MarcaEdad[] = Array.from({ length: 16 }, (_, index) => ({
  edad: index * 5,
  principal: index % 2 === 0,
  ...enAnillo(index * 5, lienzo.anillo + 19),
}));

const p = (key: keyof Puntos) => puntosMatriz.find((punto) => punto.key === key)!;
const line = (from: { x: number; y: number }, to: { x: number; y: number }) =>
  `M${from.x.toFixed(2)} ${from.y.toFixed(2)}L${to.x.toFixed(2)} ${to.y.toFixed(2)}`;

export const lineasMatriz: LineaMatriz[] = [
  {
    id: "rombo",
    d: `${line(vertices.a, vertices.b)}L${vertices.c.x} ${vertices.c.y}L${vertices.d.x} ${vertices.d.y}Z`,
    tipo: "rombo",
    delay: tiempos.rombo,
  },
  { id: "eje-h", d: line(vertices.a, vertices.c), tipo: "eje", delay: tiempos.ejes },
  { id: "eje-v", d: line(vertices.b, vertices.d), tipo: "eje", delay: tiempos.ejes + 0.1 },
  {
    id: "cuadrado",
    d: `${line(esquinas.f, esquinas.g)}L${esquinas.h.x.toFixed(2)} ${esquinas.h.y.toFixed(2)}L${esquinas.i.x.toFixed(2)} ${esquinas.i.y.toFixed(2)}Z`,
    tipo: "cuadrado",
    delay: tiempos.cuadrado,
  },
  { id: "diag-1", d: line(esquinas.f, esquinas.h), tipo: "diagonal", delay: tiempos.diagonales },
  { id: "diag-2", d: line(esquinas.g, esquinas.i), tipo: "diagonal", delay: tiempos.diagonales + 0.1 },
  { id: "canal", d: line(p("c1"), p("d1")), tipo: "canal", delay: tiempos.canal },
];

export const verticesMatriz = vertices;
