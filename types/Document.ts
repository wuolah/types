import { z } from "zod";
import { UserSchema } from "./UserType";

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
  numPreviews: z.number().nonnegative().default(0),
  numViews: z.number().nonnegative().default(0),
  numDownloads: z.number().nonnegative().default(0),
  s3Key: z.string(),
  anonymous: z.boolean(),

  user: UserSchema.optional()
});

export type DocumentType = z.infer<typeof DocumentSchema>;
