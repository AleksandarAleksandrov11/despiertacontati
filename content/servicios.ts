import type { ImageKey } from "./imagenes";

export type Bloque = {
  slug: string;
  href: string;
  number: string;
  benefit: string;
  area: string;
  accent: string;
  image: ImageKey;
  summary: string;
  includes: string[];
  modality: string[];
  more: string;
};

export const bloques: Bloque[] = [
  {
    slug: "reiki",
    href: "/servicios/reiki",
    number: "01",
    benefit: "Calma y equilibrio",
    area: "Terapias energéticas",
    accent: "var(--color-chakra-corazon)",
    image: "reikiManosLuz",
    summary: "Para bajar revoluciones, soltar tensiones y dedicarte un tiempo solo para ti.",
    includes: ["Reiki + péndulo hebreo", "Péndulo hebreo", "Análisis de chakras", "Sanación akáshica"],
    modality: ["Online", "A distancia"],
    more: "Ver terapias energéticas",
  },
  {
    slug: "limpieza-energetica",
    href: "/servicios/limpieza-energetica",
    number: "02",
    benefit: "Armonía en tu hogar",
    area: "Limpieza energética",
    accent: "var(--color-chakra-plexo)",
    image: "hogarLuminoso",
    summary: "Para que tu casa o tu espacio de trabajo vuelva a sentirse ligero, en calma y tuyo.",
    includes: ["Limpieza energética de casas y espacios", "Informe por WhatsApp"],
    modality: ["A distancia", "Casas y espacios de trabajo"],
    more: "Ver limpieza energética",
  },
  {
    slug: "meditacion",
    href: "/servicios/meditacion",
    number: "03",
    benefit: "Claridad",
    area: "Meditación",
    accent: "var(--color-chakra-tercer-ojo)",
    image: "relajacionSillon",
    summary: "Con calma llega la claridad. Aprendes a parar en tu día a día, sin cojín ni silencio perfecto.",
    includes: ["Clases grupales online", "Meditaciones grabadas en la tienda", "Guía gratuita"],
    modality: ["Online", "Grabada"],
    more: "Ver meditación",
  },
  {
    slug: "tarot-terapeutico",
    href: "/servicios/tarot-terapeutico",
    number: "04",
    benefit: "Decisiones con claridad",
    area: "Tarot",
    accent: "var(--color-chakra-sacro)",
    image: "tarotFlores",
    summary: "Un espejo para ver tu situación desde fuera y elegir tú, con más información y menos miedo.",
    includes: ["Crono Tarot", "Lecturas concretas", "Sesiones de tarot en directo", "Tu carta del día"],
    modality: ["Lecturas en vídeo y PDF", "Sesiones online"],
    more: "Ver tarot",
  },
  {
    slug: "autoconocimiento",
    href: "/servicios/autoconocimiento",
    number: "05",
    benefit: "Autoconocimiento",
    area: "Numerología y arcanos mayores",
    accent: "var(--color-chakra-corona)",
    image: "libretaEscribir",
    summary: "Herramientas que parten de tu fecha de nacimiento para conocerte mejor y usar tu poder personal.",
    includes: ["Matriz del Destino", "Tu Código Personal", "Carta Personal"],
    modality: ["A partir de tu fecha de nacimiento", "Vídeo y PDF"],
    more: "Ver autoconocimiento",
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
      image: "reikiManosLuz" as ImageKey,
      text: "Primero, bajar revoluciones. El Reiki te ayuda a soltar y a volver a tu cuerpo.",
      href: "/servicios/reiki",
    },
    {
      number: "02",
      step: "Claridad",
      tool: "Meditación",
      accent: "var(--color-chakra-tercer-ojo)",
      image: "relajacionTaza" as ImageKey,
      text: "Con calma llega la claridad. Aprendes a parar y a escucharte.",
      href: "/servicios/meditacion",
    },
    {
      number: "03",
      step: "Decisión",
      tool: "Tarot",
      accent: "var(--color-chakra-plexo)",
      image: "tarotBaraja" as ImageKey,
      text: "Con claridad, eliges tú. Recuerdas quién eres y empiezas a crear tu nueva vida.",
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
    title: "Lectura en diferido",
    text: "Crono Tarot, lecturas concretas y autoconocimiento. Te llegan en vídeo y PDF por WhatsApp.",
    cta: { label: "Ver lecturas", href: "/tienda#crono-tarot" },
  },
  {
    title: "Meditación grabada",
    text: "Packs de meditaciones guiadas en MP3 para escuchar cuando quieras.",
    cta: { label: "Ver meditaciones", href: "/tienda#meditaciones" },
  },
  {
    title: "Clase grupal",
    text: "Meditación en grupo, online. Parar en compañía también ayuda.",
    cta: {
      label: "Quiero plaza",
      whatsapp: "Hola, Tati. Me interesan las clases grupales de meditación. ¿Me guardas plaza?",
    },
  },
  {
    title: "Sesión individual",
    text: "Reiki, terapias energéticas y tarot en directo. Para ti sola, online desde donde estés.",
    cta: { label: "Reserva tu sesión", href: "/contacto" },
  },
];

export const destacados = [
  {
    title: "Meditaciones guiadas",
    text: "Packs para descargar y escuchar a tu ritmo, en casa o donde quieras.",
    image: "meditacionAuriculares" as ImageKey,
    href: "/tienda#meditaciones",
    cta: "Ver en la tienda",
  },
  {
    title: "Clases online",
    text: "Meditamos en grupo, cada una desde su casa.",
    image: "claseOnline" as ImageKey,
    href: "/servicios/meditacion#grupales",
    cta: "Ver las clases",
  },
  {
    title: "Limpieza energética de espacios",
    text: "Para que tu casa o tu espacio de trabajo vuelva a sentirse ligero.",
    image: "hogarLuminoso" as ImageKey,
    href: "/servicios/limpieza-energetica",
    cta: "Conoce la limpieza",
  },
  {
    title: "Crono Tarot",
    text: "Lecturas para tu cumpleaños, una estación, un mes o una semana.",
    image: "tarotBaraja" as ImageKey,
    href: "/tienda#crono-tarot",
    cta: "Ver lecturas",
  },
];

export type Terapia = {
  title: string;
  text: string;
  image: ImageKey;
  whatsapp: string;
};

export const reikiPage = {
  eyebrow: "Terapias energéticas",
  title: "Reiki y terapias energéticas",
  subtitle: "Primero, bajar revoluciones.",
  image: "manosCorazon" as ImageKey,
  queEs: {
    image: "mujerSonriendoCampo" as ImageKey,
    title: "Qué es el Reiki",
    text: "El Reiki es una terapia natural de imposición de manos. Un acompañamiento energético orientado a la relajación, la calma y el bienestar interior, para cuando el estrés o la ansiedad no te dejan parar.",
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
  terapiasHeading: {
    eyebrow: "Terapias",
    title: "Elige cómo.",
    text: "Sesiones online, a distancia, desde tu casa. Cuéntame qué necesitas y te recomiendo por dónde empezar.",
  },
  info: "Pide información",
  ctaWhatsapp: "Hola, Tati. Me gustaría información sobre el Reiki y las terapias energéticas.",
  terapias: [
    {
      title: "Reiki + péndulo hebreo",
      text: "Mi sesión de Reiki, con el péndulo hebreo. Acompañamiento energético orientado a la relajación, la calma y el bienestar interior: un espacio para desconectar, soltar tensiones y dedicarte tiempo.",
      image: "reikiManosLuz",
      whatsapp: "Hola, Tati. Me gustaría información sobre la sesión de Reiki con péndulo hebreo.",
    },
    {
      title: "Péndulo hebreo",
      text: "Trabajo energético con péndulo hebreo para explorar y trabajar aspectos relacionados con el equilibrio y el bienestar personal.",
      image: "penduloMadera",
      whatsapp: "Hola, Tati. Me gustaría información sobre el péndulo hebreo.",
    },
    {
      title: "Análisis de chakras",
      text: "Exploración de los siete chakras principales para observar cómo están tus centros de energía y tomar conciencia de tu bienestar físico, emocional y espiritual.",
      image: "chakrasPiedras",
      whatsapp: "Hola, Tati. Me gustaría información sobre el análisis de chakras.",
    },
    {
      title: "Sanación akáshica",
      text: "Trabajo de sanación energética y acompañamiento para tomar conciencia de patrones personales, soltar y armonizar. No es una lectura de registros.",
      image: "libroAlma",
      whatsapp: "Hola, Tati. Me gustaría información sobre la sanación akáshica.",
    },
  ] satisfies Terapia[],
  chakras: {
    eyebrow: "Los siete chakras",
    title: "Siete centros, un mismo equilibrio.",
    hint: "Toca cada punto para ver qué representa.",
    analisis: {
      title: "Análisis de chakras",
      text: "Una sesión para observar cómo están tus centros de energía.",
      whatsapp: "Hola, Tati. Me gustaría información sobre el análisis de chakras.",
    },
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
    text: "Formaciones de Reiki y de crecimiento personal. Para usarlo contigo y con los tuyos.",
    cta: "Pide información sobre las próximas fechas",
    image: "cuencoSalvia" as ImageKey,
  },
};

export const limpiezaPage = {
  eyebrow: "Armonía en tu hogar",
  title: "Limpieza energética de casas y espacios a distancia",
  subtitle: "Un espacio ligero para una etapa nueva.",
  image: "hogarLuminoso" as ImageKey,
  ctaWhatsapp: "Hola, Tati. Me gustaría información sobre la limpieza energética de mi casa o espacio.",
  queEs: {
    title: "Qué es",
    text: "Renovar y armonizar la energía de tu hogar o espacio de trabajo para favorecer un ambiente de calma, ligereza y bienestar. La hago a distancia: no hace falta que vaya ni que estés en casa.",
    image: "ventanaLuz" as ImageKey,
  },
  paraQuien: {
    eyebrow: "Para quién",
    title: "Cuándo encaja.",
    items: [
      { title: "Una mudanza", text: "Llegas a una casa nueva y quieres empezar con buen pie." },
      { title: "Una etapa nueva", text: "Cambia algo importante en tu vida y quieres que tu casa lo acompañe." },
      { title: "Tu espacio de trabajo", text: "Una oficina, una consulta o un local donde pasas muchas horas." },
      { title: "Un ambiente cargado", text: "Notas el ambiente pesado y no terminas de estar a gusto." },
    ],
  },
  pasos: {
    eyebrow: "Cómo trabajamos",
    title: "Tres pasos.",
    items: [
      { title: "Me pasas la dirección", text: "Solo necesito la dirección del espacio. No hace falta que me cuentes cómo es." },
      { title: "Hago la limpieza", text: "La hago a distancia. No tienes que estar en casa ni acordar una hora conmigo." },
      { title: "Te envío el informe", text: "Te mando por WhatsApp el informe de la limpieza." },
    ],
  },
  precio: { label: "Precio", text: "Por espacio, casa o espacio de trabajo. Con informe por WhatsApp.", cta: "Pedir mi limpieza" },
  cta: {
    title: "¿Limpiamos tu espacio?",
    text: "Escríbeme con la dirección y me pongo con ello.",
  },
};

export const meditacionPage = {
  eyebrow: "Meditación",
  title: "Meditación online",
  subtitle: "Medita en lo cotidiano.",
  image: "relajacionSillon" as ImageKey,
  filosofia: {
    image: "tazaVapor" as ImageKey,
    title: "No necesitas cojín, silencio perfecto ni el mejor outfit.",
    text: "Puedes meditar fregando, en la ducha o caminando. Lo que cuenta es parar un momento y darte cuenta.",
  },
  esponja: {
    eyebrow: "Un ejercicio para hoy",
    title: "La esponja de la gratitud",
    text: "No es un audio ni hace falta nada especial. Solo la ducha de cada día.",
    image: "duchaLuminosa" as ImageKey,
    steps: [
      "En la ducha, sin prisa.",
      "Pasa la esponja por cada parte del cuerpo.",
      "Dale las gracias a esa parte mientras la recorres.",
    ],
  },
  grabadas: {
    eyebrow: "Meditaciones grabadas",
    title: "Medita con Tati.",
    text: "Packs de meditaciones guiadas en MP3 para escuchar a tu ritmo. Los encuentras en la tienda.",
    cta: "Ver las meditaciones en la tienda",
  },
  grupales: {
    eyebrow: "Clases grupales",
    title: "Meditar en compañía.",
    text: "Estoy a punto de abrir un grupo online. Mira el tablón y apúntate.",
    image: "salaLuminosa" as ImageKey,
    cta: "Quiero plaza",
    ctaWhatsapp: "Hola, Tati. Quiero plaza en un grupo de meditación. ¿Me cuentas cuándo empieza?",
    tablon: "Ver el tablón",
  },
  headerCta: "Ver las clases",
  ctaWhatsapp: "Hola, Tati. Me interesa la meditación y me gustaría que me contaras cómo empezar.",
};

export const tarotPage = {
  eyebrow: "Tarot terapéutico",
  title: "Tarot terapéutico online",
  subtitle: "Un espejo para ver claro.",
  image: "tarotFlores" as ImageKey,
  shopCta: "Ver lecturas en la tienda",
  dentroFuera: {
    image: "tarotBaraja" as ImageKey,
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
  formatos: {
    eyebrow: "Formatos",
    title: "Tres formas de consultar.",
    note: "Las lecturas son en diferido: te llegan en vídeo y PDF por WhatsApp. Trabajo con el tarot Rider-Waite.",
    items: [
      {
        title: "Crono Tarot",
        text: "Lecturas temporales: anual por tu cumpleaños, estacional, mensual y semanal.",
        href: "/tienda#crono-tarot",
      },
      {
        title: "Lecturas concretas",
        text: "Tu mapa de vida, la pareja, el trabajo, la compatibilidad y el corazón.",
        href: "/tienda#lecturas",
      },
      {
        title: "Sesiones en directo",
        text: "De 30 o 50 minutos, online. Las agendamos por WhatsApp.",
        href: "/tienda#sesiones",
      },
    ],
    link: "Ver en la tienda",
  },
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
  cartaDelDia: {
    eyebrow: "Tu carta del día",
    title: "Elige tu carta.",
    text: "Respira, piensa en tu día y elige la carta que te llame. Es un mensaje para acompañarte hoy.",
    elegir: (numero: number) => `Elegir la carta ${numero}`,
    resultado: "Tu carta de hoy",
    manana: "Mañana puedes volver a elegir.",
    lectura: "Quiero una lectura",
    mazo: "Tarot Rider-Waite, edición original de 1909.",
    cartas: [
      { nombre: "El Loco", mensaje: "Hoy toca confiar y dar el primer paso aunque no veas todo el camino. Deja espacio a lo nuevo." },
      { nombre: "El Mago", mensaje: "Tienes lo que necesitas para empezar. Elige una cosa y ponte manos a la obra." },
      { nombre: "La Sacerdotisa", mensaje: "Escucha lo que sabes por dentro antes de buscar respuestas fuera. Hoy, menos ruido y más intuición." },
      { nombre: "La Emperatriz", mensaje: "Cuida lo que estás haciendo crecer y disfruta de lo que ya florece en tu vida." },
      { nombre: "El Emperador", mensaje: "Pon orden y estructura. Un límite claro hoy te da tranquilidad mañana." },
      { nombre: "El Hierofante", mensaje: "Apóyate en lo que te funciona y en quien sabe. Aprender de otros también es elegir." },
      { nombre: "Los Enamorados", mensaje: "Hoy toca elegir con el corazón y ser coherente con lo que sientes." },
      { nombre: "El Carro", mensaje: "Avanza con decisión. Tienes las riendas: marca el rumbo y no te disperses." },
      { nombre: "La Fuerza", mensaje: "La verdadera fuerza es la calma. Trátate con paciencia y suavidad." },
      { nombre: "El Ermitaño", mensaje: "Regálate un rato a solas. En el silencio encuentras tu propia luz." },
      { nombre: "La Rueda de la Fortuna", mensaje: "Algo se mueve. Acompaña el cambio en lugar de pelearte con él." },
      { nombre: "La Justicia", mensaje: "Mira la situación con honestidad y decide con equilibrio. Lo que siembras, vuelve." },
      { nombre: "El Colgado", mensaje: "Cambia el punto de vista. A veces parar un momento es lo que desbloquea." },
      { nombre: "La Muerte", mensaje: "Algo termina para dejar sitio a lo nuevo. Suelta lo que ya no es para ti." },
      { nombre: "La Templanza", mensaje: "Busca el término medio. Paso a paso y con calma, todo se va colocando." },
      { nombre: "El Diablo", mensaje: "Observa qué te ata: un hábito, un miedo, una costumbre. Darte cuenta es el primer paso para soltar." },
      { nombre: "La Torre", mensaje: "Lo que se mueve hoy te ayuda a construir sobre algo más real. Respira y suelta el control." },
      { nombre: "La Estrella", mensaje: "Vuelve la esperanza. Confía en tu camino y deja que tu luz se vea." },
      { nombre: "La Luna", mensaje: "No todo está claro todavía. Escucha tus emociones sin dejar que el miedo decida por ti." },
      { nombre: "El Sol", mensaje: "Día para brillar y disfrutar. Comparte tu alegría y date permiso para estar bien." },
      { nombre: "El Juicio", mensaje: "Es momento de escuchar tu llamada. Deja atrás lo que pesa y empieza de nuevo." },
      { nombre: "El Mundo", mensaje: "Cierras un ciclo. Celebra lo que has logrado y prepárate para lo siguiente." },
    ],
  },
  instagram: {
    eyebrow: "En Instagram",
    title: "Tarot con Tati",
    text: "Tiradas, cartas del día y reflexiones en mi cuenta de tarot.",
    cta: "Ir a @tarotcontati8",
  },
  cta: {
    title: "¿Te apetece una lectura?",
    text: "Elige la tuya en la tienda o escríbeme si tienes dudas.",
  },
  ctaWhatsapp: "Hola, Tati. Tengo una duda sobre las lecturas de tarot.",
};

export const autoconocimientoPage = {
  eyebrow: "Autoconocimiento",
  title: "Autoconocimiento: Matriz del Destino, Código Personal y Carta Personal",
  subtitle: "Todo empieza por tu fecha de nacimiento.",
  image: "libretaEscribir" as ImageKey,
  shopCta: "Ver en la tienda",
  queSon: {
    title: "Qué son",
    text: "Son herramientas de autoconocimiento a partir de tu fecha de nacimiento, basadas en la numerología y en la energía de los arcanos mayores.",
    diferencias: [
      {
        title: "Matriz del Destino",
        text: "Se calcula con tu fecha de nacimiento y la energía de los 22 arcanos mayores. No es tarot: cada posición habla de un área de tu vida.",
      },
      { title: "Código Personal y Carta Personal", text: "Tarot numerológico: tus cartas salen de tu fecha de nacimiento." },
    ],
  },
  herramientasHeading: { eyebrow: "Herramientas", title: "Elige por dónde empezar." },
  herramientas: ["matriz-del-destino", "analisis-matriz-del-destino", "tu-codigo-personal"],
  carta: {
    image: "tarotFlores" as ImageKey,
    tag: "Tarot numerológico",
    title: "Carta Personal",
    text: "Lectura de autoconocimiento con cartas a partir de tu fecha de nacimiento.",
    whatsapp: "Hola, Tati. Me gustaría información sobre la Carta Personal.",
  },
  cta: {
    title: "¿Empezamos por ti?",
    text: "Elige tu lectura en la tienda o escríbeme y te cuento cuál encaja mejor contigo.",
  },
  ctaWhatsapp: "Hola, Tati. Me gustaría información sobre la Matriz del Destino y el Código Personal.",
};

export const serviciosPage = {
  eyebrow: "Servicios",
  title: "Calma, claridad y decisión.",
  subtitle: "Reiki, meditación, tarot y autoconocimiento online.",
  orden: "Primero, calma. Después, claridad. Y con claridad, decisiones y autoconocimiento.",
  headerCta: "Ver los servicios",
  includesLabel: "Incluye",
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
