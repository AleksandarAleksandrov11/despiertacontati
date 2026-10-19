import { NextResponse, type NextRequest } from "next/server";
import { datosDesdeParams } from "@/lib/pdf/datos";
import { renderMatrizPdf } from "@/lib/pdf/render";
import { clientIp, createRateLimiter } from "@/lib/rate-limit";

export const runtime = "nodejs";

const rateLimited = createRateLimiter(30, 10 * 60 * 1000);

export async function GET(request: NextRequest) {
  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }
  const datos = datosDesdeParams(request.nextUrl.searchParams, request.nextUrl.origin);
  if (!datos) {
    return NextResponse.json({ ok: false, error: "invalid_data" }, { status: 400 });
  }
  const pdf = await renderMatrizPdf(datos);
  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${datos.archivo}"`,
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
