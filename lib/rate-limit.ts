import type { NextRequest } from "next/server";

export function createRateLimiter(maxRequests: number, windowMs: number) {
  const hits = new Map<string, number[]>();
  return function limited(ip: string) {
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter((time) => now - time < windowMs);
    recent.push(now);
    hits.set(ip, recent);
    if (hits.size > 5000) {
      for (const [key, times] of hits) {
        if (times.every((time) => now - time >= windowMs)) hits.delete(key);
      }
    }
    return recent.length > maxRequests;
  };
}

export function clientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "anon";
}

export function senderAddress() {
  return process.env.RESEND_FROM || "Despierta con Tati <web@despiertacontati.com>";
}
