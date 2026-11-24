export type ClaseAgenda = { fecha: string; nota?: string };

export type MesAgenda = { nombre: string; clases: ClaseAgenda[] };

export const agendaClases: {
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  whatsapp: string;
  meses: MesAgenda[];
} = {
  eyebrow: "Agenda",
  title: "Próximas clases de meditación.",
  text: "Meditación en grupo, online y en directo. La del 26 de noviembre es gratuita. Para apuntarte, escríbeme.",
  cta: "Quiero plaza",
  whatsapp: "Hola, Tati. Quiero plaza en las clases de meditación online. ¿Me cuentas cómo me apunto?",
  meses: [
    { nombre: "Noviembre", clases: [{ fecha: "2026-11-26", nota: "Clase gratuita" }] },
    { nombre: "Diciembre", clases: [{ fecha: "2026-12-03" }, { fecha: "2026-12-10" }, { fecha: "2026-12-17" }] },
    { nombre: "Enero", clases: [{ fecha: "2027-01-07" }, { fecha: "2027-01-14" }, { fecha: "2027-01-21" }, { fecha: "2027-01-28" }] },
  ],
};
