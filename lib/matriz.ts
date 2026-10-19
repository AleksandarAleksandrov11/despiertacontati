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
};

export type Matriz = { puntos: Puntos; propositos: Propositos };

export function reducir(n: number) {
  let value = Math.abs(Math.trunc(n));
  while (value > 22) {
    value = String(value)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return value === 0 ? 22 : value;
}

function completar(base: Pick<Puntos, "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i">): Matriz {
  const { a, b, c, d, e, f, g, h, i } = base;
  const a1 = reducir(a + e);
  const b1 = reducir(b + e);
  const c1 = reducir(c + e);
  const d1 = reducir(d + e);
  const f1 = reducir(f + e);
  const g1 = reducir(g + e);
  const h1 = reducir(h + e);
  const i1 = reducir(i + e);
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
  return {
    puntos,
    propositos: { cielo, tierra, personal, masculino, femenino, social, espiritual: reducir(personal + social) },
  };
}

function base({ dia, mes, anio }: Fecha) {
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
  const suma = (key: keyof typeof uno) => reducir(uno[key] + dos[key]);
  return completar({
    a: suma("a"),
    b: suma("b"),
    c: suma("c"),
    d: suma("d"),
    e: suma("e"),
    f: suma("f"),
    g: suma("g"),
    h: suma("h"),
    i: suma("i"),
  });
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
