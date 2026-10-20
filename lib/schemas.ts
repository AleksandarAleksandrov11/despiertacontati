import * as z from "zod/mini";

export const contactTopics = ["reiki", "limpieza", "meditacion", "tarot", "autoconocimiento", "curso-reiki", "no-lo-se"] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[\d\s().-]{9,20}$/;
const privacyError = "Necesito que aceptes la política de privacidad";

export const contactSchema = z.object({
  type: z.literal("contacto"),
  servicio: z.enum(contactTopics, { error: "Elige una opción" }),
  mensaje: z.optional(z.string().check(z.trim(), z.maxLength(2000, "Es un poco largo; resume en menos de 2000 caracteres"))),
  nombre: z.string().check(z.trim(), z.minLength(2, "Dime tu nombre"), z.maxLength(80, "Nombre demasiado largo")),
  contacto: z
    .string()
    .check(
      z.trim(),
      z.minLength(1, "Dime cómo contactarte"),
      z.maxLength(120, "Demasiado largo"),
      z.refine((value) => emailPattern.test(value) || phonePattern.test(value), "Escribe un email o un teléfono válido"),
    ),
  privacidad: z.literal(true, { error: privacyError }),
  empresa: z.optional(z.string()),
});

export const guideSchema = z.object({
  nombre: z.string().check(z.trim(), z.minLength(2, "Dime tu nombre"), z.maxLength(80, "Nombre demasiado largo")),
  email: z.string().check(z.trim(), z.maxLength(120, "Demasiado largo"), z.regex(emailPattern, "Escribe un email válido")),
  privacidad: z.literal(true, { error: privacyError }),
  novedades: z.boolean(),
  empresa: z.optional(z.string()),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type GuideInput = z.infer<typeof guideSchema>;
