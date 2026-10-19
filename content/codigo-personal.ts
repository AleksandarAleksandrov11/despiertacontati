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
  libro: "Mapas Natales de Tarot. Viajes y rutas entre los septenarios del tarot",
  title: "Un método de Raúl Muñoz Jara.",
  text: "Esta calculadora sigue el método Tarot Pragmático de Raúl Muñoz Jara, autor de Mapas Natales de Tarot. Viajes y rutas entre los septenarios del tarot. El cálculo de tu arcano personal, los tableros y los mapas son de su método.",
  logoAlt: "Tarot Pragmático",
  verOriginal: "Ver la calculadora original",
};

export const codigoPersonal = {
  eyebrow: "Tu Código Personal",
  title: "Perfil de Arcano Personal y Mapas de Tarot.",
  subtitle: "Escribe tu fecha de nacimiento y descubre tu arcano personal, los tableros de tu mapa natal y la energía de tu año.",
  formTitle: "Tu fecha de nacimiento",
  mazo: "Mazo de tarot",
  mazoHint: "Elige con qué mazo quieres ver tu lectura.",
  submit: "Calcular",
  recalcular: "Calcular otra fecha",
  privacidad: "Tu fecha no se guarda en ninguna base de datos. Solo se usa para calcular tus cartas.",
  resultadosLabel: (fecha: string) => `Tu Código Personal, ${fecha}`,
  resultadosTitle: (nombre: string) => (nombre ? `El Código Personal de ${nombre}` : "Tu Código Personal"),
  pills: {
    personal: "Arcano personal",
    secundario: "Arcano secundario",
    desafio: "Desafío",
    complementos: "Complementos",
    anual: "Arcano anual",
  },
  perfil: {
    title: "Perfil de Arcano Personal",
    text: "Tus cinco cartas: tu arcano personal, tu arcano secundario, tus dos complementos y tu desafío, entre los cuatro ases.",
    personal: "Arcano Personal",
    secundario: "Arcano Secundario",
    complemento1: "Primer Complemento",
    complemento2: "Segundo Complemento",
    desafio: "Desafío",
  },
  natal: {
    title: "Mapa Natal de Tarot",
    text: "Tu tablero de vida: tres septenarios que empiezan en tu arcano personal. La carta que queda fuera es tu desafío.",
  },
  anual: {
    title: "Mapa Personal Anual",
    arcano: "Arcano Anual",
    cambia: (fecha: string) => `Cambia en tu cumpleaños: ${fecha}`,
    text: "El mapa personal anual muestra la energía que se activa para ti en un ciclo individual, distinto del año calendario. Este mapa no comienza el 1 de enero, sino en tu cumpleaños, cuando se renueva tu ritmo y se abre un nuevo tramo personal. Aquí se despliegan experiencias, aprendizajes y desafíos que marcan cómo atraviesas el tiempo durante este período. El escenario es colectivo, pero el movimiento es propio: el año personal indica desde dónde se reorganiza tu lectura de vida.",
  },
  delAnio: {
    title: "Mapa del Año",
    arcano: "Arcano del año",
    text: "El mapa del año representa la energía universal en movimiento. Es el tablero donde se despliegan las fuerzas colectivas, el clima simbólico y los ritmos que atraviesan a todos. Sobre este tablero ponemos en juego nuestras piezas personales: no elegimos el escenario, pero sí cómo movernos dentro de él.",
  },
  desafio: "Desafío",
  septenario: (numero: number) => `Septenario ${numero}`,
  posicion: (numero: number) => `Posición ${numero}`,
  ciclo: {
    title: "Ciclo vital",
    summary: "Ver tu ciclo vital, desde tu nacimiento",
    ocultar: "Ocultar tu ciclo vital",
    text: "Desde tu año de nacimiento se revela tu Arcano Personal, la carta que expresa la base de tu identidad y tu forma de estar en el mundo. El ciclo vital, que se despliega desde el nacimiento, está compuesto por estos arcanos anuales. En conjunto, forman una secuencia viva que, en ciertos momentos, vuelve a aparecer en el tablero del destino, señalando ciclos que se repiten, aprendizajes que retornan y etapas que piden ser miradas con mayor conciencia.",
    nacimiento: "Nacimiento",
    ahora: "Ahora",
  },
  vinculo: {
    eyebrow: "Comparar vínculo",
    title: "Compara tu mapa natal con el de otra persona.",
    text: "Mira qué cartas ocupan, en vuestros dos mapas natales, las posiciones que hablan del vínculo.",
    persona1: "Tú",
    persona2: "La otra persona",
    genero: "Género",
    mujer: "Mujer",
    hombre: "Hombre",
    submit: "Comparar vínculo",
    error: "Revisa la fecha de la otra persona: no parece una fecha válida.",
    centro: (arcano: number, fecha: string) => `Arcano personal ${arcano} · ${fecha}`,
    claves: "Claves del vínculo",
    resumen: "Lectura rápida del vínculo",
    coinciden: "Coincidís en",
    sinCoincidencias:
      "Compara los arcanos de ambos mapas natales y evalúa su interacción: revisa si sus energías se complementan de forma armónica o si entran en conflicto.",
    posiciones: {
      6: "Vínculo y sentimientos",
      3: "Qué busca en una pareja",
      4: "Qué busca en una pareja",
      11: "Equilibrio que pueden lograr",
      15: "Vínculo sexo-afectivo",
      21: "Completitud de la pareja",
    } as Record<number, string>,
    carta: (posicion: number | string) => `Carta ${posicion}`,
  },
  pdf: {
    title: "Tu Código Personal en PDF",
    text: "Descarga tu perfil, tus tres mapas y tu ciclo vital con las cartas del mazo que hayas elegido.",
    button: "Descargar mi PDF",
  },
  compartir: {
    button: "Compartir mi perfil",
    copiado: "Enlace copiado",
    texto: (personal: number, anual: number) => `Mira mi Perfil de Arcano Personal. Arcano personal: ${personal}. Arcano anual: ${anual}.`,
  },
  lectura: {
    eyebrow: "Tu lectura del Código Personal",
    title: "Lo que dicen tus cinco cartas.",
    text: "Las cartas ya están sobre la mesa. En tu lectura te explico qué significa cada una para ti, con cinco claves: quién eres, cómo te relacionas, cuál es tu reto, cuál es tu potencial y qué necesitas integrar.",
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
      "Es la carta que sale de sumar tu fecha de nacimiento, según el método Tarot Pragmático de Raúl Muñoz Jara. Expresa la base de tu identidad y tu forma de estar en el mundo.",
  },
  {
    question: "¿Por qué cambia mi arcano anual en mi cumpleaños?",
    answer: "Porque tu año personal no empieza el 1 de enero, sino el día de tu cumpleaños. Ese día se calcula de nuevo con el año que empiezas.",
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
