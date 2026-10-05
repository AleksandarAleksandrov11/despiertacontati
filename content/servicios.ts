import type { ImageKey } from "./imagenes";

export type ServicioSlug = "reiki" | "meditacion" | "tarot-terapeutico";

export type ContactTopic = "reiki" | "meditacion" | "tarot" | "curso-reiki" | "no-lo-se";

export type Servicio = {
  slug: ServicioSlug;
  href: string;
  number: string;
  step: string;
  name: string;
  accent: string;
  image: ImageKey;
  summary: string;
  formats: string[];
  topic: ContactTopic;
  more: string;
};

export const servicios: Servicio[] = [
  {
    slug: "reiki",
    href: "/servicios/reiki",
    number: "01",
    step: "Calma",
    name: "Reiki",
    accent: "var(--color-chakra-corazon)",
    image: "reikiSesion",
    summary: "Primero, bajar revoluciones. El cuerpo se afloja y la cabeza deja de ir a mil.",
    formats: ["Presencial en Valencia", "Online", "Individual", "Cursos"],
    topic: "reiki",
    more: "Conoce el Reiki",
  },
  {
    slug: "meditacion",
    href: "/servicios/meditacion",
    number: "02",
    step: "Claridad",
    name: "Meditación",
    accent: "var(--color-chakra-tercer-ojo)",
    image: "meditacionEspaldas",
    summary: "Con calma llega la claridad. Meditaciones grabadas y clases en grupo para practicar en tu día a día.",
    formats: ["Presencial en Valencia", "Online", "Grupal", "Grabada"],
    topic: "meditacion",
    more: "Conoce la meditación",
  },
  {
    slug: "tarot-terapeutico",
    href: "/servicios/tarot-terapeutico",
    number: "03",
    step: "Decisión",
    name: "Tarot terapéutico",
    accent: "var(--color-chakra-plexo)",
    image: "tarotFlores",
    summary: "Un espejo para ver tu situación desde fuera y elegir con más claridad.",
    formats: ["Presencial en Valencia", "Online", "Individual"],
    topic: "tarot",
    more: "Conoce el tarot terapéutico",
  },
];

export const metodo = {
  eyebrow: "Método Despierta",
  title: "Calma, claridad y decisión.",
  steps: [
    {
      number: "01",
      step: "Calma",
      tool: "Reiki",
      accent: "var(--color-chakra-corazon)",
      image: "reikiRostro" as ImageKey,
      text: "Con ansiedad cuesta meditar. Primero, Reiki para bajar revoluciones.",
      href: "/servicios/reiki",
    },
    {
      number: "02",
      step: "Claridad",
      tool: "Meditación",
      accent: "var(--color-chakra-tercer-ojo)",
      image: "meditacionCasa" as ImageKey,
      text: "Con calma llega la claridad: aprendes a parar.",
      href: "/servicios/meditacion",
    },
    {
      number: "03",
      step: "Decisión",
      tool: "Tarot terapéutico",
      accent: "var(--color-chakra-plexo)",
      image: "tarotBaraja" as ImageKey,
      text: "El tarot te pone un espejo. Ves claro y eliges.",
      href: "/servicios/tarot-terapeutico",
    },
  ],
};

export type Formato = {
  title: string;
  text: string;
  cta: { label: string; href?: string; whatsapp?: string };
};

export const formatos: Formato[] = [
  {
    title: "Sesión individual",
    text: "Reiki, tarot, registros akáshicos o Matriz del Destino. Para ti sola, en Valencia u online.",
    cta: { label: "Reserva tu sesión", href: "/contacto" },
  },
  {
    title: "Clase grupal",
    text: "Meditación en grupo, online y en Valencia. Parar en compañía también ayuda.",
    cta: {
      label: "Quiero plaza",
      whatsapp: "Hola, Tati. Me interesan las clases grupales de meditación. ¿Me guardas plaza?",
    },
  },
  {
    title: "Meditación grabada",
    text: "Para escucharla cuando la necesites: en la ducha, antes de dormir o antes de decidir.",
    cta: { label: "Ver meditaciones", href: "/servicios/meditacion#grabadas" },
  },
  {
    title: "Curso de Reiki",
    text: "Aprende Reiki con quien lo enseña desde 2006. En Valencia y online.",
    cta: { label: "Pide información", href: "/contacto?servicio=curso-reiki" },
  },
];

export const sesionesIndividuales = [
  "Sesión de Reiki",
  "Reiki y chakras",
  "Reiki + péndulo hebreo",
  "Tarot terapéutico",
  "Registros akáshicos",
  "Matriz del Destino",
];

export const clasesGrupales = ["Meditación grupal online", "Meditación grupal presencial en Valencia"];

export const destacados = [
  {
    title: "Meditaciones grabadas",
    text: "Para la ducha, la ansiedad o dormir.",
    image: "teCama" as ImageKey,
    href: "/servicios/meditacion#grabadas",
    cta: "Ver meditaciones",
  },
  {
    title: "Clases grupales",
    text: "Online y en Valencia. Abro grupo pronto.",
    image: "grupoParque" as ImageKey,
    href: "/tablon",
    cta: "Ver el tablón",
  },
  {
    title: "Sesiones individuales",
    text: "Reiki o tarot, en Valencia u online.",
    image: "reikiSesion" as ImageKey,
    href: "/servicios",
    cta: "Ver servicios",
  },
];

export const reikiPage = {
  eyebrow: "Reiki",
  title: "Reiki en Valencia y online",
  subtitle: "Primero, bajar revoluciones.",
  image: "reikiRostro" as ImageKey,
  queEs: {
    title: "Qué es",
    text: "El Reiki es una terapia natural de imposición de manos. Ayuda a relajar el cuerpo y a calmar la mente cuando el estrés o la ansiedad no te dejan parar.",
  },
  notaras: {
    title: "Qué notarás en una sesión",
    items: [
      "Te tumbas vestida y cómoda. No tienes que hacer nada.",
      "La respiración se vuelve más lenta y el cuerpo se afloja.",
      "Sales con menos ruido en la cabeza.",
    ],
    online: "Online funciona igual: tú en casa, tumbada y tranquila, y yo te envío el Reiki a distancia.",
  },
  modalidadesHeading: { eyebrow: "Modalidades", title: "Elige cómo." },
  ctaWhatsapp: "Hola, Tati. Me gustaría reservar una sesión de Reiki.",
  modalidades: [
    {
      title: "Sesión de Reiki",
      text: "Para bajar revoluciones cuando el estrés o la ansiedad te pueden.",
      image: "reikiSesion" as ImageKey,
    },
    {
      title: "Reiki y chakras",
      text: "Revisamos tus siete centros de energía y trabajamos los que están descompensados.",
      image: "piedrasChakras" as ImageKey,
    },
    {
      title: "Reiki + péndulo hebreo",
      text: "El péndulo señala dónde está el bloqueo y el Reiki ayuda a soltarlo.",
      image: "pendulo" as ImageKey,
    },
  ],
  chakras: {
    eyebrow: "Los siete chakras",
    title: "Siete centros, un mismo equilibrio.",
    hint: "Toca cada punto para ver qué representa.",
    items: [
      { name: "Corona", meaning: "Conexión y conciencia", color: "var(--color-chakra-corona)" },
      { name: "Tercer ojo", meaning: "Intuición y claridad", color: "var(--color-chakra-tercer-ojo)" },
      { name: "Garganta", meaning: "Expresión y verdad", color: "var(--color-chakra-garganta)" },
      { name: "Corazón", meaning: "Amor y compasión", color: "var(--color-chakra-corazon)" },
      { name: "Plexo solar", meaning: "Poder personal y voluntad", color: "var(--color-chakra-plexo)" },
      { name: "Sacro", meaning: "Placer y creatividad", color: "var(--color-chakra-sacro)" },
      { name: "Raíz", meaning: "Seguridad y arraigo", color: "var(--color-chakra-raiz)" },
    ],
  },
  cursos: {
    eyebrow: "Cursos de Reiki",
    title: "Enseño Reiki desde 2006.",
    text: "Formaciones de Reiki y de crecimiento personal, en Valencia y online. Para usarlo contigo y con los tuyos.",
    cta: "Pide información sobre las próximas fechas",
  },
};

export const meditacionPage = {
  eyebrow: "Meditación",
  title: "Meditación en Valencia y online",
  subtitle: "Medita en lo cotidiano.",
  image: "meditacionEspaldas" as ImageKey,
  filosofia: {
    title: "No necesitas cojín, silencio perfecto ni el mejor outfit.",
    text: "Puedes meditar fregando, en la ducha o caminando. Lo que cuenta es parar un momento y darte cuenta.",
  },
  esponja: {
    eyebrow: "Para empezar hoy",
    title: "La esponja de la gratitud",
    image: "duchaLuminosa" as ImageKey,
    steps: [
      "En la ducha, sin prisa.",
      "Pasa la esponja por cada parte del cuerpo.",
      "Dale las gracias a esa parte mientras la recorres.",
    ],
  },
  grabadas: {
    eyebrow: "Meditaciones grabadas",
    title: "Para cada momento del día.",
    text: "Te llegan por WhatsApp y las escuchas cuando quieras.",
  },
  grupales: {
    eyebrow: "Clases grupales",
    title: "Meditar en compañía.",
    text: "Estoy a punto de abrir grupo online y otro presencial en Valencia. Mira el tablón y apúntate.",
    image: "grupoSala" as ImageKey,
    cta: "Quiero plaza",
    ctaWhatsapp: "Hola, Tati. Quiero plaza en un grupo de meditación. ¿Me cuentas cuándo empieza?",
    tablon: "Ver el tablón",
  },
  grabadasCta: "Quiero esta meditación",
  verGrabadas: "Ver meditaciones",
  ctaWhatsapp: "Hola, Tati. Me interesa la meditación y me gustaría que me contaras cómo empezar.",
};

export const tarotPage = {
  eyebrow: "Tarot terapéutico",
  title: "Tarot terapéutico en Valencia y online",
  subtitle: "Un espejo para ver claro.",
  image: "tarotFlores" as ImageKey,
  dentroFuera: {
    title: "Dentro y fuera.",
    inside: {
      label: "Desde dentro",
      text: "El Reiki y la meditación son procesos internos. Calman y ordenan.",
    },
    outside: {
      label: "Desde fuera",
      text: "El tarot te enseña tu situación desde fuera, como un espejo, para que veas lo que hay.",
    },
  },
  ansiedad: "Si llegas con ansiedad, primero bajamos revoluciones. El tarot llega cuando hay calma.",
  cartas: {
    eyebrow: "Lo que te llevas",
    title: "Gira las cartas.",
    flipLabel: "Girar carta",
    items: [
      { title: "Claridad", text: "Ves la situación tal como es, sin el ruido de la preocupación." },
      { title: "Autoconocimiento", text: "Entiendes desde dónde estás eligiendo y qué te frena." },
      { title: "Decisión", text: "Eliges con más información y menos miedo." },
    ],
  },
  complementarios: {
    eyebrow: "Complementarios",
    title: "Dos herramientas más.",
    items: [
      {
        title: "Registros akáshicos",
        text: "Una lectura para entender patrones que se repiten en tu vida y qué hacer con ellos.",
      },
      {
        title: "Matriz del Destino",
        text: "Un mapa a partir de tu fecha de nacimiento para conocer tus talentos y tus retos.",
      },
    ],
  },
  instagram: {
    eyebrow: "En Instagram",
    title: "Tarot con Tati",
    text: "Tiradas, cartas del día y reflexiones en mi cuenta de tarot.",
    cta: "Ir a @tarotcontati8",
  },
  ctaWhatsapp: "Hola, Tati. Me gustaría reservar una sesión de tarot terapéutico.",
};

export const serviciosPage = {
  eyebrow: "Servicios",
  title: "Calma, claridad y decisión.",
  subtitle: "Reiki, meditación y tarot terapéutico en Valencia y online.",
  porDonde: {
    eyebrow: "Por dónde empezar",
    title: "El tarot va al final.",
    text: "Si vienes con estrés o ansiedad, el tarot no es lo primero. Antes necesitas calma para mirar sin miedo.",
  },
  formatos: {
    eyebrow: "Formatos",
    title: "Como mejor te venga.",
  },
};
