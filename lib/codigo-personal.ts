import type { Fecha } from "./matriz";

export type CodigoPersonal = {
  personal: number;
  secundario: number;
  desafio: number;
  complementos: [number, number];
};

export const sumarDigitos = (n: number) => [...String(Math.abs(n))].reduce((total, digito) => total + Number(digito), 0);

export const carta = (n: number) => (n === 22 ? 0 : n);

export const desafioDe = (n: number) => (carta(n) === 0 ? 21 : carta(n) - 1);

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

export function calcularCodigo({ dia, mes, anio }: Fecha): CodigoPersonal {
  const personal = arcanoPersonal(dia, mes, anio);
  return {
    personal,
    secundario: arcanoSecundario(personal),
    desafio: desafioDe(personal),
    complementos: complementosDe(personal),
  };
}
