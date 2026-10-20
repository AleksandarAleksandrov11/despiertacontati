import type { Faq } from "./faqs";
import type { ImageKey } from "./imagenes";
import { site } from "./site";

export type CategoriaId = "meditaciones" | "crono-tarot" | "lecturas" | "autoconocimiento" | "sesiones" | "terapias" | "espacios";

export type TipoProducto = "meditacion" | "lectura" | "sesion" | "terapia" | "espacio";

export type Producto = {
  slug: string;
  categoria: CategoriaId;
  tipo: TipoProducto;
  nombre: string;
  frase: string;
  descripcion: string;
  incluye: { titulo: string; detalle?: string }[];
  duracionTotal?: string;
  formato: string;
  entrega: string;
  paraQuien: string[];
  precio: number | null;
  precioHabitual?: number;
  lanzamiento?: boolean;
  estado: "disponible" | "proximamente";
  destacado: boolean;
  imagen: ImageKey;
  calculadora?: string;
  enlace?: string;
};

export type Categoria = {
  id: CategoriaId;
  nav: string;
  eyebrow: string;
  title: string;
  text: string;
};

export const categorias: Categoria[] = [
  {
    id: "meditaciones",
    nav: "Meditaciones",
    eyebrow: "Meditaciones",
    title: "Medita con Tati.",
    text: "Packs de meditaciones guiadas en MP3 y un programa de 12 semanas. Te llegan por enlace privado de descarga tras confirmar el pago.",
  },
  {
    id: "crono-tarot",
    nav: "Crono Tarot",
    eyebrow: "Crono Tarot",
    title: "Lecturas en el tiempo.",
    text: "Tu cumpleaños, una estación, un mes o una semana. Tarot Rider-Waite, en vídeo y PDF por WhatsApp.",
  },
  {
    id: "lecturas",
    nav: "Lecturas concretas",
    eyebrow: "Lecturas concretas",
    title: "Una pregunta, una lectura.",
    text: "Tu mapa de vida, la pareja, el trabajo, la compatibilidad y el corazón. Tarot Rider-Waite, en vídeo y PDF por WhatsApp.",
  },
  {
    id: "autoconocimiento",
    nav: "Autoconocimiento",
    eyebrow: "Autoconocimiento",
    title: "A partir de tu fecha de nacimiento.",
    text: "Numerología y la energía de los arcanos mayores para conocerte mejor. En vídeo y PDF por WhatsApp.",
  },
  {
    id: "sesiones",
    nav: "Sesiones en directo",
    eyebrow: "Sesiones en directo",
    title: "Tarot en directo.",
    text: "Una sesión individual contigo, online. La agendamos por WhatsApp.",
  },
  {
    id: "terapias",
    nav: "Terapias",
    eyebrow: "Terapias y bienestar energético",
    title: "Calma y equilibrio.",
    text: "Reiki con péndulo hebreo, péndulo hebreo, análisis de chakras y sanación akáshica, online y a distancia.",
  },
  {
    id: "espacios",
    nav: "Espacios",
    eyebrow: "Armonización de espacios",
    title: "Tu casa, en calma.",
    text: "Limpieza energética de casas y espacios a distancia. Solo necesito la dirección.",
  },
];

const entregaMeditacion = "Archivos MP3 por enlace privado de descarga, tras confirmar el pago.";
const entregaLectura = "Vídeo y PDF por WhatsApp, tras confirmar el pago.";
const entregaSesion = "Online. La fecha y la hora se agendan por WhatsApp.";
const entregaTerapia = "Online, a distancia. La fecha y la hora se agendan por WhatsApp.";

const paraMeditar = [
  "Quieres dedicarte un rato al día y te ayuda que una voz te guíe.",
  "Prefieres practicar en casa, a tu ritmo y sin horarios.",
  "Te apetece volver a la respiración cuando el día se acelera.",
];

const paraLectura = [
  "Quieres mirar tu momento con más perspectiva.",
  "Te viene bien recibir la lectura y verla con calma cuando puedas.",
  "Buscas un espejo, no que nadie decida por ti.",
];

export const productos: Producto[] = [
  {
    slug: "pausa-y-vuelve-a-ti",
    categoria: "meditaciones",
    tipo: "meditacion",
    nombre: "Pausa y vuelve a ti",
    frase:
      "Cinco meditaciones guiadas para dedicarte un espacio de atención, volver a la respiración y explorar el cuerpo y los sentidos a tu ritmo.",
    descripcion:
      "Una colección para reservar un momento para ti, volver a la respiración y llevar la atención al cuerpo y a los sentidos.",
    incluye: [
      { titulo: "Respiración ancla", detalle: "23:03" },
      { titulo: "Respiración freno", detalle: "23:16" },
      { titulo: "Escáner corporal", detalle: "28:46" },
      { titulo: "Escucha consciente", detalle: "23:10" },
      { titulo: "Despierta tus sentidos", detalle: "25:31" },
    ],
    duracionTotal: "2 h 04 min",
    formato: "5 audios en MP3",
    entrega: entregaMeditacion,
    paraQuien: paraMeditar,
    precio: 12,
    lanzamiento: true,
    estado: "disponible",
    destacado: true,
    imagen: "pausaCojin",
  },
  {
    slug: "un-espacio-para-tu-mente",
    categoria: "meditaciones",
    tipo: "meditacion",
    nombre: "Un espacio para tu mente",
    frase: "Una propuesta para observar los pensamientos y acercarte a tu experiencia interna con más atención.",
    descripcion:
      "Tres prácticas guiadas para observar los pensamientos y las emociones con más atención, a tu ritmo.",
    incluye: [
      { titulo: "Un cielo de pensamientos", detalle: "26:38" },
      { titulo: "Arroyo de pensamientos", detalle: "25:22" },
      { titulo: "Práctica de las emociones, Emo Scan", detalle: "21:20" },
    ],
    duracionTotal: "1 h 13 min",
    formato: "3 audios en MP3",
    entrega: entregaMeditacion,
    paraQuien: [
      "Tu cabeza va a mil y quieres aprender a observarla sin pelearte con ella.",
      "Te interesa entender mejor tus emociones.",
      "Ya has meditado algo y quieres dar un paso más.",
    ],
    precio: 9.9,
    lanzamiento: true,
    estado: "proximamente",
    destacado: false,
    imagen: "meditacionSalaBlanca",
  },
  {
    slug: "conecta-contigo",
    categoria: "meditaciones",
    tipo: "meditacion",
    nombre: "Conecta contigo",
    frase: "Una colección para la introspección, la amabilidad y la gratitud.",
    descripcion:
      "Cuatro prácticas guiadas para la introspección, la amabilidad y la gratitud.",
    incluye: [
      { titulo: "Viaje a tu esencia", detalle: "27:30" },
      { titulo: "La sonrisa interior", detalle: "25:03" },
      { titulo: "Meditación Metta o de la compasión", detalle: "25:31" },
      { titulo: "La fiesta de la gratitud", detalle: "21:36" },
    ],
    duracionTotal: "1 h 39 min",
    formato: "4 audios en MP3",
    entrega: entregaMeditacion,
    paraQuien: [
      "Te exiges mucho y quieres practicar la amabilidad contigo.",
      "Te apetece un momento de introspección.",
      "Quieres que la gratitud forme parte de tu día a día.",
    ],
    precio: 12.9,
    lanzamiento: true,
    estado: "proximamente",
    destacado: false,
    imagen: "manoMudra",
  },
  {
    slug: "camino-12-semanas-meditacion",
    categoria: "meditaciones",
    tipo: "meditacion",
    nombre: "Tu camino de 12 semanas de meditación",
    frase: "Doce meditaciones, una por semana, con orden de escucha y guía de uso.",
    descripcion:
      "Un programa para recorrer a lo largo de doce semanas, con el orden de escucha recomendado, una propuesta semanal sencilla y una guía de uso para preparar la práctica.",
    incluye: [
      { titulo: "Semana 1. Respiración ancla", detalle: "23:03" },
      { titulo: "Semana 2. Respiración freno", detalle: "23:16" },
      { titulo: "Semana 3. Escáner corporal", detalle: "28:46" },
      { titulo: "Semana 4. Escucha consciente", detalle: "23:10" },
      { titulo: "Semana 5. Alimentación consciente", detalle: "26:16" },
      { titulo: "Semana 6. Arroyo de pensamientos", detalle: "25:22" },
      { titulo: "Semana 7. Meditación Metta o de la compasión", detalle: "25:31" },
      { titulo: "Semana 8. Comprender nuestra naturaleza", detalle: "24:17" },
      { titulo: "Semana 9. Práctica de las emociones, Emo Scan", detalle: "21:20" },
      { titulo: "Semana 10. Meditación de los chakras", detalle: "27:37" },
      { titulo: "Semana 11. Todo está bien", detalle: "22:20" },
      { titulo: "Semana 12. La fiesta de la gratitud", detalle: "21:36" },
    ],
    duracionTotal: "4 h 52 min",
    formato: "12 audios en MP3 y guía de uso",
    entrega: entregaMeditacion,
    paraQuien: [
      "Quieres crear el hábito de meditar y necesitas un orden.",
      "Te ayuda avanzar paso a paso, una semana cada vez.",
      "Prefieres un camino completo a ir probando suelto.",
    ],
    precio: 14.9,
    precioHabitual: 19.9,
    lanzamiento: true,
    estado: "proximamente",
    destacado: false,
    imagen: "meditacionPorche",
  },
  {
    slug: "lectura-del-cumpleanos",
    categoria: "crono-tarot",
    tipo: "lectura",
    nombre: "Lectura del Cumpleaños",
    frase:
      "Tu nuevo ciclo personal: aprendizajes, oportunidades y retos para los próximos doce meses en las diferentes áreas de tu vida.",
    descripcion:
      "Una lectura para explorar tu nuevo ciclo personal y descubrir los aprendizajes, las oportunidades y los retos que pueden aparecer en las diferentes áreas de tu vida durante los próximos doce meses.",
    incluye: [{ titulo: "Lectura anual con tarot Rider-Waite" }, { titulo: "Vídeo con la lectura" }, { titulo: "PDF de la lectura" }],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: [
      "Se acerca tu cumpleaños y quieres empezar el ciclo con intención.",
      "Te gusta mirar el año que viene con perspectiva.",
      "Quieres saber qué áreas pueden pedirte más atención.",
    ],
    precio: 17,
    estado: "disponible",
    destacado: true,
    imagen: "tarotSol",
  },
  {
    slug: "mapa-estacional",
    categoria: "crono-tarot",
    tipo: "lectura",
    nombre: "Tu Mapa Estacional",
    frase:
      "La energía de una estación (primavera, verano, otoño o invierno) y los temas, retos y aprendizajes de esa etapa.",
    descripcion:
      "Una lectura para explorar la energía de una estación del año (primavera, verano, otoño o invierno) y conectar con los temas, retos y aprendizajes de esa etapa.",
    incluye: [{ titulo: "Lectura estacional con tarot Rider-Waite" }, { titulo: "Vídeo con la lectura" }, { titulo: "PDF de la lectura" }],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: paraLectura,
    precio: 17,
    estado: "disponible",
    destacado: false,
    imagen: "hojasEstaciones",
  },
  {
    slug: "mapa-mensual",
    categoria: "crono-tarot",
    tipo: "lectura",
    nombre: "Tu Mapa Mensual",
    frase:
      "Lectura amplia de un mes concreto: la energía del periodo, los temas más destacados y las áreas que pueden requerir atención.",
    descripcion:
      "Una lectura centrada en un mes concreto. Explora la energía del periodo y descubre los temas más destacados y las áreas de tu vida que pueden requerir atención.",
    incluye: [{ titulo: "Lectura mensual amplia con tarot Rider-Waite" }, { titulo: "Vídeo con la lectura" }, { titulo: "PDF de la lectura" }],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: paraLectura,
    precio: 17,
    estado: "disponible",
    destacado: false,
    imagen: "cartasLunas",
  },
  {
    slug: "lectura-mensual",
    categoria: "crono-tarot",
    tipo: "lectura",
    nombre: "Lectura mensual",
    frase:
      "Lectura breve de un mes concreto para identificar los temas más relevantes y afrontar las próximas semanas con más conciencia.",
    descripcion:
      "Una lectura de un mes concreto para identificar los temas más relevantes, comprender los desafíos y afrontar las próximas semanas con mayor conciencia.",
    incluye: [{ titulo: "Lectura mensual breve con tarot Rider-Waite" }, { titulo: "Vídeo con la lectura" }, { titulo: "PDF de la lectura" }],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: paraLectura,
    precio: 8,
    estado: "disponible",
    destacado: false,
    imagen: "tarotLuna",
  },
  {
    slug: "lectura-semanal",
    categoria: "crono-tarot",
    tipo: "lectura",
    nombre: "Lectura semanal",
    frase: "Tendencias de la semana, retos que puedes afrontar y oportunidades que conviene aprovechar.",
    descripcion:
      "Una visión de la semana para reconocer las tendencias, los retos que puedes afrontar y las oportunidades que conviene aprovechar.",
    incluye: [{ titulo: "Lectura semanal con tarot Rider-Waite" }, { titulo: "Vídeo con la lectura" }, { titulo: "PDF de la lectura" }],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: paraLectura,
    precio: 8,
    estado: "disponible",
    destacado: false,
    imagen: "agendaFlores",
  },
  {
    slug: "mapa-de-vida",
    categoria: "lecturas",
    tipo: "lectura",
    nombre: "Tu Mapa de Vida",
    frase: "Lectura de 22 cartas que explora siete ámbitos de tu vida a través del pasado, el presente y el futuro.",
    descripcion:
      "Te ayuda a comprender tu situación, reconocer desafíos y descubrir nuevas perspectivas para avanzar con mayor claridad.",
    incluye: [
      { titulo: "Consultante" },
      { titulo: "A favor" },
      { titulo: "En contra" },
      { titulo: "Amor" },
      { titulo: "Entorno" },
      { titulo: "Trabajo" },
      { titulo: "Dinero" },
    ],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: [
      "Quieres una visión completa de tu momento vital.",
      "Estás en un cruce de caminos y necesitas ver el conjunto.",
      "Te apetece una lectura amplia y no de una sola pregunta.",
    ],
    precio: 17,
    estado: "disponible",
    destacado: false,
    imagen: "tiradaCristales",
  },
  {
    slug: "lectura-de-la-pareja",
    categoria: "lecturas",
    tipo: "lectura",
    nombre: "Lectura de la Pareja",
    frase: "La dinámica de una relación: puntos de conexión, diferencias y aprendizajes compartidos.",
    descripcion:
      "Explora la dinámica de una relación, sus puntos de conexión, sus diferencias y los aprendizajes que podéis compartir.",
    incluye: [{ titulo: "Lectura de la relación con tarot Rider-Waite" }, { titulo: "Vídeo con la lectura" }, { titulo: "PDF de la lectura" }],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: [
      "Quieres entender mejor cómo funciona tu relación.",
      "Buscas ver lo que os une y lo que os separa con calma.",
      "Te apetece una mirada desde fuera antes de dar un paso.",
    ],
    precio: 8,
    estado: "disponible",
    destacado: false,
    imagen: "tarotEnamorados",
  },
  {
    slug: "lectura-del-trabajo",
    categoria: "lecturas",
    tipo: "lectura",
    nombre: "Lectura del Trabajo",
    frase: "Tu situación profesional, tus fortalezas, los obstáculos y las posibilidades de crecimiento.",
    descripcion:
      "Analiza tu situación profesional, tus fortalezas, los obstáculos y las posibilidades de crecimiento para afrontar tu camino laboral con mayor claridad.",
    incluye: [{ titulo: "Lectura profesional con tarot Rider-Waite" }, { titulo: "Vídeo con la lectura" }, { titulo: "PDF de la lectura" }],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: [
      "Te sientes bloqueada en el trabajo.",
      "Estás pensando en un cambio profesional.",
      "Quieres ver tus fortalezas con más claridad.",
    ],
    precio: 8,
    estado: "disponible",
    destacado: false,
    imagen: "tarotAsOros",
  },
  {
    slug: "lectura-de-compatibilidad",
    categoria: "lecturas",
    tipo: "lectura",
    nombre: "Lectura de Compatibilidad",
    frase: "Afinidades, diferencias, fortalezas y retos de una relación para comprender mejor vuestro vínculo.",
    descripcion:
      "Descubre las afinidades, diferencias, fortalezas y retos de una relación para comprender mejor vuestro vínculo.",
    incluye: [{ titulo: "Lectura de compatibilidad con tarot Rider-Waite" }, { titulo: "Vídeo con la lectura" }, { titulo: "PDF de la lectura" }],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: [
      "Quieres comprender mejor un vínculo importante para ti.",
      "Te interesa ver en qué os parecéis y en qué no.",
      "Buscas claves para cuidar la relación.",
    ],
    precio: 8,
    estado: "disponible",
    destacado: false,
    imagen: "cartasDoradas",
  },
  {
    slug: "lectura-del-corazon",
    categoria: "lecturas",
    tipo: "lectura",
    nombre: "Lectura del Corazón",
    frase: "Tus necesidades afectivas, tus emociones y los patrones que influyen en tu manera de amar y relacionarte.",
    descripcion:
      "Una lectura centrada en tus necesidades afectivas, tus emociones y los patrones que influyen en tu manera de amar y relacionarte.",
    incluye: [{ titulo: "Lectura afectiva con tarot Rider-Waite" }, { titulo: "Vídeo con la lectura" }, { titulo: "PDF de la lectura" }],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: [
      "Sientes que repites patrones en tus relaciones.",
      "Quieres entender mejor lo que necesitas.",
      "Te apetece mirarte con cariño y sin juicio.",
    ],
    precio: 8,
    estado: "disponible",
    destacado: false,
    imagen: "tarotCuarzoRosa",
  },
  {
    slug: "tu-codigo-personal",
    categoria: "autoconocimiento",
    tipo: "lectura",
    nombre: "Tu Código Personal",
    frase: "Tarot numerológico basado en tu fecha de nacimiento.",
    descripcion:
      "Una lectura personalizada de tarot numerológico basada en tu fecha de nacimiento, con cinco claves para profundizar en tu autoconocimiento.",
    incluye: [
      { titulo: "Quién eres" },
      { titulo: "Cómo te relacionas" },
      { titulo: "Cuál es tu reto" },
      { titulo: "Cuál es tu potencial" },
      { titulo: "Qué necesitas integrar" },
    ],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: [
      "Te apetece conocerte mejor desde otro punto de vista.",
      "Quieres poner nombre a tus talentos y a tus retos.",
      "Te atrae la numerología y quieres probarla con cartas.",
    ],
    precio: 8,
    estado: "disponible",
    destacado: true,
    imagen: "tarotErmitano",
    calculadora: "/calculadora/codigo-personal",
  },
  {
    slug: "matriz-del-destino",
    categoria: "lecturas",
    tipo: "lectura",
    nombre: "Lectura de la Matriz del Destino",
    frase: "Tu Matriz del Destino interpretada a fondo: el camino completo de tu alma.",
    descripcion:
      "Calculo tu Matriz del Destino con tu fecha de nacimiento y la interpreto entera, a fondo y de forma personal, para que conozcas el camino completo de tu alma y sepas qué hacer con lo que descubres.",
    incluye: [
      { titulo: "Cómo mejorar tu relación de pareja" },
      { titulo: "Todos tus propósitos de vida" },
      { titulo: "Tus energías del año" },
      { titulo: "Tus profesiones idóneas" },
      { titulo: "Cómo sanar el karma de tus ancestros" },
      { titulo: "Cómo activar tu canal del dinero" },
    ],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: [
      "Quieres conocer tus talentos y tus retos.",
      "Quieres entender el camino de tu alma.",
      "Buscas recordar tu poder personal.",
    ],
    precio: 8,
    estado: "disponible",
    destacado: false,
    imagen: "diagramaCeleste",
    calculadora: "/calculadora/matriz-del-destino",
  },
  {
    slug: "analisis-matriz-del-destino",
    categoria: "autoconocimiento",
    tipo: "lectura",
    nombre: "Análisis de la Matriz del Destino",
    frase: "Un análisis a fondo de tu matriz completa: tus energías, tus propósitos, tu linaje y tus etapas.",
    descripcion: "Un análisis personalizado de tu Matriz del Destino completa a partir de tu fecha de nacimiento.",
    incluye: [{ titulo: "Tu matriz completa" }],
    formato: "Vídeo y PDF",
    entrega: entregaLectura,
    paraQuien: [],
    precio: null,
    estado: "disponible",
    destacado: false,
    imagen: "cartaCircular",
    calculadora: "/calculadora/matriz-del-destino",
  },
  {
    slug: "sesion-tarot-30-minutos",
    categoria: "sesiones",
    tipo: "sesion",
    nombre: "Sesión individual de Tarot · 30 minutos",
    frase: "Un espacio personalizado para abordar una pregunta concreta, comprender una situación y explorar nuevas perspectivas.",
    descripcion: "Una sesión de tarot en directo contigo, online, para trabajar una pregunta concreta.",
    incluye: [{ titulo: "Sesión en directo de 30 minutos" }, { titulo: "Online, desde donde estés" }],
    formato: "Sesión en directo de 30 minutos",
    entrega: entregaSesion,
    paraQuien: [
      "Tienes una pregunta concreta y quieres verla en directo.",
      "Te gusta poder preguntar y conversar durante la lectura.",
      "Necesitas una mirada desde fuera sobre una situación.",
    ],
    precio: 25,
    estado: "disponible",
    destacado: false,
    imagen: "tiradaSuelo",
  },
  {
    slug: "sesion-tarot-50-minutos",
    categoria: "sesiones",
    tipo: "sesion",
    nombre: "Sesión individual de Tarot · 50 minutos",
    frase:
      "Para profundizar en tu situación, explorar diferentes áreas de tu vida e identificar posibles caminos de actuación.",
    descripcion: "Una sesión de tarot en directo más larga, online, para ir a fondo.",
    incluye: [{ titulo: "Sesión en directo de 50 minutos" }, { titulo: "Online, desde donde estés" }],
    formato: "Sesión en directo de 50 minutos",
    entrega: entregaSesion,
    paraQuien: [
      "Quieres mirar varias áreas de tu vida con calma.",
      "Estás ante una decisión importante.",
      "Prefieres una sesión larga para profundizar.",
    ],
    precio: 35,
    estado: "disponible",
    destacado: false,
    imagen: "escritorioVela",
  },
  {
    slug: "reiki-pendulo-hebreo",
    categoria: "terapias",
    tipo: "terapia",
    nombre: "Reiki + péndulo hebreo",
    frase: "Mi sesión de Reiki, con el péndulo hebreo, para bajar revoluciones, soltar tensiones y dedicarte un tiempo solo para ti.",
    descripcion: "Acompañamiento energético orientado a la relajación, la calma y el bienestar interior.",
    incluye: [{ titulo: "Sesión de Reiki con péndulo hebreo" }],
    formato: "Online, a distancia",
    entrega: entregaTerapia,
    paraQuien: [],
    precio: null,
    estado: "disponible",
    destacado: false,
    imagen: "reikiManosLuz",
    enlace: "/servicios/reiki#terapias-title",
  },
  {
    slug: "pendulo-hebreo",
    categoria: "terapias",
    tipo: "terapia",
    nombre: "Péndulo hebreo",
    frase: "Trabajo energético con péndulo hebreo para explorar y trabajar aspectos relacionados con el equilibrio y el bienestar personal.",
    descripcion: "Trabajo energético con péndulo hebreo.",
    incluye: [{ titulo: "Sesión de péndulo hebreo" }],
    formato: "Online, a distancia",
    entrega: entregaTerapia,
    paraQuien: [],
    precio: null,
    estado: "disponible",
    destacado: false,
    imagen: "penduloMadera",
    enlace: "/servicios/reiki#terapias-title",
  },
  {
    slug: "analisis-de-chakras",
    categoria: "terapias",
    tipo: "terapia",
    nombre: "Análisis de chakras",
    frase: "Exploración de los siete chakras principales para observar cómo están tus centros de energía.",
    descripcion: "Exploración de los siete chakras principales.",
    incluye: [{ titulo: "Análisis de los siete chakras" }],
    formato: "Online, a distancia",
    entrega: entregaTerapia,
    paraQuien: [],
    precio: null,
    estado: "disponible",
    destacado: false,
    imagen: "chakrasLino",
    enlace: "/servicios/reiki#terapias-title",
  },
  {
    slug: "sanacion-akashica",
    categoria: "terapias",
    tipo: "terapia",
    nombre: "Sanación akáshica",
    frase: "Sanación energética y acompañamiento para tomar conciencia de patrones personales, soltar y armonizar.",
    descripcion: "Trabajo de sanación energética y acompañamiento. No es una lectura de registros.",
    incluye: [{ titulo: "Sesión de sanación akáshica" }],
    formato: "Online, a distancia",
    entrega: entregaTerapia,
    paraQuien: [],
    precio: null,
    estado: "disponible",
    destacado: false,
    imagen: "libroPaginasLuz",
    enlace: "/servicios/reiki#terapias-title",
  },
  {
    slug: "limpieza-energetica-espacios",
    categoria: "espacios",
    tipo: "espacio",
    nombre: "Limpieza energética de casas y espacios",
    frase: "Renovar y armonizar la energía de tu hogar o espacio de trabajo, a distancia. Solo necesito la dirección.",
    descripcion:
      "Limpieza energética a distancia de casas y espacios de trabajo, para favorecer un ambiente de calma, ligereza y bienestar. No hace falta que vaya, ni que estés en casa, ni que acordemos una hora.",
    incluye: [{ titulo: "Limpieza energética a distancia" }, { titulo: "Informe por WhatsApp" }],
    formato: "A distancia",
    entrega: "Te envío el informe por WhatsApp cuando termino la limpieza, tras confirmar el pago.",
    paraQuien: [
      "Llegas a una casa nueva y quieres empezar con buen pie.",
      "Empiezas una etapa nueva y quieres que tu casa la acompañe.",
      "Notas el ambiente cargado y no terminas de estar a gusto.",
    ],
    precio: 30,
    estado: "disponible",
    destacado: false,
    imagen: "habitacionCortinas",
    enlace: "/servicios/limpieza-energetica",
  },
];

export const inicioPreview = ["pausa-y-vuelve-a-ti", "lectura-del-cumpleanos", "tu-codigo-personal"];

export const tiendaPage = {
  eyebrow: "Tienda",
  title: "Tienda.",
  subtitle: "Meditaciones, lecturas y sesiones para seguir a tu ritmo.",
  navLabel: "Secciones de la tienda",
  card: {
    details: "Ver detalles",
    notify: "Avísame",
    soon: "Próximamente",
    launch: "Precio de lanzamiento",
    usual: "Precio habitual",
    onRequest: "Precio a consultar",
    info: "Pide información",
    calculate: "Calcular gratis",
  },
  compra: {
    eyebrow: "Cómo funciona la compra",
    title: "Cuatro pasos.",
    steps: [
      { title: "Eliges", text: "Mira la ficha del producto y elige el que encaja contigo." },
      { title: "Me escribes por WhatsApp", text: "Desde la ficha se abre WhatsApp con tu pedido ya escrito." },
      { title: "Pagas", text: "Te paso los datos de pago de forma privada por WhatsApp." },
      { title: "Recibes tu producto", text: "Tras confirmar el pago, te llega por enlace privado o por WhatsApp." },
    ],
  },
  legal: {
    title: "Antes de comprar",
    text: "Revisa las condiciones de compra, la política de privacidad y el aviso legal.",
  },
  faqTitle: "Preguntas sobre la tienda",
  cta: {
    title: "¿Tienes dudas?",
    text: "Escríbeme por WhatsApp y te ayudo a elegir.",
  },
};

export const fichaProducto = {
  back: "Volver a la tienda",
  includes: "Qué incluye",
  includesAudios: "Audios",
  total: "Duración total aproximada",
  format: "Formato",
  delivery: "Entrega",
  forWhom: "Para quién puede encajar",
  requirements: "Qué necesitas",
  requirementsMeditation:
    "Un móvil, tablet u ordenador con reproductor de audio, espacio para guardar los archivos y conexión a internet para descargarlos.",
  requirementsReading: "WhatsApp para recibir el vídeo y el PDF, y un dispositivo que pueda abrirlos.",
  requirementsSession: "Para la sesión online, conexión a internet y un dispositivo con cámara y micrófono.",
  requirementsBirthday: "Tu fecha de nacimiento, que me darás por WhatsApp al hacer el pedido.",
  requirementsSpace: "La dirección del espacio, que me darás por WhatsApp al hacer el pedido.",
  wellbeing:
    "Las meditaciones, las lecturas y las sesiones son prácticas de bienestar y autoconocimiento. Son complementarias y no sustituyen la atención médica ni psicológica.",
  buy: {
    title: "Comprar",
    terms: "He leído y acepto las",
    termsLink: "condiciones de compra",
    digital:
      "Solicito expresamente que el suministro del contenido digital comience antes de que finalice el plazo de desistimiento y reconozco que, al comenzar la ejecución, pierdo mi derecho de desistimiento.",
    button: "Comprar por WhatsApp",
    hint: "Marca las casillas para continuar.",
    note: "Se abre WhatsApp con tu pedido. Allí te indico cómo pagar.",
  },
  soon: {
    title: "Muy pronto",
    text: "Este producto todavía no está disponible. Si quieres, te aviso en cuanto lo esté.",
  },
  related: "También te puede interesar",
  calculadoras: {
    "/calculadora/matriz-del-destino": {
      title: "¿Aún no conoces tu matriz?",
      text: "Calcúlala gratis, mira cómo se construye y descarga tu lectura básica en PDF.",
      cta: "Calcular mi matriz",
    },
    "/calculadora/codigo-personal": {
      title: "¿Aún no conoces tus cartas?",
      text: "Calcula gratis tu Código Personal, mira tus cinco cartas y descarga tu PDF.",
      cta: "Calcular mi Código Personal",
    },
  } as Record<string, { title: string; text: string; cta: string }>,
};

export const tiendaFaqs: Faq[] = [
  {
    question: "¿Cómo pago?",
    answer:
      "Desde la ficha del producto me escribes por WhatsApp con tu pedido y te paso los datos de pago de forma privada. Nunca publico datos bancarios en la web.",
  },
  {
    question: "¿Cuándo lo recibo?",
    answer:
      "Siempre después de confirmar el pago. Antes de que pagues te indico por WhatsApp el plazo aproximado de entrega.",
  },
  {
    question: "¿En qué formato llega?",
    answer:
      "Las meditaciones, en archivos MP3 por enlace privado de descarga. Las lecturas, en vídeo y PDF por WhatsApp. Las sesiones en directo son online y la limpieza de espacios, a distancia, con su informe por WhatsApp.",
  },
  {
    question: "¿Qué necesito para escuchar las meditaciones?",
    answer:
      "Un móvil, tablet u ordenador con reproductor de audio y espacio para guardar los archivos. Con auriculares se disfrutan más, pero no son imprescindibles.",
  },
  {
    question: "¿Puedo devolverlo?",
    answer:
      "Tienes 14 días para desistir de la compra. En el contenido digital, si pides que te lo envíe antes de que acabe ese plazo, pierdes el derecho de desistimiento al empezar el envío. Lo tienes explicado en las condiciones de compra.",
  },
  {
    question: "¿Y si hay un problema con un archivo o un enlace?",
    answer: `Escríbeme por WhatsApp al ${site.contact.phoneDisplay} o a ${site.contact.email} y lo solucionamos.`,
  },
];

export function getProducto(slug: string) {
  return productos.find((producto) => producto.slug === slug);
}

export function productosDe(categoria: CategoriaId) {
  return productos.filter((producto) => producto.categoria === categoria);
}
