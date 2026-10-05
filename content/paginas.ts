import { site } from "./site";
import type { ImageKey } from "./imagenes";

export const inicio = {
  hero: {
    eyebrow: "Terapeuta holística en Valencia",
    title: "Despierta",
    subtitle: "Conócete, toma conciencia y elige mejor.",
    support: "Reiki, meditación y tarot terapéutico en Valencia y online.",
    rotating: ["Calma", "Claridad", "Decisión"],
    image: "amanecerPlaya" as ImageKey,
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
    title: "Tres formas de cuidarte.",
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
  cifrasTitle: "En cifras",
  manifiestoLabel: "Mi manera de trabajar",
  lema: { lead: "Recuerda quién eres, toma tu poder y crea tu nueva", script: "vida" },
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
    locationText: "Sesiones presenciales en Valencia y online desde donde estés.",
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
      { id: "servicio", label: "Servicio", question: "¿Qué te trae por aquí?", hint: "Elige una opción. Si dudas, marca «Aún no lo sé»." },
      { id: "modalidad", label: "Modalidad", question: "¿Cómo lo prefieres?", hint: "Sesiones presenciales en Valencia u online desde donde estés." },
      { id: "mensaje", label: "Mensaje", question: "Cuéntame un poco", hint: "Opcional. Lo que te apetezca contarme sobre lo que necesitas." },
      { id: "datos", label: "Tus datos", question: "¿Cómo te llamo?", hint: "Al enviar se abre WhatsApp con tu mensaje listo para mandármelo." },
    ],
    topics: [
      { value: "reiki", label: "Reiki" },
      { value: "meditacion", label: "Meditación" },
      { value: "tarot", label: "Tarot terapéutico" },
      { value: "curso-reiki", label: "Curso de Reiki" },
      { value: "no-lo-se", label: "Aún no lo sé" },
    ],
    modalities: [
      { value: "presencial", label: "Presencial en Valencia" },
      { value: "online", label: "Online" },
      { value: "indiferente", label: "Me da igual" },
    ],
    messagePlaceholder: "Por ejemplo: llevo unas semanas con mucho estrés y me gustaría probar el Reiki.",
    messageLabel: "Tu mensaje",
    nameLabel: "Nombre",
    namePlaceholder: "Cómo te llamas",
    contactLabel: "Email o teléfono",
    contactPlaceholder: "Para poder contestarte",
    privacyLabel: "He leído y acepto la",
    privacyLink: "política de privacidad",
    privacyNote:
      `Responsable: ${site.legal.holder}. Finalidad: responder a tu consulta. Legitimación: tu consentimiento. Al enviar se abre WhatsApp, servicio de Meta, con tu mensaje; si el envío por email está activo, recibo además una copia gestionada con Resend. Derechos: acceso, rectificación, supresión y otros, escribiendo a ${site.contact.email}.`,
    summary: "Tu elección",
    next: "Siguiente",
    back: "Atrás",
    submit: "Enviar por WhatsApp",
    enterHint: "o pulsa Enter",
    stepLabel: "Paso",
    of: "de",
    whatsapp: {
      greeting: "Hola, Tati. Te escribo desde la web.",
      name: "Nombre",
      contact: "Contacto",
      topic: "Me interesa",
      modality: "Modalidad",
      message: "Mensaje",
    },
    success: {
      title: "Gracias. Te escribo muy pronto.",
      text: "Se ha abierto WhatsApp con tu mensaje. Solo tienes que pulsar enviar. Si no se ha abierto, usa el botón.",
      open: "Abrir WhatsApp",
      again: "Enviar otro mensaje",
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

export const loadingLabel = "Cargando";

export const errorPage = {
  title: "Algo no ha ido bien.",
  text: "Vuelve a intentarlo. Si sigue igual, escríbeme por WhatsApp.",
  retry: "Reintentar",
};
