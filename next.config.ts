import type { NextConfig } from "next";
import { hayTestimonios } from "./content/testimonios";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  serverExternalPackages: ["@react-pdf/renderer"],
  outputFileTracingIncludes: {
    "/api/matriz/pdf": ["./assets/fonts/*.ttf", "./assets/pdf/*", "./public/brand/*.png"],
    "/api/codigo-personal/pdf": ["./assets/fonts/*.ttf", "./assets/pdf/*", "./assets/tarot/**/*", "./public/brand/*.png"],
  },
  images: {
    formats: ["image/webp"],
    qualities: [80],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
    ];
  },
  async redirects() {
    return [
      { source: "/sobre-mi", destination: "/quien-soy", statusCode: 301 },
      { source: "/tu-primera-pausa", destination: "/servicios/meditacion", permanent: true },
      { source: "/tienda/matriz-del-destino", destination: "/tienda/analisis-matriz-del-destino", permanent: true },
      { source: "/tienda/pausa-y-vuelve-a-ti", destination: "/tienda/transforma-tu-bienestar", permanent: true },
      { source: "/tienda/camino-12-semanas-meditacion", destination: "/tienda/transforma-tu-bienestar", permanent: true },
      { source: "/tienda/un-espacio-para-tu-mente", destination: "/tienda/vuelve-a-ti", permanent: true },
      { source: "/tienda/conecta-contigo", destination: "/tienda/vuelve-a-ti", permanent: true },
      { source: "/tienda/camino-6-semanas-meditacion", destination: "/tienda/vuelve-a-ti", permanent: true },
      { source: "/calculadora/compatibilidad-de-pareja", destination: "/calculadora/matriz-del-destino", permanent: false },
      ...(hayTestimonios ? [] : [{ source: "/testimonios", destination: "/quien-soy", permanent: false }]),
    ];
  },
};

export default nextConfig;
