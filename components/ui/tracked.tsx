"use client";

import { track } from "@vercel/analytics";
import { useEffect, type ComponentPropsWithoutRef } from "react";

export type TrackEvent =
  | "ver_producto"
  | "click_comprar_whatsapp"
  | "click_avisame"
  | "descarga_guia"
  | "calcular_matriz"
  | "descarga_pdf_matriz"
  | "descarga_pdf_codigo"
  | "click_info_whatsapp";

type TrackedAnchorProps = ComponentPropsWithoutRef<"a"> & {
  event: TrackEvent;
  data?: Record<string, string>;
};

export function TrackedAnchor({ event, data, onClick, ...props }: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(clickEvent) => {
        track(event, data);
        onClick?.(clickEvent);
      }}
    />
  );
}

export function TrackView({ event, data }: { event: TrackEvent; data?: Record<string, string> }) {
  const key = JSON.stringify(data ?? {});
  useEffect(() => {
    track(event, JSON.parse(key) as Record<string, string>);
  }, [event, key]);
  return null;
}
