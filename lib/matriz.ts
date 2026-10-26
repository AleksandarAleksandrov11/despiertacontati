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
  a2b2: number;
  a1b1: number;
  b1c1: number;
  a1d1: number;
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

export type Etapa = { etiqueta: string; valor: number; principal: boolean };

export type Tramo = { desde: number; etapas: Etapa[] };

export type Posicion = { tramo: number; etapa: number };

export type EnergiasAnio = { edad: number; opuesta: number; propia: number; deOpuesta: number; suma: number; posiciones: [Posicion, Posicion] };

export type Matriz = {
  puntos: Puntos;
  propositos: Propositos;
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
  const rango = (inicioRango: number, finRango: number, valor: number): Etapa => ({
    etiqueta: `${decimal(desde + inicioRango)}-${decimal(desde + finRango)}`,
    valor,
    principal: false,
  });
  return {
    desde,
    etapas: [
      { etiqueta: String(desde), valor: inicio, principal: true },
      rango(1, 2.5, m1),
      rango(2.5, 3.5, m25),
      rango(3.5, 4, m35),
      { etiqueta: String(desde + 5), valor: m5, principal: true },
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

function completar(base: Base): Matriz {
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
  const a2 = reducir(a + a1);
  const b2 = reducir(b + b1);
  const puntos: Puntos = {
    ...base,
    a1,
    a2,
    a3: reducir(a1 + e),
    b1,
    b2,
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
    a2b2: reducir(a2 + b2),
    a1b1: reducir(a1 + b1),
    b1c1: reducir(b1 + c1),
    a1d1: reducir(a1 + d1),
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
  return {
    puntos,
    propositos: { cielo, tierra, personal, masculino, femenino, social, espiritual, planetario: reducir(social + espiritual) },
    edades: edades(base),
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

export function edadCumplida({ dia, mes, anio }: Fecha, hoy = new Date()) {
  const antesDelCumple = hoy.getMonth() + 1 < mes || (hoy.getMonth() + 1 === mes && hoy.getDate() < dia);
  return hoy.getFullYear() - anio - (antesDelCumple ? 1 : 0);
}

const etapaDeAnio = [0, 1, 2, 3, 3, 4, 5, 6, 7, 7];

function posicionEdad(edad: number): Posicion {
  return { tramo: Math.floor(edad / 10), etapa: etapaDeAnio[edad % 10]! };
}

export function energiasDelAnio(tramos: Tramo[], edad: number): EnergiasAnio | null {
  if (tramos.length !== 8 || edad < 0 || edad >= 80) return null;
  const opuesta = edad >= 40 ? edad - 40 : edad + 40;
  const posiciones: [Posicion, Posicion] = [posicionEdad(edad), posicionEdad(opuesta)];
  const [propia, deOpuesta] = posiciones.map((posicion) => tramos[posicion.tramo]!.etapas[posicion.etapa]!.valor) as [number, number];
  return { edad, opuesta, propia, deOpuesta, suma: reducir(propia + deOpuesta), posiciones };
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
