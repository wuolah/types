import { z } from "zod";

export enum FileCategory {
  APUNTES = "apuntes",
  EXAMENES = "exámenes",
  EJERCICIOS = "ejercicios",
  PRACTICAS = "prácticas",
  TRABAJOS = "trabajos",
  OTROS = "otros",
}

export const FileCategorySchema = z.nativeEnum(FileCategory);

export const FileSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  userId: z.number().positive(),
  extension: z.string(),
  fileType: z.string(),
  category: FileCategorySchema,
});

export type FileType = z.infer<typeof FileSchema>;
