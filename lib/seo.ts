import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Faq } from "@/content/faqs";
import { absoluteUrl } from "./utils";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  defaultImage?: boolean;
};

const defaultOgImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "Despierta con Tati" };

export function pageMetadata({ title, description, path, absoluteTitle = true, defaultImage = false }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      url,
      title,
      description,
      ...(defaultImage ? { images: [defaultOgImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(defaultImage ? { images: [defaultOgImage.url] } : {}),
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const all = [{ name: site.ui.breadcrumbHome, path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export const businessId = `${site.url}/#negocio`;
export const personId = `${site.url}/#tati`;
export const websiteId = `${site.url}/#web`;

export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
  offers,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  offers?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    provider: { "@id": businessId },
    areaServed: [
      { "@type": "City", name: site.location.locality },
      "Online",
    ],
    availableChannel: [
      { "@type": "ServiceChannel", name: "Presencial en Valencia" },
      { "@type": "ServiceChannel", name: "Online", serviceUrl: absoluteUrl("/contacto") },
    ],
    ...(offers
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name,
            itemListElement: offers.map((offer) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: offer },
            })),
          },
        }
      : {}),
  };
}

export function personJsonLd() {
  const sameAs = [site.social.instagram.url, site.social.tarot.url];
  return {
    "@type": "Person",
    "@id": personId,
    name: site.person.fullName,
    alternateName: site.person.shortName,
    jobTitle: site.person.jobTitle,
    url: absoluteUrl("/sobre-mi"),
    email: `mailto:${site.contact.email}`,
    telephone: site.contact.phoneE164,
    worksFor: { "@id": businessId },
    knowsAbout: [
      "Reiki",
      "Meditación",
      "Tarot terapéutico",
      "Péndulo hebreo",
      "Registros akáshicos",
      "Matriz del Destino",
      "Chakras",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.locality,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    },
    sameAs,
  };
}

export function siteJsonLd() {
  const sameAs = [site.social.instagram.url, site.social.tarot.url];
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.name,
      inLanguage: "es-ES",
      publisher: { "@id": businessId },
    },
    { "@context": "https://schema.org", ...personJsonLd() },
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": businessId,
      name: site.name,
      description: site.description,
      url: site.url,
      image: absoluteUrl("/brand/logo-despierta-con-tati.png"),
      logo: absoluteUrl("/brand/logo-despierta-con-tati.png"),
      telephone: site.contact.phoneE164,
      email: site.contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.location.locality,
        addressRegion: site.location.region,
        addressCountry: site.location.country,
      },
      areaServed: [
        { "@type": "City", name: site.location.locality },
        "Online",
      ],
      founder: { "@id": personId },
      employee: { "@id": personId },
      sameAs,
      knowsLanguage: "es",
    },
  ];
}
