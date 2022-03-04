import { z } from "zod";
import { UserSchema } from "./User";

export const DocumentCategory = {
  APUNTES: "apuntes",
  EXAMENES: "exámenes",
  EJERCICIOS: "ejercicios",
  PRACTICAS: "prácticas",
  TRABAJOS: "trabajos",
  OTROS: "otros",
} as const;
export const DocumentCategorySchema = z.nativeEnum(DocumentCategory);
export type DocumentCategoryType = z.infer<typeof DocumentCategorySchema>;

export const DocumentFileType = {
  PDF: "application/pdf",
  PPT: "application/vnd.ms-powerpoint",
} as const;
export const DocumentFileTypeSchema = z.nativeEnum(DocumentFileType);
export type DocumentFileTypeType = z.infer<typeof DocumentFileTypeSchema>;

export const DocumentExtension = {
  PDF: "pdf",
  PPT: "ppt",
  DOC: "doc",
  FOLDER: "folder",
} as const;
export const DocumentExtensionSchema = z.nativeEnum(DocumentExtension);
export type DocumentExtensionType = z.infer<typeof DocumentExtensionSchema>;

export const DocumentSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  userId: z.number().positive(),
  centerId: z.number().nonnegative(),
  studyId: z.number().nonnegative(),
  course: z.number().positive(),
  subjectId: z.number().nonnegative(),
  extension: DocumentExtensionSchema,
  fileType: DocumentFileTypeSchema,
  category: DocumentCategorySchema,
  numPreviews: z.number().nonnegative().default(0),
  numViews: z.number().nonnegative().default(0),
  numDownloads: z.number().nonnegative().default(0),
  numBookmarks: z.number().nonnegative().default(0),
  numLikes: z.number().nonnegative().default(0),
  numPages: z.number().nonnegative().default(0),
  s3Key: z.string(),
  anonymous: z.boolean().default(false),
  createdAt: z.string(),
  deleted: z.boolean().default(false),

  user: UserSchema.optional(),
});

export type DocumentType = z.infer<typeof DocumentSchema>;
