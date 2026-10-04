import type { MessageInput } from "./schemas";

export async function sendMessage(payload: MessageInput) {
  const response = await fetch("/api/mensajes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(String(response.status));
}
