import type { ImageKey } from "./imagenes";

export const inicio = {
  hero: {
    title: "Despierta.",
    subtitle: "Conócete, toma conciencia y elige mejor.",
    support: "Reiki, meditación y tarot terapéutico en Valencia y online.",
    rotating: ["Calma", "Claridad", "Decisión"],
    image: "amanecerPlaya" as ImageKey,
    scroll: "Desliza",
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
    closingLead: "Primero,",
    closingScript: "bajar revoluciones.",
  },
  destacados: {
    eyebrow: "Para empezar",
    title: "Tres formas de cuidarte.",
  },
  respira: {
    eyebrow: "Respira",
    title: "Para un momento.",
    text: "No necesitas cojín ni silencio perfecto. Empieza aquí.",
    phases: ["Inhala", "Sostén", "Exhala"],
    start: "Iniciar",
    pause: "Pausar",
    cycles: "ciclos",
    idle: "Pulsa y sigue el círculo",
  },
  sobreTati: {
    eyebrow: "Sobre mí",
    quote: "Herramientas prácticas que a mí me funcionaron y que hoy comparto contigo.",
    signature: "Tati",
    image: "cuencoSalvia" as ImageKey,
    link: "Conóceme",
  },
  tablon: {
    eyebrow: "Tablón",
    title: "Lo próximo.",
    link: "Ver el tablón",
  },
  cursos: {
    eyebrow: "Cursos de Reiki",
    title: "Enseño Reiki desde 2006.",
    text: "Formaciones en Valencia y online, para que puedas usarlo contigo y con los tuyos.",
    cta: "Pide información",
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
};

export const ctaFinal = {
  title: "¿Empezamos?",
  text: "Cuéntame qué te pasa y vemos juntas por dónde empezar.",
};

export const sobreMi = {
  eyebrow: "Sobre mí",
  title: "Soy Tati.",
  subtitle: "Terapeuta holística en Valencia. Práctica y al grano.",
  intro:
    "Acompaño a mujeres que viven con estrés o ansiedad, o que sienten que han perdido el rumbo. Lo hago con herramientas que a mí me han funcionado.",
  image: "cuencoSalvia" as ImageKey,
  manifiesto: ["Sin humo.", "Sin ir de blanco.", "Herramientas que funcionan."],
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
      { name: "Registros akáshicos", icon: "registros" },
      { name: "Meditación", icon: "meditacion" },
      { name: "Tarot terapéutico", icon: "tarot" },
      { name: "Matriz del Destino", icon: "matriz" },
    ],
  },
  cifras: [
    { value: 20, prefix: "+", suffix: "", label: "años acompañando" },
    { value: 2006, prefix: "Desde ", suffix: "", label: "enseñando Reiki" },
  ],
  sello: {
    alt: "Sello de Despierta con Tati: flor de loto, péndulo con piedras de los chakras, velas y cuenco tibetano en acuarela",
  },
  imagenValencia: "lonja" as ImageKey,
};

export const testimoniosPage = {
  eyebrow: "Testimonios",
  title: "Lo que cuentan.",
  subtitle: "Experiencias de personas que han pasado por Reiki, meditación y tarot terapéutico.",
  filterLabel: "Filtrar por servicio",
  empty: "Todavía no hay testimonios de este servicio.",
};

export const tablonPage = {
  eyebrow: "Tablón",
  title: "Tablón.",
  subtitle: "Grupos, cursos y novedades.",
  empty: {
    title: "Ahora mismo no hay nada colgado.",
    text: "Escríbeme y te aviso en cuanto abra un grupo o un curso nuevo.",
  },
  image: "velaMadera" as ImageKey,
};

export const contactoPage = {
  eyebrow: "Contacto",
  title: "Hablemos.",
  subtitle: "Cuéntame en un minuto qué necesitas.",
  aside: {
    title: "Si lo prefieres",
    location: "Valencia y online",
  },
  image: "playaPalmera" as ImageKey,
  form: {
    steps: [
      { id: "servicio", question: "¿Qué te trae por aquí?" },
      { id: "modalidad", question: "¿Cómo lo prefieres?" },
      { id: "mensaje", question: "Cuéntame un poco" },
      { id: "datos", question: "¿Cómo te llamo?" },
    ],
    topics: [
      { value: "reiki", label: "Reiki" },
      { value: "meditacion", label: "Meditación" },
      { value: "tarot", label: "Tarot" },
      { value: "curso-reiki", label: "Curso de Reiki" },
      { value: "no-lo-se", label: "Aún no lo sé" },
    ],
    modalities: [
      { value: "presencial", label: "Presencial en Valencia" },
      { value: "online", label: "Online" },
      { value: "indiferente", label: "Me da igual" },
    ],
    messagePlaceholder: "Lo que te apetezca contarme. Es opcional.",
    messageLabel: "Tu mensaje",
    nameLabel: "Nombre",
    contactLabel: "Email o teléfono",
    privacyLabel: "He leído y acepto la",
    privacyLink: "política de privacidad",
    privacyNote:
      "Responsable: Tatiana Guillem. Finalidad: responder a tu consulta. Legitimación: tu consentimiento. Destinatarios: no se ceden datos salvo obligación legal; el envío se gestiona con Resend. Derechos: acceso, rectificación, supresión y otros, escribiendo a tatiana.guillem@gmail.com.",
    next: "Siguiente",
    back: "Atrás",
    submit: "Enviar",
    sending: "Enviando",
    enterHint: "o pulsa Enter",
    stepLabel: "Paso",
    of: "de",
    success: {
      title: "Gracias. Te escribo muy pronto.",
      text: "Si te corre prisa, escríbeme también por WhatsApp.",
      again: "Enviar otro mensaje",
    },
    error: {
      title: "No se ha podido enviar.",
      text: "Prueba de nuevo en un momento o escríbeme directamente por WhatsApp.",
      retry: "Reintentar",
    },
  },
};

export const suscripcion = {
  title: "Novedades",
  text: "Grupos nuevos, cursos y meditaciones. Sin agobios.",
  placeholder: "Tu email",
  label: "Email",
  privacyLabel: "Acepto la",
  privacyLink: "política de privacidad",
  submit: "Suscribirme",
  success: "Hecho. Te escribiré cuando haya novedades.",
  error: "No se ha podido enviar. Prueba de nuevo.",
};

export const notFoundPage = {
  eyebrow: "Error 404",
  title: "Esta página no existe.",
  text: "Respira. Desde aquí puedes volver a un sitio conocido.",
  links: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export const errorPage = {
  title: "Algo no ha ido bien.",
  text: "Vuelve a intentarlo. Si sigue igual, escríbeme por WhatsApp.",
  retry: "Reintentar",
};
