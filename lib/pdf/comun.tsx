import { Circle, Defs, Image, Link, Page, RadialGradient, Stop, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";
import type { ReactNode } from "react";
import { calculadoraPdf } from "@/content/calculadora";
import { site } from "@/content/site";

export type Recursos = { logo: string; simbolo: string; foto: string; qr: string };

export const c = {
  crema: "#fbf7f2",
  rosaPolvo: "#f6e9e6",
  lavanda: "#f1ecf6",
  salvia: "#eef3ec",
  ciruela: "#3f2e3a",
  ciruelaSoft: "#54404e",
  inkSoft: "#6e5a66",
  rosa: "#c98b93",
  rosaDeep: "#9c5f6c",
  malva: "#a9799b",
  malvaDeep: "#8e5f80",
  dorado: "#c8a46a",
  doradoSoft: "#ddbf8c",
  linea: "#e7dcd3",
};

export const A5 = { width: 419.53, height: 595.28 };

export const s = StyleSheet.create({
  page: {
    backgroundColor: c.crema,
    paddingTop: 42,
    paddingBottom: 54,
    paddingHorizontal: 42,
    fontFamily: "Manrope",
    fontSize: 9.5,
    lineHeight: 1.6,
    color: c.ciruela,
  },
  eyebrow: { fontFamily: "Manrope", fontWeight: 500, fontSize: 6.8, letterSpacing: 1.7, textTransform: "uppercase", color: c.inkSoft },
  h1: { fontFamily: "Cormorant", fontWeight: 500, fontSize: 30, lineHeight: 1.05, color: c.ciruela },
  h2: { fontFamily: "Cormorant", fontWeight: 500, fontSize: 25, lineHeight: 1.08, color: c.ciruela, marginTop: 6 },
  lead: { fontSize: 10, lineHeight: 1.65, color: c.inkSoft },
  card: { backgroundColor: "#ffffff", borderRadius: 12, padding: 15 },
  small: { fontSize: 8, lineHeight: 1.5, color: c.inkSoft },
  footer: {
    position: "absolute",
    bottom: 26,
    left: 42,
    right: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 6.8,
    letterSpacing: 0.6,
    color: c.inkSoft,
  },
});

export function Fondo({ tono }: { tono: "rosa" | "lavanda" | "salvia" | "oscuro" }) {
  const colores = {
    rosa: [c.rosaPolvo, c.lavanda],
    lavanda: [c.lavanda, c.rosaPolvo],
    salvia: [c.salvia, c.lavanda],
    oscuro: ["#6b4f63", "#7a4f5c"],
  }[tono];
  return (
    <Svg fixed width={A5.width} height={A5.height} style={{ position: "absolute", top: 0, left: 0 }}>
      <Defs>
        <RadialGradient id="fondo-a" cx="0.5" cy="0.5" r="0.5">
          <Stop offset="0" stopColor={colores[0]} stopOpacity={tono === "oscuro" ? 0.55 : 1} />
          <Stop offset="1" stopColor={colores[0]} stopOpacity={0} />
        </RadialGradient>
        <RadialGradient id="fondo-b" cx="0.5" cy="0.5" r="0.5">
          <Stop offset="0" stopColor={colores[1]} stopOpacity={tono === "oscuro" ? 0.45 : 1} />
          <Stop offset="1" stopColor={colores[1]} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Circle cx={A5.width - 30} cy={40} r={190} fill="url(#fondo-a)" />
      <Circle cx={20} cy={A5.height - 40} r={170} fill="url(#fondo-b)" />
    </Svg>
  );
}

export function Pie({ oscuro = false }: { oscuro?: boolean }) {
  return (
    <View fixed style={[s.footer, oscuro ? { color: "#d9cdd4" } : {}]}>
      <Text>{`${site.name} · ${site.url.replace("https://www.", "")}`}</Text>
      <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

export function Encabezado({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <View>
      <Text style={s.eyebrow}>{eyebrow}</Text>
      <Text style={[s.h2, title.length > 36 ? { fontSize: 18 } : {}]}>{title}</Text>
      {text ? <Text style={[s.lead, { marginTop: 8 }]}>{text}</Text> : null}
    </View>
  );
}

export function Boton({ src, children, claro = true }: { src: string; children: ReactNode; claro?: boolean }) {
  return (
    <Link src={src} style={{ textDecoration: "none" }}>
      <View
        style={{
          backgroundColor: claro ? c.crema : "transparent",
          borderWidth: claro ? 0 : 0.8,
          borderColor: "#cbbcc5",
          borderRadius: 22,
          paddingVertical: 10,
          paddingHorizontal: 18,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 9.5, fontWeight: 600, color: claro ? c.ciruela : c.crema }}>{children}</Text>
      </View>
    </Link>
  );
}

export function PaginaTati({ recursos }: { recursos: Recursos }) {
  const contactos: [string, string, string][] = [
    [calculadoraPdf.web, site.url.replace("https://www.", ""), site.url],
    [calculadoraPdf.whatsapp, site.contact.phoneDisplay, `https://wa.me/${site.contact.whatsappNumber}`],
    [calculadoraPdf.instagram, site.social.instagram.label, site.social.instagram.url],
    [site.social.tarot.label, site.social.tarot.handle, site.social.tarot.url],
  ];
  return (
    <Page size="A5" style={s.page}>
      <Fondo tono="lavanda" />
      <View style={{ alignItems: "center" }}>
        <Image src={recursos.foto} style={{ width: 104, height: 104, borderRadius: 52 }} />
        <Text style={[s.h1, { marginTop: 14, textAlign: "center", fontSize: 28 }]}>{calculadoraPdf.sobreTitle}</Text>
      </View>
      {calculadoraPdf.sobre.map((paragraph) => (
        <Text key={paragraph} style={{ marginTop: 10, fontSize: 9.4, lineHeight: 1.65, textAlign: "center" }}>
          {paragraph}
        </Text>
      ))}
      <Text style={[s.eyebrow, { marginTop: 18, textAlign: "center" }]}>{calculadoraPdf.contacto}</Text>
      <View style={{ marginTop: 8, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {contactos.map(([label, texto, src]) => (
          <Link key={label} src={src} style={{ width: "50%", paddingVertical: 4, textDecoration: "none", textAlign: "center" }}>
            <Text style={{ fontSize: 6.6, letterSpacing: 1, textTransform: "uppercase", color: c.inkSoft }}>{label}</Text>
            <Text style={{ fontSize: 9.2, color: c.rosaDeep }}>{texto}</Text>
          </Link>
        ))}
      </View>
      <View style={{ flexGrow: 1 }} />
      <View style={{ alignItems: "center" }}>
        <Image src={recursos.simbolo} style={{ width: 40, height: 38 }} />
        <Text style={[s.small, { marginTop: 8, textAlign: "center", fontSize: 7 }]}>{calculadoraPdf.aviso}</Text>
      </View>
      <Pie />
    </Page>
  );
}
