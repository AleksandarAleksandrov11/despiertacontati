"use client";

import dynamic from "next/dynamic";
import { Deferred } from "./deferred";

const CookieBanner = dynamic(() => import("./cookie-banner").then((mod) => mod.CookieBanner), { ssr: false });
const WhatsappFloat = dynamic(() => import("./whatsapp-float").then((mod) => mod.WhatsappFloat), { ssr: false });
const ConsentScripts = dynamic(() => import("./consent-scripts").then((mod) => mod.ConsentScripts), { ssr: false });

export function ClientExtras() {
  return (
    <Deferred>
      <CookieBanner />
      <WhatsappFloat />
      <ConsentScripts />
    </Deferred>
  );
}
