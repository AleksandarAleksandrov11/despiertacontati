export type Fecha = { dia: number; mes: number; anio: number };

export type Puntos = {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  g: number;
  h: number;
  i: number;
  a1: number;
  a2: number;
  a3: number;
  b1: number;
  b2: number;
  b3: number;
  c1: number;
  c2: number;
  d1: number;
  d2: number;
  f1: number;
  f2: number;
  g1: number;
  g2: number;
  h1: number;
  h2: number;
  i1: number;
  i2: number;
  k: number;
  k1: number;
  x: number;
  dinero: number;
  amor: number;
};

export type Propositos = {
  cielo: number;
  tierra: number;
  personal: number;
  masculino: number;
  femenino: number;
  social: number;
  espiritual: number;
  planetario: number;
};

export type FilaChakra = { fisico: number; energia: number; emocion: number };

export type Etapa = { desde: number; hasta: number; etiqueta: string; valor: number; principal: boolean };

export type Tramo = { desde: number; etapas: Etapa[] };

export type Matriz = {
  puntos: Puntos;
  propositos: Propositos;
  chakras: FilaChakra[];
  totalChakras: FilaChakra;
  edades: Tramo[];
};

export function reducir(n: number) {
  let value = Math.abs(Math.trunc(n));
  while (value > 22) {
    value = String(value)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return value === 0 ? 22 : value;
}

type Base = Pick<Puntos, "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i">;

const decimal = (n: number) => String(n).replace(".", ",");

function tramo(desde: number, inicio: number, fin: number): Tramo {
  const m5 = reducir(inicio + fin);
  const m25 = reducir(inicio + m5);
  const m1 = reducir(inicio + m25);
  const m35 = reducir(m5 + m25);
  const m75 = reducir(m5 + fin);
  const m6 = reducir(m5 + m75);
  const m85 = reducir(fin + m75);
  const rango = (inicioRango: number, finRango: number, valor: number, etiqueta?: string): Etapa => ({
    desde: desde + inicioRango,
    hasta: desde + finRango,
    etiqueta: etiqueta ?? `${decimal(desde + inicioRango)}-${decimal(desde + finRango)}`,
    valor,
    principal: false,
  });
  return {
    desde,
    etapas: [
      { desde: Math.max(0, desde - 1), hasta: desde + 1, etiqueta: String(desde), valor: inicio, principal: true },
      rango(1, 2.5, m1),
      rango(2.5, 3.5, m25),
      rango(3.5, 4, m35),
      { ...rango(4, 6, m5, String(desde + 5)), principal: true },
      rango(6, 7.5, m6),
      rango(7.5, 8.5, m75),
      rango(8.5, 9, m85),
    ],
  };
}

function edades({ a, b, c, d, f, g, h, i }: Base): Tramo[] {
  const orden = [a, f, b, g, c, h, d, i, a];
  return orden.slice(0, 8).map((inicio, index) => tramo(index * 10, inicio, orden[index + 1]!));
}

function completar(base: Base, pareja = false): Matriz {
  const { a, b, c, d, e, f, g, h, i } = base;
  const k = reducir(f + g + h + i);
  const a1 = reducir(a + e);
  const b1 = reducir(b + e);
  const c1 = reducir(c + e);
  const d1 = reducir(d + e);
  const f1 = reducir(f + k);
  const g1 = reducir(g + k);
  const h1 = reducir(h + k);
  const i1 = reducir(i + k);
  const x = reducir(c1 + d1);
  const puntos: Puntos = {
    ...base,
    a1,
    a2: reducir(a + a1),
    a3: reducir(a1 + e),
    b1,
    b2: reducir(b + b1),
    b3: reducir(b1 + e),
    c1,
    c2: reducir(c + c1),
    d1,
    d2: reducir(d + d1),
    f1,
    f2: reducir(f + f1),
    g1,
    g2: reducir(g + g1),
    h1,
    h2: reducir(h + h1),
    i1,
    i2: reducir(i + i1),
    k,
    k1: reducir(e + k),
    x,
    dinero: reducir(x + c1),
    amor: reducir(x + d1),
  };
  const cielo = reducir(b + d);
  const tierra = reducir(a + c);
  const personal = reducir(cielo + tierra);
  const masculino = reducir(f + h);
  const femenino = reducir(g + i);
  const social = reducir(masculino + femenino);
  const espiritual = reducir(personal + social);
  const fila = (fisico: number, energia: number): FilaChakra => ({ fisico, energia, emocion: reducir(fisico + energia) });
  const chakras = [
    fila(a, b),
    fila(puntos.a2, puntos.b2),
    fila(a1, b1),
    fila(puntos.a3, puntos.b3),
    fila(e, e),
    fila(c1, d1),
    fila(c, d),
  ];
  const suma = (key: keyof FilaChakra) => reducir(chakras.reduce((total, item) => total + item[key], 0));
  return {
    puntos,
    propositos: { cielo, tierra, personal, masculino, femenino, social, espiritual, planetario: reducir(social + espiritual) },
    chakras,
    totalChakras: { fisico: suma("fisico"), energia: suma("energia"), emocion: suma("emocion") },
    edades: pareja ? [] : edades(base),
  };
}

function base({ dia, mes, anio }: Fecha): Base {
  const a = reducir(dia);
  const b = reducir(mes);
  const c = reducir(anio);
  const d = reducir(a + b + c);
  const e = reducir(a + b + c + d);
  return { a, b, c, d, e, f: reducir(a + b), g: reducir(b + c), h: reducir(c + d), i: reducir(d + a) };
}

export function calcularMatriz(fecha: Fecha): Matriz {
  return completar(base(fecha));
}

export function calcularPareja(primera: Fecha, segunda: Fecha): Matriz {
  const uno = base(primera);
  const dos = base(segunda);
  const suma = (key: keyof Base) => reducir(uno[key] + dos[key]);
  return completar(
    {
      a: suma("a"),
      b: suma("b"),
      c: suma("c"),
      d: suma("d"),
      e: suma("e"),
      f: suma("f"),
      g: suma("g"),
      h: suma("h"),
      i: suma("i"),
    },
    true,
  );
}

export function edadEnAnios(fecha: Fecha, hoy = new Date()) {
  const nacimiento = Date.UTC(fecha.anio, fecha.mes - 1, fecha.dia);
  const ahora = Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
  return (ahora - nacimiento) / (365.2425 * 24 * 60 * 60 * 1000);
}

export function etapaActual(tramos: Tramo[], edad: number) {
  for (const item of tramos) {
    for (const etapa of item.etapas) {
      if (edad >= etapa.desde && edad < etapa.hasta) return etapa;
    }
  }
  return null;
}

export function fechaValida(fecha: Fecha) {
  const { dia, mes, anio } = fecha;
  if (![dia, mes, anio].every(Number.isInteger)) return false;
  const hoy = new Date();
  if (anio < 1900 || anio > hoy.getFullYear()) return false;
  const date = new Date(Date.UTC(anio, mes - 1, dia));
  if (date.getUTCFullYear() !== anio || date.getUTCMonth() !== mes - 1 || date.getUTCDate() !== dia) return false;
  return date.getTime() <= Date.now();
}

export function parsearFecha(value: string | null | undefined): Fecha | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value ?? "");
  if (!match) return null;
  const fecha = { anio: Number(match[1]), mes: Number(match[2]), dia: Number(match[3]) };
  return fechaValida(fecha) ? fecha : null;
}

export function fechaParam({ dia, mes, anio }: Fecha) {
  return `${anio}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
}

export function fechaTexto({ dia, mes, anio }: Fecha) {
  return `${String(dia).padStart(2, "0")}/${String(mes).padStart(2, "0")}/${anio}`;
}

export function limpiarNombre(value: string | null | undefined) {
  return (value ?? "")
    .replace(/[^\p{L}\p{M}' -]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 40);
}
