import { existsSync } from "node:fs";
import { join } from "node:path";
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
  env: {
    NEXT_PUBLIC_GUIA_AUDIO: existsSync(join(process.cwd(), "public/descargas/meditacion-freno.mp3")) ? "1" : "0",
  },
  images: {
    formats: ["image/webp"],
    qualities: [80],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/descargas/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
    ];
  },
  async redirects() {
    return [
      { source: "/sobre-mi", destination: "/quien-soy", statusCode: 301 },
      ...(hayTestimonios ? [] : [{ source: "/testimonios", destination: "/quien-soy", permanent: false }]),
    ];
  },
};

export default nextConfig;
