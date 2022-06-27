import { z } from "zod";
import { CenterSchema } from "./Center";
import { CommunitySchema } from "./Community";
import { ProfileSchema } from "./Profile";
import { SubjectSchema } from "./Subject";
import { StudySchema } from "./Study";
import { stringToBoolean } from "./utils";

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

export const DocumentSchema = z.object({
  id: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),

  category: z.union([DocumentCategorySchema, z.string()]),
  name: z.string(),
  extension: z.string(),
  fileType: z.string(),
  teacher: z.string().nullable().optional(),

  s3Key: z.string().optional(),
  isAnonymous: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  isMonetizable: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),

  numPages: z.number().nonnegative().default(0),
  numPreviews: z.number().nonnegative().default(0),
  numViews: z.number().nonnegative().default(0),
  numDownloads: z.number().nonnegative().default(0),
  numPremiumDownloads: z.number().nonnegative().default(0),
  numBookmarks: z.number().nonnegative().default(0),
  numLikes: z.number().nonnegative().default(0),

  uploadId: z.number().nonnegative().optional(),

  userId: z.number().positive().nullable().optional(),
  communityId: z.number().nonnegative(),
  subjectId: z.number().nonnegative(),
  centerId: z.number().nonnegative(),
  studyId: z.number().nonnegative(),
  // virtuals
  user: ProfileSchema.optional(),
  community: CommunitySchema.optional(),
  subject: SubjectSchema.optional(),
  center: CenterSchema.optional(),
  study: StudySchema.optional(),
});

export type DocumentType = z.infer<typeof DocumentSchema>;
