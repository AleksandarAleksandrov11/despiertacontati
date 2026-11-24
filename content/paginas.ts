import { site } from "./site";
import type { ImageKey } from "./imagenes";

export const inicio = {
  hero: {
    eyebrow: "Terapeuta holística",
    title: "Despierta",
    subtitle: site.tagline,
    support: "Reiki, meditación, tarot y Matriz del Destino online.",
    image: "mujerCampoTrigo" as ImageKey,
  },
  teSuena: {
    eyebrow: "¿Te suena?",
    title: "A veces la vida aprieta.",
    cards: [
      { title: "Has pasado por una separación", accent: "var(--color-chakra-corazon)" },
      { title: "Te sientes bloqueada en el trabajo", accent: "var(--color-chakra-plexo)" },
      { title: "El dinero te quita el sueño", accent: "var(--color-chakra-raiz)" },
      { title: "Una relación te tiene atascada", accent: "var(--color-chakra-garganta)" },
    ],
    closingLead: "Primero, bajar",
    closingScript: "revoluciones",
  },
  destacados: {
    eyebrow: "Para empezar",
    title: "Cuatro formas de cuidarte.",
  },
  respira: {
    eyebrow: "Respira",
    title: "Para un momento.",
    text: "No necesitas cojín ni silencio perfecto. Empieza aquí.",
    phases: ["Inhala", "Sostén", "Exhala"],
    start: "Iniciar",
    pause: "Pausar",
    reset: "Reiniciar",
    cycles: "ciclos",
    idle: "Pulsa y sigue el círculo",
  },
  quienSoy: {
    eyebrow: "Quién soy",
    title: "Soy Tati.",
    quote: "Despertar es recordar quién eres, recuperar tu poder de elegir y crear tu nueva vida.",
    text: "Terapeuta holística, con más de 20 años acompañando y enseñando Reiki desde 2006. Práctica, cercana y al grano.",
    image: "tatiSonrisa" as ImageKey,
    link: "Conóceme",
  },
  tienda: {
    eyebrow: "Tienda",
    title: "Para seguir a tu ritmo.",
    text: "Meditaciones para descargar y lecturas que te llegan por WhatsApp, sin tener que coincidir en agenda.",
    link: "Ver la tienda",
  },
  tablon: {
    eyebrow: "Tablón",
    title: "Lo próximo.",
    link: "Ver el tablón",
  },
  testimonios: {
    eyebrow: "Testimonios",
    title: "Lo que cuentan.",
    link: "Leer todos",
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Antes de empezar.",
  },
  cta: {
    title: "¿Empezamos?",
    text: "Mira los servicios o escríbeme y vemos juntas por dónde empezar.",
  },
};

export const ctaFinal = {
  title: "¿Empezamos?",
  text: "Cuéntame qué te pasa y vemos juntas por dónde empezar.",
};

export const quienSoy = {
  eyebrow: "Quién soy",
  title: "Soy Tati.",
  subtitle: "Terapeuta holística. Práctica y al grano.",
  intro:
    "Acompaño a mujeres que viven con estrés o ansiedad, o que sienten que han perdido el rumbo. Lo hago con herramientas que a mí me han funcionado.",
  idea: "Para mí, despertar es recordar quién eres, recuperar tu poder de elegir y crear tu nueva vida. Sea cual sea la herramienta, el objetivo es ese: que vuelvas a elegir tú.",
  image: "tatiRetrato" as ImageKey,
  manifiesto: ["Sin humo.", "Con los pies en la tierra.", "Herramientas que funcionan."],
  manifiestoLabel: "Mi manera de trabajar",
  recorrido: {
    eyebrow: "Mi recorrido",
    title: "Más de veinte años aprendiendo y compartiendo.",
  },
  herramientas: {
    eyebrow: "Herramientas",
    title: "Con lo que trabajo.",
    items: [
      { name: "Reiki", icon: "reiki" },
      { name: "Péndulo hebreo", icon: "pendulo" },
      { name: "Chakras", icon: "chakras" },
      { name: "Sanación akáshica", icon: "sanacion" },
      { name: "Limpieza energética", icon: "limpieza" },
      { name: "Meditación", icon: "meditacion" },
      { name: "Tarot", icon: "tarot" },
      { name: "Matriz del Destino", icon: "matriz" },
      { name: "Código Personal", icon: "codigo" },
      { name: "Carta Personal", icon: "carta" },
    ],
  },
  lema: { lead: "Recuerda quién eres, recupera tu poder de elegir y crea tu nueva", script: "vida" },
  cifrasTitle: "En cifras",
  cta: {
    title: "¿Seguimos?",
    text: "Ahora que me conoces, mira cómo puedo acompañarte.",
  },
};

export const testimoniosPage = {
  eyebrow: "Testimonios",
  title: "Lo que cuentan.",
  subtitle: "Experiencias de personas que han pasado por las sesiones, las clases y las lecturas.",
  filterLabel: "Filtrar por servicio",
  all: "Todos",
};

export const tablonPage = {
  eyebrow: "Tablón",
  title: "Tablón.",
  subtitle: "Grupos, novedades y lo último en Instagram.",
  anunciosTitle: "Grupos y novedades",
  empty: {
    title: "Ahora mismo no hay nada colgado.",
    text: "Escríbeme y te aviso en cuanto abra un grupo nuevo.",
  },
  instagram: {
    eyebrow: "En Instagram",
    title: "Lo último.",
    text: "Reflexiones, meditaciones y tiradas en las cuentas de Tati.",
    view: "Ver en Instagram",
    follow: "Seguir en Instagram",
    embedLabel: "Publicación de Instagram de",
    accounts: [
      {
        name: "Despierta con Tati",
        handle: site.social.instagram.label,
        url: site.social.instagram.url,
        text: "Bienestar, meditación y novedades de los grupos.",
      },
      {
        name: site.social.tarot.label,
        handle: site.social.tarot.handle,
        url: site.social.tarot.url,
        text: "Tiradas, cartas del día y reflexiones con el tarot.",
      },
    ],
  },
};

export const contactoPage = {
  eyebrow: "Contacto",
  title: "Hablemos.",
  subtitle: "Pide un programa, una lectura o una sesión. Se abre WhatsApp con tu mensaje listo.",
  aside: {
    avatar: "tatiSonrisa" as ImageKey,
    avatarTitle: "Te contesto yo.",
    avatarText: "Leo cada mensaje personalmente.",
    title: "Si lo prefieres",
    location: "Online",
    locationText: "Sesiones online, desde donde estés.",
    whatsapp: "WhatsApp",
    phone: "Teléfono",
    email: "Email",
    instagram: "Instagram",
  },
  cta: {
    title: "¿Prefieres hablar ya?",
    text: "Escríbeme por WhatsApp o llámame. Te contesto yo.",
  },
  form: {
    steps: [
      { id: "servicio", label: "Qué quieres", question: "¿Qué te trae por aquí?", hint: "Elige una opción. Aquí puedes pedirlo todo: los programas, las lecturas, las sesiones y más." },
      { id: "detalle", label: "Detalles", question: "¿Cuál te interesa?", hint: "Elige una opción y cuéntame lo que quieras. Si dudas, déjalo en blanco y lo vemos." },
      { id: "datos", label: "Tus datos", question: "¿Cómo te llamo?", hint: "Al enviar se abre WhatsApp con tu mensaje ya escrito, solo tienes que pulsar enviar." },
    ],
    topics: [
      { value: "meditacion", label: "Programas de meditación y grupo online" },
      { value: "tarot", label: "Tarot: Mapa 2027, lecturas y sesiones" },
      { value: "autoconocimiento", label: "Matriz del Destino y Código Personal" },
      { value: "reiki", label: "Reiki y terapias energéticas" },
      { value: "limpieza", label: "Limpieza energética de espacios" },
      { value: "curso-reiki", label: "Curso de Reiki" },
      { value: "no-lo-se", label: "Otra consulta o aún no lo sé" },
    ],
    grupo: { label: "Clases de meditación online", detalle: "Clase gratuita el 26 de noviembre" },
    optionsTitle: "Elige una opción",
    formatTitle: "Cómo lo quieres",
    pdfLabel: "Añadir mi lectura en PDF",
    noOptionsQuestion: "Cuéntame un poco",
    noOptionsHint: "Lo que te apetezca contarme sobre lo que necesitas. Es opcional.",
    messagePlaceholder: "Por ejemplo: llevo unas semanas con mucho estrés y me gustaría saber por dónde empezar.",
    messageLabel: "Tu mensaje (opcional)",
    nameLabel: "Nombre",
    namePlaceholder: "Cómo te llamas",
    contactLabel: "Email o teléfono (opcional)",
    contactPlaceholder: "Solo si quieres que te conteste por ahí",
    privacyNote:
      `Responsable: ${site.legal.holder}. Finalidad: responder a tu consulta. Legitimación: tu consentimiento al enviarme el mensaje. No guardo estos datos en la web: al enviar se abre WhatsApp, servicio de Meta, con el mensaje que tú me mandas. Derechos: acceso, rectificación, supresión y otros, escribiendo a ${site.contact.email}.`,
    privacyLink: "Más información en la política de privacidad",
    summary: "Tu elección",
    next: "Siguiente",
    back: "Atrás",
    change: "Cambiar",
    submit: "Enviar por WhatsApp",
    enterHint: "o pulsa Enter",
    stepLabel: "Paso",
    of: "de",
    whatsapp: {
      greeting: "Hola, Tati. Te escribo desde la web",
      forProduct: (nombre: string) => `porque me interesa ${nombre}`,
      forTopic: (tema: string) => `porque me interesa ${tema.toLowerCase()}`,
      forOther: "para hacerte una consulta",
      name: "Nombre",
      contact: "Contacto",
      topic: "Tema",
      item: "Me interesa",
      format: "Formato",
      pdf: "Con la lectura en PDF",
      message: "Mensaje",
      closing: "¿Me cuentas cómo seguimos? Gracias.",
    },
    success: {
      title: "Gracias. Te escribo muy pronto.",
      text: "Se ha abierto WhatsApp con tu mensaje. Solo tienes que pulsar enviar. Si no se ha abierto, usa el botón.",
      open: "Abrir WhatsApp",
      again: "Enviar otro mensaje",
    },
  },
};

export const notFoundPage = {
  eyebrow: "Error 404",
  title: "Esta página no existe.",
  text: "Respira. Desde aquí puedes volver a un sitio conocido.",
  links: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Tienda", href: "/tienda" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export const loadingLabel = "Cargando";

export const errorPage = {
  title: "Algo no ha ido bien.",
  text: "Vuelve a intentarlo. Si sigue igual, escríbeme por WhatsApp.",
  retry: "Reintentar",
};
