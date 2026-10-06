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
    "Tati, terapeuta holística en Valencia con más de 20 años de experiencia. Reiki, meditación y tarot terapéutico para recuperar la calma y decidir mejor.",
  tagline: "Conócete, toma conciencia y elige mejor.",
  taglineParts: { lead: "Conócete, toma conciencia y", accent: "elige mejor." },
  motto: "Recuerda quién eres, toma tu poder y crea tu nueva vida.",
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
    whatsapp: "Escríbeme por WhatsApp",
  },
  whatsappMessages: {
    general: "Hola, Tati. Te escribo desde la web y me gustaría información.",
  },
  footer: {
    blurb: "Reiki, meditación y tarot terapéutico.",
    courses: "Cursos de Reiki",
    sealAlt: "Sello de Despierta con Tati, bienestar integral",
  },
  ui: {
    skipLink: "Saltar al contenido",
    mainNav: "Navegación principal",
    mobileNav: "Menú",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    openSubmenu: "Mostrar los servicios",
    whatsappFloat: "Escríbeme por WhatsApp",
    footerNav: "Navegación",
    footerServices: "Servicios",
    footerContact: "Contacto",
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

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Reiki", href: "/servicios/reiki", description: "Calma para bajar revoluciones" },
      { label: "Meditación", href: "/servicios/meditacion", description: "Claridad en lo cotidiano" },
      { label: "Tarot terapéutico", href: "/servicios/tarot-terapeutico", description: "Un espejo para decidir" },
    ],
  },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Testimonios", href: "/testimonios" },
  { label: "Tablón", href: "/tablon" },
  { label: "Contacto", href: "/contacto" },
];

export const legalNav = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Política de cookies", href: "/politica-de-cookies" },
];

export const keywordsMarquee = [
  { label: "Reiki", color: "var(--color-chakra-raiz)" },
  { label: "Meditación", color: "var(--color-chakra-sacro)" },
  { label: "Tarot terapéutico", color: "var(--color-chakra-plexo)" },
  { label: "Péndulo hebreo", color: "var(--color-chakra-corazon)" },
  { label: "Chakras", color: "var(--color-chakra-garganta)" },
  { label: "Registros akáshicos", color: "var(--color-chakra-tercer-ojo)" },
  { label: "Matriz del Destino", color: "var(--color-chakra-corona)" },
];
