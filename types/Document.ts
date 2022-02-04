import { z } from "zod";

export enum DocumentCategory {
  APUNTES = "apuntes",
  EXAMENES = "exámenes",
  EJERCICIOS = "ejercicios",
  PRACTICAS = "prácticas",
  TRABAJOS = "trabajos",
  OTROS = "otros",
}

export const DocumentCategorySchema = z.nativeEnum(DocumentCategory);

export const DocumentSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  userId: z.number().positive(),
  extension: z.string(),
  fileType: z.string(),
  category: DocumentCategorySchema,
});

export type DocumentType = z.infer<typeof DocumentSchema>;
