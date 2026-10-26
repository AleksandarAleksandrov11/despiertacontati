import type { Faq } from "./faqs";

export type Mazo = "rider" | "sopraffino";

export const mazos: { id: Mazo; label: string; alto: number }[] = [
  { id: "rider", label: "Rider-Waite", alto: 638 },
  { id: "sopraffino", label: "Sopraffino", alto: 720 },
];

const nombresRider = [
  "El Loco",
  "El Mago",
  "La Suma Sacerdotisa",
  "La Emperatriz",
  "El Emperador",
  "El Sacerdote",
  "Los Enamorados",
  "El Carro",
  "La Fuerza",
  "El Ermitaño",
  "La Rueda de la Fortuna",
  "La Justicia",
  "El Colgado",
  "La Muerte",
  "La Templanza",
  "El Diablo",
  "La Torre",
  "La Estrella",
  "La Luna",
  "El Sol",
  "El Juicio",
  "El Mundo",
];

export function nombreCarta(numero: number, mazo: Mazo) {
  if (mazo === "sopraffino" && (numero === 8 || numero === 11)) return nombresRider[numero === 8 ? 11 : 8]!;
  return nombresRider[numero] ?? "";
}

export const ases = [
  { id: "asespadas", nombre: "As de Espadas" },
  { id: "ascopas", nombre: "As de Copas" },
  { id: "asoros", nombre: "As de Oros" },
  { id: "asbastos", nombre: "As de Bastos" },
] as const;

export const creditos = {
  metodo: "Tarot Pragmático · Método de lectura por tableros",
  autor: "© Raúl Muñoz Jara",
  web: "https://tarotpragmatico.com/",
  webLabel: "tarotpragmatico.com",
  instagram: "https://www.instagram.com/tarot.pragmatico",
  instagramLabel: "@tarot.pragmatico",
  original: "https://perfil.tarotpragmatico.com/",
  title: "Un método de Raúl Muñoz Jara.",
  text: "Esta calculadora sigue el método Tarot Pragmático de Raúl Muñoz Jara, autor de Mapas Natales de Tarot. Viajes y rutas entre los septenarios del tarot. El cálculo de tu arcano personal y de tu Código Personal es de su método.",
  logoAlt: "Tarot Pragmático",
  verOriginal: "Ver la calculadora original",
};

export const codigoPersonal = {
  eyebrow: "Tarot numerológico",
  title: "Tu Arcano Personal y tu Código Personal.",
  subtitle: "Escribe tu fecha de nacimiento y descubre tu arcano personal y las cinco cartas de tu Código Personal.",
  formTitle: "Tu fecha de nacimiento",
  mazo: "Mazo de tarot",
  mazoHint: "Elige con qué mazo quieres ver tu lectura.",
  submit: "Calcular",
  recalcular: "Calcular otra fecha",
  privacidad: "Tu fecha no se guarda en ninguna base de datos. Solo se usa para calcular tus cartas.",
  resultadosLabel: (fecha: string) => `Tu Código Personal, ${fecha}`,
  resultadosTitle: (nombre: string) => (nombre ? `El Código Personal de ${nombre}` : "Tu Código Personal"),
  arcano: {
    title: "Tu Arcano Personal",
    text: "Tu carta personal: la carta que sale de sumar tu fecha de nacimiento. Expresa la base de tu identidad y tu forma de estar en el mundo.",
    numero: (numero: number) => `Arcano ${numero}`,
  },
  perfil: {
    title: "Tu Código Personal",
    text: "Tus cinco cartas, entre los cuatro ases: quién eres, cómo te relacionas, qué necesitas materializar, tu potencial y qué necesitas integrar.",
    personal: "Quién eres",
    secundario: "Cómo te relacionas",
    complemento1: "Qué necesitas materializar",
    complemento2: "Tu potencial",
    desafio: "Qué necesitas integrar",
  },
  pdf: {
    title: "Tu Código Personal en PDF",
    text: "Descarga tu arcano personal y tu Código Personal con las cartas del mazo que hayas elegido.",
    button: "Descargar mi PDF",
  },
  compartir: {
    button: "Compartir mi Código Personal",
    copiado: "Enlace copiado",
    texto: (personal: number) => `Mira mi Código Personal. Mi arcano personal es el ${personal}.`,
  },
  lectura: {
    eyebrow: "Tu lectura del Código Personal",
    title: "Lo que dicen tus cinco cartas.",
    text: "Las cartas ya están sobre la mesa. En tu lectura te explico qué significa cada una para ti, con cinco claves: quién eres, cómo te relacionas, qué necesitas materializar, tu potencial y qué necesitas integrar.",
    cta: "Quiero mi lectura",
  },
};

export function infoCodigoMessage(fecha: string, nombre: string) {
  return `Hola Tati, ${nombre ? `me llamo ${nombre}, ` : ""}nací el ${fecha} y he calculado mi Código Personal en tu web. Me gustaría la lectura de mis cinco cartas.`;
}

export const codigoFaqs: Faq[] = [
  {
    question: "¿Qué es el arcano personal?",
    answer:
      "Es tu carta personal: la que sale de sumar tu fecha de nacimiento, según el método Tarot Pragmático de Raúl Muñoz Jara. Expresa la base de tu identidad y tu forma de estar en el mundo.",
  },
  {
    question: "¿Qué es el tarot numerológico?",
    answer:
      "Es la forma de leer el tarot a partir de los números de tu fecha de nacimiento. Tu arcano personal y tu Código Personal salen de esos números, no de una tirada al azar.",
  },
  {
    question: "¿Qué diferencia hay entre los dos mazos?",
    answer:
      "Las cartas son las mismas, con otra ilustración. En el Rider-Waite el 8 es La Fuerza y el 11 La Justicia; en el Sopraffino, como en el tarot de Marsella, el 8 es La Justicia y el 11 La Fuerza.",
  },
  {
    question: "¿Se guarda mi fecha de nacimiento?",
    answer: "No. Solo se usa en el momento para calcular tus cartas y preparar tu PDF.",
  },
];
