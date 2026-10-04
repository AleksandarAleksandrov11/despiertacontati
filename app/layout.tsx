import type { Metadata, Viewport } from "next";
import { allura, cormorant, manrope } from "@/lib/fonts";
import { site } from "@/content/site";
import { Providers } from "@/components/layout/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { ConsentScripts } from "@/components/layout/consent-scripts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Reiki, meditación y tarot terapéutico en Valencia | Despierta con Tati",
    template: "%s | Despierta con Tati",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.person.fullName, url: site.url }],
  creator: site.person.fullName,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f2",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-ES" className={`${cormorant.variable} ${manrope.variable} ${allura.variable}`}>
      <body className="grain">
        <Providers>
          <SkipLink />
          <Header />
          <main id="contenido" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <WhatsappFloat />
          <CookieBanner />
          <ConsentScripts />
        </Providers>
      </body>
    </html>
  );
}
