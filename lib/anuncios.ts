import { anuncios, type Anuncio } from "@/content/anuncios";

export function isExpired(anuncio: Anuncio, now = new Date()) {
  const end = anuncio.endDate ?? anuncio.date;
  if (!end) return false;
  const limit = new Date(end);
  limit.setHours(23, 59, 59, 999);
  return limit.getTime() < now.getTime();
}

export function getActiveAnuncios(now = new Date()) {
  const active = anuncios.filter((anuncio) => !isExpired(anuncio, now));
  const dated = active
    .filter((anuncio) => anuncio.date)
    .sort((a, b) => new Date(a.date as string).getTime() - new Date(b.date as string).getTime());
  const undated = active.filter((anuncio) => !anuncio.date);
  return [...dated, ...undated];
}

export function formatAnuncioDate(date: string) {
  return new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long", year: "numeric" }).format(new Date(date));
}
