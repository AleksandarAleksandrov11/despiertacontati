import type { Faq } from "./faqs";

export const rutasCalculadora = {
  hub: "/calculadora",
  individual: "/calculadora/matriz-del-destino",
  pareja: "/calculadora/compatibilidad-de-pareja",
};

export const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

export const calculadoraHub = {
  eyebrow: "Calculadora gratuita",
  title: "Tu Matriz del Destino, a partir de tu fecha de nacimiento.",
  subtitle: "Calcula gratis tu matriz o la de tu pareja, mira cómo se construye y descárgate tu lectura en PDF.",
  choose: "Elige tu calculadora",
  opciones: [
    {
      id: "individual",
      tag: "Individual",
      title: "Tu matriz",
      text: "Tu energía personal, tu centro, tu talento y tus propósitos.",
      needs: "Tu fecha de nacimiento",
      cta: "Calcular mi matriz",
    },
    {
      id: "pareja",
      tag: "Pareja",
      title: "Compatibilidad de pareja",
      text: "La energía de vuestra relación y los propósitos que compartís.",
      needs: "Las dos fechas de nacimiento",
      cta: "Calcular nuestra matriz",
    },
  ],
  pasos: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos y menos de un minuto.",
    items: [
      { title: "Escribe la fecha", text: "Solo necesitas el día, el mes y el año de nacimiento. No hace falta la hora." },
      { title: "Mira cómo se construye", text: "Tu matriz se dibuja ante ti, energía a energía, hasta llegar a tu centro." },
      { title: "Descarga tu PDF", text: "Con tu lectura gratuita, para leerla con calma y volver a ella cuando quieras." },
    ],
  },
  queEs: {
    eyebrow: "Qué es",
    title: "Un mapa de quién eres.",
    paragraphs: [
      "La Matriz del Destino es una herramienta de autoconocimiento que traduce tu fecha de nacimiento en las 22 energías de los arcanos mayores, colocadas sobre un octograma.",
      "Cada posición habla de un área de tu vida: cómo eres, tus talentos, tus aprendizajes, tu relación con lo material y tus propósitos. No se trabaja con cartas.",
    ],
  },
  comparativa: {
    eyebrow: "Gratis y completa",
    title: "Empieza gratis. Profundiza cuando quieras.",
    gratis: {
      title: "Calculadora gratuita",
      items: ["Tu matriz completa dibujada", "Tu energía personal, tu centro y tu talento", "Tus tres propósitos", "Tu PDF con la lectura básica"],
    },
    completa: {
      title: "Lectura completa",
      items: [
        "Tu matriz interpretada a fondo por mí",
        "Tu energía personal y tu fortaleza interior",
        "Tu relación con el mundo material",
        "Tus aprendizajes y tu poder personal",
        "En vídeo y PDF por WhatsApp",
      ],
      cta: "Ver la lectura completa",
    },
  },
};

export const calculadoraForm = {
  dia: "Día",
  mes: "Mes",
  anio: "Año",
  nombre: "Nombre",
  opcional: "opcional",
  nombreHint: "Solo para personalizar tu PDF.",
  error: "Revisa la fecha: no parece una fecha válida.",
  privacidad: "Tu fecha no se guarda en ninguna base de datos. Solo se usa para calcular tu matriz.",
};

export const calculadoraIndividual = {
  eyebrow: "Calculadora individual",
  title: "Calcula tu Matriz del Destino.",
  subtitle: "Escribe tu fecha de nacimiento y mira cómo se construye tu matriz, energía a energía.",
  formTitle: "Tu fecha de nacimiento",
  submit: "Calcular mi matriz",
  recalcular: "Calcular otra fecha",
  pasos: [
    "Leyendo tu fecha de nacimiento",
    "Tu día",
    "Tu mes",
    "Tu año",
    "Tu suma",
    "Encontrando tu centro",
    "Trazando tu linaje",
    "Uniendo tus energías",
    "Tu matriz está lista",
  ],
  skip: "Ver mi matriz ya",
  etiquetas: ["Día", "Mes", "Año", "Suma"] as [string, string, string, string],
  verLectura: "Ver mi lectura",
  stageLabel: (fecha: string) => `Tu Matriz del Destino, ${fecha}`,
  stageTitle: (nombre: string) => (nombre ? `La matriz de ${nombre}` : "Tu matriz"),
  resultadosEyebrow: "Tu lectura gratuita",
  resultadosTitle: "Esto es lo que dice tu matriz.",
  posiciones: {
    centro: {
      label: "Tu centro",
      text: "La energía que está en el corazón de tu matriz. Tu zona de confort y el lugar al que siempre vuelves.",
    },
    energia: {
      label: "Tu energía personal",
      text: "Tu día de nacimiento. Cómo eres y cómo te muestras al mundo.",
    },
    talento: {
      label: "Tu talento",
      text: "Tu mes de nacimiento. El don con el que llegas a esta vida.",
    },
  },
  repetida: "Esta energía coincide con tu centro: está muy presente en tu vida y se expresa con fuerza.",
  propositos: {
    eyebrow: "Tus propósitos",
    title: "Lo que has venido a vivir.",
    text: "Tu matriz guarda tres propósitos que se activan en distintas etapas de la vida.",
    personal: { label: "Propósito personal", etapa: "De los 20 a los 40 años", partes: ["Cielo", "Tierra"] },
    social: { label: "Propósito social", etapa: "De los 40 a los 60 años", partes: ["Línea masculina", "Línea femenina"] },
    espiritual: { label: "Propósito espiritual", etapa: "Activo toda la vida", partes: ["Personal", "Social"] },
    locked: "Qué te pide este propósito lo vemos en tu lectura completa.",
  },
  bloqueadas: {
    eyebrow: "Lo que guarda tu matriz",
    title: "Hay mucho más en tu matriz.",
    text: "Estas energías también forman parte de ti. En tu lectura completa te cuento cómo se viven en equilibrio y qué hacer cuando se desequilibran.",
    aprendizajes: {
      label: "Tus aprendizajes",
      text: "Lo que vienes a aprender y los patrones que se repiten hasta que los transformas.",
    },
    material: {
      label: "Tu relación con el mundo material",
      text: "Cómo se abre tu abundancia y qué la frena.",
    },
    lock: "En tu lectura completa",
  },
  leyenda: {
    centro: "Centro",
    energia: "Energía personal",
    talento: "Talento",
    aprendizajes: "Aprendizajes",
    material: "Mundo material",
  },
  pdf: {
    title: "Tu lectura gratuita en PDF",
    text: "Descarga tu matriz con tu lectura básica para leerla con calma, guardarla o compartirla.",
    button: "Descargar mi PDF gratuito",
    short: "Descargar PDF",
  },
  completa: {
    eyebrow: "Tu lectura completa",
    title: "Esto es solo el principio.",
    text: "En tu lectura completa interpreto tu matriz entera, a fondo y de forma personal, y la ordeno en cinco claves para que sepas qué hacer con lo que descubres.",
    claves: [
      "Tu energía personal",
      "Tu fortaleza interior",
      "Tu relación con el mundo material",
      "Tus aprendizajes",
      "Tu poder personal",
    ],
    formato: "Te la envío en vídeo y PDF por WhatsApp.",
    info: "Prefiero preguntar antes",
  },
};

export const calculadoraPareja = {
  eyebrow: "Compatibilidad de pareja",
  title: "Calcula vuestra Matriz del Destino de pareja.",
  subtitle: "Escribe las dos fechas de nacimiento y mira cómo se construye la matriz de vuestra relación.",
  personas: ["Primera persona", "Segunda persona"],
  submit: "Calcular nuestra matriz",
  recalcular: "Calcular otras fechas",
  pasos: [
    "Leyendo vuestras fechas",
    "Uniendo vuestros días",
    "Uniendo vuestros meses",
    "Uniendo vuestros años",
    "Vuestra suma",
    "Encontrando vuestro centro",
    "Trazando vuestro linaje",
    "Uniendo vuestras energías",
    "Vuestra matriz está lista",
  ],
  skip: "Ver nuestra matriz ya",
  etiquetas: ["Días", "Meses", "Años", "Suma"] as [string, string, string, string],
  verLectura: "Ver nuestra lectura",
  stageLabel: (fechas: string) => `Matriz del Destino de pareja, ${fechas}`,
  stageTitle: (nombres: string) => (nombres ? `La matriz de ${nombres}` : "Vuestra matriz"),
  resultadosEyebrow: "Vuestra lectura gratuita",
  resultadosTitle: "Esto es lo que dice vuestra matriz.",
  centro: {
    label: "La energía de vuestra relación",
    text: "El centro de vuestra matriz. Lo que os une y el clima en el que vive vuestra pareja.",
  },
  aporta: (nombre: string) => `Lo que aporta ${nombre}`,
  aportaFallback: ["la primera persona", "la segunda persona"],
  aportaText: "Su centro en la Matriz del Destino. Fecha de nacimiento:",
  propositos: {
    eyebrow: "Vuestros propósitos",
    title: "Lo que habéis venido a construir.",
    text: "La matriz de pareja también guarda tres propósitos: lo que construís hacia dentro, lo que aportáis hacia fuera y lo que os hace crecer.",
    personal: { label: "Propósito de la pareja", etapa: "Hacia dentro", partes: ["Cielo", "Tierra"] },
    social: { label: "Propósito social", etapa: "Hacia fuera", partes: ["Línea masculina", "Línea femenina"] },
    espiritual: { label: "Propósito espiritual", etapa: "Lo que os hace crecer", partes: ["Pareja", "Social"] },
    locked: "Qué os pide cada propósito lo vemos en la lectura completa.",
  },
  bloqueadas: {
    eyebrow: "Lo que guarda vuestra matriz",
    title: "Hay mucho más en vuestra relación.",
    text: "Estas energías también forman parte de vuestra pareja. En la lectura completa os cuento cómo se viven en equilibrio y qué hacer cuando se desequilibran.",
    aprendizajes: {
      label: "Vuestros aprendizajes",
      text: "Lo que habéis venido a aprender juntos y los patrones que se repiten en la relación.",
    },
    material: {
      label: "El dinero en pareja",
      text: "Cómo se abre vuestra abundancia compartida y qué la frena.",
    },
    lock: "En la lectura completa",
  },
  leyenda: {
    centro: "Centro de la pareja",
    aprendizajes: "Aprendizajes",
    material: "Dinero en pareja",
  },
  pdf: {
    title: "Vuestra lectura gratuita en PDF",
    text: "Descargad vuestra matriz de pareja con la lectura básica para leerla juntos con calma.",
    button: "Descargar nuestro PDF gratuito",
    short: "Descargar PDF",
  },
  completa: {
    eyebrow: "Lectura completa de pareja",
    title: "Lo que vuestra matriz aún no os ha contado.",
    text: "En la lectura completa interpreto vuestra matriz de pareja a fondo y de forma personal: lo que os une, lo que os reta y hacia dónde podéis crecer juntos.",
    formato: "Te la envío en vídeo y PDF por WhatsApp.",
    precio: "Precio a consultar",
    precioText: "Escríbeme por WhatsApp con vuestras fechas y te cuento cómo es la lectura y su precio.",
    button: "Pedir información por WhatsApp",
  },
};

export function detalleIndividual(fecha: string, nombre: string) {
  return nombre ? `Me llamo ${nombre} y nací el ${fecha}.` : `Nací el ${fecha}.`;
}

export function infoIndividualMessage(fecha: string, nombre: string) {
  return `Hola Tati, ${nombre ? `me llamo ${nombre}, ` : ""}nací el ${fecha} y me gustaría más información sobre la lectura completa de mi Matriz del Destino.`;
}

export function infoParejaMessage(personas: { fecha: string; nombre: string }[]) {
  const lista = personas.map((persona) => (persona.nombre ? `${persona.nombre}, ${persona.fecha}` : persona.fecha)).join(" y ");
  return `Hola Tati, hemos calculado nuestra Matriz del Destino de pareja (${lista}) y me gustaría información sobre la lectura completa.`;
}

export const calculadoraFaqs: Faq[] = [
  {
    question: "¿Es gratis?",
    answer: "Sí. Calcular tu matriz y descargar el PDF con tu lectura básica no cuesta nada.",
  },
  {
    question: "¿Se guarda mi fecha de nacimiento?",
    answer: "No. Solo se usa en el momento para calcular tu matriz y preparar tu PDF. No se guarda en ninguna base de datos.",
  },
  {
    question: "¿En qué se diferencia de la lectura completa?",
    answer:
      "La calculadora te muestra las energías principales de tu matriz con una lectura general. En la lectura completa interpreto tu matriz entera, a fondo y de forma personal, y te la envío en vídeo y PDF.",
  },
  {
    question: "¿La Matriz del Destino es tarot?",
    answer: "No. Usa la energía de los arcanos mayores, pero no se trabaja con cartas.",
  },
  {
    question: "¿Necesito mi hora de nacimiento?",
    answer: "No. Solo el día, el mes y el año.",
  },
];

export const calculadoraPromo = {
  eyebrow: "Calculadora gratuita",
  title: "Descubre tu Matriz del Destino.",
  text: "Escribe tu fecha de nacimiento, mira cómo se construye tu matriz y descárgate gratis tu lectura en PDF. También puedes calcular la de tu pareja.",
  individual: "Calcular mi matriz",
  pareja: "Compatibilidad de pareja",
};

export const calculadoraPdf = {
  gratuita: "Lectura gratuita",
  tituloIndividual: "Tu Matriz del Destino",
  tituloPareja: "Matriz del Destino de pareja",
  nacimiento: "Fecha de nacimiento",
  fechas: "Fechas de nacimiento",
  matrizTitle: "Tu matriz",
  matrizParejaTitle: "Vuestra matriz",
  matrizText:
    "La Matriz del Destino traduce una fecha de nacimiento en las 22 energías de los arcanos mayores, colocadas sobre un octograma. Cada número es un arcano y cada posición habla de un área de la vida.",
  matrizParejaText:
    "La matriz de pareja une las dos fechas de nacimiento en un solo octograma. Cada número es un arcano y cada posición habla de un área de vuestra relación.",
  arcano: "Arcano",
  leyenda: "Las posiciones clave",
  bloqueadoTitle: "Lo que todavía no te he contado",
  bloqueadoParejaTitle: "Lo que todavía no os he contado",
  tambienParejaTitle: "En la lectura completa:",
  tambienPareja: ["Lo que os une y lo que os reta", "Qué os pide cada propósito", "Hacia dónde podéis crecer juntos"],
  contacto: "Escríbeme",
  web: "Web",
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  ctaTitle: "Esto es solo el principio.",
  ctaBuy: "Quiero mi lectura completa",
  ctaInfo: "Pedir información por WhatsApp",
  ctaBuyShort: "Quiero mi lectura",
  ctaInfoShort: "Pedir información",
  avance: "Lo descubres en tu lectura completa.",
  avancePareja: "Lo descubrís en la lectura completa de pareja.",
  ctaQr: "O escanea este código y escríbeme por WhatsApp.",
  precio: "Precio",
  sobreTitle: "Soy Tati.",
  sobre: [
    "Hace más de 20 años abrí mi primer centro de terapias naturales y desde entonces acompaño a personas en su camino con Reiki, meditación, tarot y herramientas de autoconocimiento como la Matriz del Destino.",
    "Para mí, despertar es darte cuenta de que tienes el poder de tu vida. Mi forma de acompañar es práctica y directa: que entiendas lo que te pasa y sepas qué hacer con ello.",
  ],
  aviso:
    "Esta lectura es una herramienta de autoconocimiento y bienestar. No sustituye la atención médica ni psicológica ni el asesoramiento profesional.",
};
