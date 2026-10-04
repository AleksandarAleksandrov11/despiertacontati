import { z } from "zod";

export const contactTopics = ["reiki", "meditacion", "tarot", "curso-reiki", "no-lo-se"] as const;
export const contactModalities = ["presencial", "online", "indiferente"] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[\d\s().-]{9,20}$/;

export const contactSchema = z.object({
  type: z.literal("contacto"),
  servicio: z.enum(contactTopics, { error: "Elige una opción" }),
  modalidad: z.enum(contactModalities, { error: "Elige una opción" }),
  mensaje: z.string().trim().max(2000, "Es un poco largo; resume en menos de 2000 caracteres").optional(),
  nombre: z.string().trim().min(2, "Dime tu nombre").max(80, "Nombre demasiado largo"),
  contacto: z
    .string()
    .trim()
    .min(1, "Dime cómo contactarte")
    .max(120, "Demasiado largo")
    .refine((value) => emailPattern.test(value) || phonePattern.test(value), "Escribe un email o un teléfono válido"),
  privacidad: z.literal(true, { error: "Necesito que aceptes la política de privacidad" }),
  empresa: z.string().optional(),
});

export const subscribeSchema = z.object({
  type: z.literal("suscripcion"),
  email: z.string().trim().regex(emailPattern, "Escribe un email válido").max(120),
  privacidad: z.literal(true, { error: "Necesito que aceptes la política de privacidad" }),
  empresa: z.string().optional(),
});

export const messageSchema = z.discriminatedUnion("type", [contactSchema, subscribeSchema]);

export type ContactInput = z.infer<typeof contactSchema>;
export type SubscribeInput = z.infer<typeof subscribeSchema>;
export type MessageInput = z.infer<typeof messageSchema>;
