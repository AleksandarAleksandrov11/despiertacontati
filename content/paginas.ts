import { site } from "./site";
import type { ImageKey } from "./imagenes";

export const inicio = {
  hero: {
    eyebrow: "Terapeuta holística en Valencia",
    title: "Despierta",
    subtitle: site.tagline,
    support: "Reiki, meditación, tarot y autoconocimiento en Valencia y online.",
    image: "mujerBrazosAbiertos" as ImageKey,
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
  guia: {
    eyebrow: "Guía gratuita",
    title: "Tu primera pausa.",
    text: "Una guía sencilla para empezar a meditar y tu primera meditación guiada, gratis.",
    cta: "Quiero la guía",
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
    quote: "Despertar es darte cuenta de que tienes el poder de tu vida.",
    text: "Terapeuta holística en Valencia, con más de 20 años acompañando y enseñando Reiki desde 2006. Práctica, cercana y al grano.",
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
  subtitle: "Terapeuta holística en Valencia. Práctica y al grano.",
  intro:
    "Acompaño a mujeres que viven con estrés o ansiedad, o que sienten que han perdido el rumbo. Lo hago con herramientas que a mí me han funcionado.",
  idea: "Para mí, despertar es darte cuenta de que tienes el poder de tu vida. Sea cual sea la herramienta, el objetivo es ese: que vuelvas a elegir tú.",
  image: "tatiRetrato" as ImageKey,
  manifiesto: ["Sin humo.", "Sin ir de blanco.", "Herramientas que funcionan."],
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
  image: "tatiTrabajandoPendulo" as ImageKey,
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
  subtitle: "Cuéntame en un minuto qué necesitas.",
  aside: {
    avatar: "tatiSonrisa" as ImageKey,
    avatarTitle: "Te contesto yo.",
    avatarText: "Leo cada mensaje personalmente.",
    title: "Si lo prefieres",
    location: "Valencia y online",
    locationText: "Sesiones online desde donde estés. Las clases de meditación en grupo, también en Valencia.",
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
      { id: "modalidad", label: "Modalidad", question: "¿Cómo lo prefieres?", hint: "Las sesiones son online. Las clases de meditación en grupo, también en Valencia." },
      { id: "mensaje", label: "Mensaje", question: "Cuéntame un poco", hint: "Opcional. Lo que te apetezca contarme sobre lo que necesitas." },
      { id: "datos", label: "Tus datos", question: "¿Cómo te llamo?", hint: "Al enviar se abre WhatsApp con tu mensaje listo para mandármelo." },
    ],
    topics: [
      { value: "reiki", label: "Reiki y terapias energéticas" },
      { value: "limpieza", label: "Limpieza energética" },
      { value: "meditacion", label: "Meditación" },
      { value: "tarot", label: "Tarot" },
      { value: "autoconocimiento", label: "Autoconocimiento" },
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
  guide: {
    text: "Y si te apetece una pausa de verdad, llévate la guía gratuita.",
    cta: "Descargar Tu primera pausa",
  },
};

export const loadingLabel = "Cargando";

export const errorPage = {
  title: "Algo no ha ido bien.",
  text: "Vuelve a intentarlo. Si sigue igual, escríbeme por WhatsApp.",
  retry: "Reintentar",
};
