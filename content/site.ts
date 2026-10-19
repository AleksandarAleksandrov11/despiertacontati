import { hayTestimonios } from "./testimonios";

export const site = {
  name: "Despierta con Tati",
  url: "https://www.despiertacontati.com",
  locale: "es_ES",
  person: {
    fullName: "Tatiana Guillem",
    shortName: "Tati",
    jobTitle: "Terapeuta holística",
  },
  description:
    "Tati, terapeuta holística en Valencia con más de 20 años de experiencia. Reiki, meditación, tarot y autoconocimiento, en Valencia y online.",
  tagline: "Recuerda quién eres, empodérate y crea tu nueva vida.",
  taglineParts: { lead: "Recuerda quién eres, empodérate y crea tu", accent: "nueva vida." },
  motto: "Recuerda quién eres, recupera tu poder de elegir y crea tu nueva vida.",
  brandLine: "Calma · Conciencia · Bienestar",
  location: {
    locality: "Valencia",
    region: "Comunidad Valenciana",
    country: "ES",
    label: "Valencia y online",
  },
  contact: {
    email: "tatiana.guillem@gmail.com",
    phoneDisplay: "+34 673 88 97 02",
    phoneE164: "+34673889702",
    whatsappNumber: "34673889702",
  },
  social: {
    instagram: {
      label: "@despiertacontati",
      url: "https://www.instagram.com/despiertacontati/",
    },
    tarot: {
      label: "Tarot con Tati",
      handle: "@tarotcontati8",
      url: "https://www.instagram.com/tarotcontati8/",
    },
  },
  facts: {
    experience: { value: 20, prefix: "+", lines: ["años", "acompañando"] },
    teaching: { value: 2006, prefix: "", lines: ["empiezo a", "enseñar Reiki"] },
    reikiSince: 2006,
  },
  legal: {
    holder: "Tatiana Guillem Rodriguez",
    nif: "20437016K",
    address: "Calle Nou, 20-1, 46270 Villanueva de Castellón (Valencia)",
  },
  disclaimer:
    "Las terapias naturales son complementarias y no sustituyen la atención médica ni psicológica.",
  credit: {
    label: "Web por AAS Marketing",
  },
  cta: {
    primary: { label: "Reserva tu sesión", href: "/contacto" },
    services: { label: "Ver servicios", href: "/servicios" },
    about: { label: "Conóceme", href: "/quien-soy" },
    guide: { label: "Guía gratuita", href: "/tu-primera-pausa" },
    shop: { label: "Ver la tienda", href: "/tienda" },
    info: "Pide información",
    whatsapp: "Escríbeme por WhatsApp",
  },
  whatsappMessages: {
    general: "Hola, Tati. Te escribo desde la web y me gustaría información.",
  },
  footer: {
    blurb: "Reiki, meditación, tarot y autoconocimiento.",
    guide: {
      title: "Tu primera pausa",
      text: "Una guía sencilla para empezar a meditar y tu primera meditación guiada.",
      cta: "Descarga la guía gratuita",
    },
  },
  ui: {
    skipLink: "Saltar al contenido",
    mainNav: "Navegación principal",
    mobileNav: "Menú",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    openSubmenu: "Abrir el submenú de",
    whatsappFloat: "Escríbeme por WhatsApp",
    footerNav: "Navegación",
    footerServices: "Servicios",
    footerContact: "Contacto",
    footerGuide: "Guía gratuita",
    footerSocial: "Redes",
    legalNav: "Información legal",
    configureCookies: "Configurar cookies",
    rights: "Despierta con Tati",
    breadcrumbHome: "Inicio",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description: string }[];
};

export const serviceNav = [
  { label: "Reiki y terapias energéticas", href: "/servicios/reiki", description: "Calma y equilibrio" },
  { label: "Limpieza energética", href: "/servicios/limpieza-energetica", description: "Armonía en tu hogar" },
  { label: "Meditación", href: "/servicios/meditacion", description: "Claridad en lo cotidiano" },
  { label: "Tarot terapéutico", href: "/servicios/tarot-terapeutico", description: "Decisiones con claridad" },
  { label: "Autoconocimiento", href: "/servicios/autoconocimiento", description: "Matriz del Destino y Código Personal" },
];

export const calculadorasNav = [
  { label: "Matriz del Destino", href: "/calculadora/matriz-del-destino", description: "Tu matriz y tus energías por edades" },
  { label: "Compatibilidad de pareja", href: "/calculadora/compatibilidad-de-pareja", description: "La matriz de vuestra relación" },
  { label: "Código Personal", href: "/calculadora/codigo-personal", description: "Tu arcano personal y tus mapas de tarot" },
];

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Quién soy", href: "/quien-soy" },
  { label: "Calculadoras", href: "/calculadora", children: calculadorasNav },
  { label: "Servicios", href: "/servicios", children: serviceNav },
  { label: "Tienda", href: "/tienda" },
  { label: "Tablón", href: "/tablon" },
  ...(hayTestimonios ? [{ label: "Testimonios", href: "/testimonios" }] : []),
  { label: "Contacto", href: "/contacto" },
];

export const legalNav = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Política de cookies", href: "/politica-de-cookies" },
  { label: "Condiciones de compra", href: "/condiciones-de-compra" },
];

export const keywordsMarquee = [
  { label: "Reiki", color: "var(--color-chakra-raiz)" },
  { label: "Meditación", color: "var(--color-chakra-sacro)" },
  { label: "Crono Tarot", color: "var(--color-chakra-plexo)" },
  { label: "Sanación akáshica", color: "var(--color-chakra-corazon)" },
  { label: "Matriz del Destino", color: "var(--color-chakra-garganta)" },
  { label: "Código Personal", color: "var(--color-chakra-tercer-ojo)" },
  { label: "Limpieza energética", color: "var(--color-chakra-corona)" },
  { label: "Chakras", color: "var(--color-chakra-raiz)" },
  { label: "Péndulo hebreo", color: "var(--color-chakra-sacro)" },
];
