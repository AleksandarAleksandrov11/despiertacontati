import type { ConsentCategory } from "@/components/layout/consent";

export const cookieBanner = {
  title: "Cookies",
  text: "Uso lo imprescindible para que la web funcione y, si aceptas, analítica anónima para mejorarla.",
  accept: "Aceptar",
  reject: "Rechazar",
  configure: "Configurar",
  policy: "Política de cookies",
  panel: {
    title: "Configurar cookies",
    intro: "Elige qué permites. Puedes cambiarlo cuando quieras desde el pie de la web, en \"Configurar cookies\".",
    save: "Guardar selección",
    acceptAll: "Aceptar todas",
    rejectAll: "Rechazar todas",
    close: "Cerrar",
    alwaysOn: "Siempre activas",
  },
};

export type CookieCategoryInfo = {
  id: "necessary" | ConsentCategory;
  title: string;
  description: string;
  items: { name: string; provider: string; purpose: string; duration: string; type: string }[];
};

export const cookieCategories: CookieCategoryInfo[] = [
  {
    id: "necessary",
    title: "Necesarias",
    description: "Guardan tu elección sobre cookies para no volver a preguntarte. Sin ellas la web no puede recordar tu decisión.",
    items: [
      {
        name: "dct-consent",
        provider: "Despierta con Tati",
        purpose: "Guardar tus preferencias de cookies y la fecha en que las elegiste.",
        duration: "12 meses",
        type: "Almacenamiento local",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analítica",
    description:
      "Medición anónima de visitas y rendimiento con Vercel Web Analytics y Speed Insights. No instalan cookies ni identifican a nadie.",
    items: [
      {
        name: "Vercel Web Analytics",
        provider: "Vercel Inc.",
        purpose: "Contar visitas y páginas vistas de forma agregada y anónima.",
        duration: "No almacena datos en tu navegador",
        type: "Script de medición",
      },
      {
        name: "Vercel Speed Insights",
        provider: "Vercel Inc.",
        purpose: "Medir la velocidad de carga de la web para mejorarla.",
        duration: "No almacena datos en tu navegador",
        type: "Script de medición",
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Ahora mismo no uso cookies de marketing. Si algún día las uso, te lo preguntaré aquí antes de activarlas.",
    items: [],
  },
];
