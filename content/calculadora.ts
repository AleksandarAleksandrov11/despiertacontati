import type { Faq } from "./faqs";

export const rutasCalculadora = {
  hub: "/calculadora",
  individual: "/calculadora/matriz-del-destino",
  codigo: "/calculadora/codigo-personal",
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
  eyebrow: "Calculadoras gratuitas",
  title: "Lo que dice tu fecha de nacimiento.",
  subtitle: "Calcula gratis tu Matriz del Destino o tu Código Personal y descárgate tu lectura en PDF.",
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
      id: "codigo",
      tag: "Tarot numerológico",
      title: "Tu Arcano Personal y Código Personal",
      text: "Tu carta personal y las cinco cartas de tu Código Personal.",
      needs: "Tu fecha de nacimiento",
      cta: "Calcular mi código",
    },
  ],
  pasos: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos y menos de un minuto.",
    items: [
      { title: "Escribe la fecha", text: "Solo necesitas el día, el mes y el año de nacimiento. No hace falta la hora." },
      { title: "Mira cómo se construye", text: "Tu matriz se dibuja ante ti, energía a energía, o tus cartas aparecen sobre la mesa." },
      { title: "Descarga tu PDF", text: "Con tu lectura gratuita, para leerla con calma y volver a ella cuando quieras." },
    ],
  },
  queEs: {
    eyebrow: "Qué es",
    title: "Un mapa de quién eres.",
    paragraphs: [
      "La Matriz del Destino es una herramienta de autoconocimiento que traduce tu fecha de nacimiento en las 22 energías de los arcanos mayores, colocadas sobre un octograma.",
      "Cada posición habla de un área de tu vida: cómo eres, tus talentos, tu bagaje kármico, tu relación con lo material, tu linaje y tus propósitos.",
    ],
  },
  comparativa: {
    eyebrow: "Gratis y completa",
    title: "Empieza gratis. Profundiza cuando quieras.",
    gratis: {
      title: "Calculadora gratuita",
      items: [
        "Tu matriz completa dibujada",
        "Tu energía personal, tu centro y tu talento",
        "Tus cuatro propósitos",
        "Tu PDF con la lectura básica",
      ],
    },
    completa: {
      title: "Análisis de tu matriz",
      items: [
        "Análisis de tu esencia, tus talentos y tu poder",
        "Tu karma material y tu bagaje kármico",
        "El canal del dinero y el canal de las relaciones",
        "Y mucho más",
        "En una sesión en directo de 50 minutos, online",
      ],
      cta: "Ver el análisis",
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
    "Tu lección del alma",
    "Encontrando tu centro",
    "Trazando tu linaje",
    "Uniendo tus energías",
    "Tus energías de cada edad",
    "Tu matriz está lista",
  ],
  skip: "Ver mi matriz ya",
  etiquetas: ["Día", "Mes", "Año"] as [string, string, string],
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
  trios: {
    cola: {
      label: "Tu bagaje kármico",
      text: "Las tres energías de la parte baja de tu matriz, de dentro hacia fuera. Hablan de lo que traes de antes y de lo que vienes a resolver.",
    },
    talentos: {
      label: "Tus talentos",
      text: "La línea de tu mes de nacimiento, de fuera hacia dentro. Los dones que llegan contigo y cómo se despliegan.",
    },
  },
  propositos: {
    eyebrow: "Tus propósitos",
    title: "Lo que has venido a vivir.",
    text: "Tu matriz guarda cuatro propósitos que se activan en distintas etapas de la vida.",
    personal: { label: "Propósito personal", etapa: "De los 20 a los 40 años", partes: ["Cielo", "Tierra"] },
    social: { label: "Propósito social", etapa: "De los 40 a los 60 años", partes: ["Línea masculina", "Línea femenina"] },
    espiritual: { label: "Propósito espiritual", etapa: "Activo toda la vida", partes: ["Personal", "Social"] },
    planetario: { label: "Propósito planetario", etapa: "Tu huella en el mundo", partes: ["Social", "Espiritual"] },
  },
  linaje: {
    eyebrow: "Tu linaje",
    title: "Lo que heredas de tu familia.",
    text: "Las diagonales de tu matriz son las líneas de tu linaje. Guardan los programas que recibes de la familia de tu padre y de la de tu madre.",
    paterna: { label: "Línea paterna", partes: ["Esquina superior", "Esquina inferior"] },
    materna: { label: "Línea materna", partes: ["Esquina superior", "Esquina inferior"] },
    centro: { label: "La energía de tu linaje", text: "La suma de las cuatro esquinas de tu matriz. Es la energía con la que se calculan tus líneas de linaje." },
    union: { label: "Tu centro y tu linaje", text: "Tu centro unido a la energía de tu linaje." },
  },
  bloqueadas: {
    eyebrow: "Lo que guarda tu matriz",
    title: "Hay mucho más en tu matriz.",
    text: "Estas energías también forman parte de ti. En tu análisis te cuento cómo se viven en equilibrio y qué hacer cuando se desequilibran.",
    aprendizajes: {
      label: "Tus aprendizajes",
      text: "Lo que vienes a aprender y los patrones que se repiten hasta que los transformas.",
    },
    material: {
      label: "Tu relación con el mundo material",
      text: "Cómo se abre tu abundancia y qué la frena.",
    },
    linaje: {
      label: "Lo que heredas de tu familia",
      text: "Los programas que recibes de la familia de tu padre y de la de tu madre, y cómo sanarlos.",
    },
    lock: "En tu análisis",
  },
  leyenda: {
    energia: "Tu energía personal",
    talento: "Talento",
    material: "Dificultades en el mundo material",
    karma: "Bagaje kármico",
    poder: "Tu poder personal",
  },
  pdf: { short: "Descargar PDF" },
  descubrelo: "Descúbrelo. Pide tu análisis",
  completa: {
    eyebrow: "Tu análisis completo",
    title: "Esto es solo el principio.",
    text: "En tu análisis interpreto tu matriz entera, a fondo y de forma personal, para que sepas qué hacer con lo que descubres.",
    claves: ["Análisis de tu esencia", "Tus talentos", "Tu karma material", "Tu bagaje kármico", "Tu poder", "El canal del dinero", "El canal de las relaciones"],
    mas: "Y mucho más.",
    formato: "Lo vemos en una sesión en directo de 50 minutos, online.",
    info: "Prefiero preguntar antes",
  },
};

export function detalleIndividual(fecha: string, nombre: string) {
  return nombre ? `Me llamo ${nombre} y nací el ${fecha}.` : `Nací el ${fecha}.`;
}

export function infoIndividualMessage(fecha: string, nombre: string) {
  return `Hola Tati, ${nombre ? `me llamo ${nombre}, ` : ""}nací el ${fecha} y me gustaría más información sobre el análisis de mi Matriz del Destino.`;
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
    question: "¿En qué se diferencia del análisis?",
    answer:
      "La calculadora te muestra las energías principales de tu matriz con una lectura general. En el análisis interpreto tu matriz entera, a fondo y de forma personal, en una sesión en directo de 50 minutos.",
  },
  {
    question: "¿La Matriz del Destino es tarot?",
    answer:
      "No. Usa la energía de los 22 arcanos mayores, pero no es una tirada de cartas: se calcula con tu fecha de nacimiento y cada posición habla de un área de tu vida.",
  },
  {
    question: "¿Necesito mi hora de nacimiento?",
    answer: "No. Solo el día, el mes y el año.",
  },
];

export const calculadoraPromo = {
  eyebrow: "Calculadora gratuita",
  title: "Descubre tu Matriz del Destino.",
  text: "Escribe tu fecha de nacimiento, mira cómo se construye tu matriz y descárgate gratis tu lectura en PDF. También puedes calcular tu arcano personal y tu Código Personal.",
  individual: "Calcular mi matriz",
  codigo: "Tu arcano personal y Código Personal",
};

export const calculadoraPdf = {
  gratuita: "Lectura gratuita",
  tituloIndividual: "Tu Matriz del Destino",
  nacimiento: "Fecha de nacimiento",
  matrizTitle: "Tu matriz",
  matrizText:
    "La Matriz del Destino traduce una fecha de nacimiento en las 22 energías de los arcanos mayores, colocadas sobre un octograma. Cada número es un arcano y cada posición habla de un área de la vida.",
  arcano: "Arcano",
  leyenda: "Las posiciones clave",
  bloqueadoTitle: "Lo que todavía no te he contado",
  contacto: "Escríbeme",
  web: "Web",
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  ctaTitle: "Esto es solo el principio.",
  ctaBuy: "Quiero mi análisis",
  ctaInfo: "Pedir información por WhatsApp",
  ctaQr: "O escanea este código y escríbeme por WhatsApp.",
  precio: "Precio",
  precioConsulta: "Precio a consultar",
  sobreTitle: "Soy Tati.",
  sobre: [
    "Hace más de 20 años abrí mi primer centro de terapias naturales y desde entonces acompaño a personas en su camino con Reiki, meditación, tarot y herramientas de autoconocimiento como la Matriz del Destino.",
    "Para mí, despertar es recordar quién eres, recuperar tu poder de elegir y crear tu nueva vida. Mi forma de acompañar es práctica y directa: que entiendas lo que te pasa y sepas qué hacer con ello.",
  ],
  aviso:
    "Esta lectura es una herramienta de autoconocimiento y bienestar. No sustituye la atención médica ni psicológica ni el asesoramiento profesional.",
};
