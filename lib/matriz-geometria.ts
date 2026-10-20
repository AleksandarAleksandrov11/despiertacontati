import type { Puntos } from "./matriz";

export const lienzo = { size: 400, centro: 200, radio: 164, anillo: 192 };

export type TipoPunto = "centro" | "vertice" | "esquina" | "interno" | "canal" | "linaje";

export type Chakra = "corona" | "tercerOjo" | "garganta" | "corazon" | "plexo" | "sacro" | "raiz";

export const coloresChakra: Record<Chakra, string> = {
  corona: "#a88bc7",
  tercerOjo: "#7c86c2",
  garganta: "#7fb3d5",
  corazon: "#8fb996",
  plexo: "#e8c96a",
  sacro: "#e9a66b",
  raiz: "#d9776f",
};

export type PuntoMatriz = {
  key: keyof Puntos;
  x: number;
  y: number;
  r: number;
  tipo: TipoPunto;
  chakra?: Chakra;
  delay: number;
  soloIndividual?: boolean;
};

export type LineaMatriz = { id: string; d: string; tipo: "rombo" | "cuadrado" | "eje" | "diagonal" | "interior" | "canal"; delay: number };

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
    list.push({ key, ...vertices[key], r: 17, tipo: "vertice", chakra: key === "a" || key === "b" ? "corona" : "raiz", delay: tiempos.vertices[index]! });
  });
  list.push({ key: "e", x: c, y: c, r: 23, tipo: "centro", chakra: "plexo", delay: tiempos.centro });
  (["f", "g", "h", "i"] as const).forEach((key, index) => {
    list.push({ key, ...esquinas[key], r: 14, tipo: "esquina", delay: tiempos.esquinas[index]! });
  });
  const internos: {
    key: keyof Puntos;
    desde: { x: number; y: number };
    t: number;
    tipo: TipoPunto;
    chakra?: Chakra;
    r: number;
    soloIndividual?: boolean;
  }[] = [
    { key: "a2", desde: vertices.a, t: 0.2, tipo: "interno", chakra: "tercerOjo", r: 10 },
    { key: "a1", desde: vertices.a, t: 0.38, tipo: "interno", chakra: "garganta", r: 10 },
    { key: "a3", desde: vertices.a, t: 0.6, tipo: "interno", chakra: "corazon", r: 9, soloIndividual: true },
    { key: "b2", desde: vertices.b, t: 0.2, tipo: "interno", chakra: "tercerOjo", r: 10 },
    { key: "b1", desde: vertices.b, t: 0.38, tipo: "interno", chakra: "garganta", r: 10 },
    { key: "b3", desde: vertices.b, t: 0.6, tipo: "interno", chakra: "corazon", r: 9, soloIndividual: true },
    { key: "c2", desde: vertices.c, t: 0.2, tipo: "interno", r: 10 },
    { key: "c1", desde: vertices.c, t: 0.38, tipo: "interno", chakra: "sacro", r: 10 },
    { key: "d2", desde: vertices.d, t: 0.2, tipo: "interno", r: 10 },
    { key: "d1", desde: vertices.d, t: 0.38, tipo: "interno", chakra: "sacro", r: 10 },
    { key: "k1", desde: vertices.c, t: 0.62, tipo: "linaje", r: 9, soloIndividual: true },
    { key: "k", desde: vertices.c, t: 0.77, tipo: "linaje", r: 9, soloIndividual: true },
    { key: "f2", desde: esquinas.f, t: 0.14, tipo: "interno", r: 9, soloIndividual: true },
    { key: "f1", desde: esquinas.f, t: 0.28, tipo: "interno", r: 9, soloIndividual: true },
    { key: "g2", desde: esquinas.g, t: 0.14, tipo: "interno", r: 9, soloIndividual: true },
    { key: "g1", desde: esquinas.g, t: 0.28, tipo: "interno", r: 9, soloIndividual: true },
    { key: "h2", desde: esquinas.h, t: 0.14, tipo: "interno", r: 9, soloIndividual: true },
    { key: "h1", desde: esquinas.h, t: 0.28, tipo: "interno", r: 9, soloIndividual: true },
    { key: "i2", desde: esquinas.i, t: 0.14, tipo: "interno", r: 9, soloIndividual: true },
    { key: "i1", desde: esquinas.i, t: 0.28, tipo: "interno", r: 9, soloIndividual: true },
  ];
  internos.forEach((item, index) => {
    list.push({
      key: item.key,
      ...haciaCentro(item.desde.x, item.desde.y, item.t),
      r: item.r,
      tipo: item.tipo,
      chakra: item.chakra,
      delay: redondear(tiempos.internos + index * 0.045),
      soloIndividual: item.soloIndividual,
    });
  });
  const enEje = (key: "a" | "b" | "c" | "d", t: number) => haciaCentro(vertices[key].x, vertices[key].y, t);
  const medio = (uno: { x: number; y: number }, otro: { x: number; y: number }) => ({ x: redondear((uno.x + otro.x) / 2), y: redondear((uno.y + otro.y) / 2) });
  const cruces: { key: keyof Puntos; en: { x: number; y: number }; chakra?: Chakra }[] = [
    { key: "a2b2", en: medio(enEje("a", 0.2), enEje("b", 0.2)), chakra: "tercerOjo" },
    { key: "a1b1", en: medio(enEje("a", 0.38), enEje("b", 0.38)), chakra: "garganta" },
    { key: "b1c1", en: medio(enEje("b", 0.38), enEje("c", 0.38)) },
    { key: "a1d1", en: medio(enEje("a", 0.38), enEje("d", 0.38)) },
  ];
  cruces.forEach((item, index) => {
    list.push({ key: item.key, ...item.en, r: 9, tipo: "interno", chakra: item.chakra, delay: redondear(tiempos.internos + 0.9 + index * 0.06), soloIndividual: true });
  });
  const c1 = enEje("c", 0.38);
  const d1 = enEje("d", 0.38);
  const x = medio(c1, d1);
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
  {
    id: "interior-2",
    d: `${line(p("a2"), p("b2"))}L${p("c2").x.toFixed(2)} ${p("c2").y.toFixed(2)}L${p("d2").x.toFixed(2)} ${p("d2").y.toFixed(2)}Z`,
    tipo: "interior",
    delay: tiempos.internos,
  },
  {
    id: "interior-1",
    d: `${line(p("d1"), p("a1"))}L${p("b1").x.toFixed(2)} ${p("b1").y.toFixed(2)}L${p("c1").x.toFixed(2)} ${p("c1").y.toFixed(2)}`,
    tipo: "interior",
    delay: tiempos.internos + 0.1,
  },
  { id: "canal", d: line(p("c1"), p("d1")), tipo: "canal", delay: tiempos.canal },
];

export const verticesMatriz = vertices;

const enDiagonal = (esquina: { x: number; y: number }) => haciaCentro(esquina.x, esquina.y, 0.73);

export const simbolosLinaje = { masculino: enDiagonal(esquinas.f), femenino: enDiagonal(esquinas.g) };

export function simboloMasculino({ x, y }: { x: number; y: number }) {
  const pt = (dx: number, dy: number) => `${redondear(x + dx)} ${redondear(y + dy)}`;
  return `M${pt(1.6, -1.6)}L${pt(5, -5)}M${pt(1.8, -5)}L${pt(5, -5)}L${pt(5, -1.8)}`;
}

export function simboloFemenino({ x, y }: { x: number; y: number }) {
  const pt = (dx: number, dy: number) => `${redondear(x + dx)} ${redondear(y + dy)}`;
  return `M${pt(0, 2.2)}L${pt(0, 7.5)}M${pt(-2.4, 5)}L${pt(2.4, 5)}`;
}

export const simbolosCanal = {
  dinero: { x: redondear(p("dinero").x + 16), y: redondear(p("dinero").y + 15) },
  amor: { x: redondear(p("amor").x + 15), y: redondear(p("amor").y + 16) },
};

export function corazon({ x, y }: { x: number; y: number }, size: number) {
  const k = size / 12;
  const pt = (dx: number, dy: number) => `${redondear(x + dx * k)} ${redondear(y + dy * k)}`;
  return `M${pt(0, 5)}C${pt(-1.5, 3.6)} ${pt(-6, 0.8)} ${pt(-6, -2)}C${pt(-6, -4.8)} ${pt(-2.6, -6.2)} ${pt(0, -3.4)}C${pt(2.6, -6.2)} ${pt(6, -4.8)} ${pt(6, -2)}C${pt(6, 0.8)} ${pt(1.5, 3.6)} ${pt(0, 5)}Z`;
}
