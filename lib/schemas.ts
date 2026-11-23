import * as z from "zod/mini";

export const contactTopics = ["guia", "meditacion", "tarot", "autoconocimiento", "reiki", "limpieza", "curso-reiki", "no-lo-se"] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[\d\s().-]{9,20}$/;

export const contactSchema = z.object({
  servicio: z.enum(contactTopics, { error: "Elige una opción" }),
  producto: z.optional(z.string()),
  formato: z.optional(z.string()),
  pdf: z.optional(z.boolean()),
  mensaje: z.optional(z.string().check(z.trim(), z.maxLength(2000, "Es un poco largo; resume en menos de 2000 caracteres"))),
  nombre: z.string().check(z.trim(), z.minLength(2, "Dime tu nombre"), z.maxLength(80, "Nombre demasiado largo")),
  contacto: z.optional(
    z
      .string()
      .check(
        z.trim(),
        z.maxLength(120, "Demasiado largo"),
        z.refine((value) => value === "" || emailPattern.test(value) || phonePattern.test(value), "Escribe un email o un teléfono válido"),
      ),
  ),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactTopic = (typeof contactTopics)[number];
