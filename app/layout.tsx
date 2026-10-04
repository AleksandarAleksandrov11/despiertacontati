import type { Metadata, Viewport } from "next";
import { allura, cormorant, manrope } from "@/lib/fonts";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#fbf7f2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-ES" className={`${cormorant.variable} ${manrope.variable} ${allura.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
