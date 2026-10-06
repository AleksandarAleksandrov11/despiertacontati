import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactoPage } from "@/content/paginas";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { PageHeader } from "@/components/sections/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBlock } from "@/components/sections/cta-block";
import { InstagramIcon, WhatsappIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SiteImage } from "@/components/ui/site-image";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { whatsappHref } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Reserva tu sesión en Valencia u online | Despierta con Tati",
  description:
    "Reserva tu sesión de Reiki, meditación o tarot terapéutico en Valencia u online. Cuéntame en un minuto qué necesitas o escríbeme por WhatsApp y te respondo yo.",
  path: "/contacto",
});

export default function ContactoPage() {
  const page = contactoPage;
  const channels = [
    { label: page.aside.whatsapp, value: site.contact.phoneDisplay, href: whatsappHref(), icon: <WhatsappIcon size={20} /> },
    { label: page.aside.phone, value: site.contact.phoneDisplay, href: `tel:${site.contact.phoneE164}`, icon: <Phone size={20} strokeWidth={1.25} aria-hidden /> },
    { label: page.aside.email, value: site.contact.email, href: `mailto:${site.contact.email}`, icon: <Mail size={20} strokeWidth={1.25} aria-hidden /> },
    { label: page.aside.instagram, value: site.social.instagram.label, href: site.social.instagram.url, icon: <InstagramIcon size={20} /> },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contacto", path: "/contacto" }])} />
      <PageHeader eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} tone="rosa" blobs="b" />
      <Section tone="rosa" className="!pt-0" hideWhatsapp>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <Suspense fallback={<div className="min-h-[34rem] rounded-[2rem] bg-crema" />}>
              <ContactForm />
            </Suspense>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <aside aria-labelledby="contacto-directo">
              <div className="mb-10 flex items-center gap-5">
                <SiteImage name={page.aside.avatar} shape="circle" sizes="96px" className="size-20 shrink-0 sm:size-24" />
                <div>
                  <p className="font-serif text-[1.75rem] leading-tight">{page.aside.avatarTitle}</p>
                  <p className="mt-1 text-ink-soft">{page.aside.avatarText}</p>
                </div>
              </div>
              <h2 id="contacto-directo" className="eyebrow mb-6">
                {page.aside.title}
              </h2>
              <ul className="divide-y divide-ciruela/10 border-y border-ciruela/10">
                {channels.map((channel) => {
                  const external = channel.href.startsWith("http");
                  return (
                    <li key={channel.label}>
                      <a
                        href={channel.href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex min-h-16 items-center gap-4 py-4"
                      >
                        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-ciruela/15 text-malva-deep transition-colors duration-500 group-hover:bg-crema">
                          {channel.icon}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-sm text-ink-soft">{channel.label}</span>
                          <span className="link-underline block break-words font-medium">{channel.value}</span>
                        </span>
                      </a>
                    </li>
                  );
                })}
                <li className="flex items-center gap-4 py-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-ciruela/15 text-malva-deep">
                    <MapPin size={20} strokeWidth={1.25} aria-hidden />
                  </span>
                  <span>
                    <span className="block font-medium">{page.aside.location}</span>
                    <span className="block text-sm text-ink-soft">{page.aside.locationText}</span>
                  </span>
                </li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </Section>
      <FaqSection faqs={faqs.contacto} />
      <CtaBlock title={page.cta.title} text={page.cta.text} tone="salvia" direct />
    </>
  );
}
