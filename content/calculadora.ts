import type { Faq } from "./faqs";

export const rutasCalculadora = {
  hub: "/calculadora",
  individual: "/calculadora/matriz-del-destino",
  pareja: "/calculadora/compatibilidad-de-pareja",
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
  subtitle: "Calcula gratis tu Matriz del Destino, la de tu pareja o tu Código Personal, y descárgate tu lectura en PDF.",
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
      "Cada posición habla de un área de tu vida: cómo eres, tus talentos, tus aprendizajes, tu relación con lo material, tu linaje y tus propósitos. Alrededor del octograma están las energías de cada edad, desde que naces hasta los 80 años.",
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
        "Tus energías por edades y tu mapa de chakras",
        "Tu PDF con la lectura básica",
      ],
    },
    completa: {
      title: "Lectura completa",
      items: [
        "El camino completo de tu alma, interpretado a fondo por mí",
        "Tu relación de pareja y todos tus propósitos de vida",
        "Tus energías del año y tus profesiones idóneas",
        "Cómo sanar el karma de tus ancestros y activar tu canal del dinero",
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
      label: "Tu cola kármica",
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
    locked: "Qué te pide este propósito lo vemos en tu lectura completa.",
  },
  edades: {
    eyebrow: "Tus energías por edades",
    title: "La energía de cada etapa de tu vida.",
    text: "Alrededor de tu matriz está tu línea de vida. Cada punto es la energía que te acompaña en una edad, desde que naces hasta los 80 años, y empieza de nuevo con la energía de tu día de nacimiento.",
    ahora: (edad: number) => `Ahora tienes ${edad} ${edad === 1 ? "año" : "años"}. Esta es la energía de tu etapa actual.`,
    etapa: (etapa: { etiqueta: string; principal: boolean }) => `Tu etapa actual · ${etapa.principal ? "los" : "de"} ${etapa.etiqueta} años`,
    tramo: (desde: number) => `De ${desde} a ${desde + 10} años`,
    edad: "Edad",
    nota: "Qué te pide cada etapa y cómo vivirla lo vemos en tu lectura completa.",
  },
  chakras: {
    eyebrow: "Tu mapa de chakras",
    title: "Cómo se reparte tu energía.",
    text: "Cada fila es un chakra, del más alto al más bajo, con tres energías: la física, la energética y la emocional. La última fila es la suma de cada columna.",
    columnas: { chakra: "Chakra", fisico: "Físico", energia: "Energía", emocion: "Emoción" },
    filas: [
      { nombre: "Sahasrara", es: "Corona", area: "Misión y conexión espiritual" },
      { nombre: "Ajna", es: "Tercer ojo", area: "Intuición y visión" },
      { nombre: "Vishuddha", es: "Garganta", area: "Expresión y comunicación" },
      { nombre: "Anahata", es: "Corazón", area: "Relaciones y amor" },
      { nombre: "Manipura", es: "Plexo solar", area: "Poder personal y estatus" },
      { nombre: "Svadhisthana", es: "Sacro", area: "Placer, creatividad y alegría" },
      { nombre: "Muladhara", es: "Raíz", area: "Cuerpo, materia y seguridad" },
    ],
    total: "Total",
    aviso: "El mapa de chakras es una herramienta de autoconocimiento. No es un diagnóstico ni sustituye la atención médica.",
  },
  linaje: {
    eyebrow: "Tu linaje",
    title: "Lo que heredas de tu familia.",
    text: "Las diagonales de tu matriz son las líneas de tu linaje. Guardan los programas que recibes de la familia de tu padre y de la de tu madre.",
    paterna: { label: "Línea paterna", partes: ["Esquina superior", "Esquina inferior"] },
    materna: { label: "Línea materna", partes: ["Esquina superior", "Esquina inferior"] },
    centro: { label: "La energía de tu linaje", text: "La suma de las cuatro esquinas de tu matriz. Es la energía con la que se calculan tus líneas de linaje." },
    union: { label: "Tu centro y tu linaje", text: "Tu centro unido a la energía de tu linaje." },
    nota: "Cómo sanar lo que traes de tu linaje lo vemos en tu lectura completa.",
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
    linaje: {
      label: "Lo que heredas de tu familia",
      text: "Los programas que recibes de la familia de tu padre y de la de tu madre, y cómo sanarlos.",
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
    text: "En tu lectura completa interpreto tu matriz entera, a fondo y de forma personal. Conocerás el camino completo de tu alma y sabrás qué hacer con lo que descubres.",
    claves: [
      "Cómo mejorar tu relación de pareja",
      "Todos tus propósitos de vida",
      "Tus energías del año",
      "Tus profesiones idóneas",
      "Cómo sanar el karma de tus ancestros",
      "Cómo activar tu canal del dinero",
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
    "Vuestra lección en común",
    "Encontrando vuestro centro",
    "Trazando vuestro linaje",
    "Uniendo vuestras energías",
    "Vuestra matriz está lista",
  ],
  skip: "Ver nuestra matriz ya",
  etiquetas: ["Días", "Meses", "Años"] as [string, string, string],
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
  },
  mas: {
    eyebrow: "Más de vuestra matriz",
    title: "Lo que también guarda vuestra relación.",
    text: "Estas energías también forman parte de vuestra pareja: lo que aprendéis juntos, cómo se vive el amor entre vosotros y cómo se mueve vuestra abundancia.",
    aprendizajes: {
      label: "Vuestros aprendizajes",
      text: "Lo que habéis venido a aprender juntos y los patrones que se repiten en la relación.",
    },
    amor: {
      label: "Vuestro amor",
      text: "Cómo se expresa el amor en vuestra relación.",
    },
    material: {
      label: "El dinero en pareja",
      text: "Cómo se abre vuestra abundancia compartida.",
    },
  },
  leyenda: {
    centro: "Centro de la pareja",
    aprendizajes: "Aprendizajes",
    amor: "Amor",
    material: "Dinero en pareja",
  },
  pdf: {
    title: "Vuestra lectura gratuita en PDF",
    text: "Descargad vuestra matriz de pareja con la lectura básica para leerla juntos con calma.",
    button: "Descargar nuestro PDF gratuito",
    short: "Descargar PDF",
  },
};

export function detalleIndividual(fecha: string, nombre: string) {
  return nombre ? `Me llamo ${nombre} y nací el ${fecha}.` : `Nací el ${fecha}.`;
}

export function infoIndividualMessage(fecha: string, nombre: string) {
  return `Hola Tati, ${nombre ? `me llamo ${nombre}, ` : ""}nací el ${fecha} y me gustaría más información sobre la lectura completa de mi Matriz del Destino.`;
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
    answer:
      "No. Usa la energía de los 22 arcanos mayores, pero no es una tirada de cartas: se calcula con tu fecha de nacimiento y cada posición habla de un área de tu vida.",
  },
  {
    question: "¿Qué son las energías por edades?",
    answer:
      "Son los números que rodean tu matriz. Cada uno es la energía que te acompaña en una etapa de tu vida, desde que naces hasta los 80 años. La calculadora te marca la de tu edad actual.",
  },
  {
    question: "¿Necesito mi hora de nacimiento?",
    answer: "No. Solo el día, el mes y el año.",
  },
];

export const calculadoraPromo = {
  eyebrow: "Calculadora gratuita",
  title: "Descubre tu Matriz del Destino.",
  text: "Escribe tu fecha de nacimiento, mira cómo se construye tu matriz y descárgate gratis tu lectura en PDF. También puedes calcular la de tu pareja o tu arcano personal y tu Código Personal.",
  individual: "Calcular mi matriz",
  pareja: "Compatibilidad de pareja",
  codigo: "Tu arcano personal y Código Personal",
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
  contacto: "Escríbeme",
  web: "Web",
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  ctaTitle: "Esto es solo el principio.",
  ctaBuy: "Quiero mi lectura completa",
  ctaInfo: "Pedir información por WhatsApp",
  edadesCompleta: "La energía de cada etapa de tu vida y tus energías del año las vemos en tu lectura completa.",
  ctaQr: "O escanea este código y escríbeme por WhatsApp.",
  precio: "Precio",
  precioConsulta: "Precio a consultar",
  sobreTitle: "Soy Tati.",
  sobre: [
    "Hace más de 20 años abrí mi primer centro de terapias naturales y desde entonces acompaño a personas en su camino con Reiki, meditación, tarot y herramientas de autoconocimiento como la Matriz del Destino.",
    "Para mí, despertar es darte cuenta de que tienes el poder de tu vida. Mi forma de acompañar es práctica y directa: que entiendas lo que te pasa y sepas qué hacer con ello.",
  ],
  aviso:
    "Esta lectura es una herramienta de autoconocimiento y bienestar. No sustituye la atención médica ni psicológica ni el asesoramiento profesional.",
};
