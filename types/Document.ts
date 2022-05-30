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
  name: z.string(),
  userId: z.number().positive().nullable().optional(),
  uploadId: z.number().nonnegative().optional(),
  centerId: z.number().nonnegative(),
  studyId: z.number().nonnegative(),
  communityId: z.number().nonnegative(),
  course: z.number().nonnegative(),
  subjectId: z.number().nonnegative(),
  extension: z.string(),
  fileType: z.string(),
  category: z.union([DocumentCategorySchema, z.string()]),
  numPreviews: z.number().nonnegative().default(0),
  numViews: z.number().nonnegative().default(0),
  numDownloads: z.number().nonnegative().default(0),
  numPremiumDownloads: z.number().nonnegative().default(0),
  numBookmarks: z.number().nonnegative().default(0),
  numLikes: z.number().nonnegative().default(0),
  numPages: z.number().nonnegative().default(0),
  s3Key: z.string().optional(),
  isAnonymous: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  isMonetizable: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  createdAt: z.string(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),

  // virtuals
  user: ProfileSchema.optional(),
  center: CenterSchema.optional(),
  study: StudySchema.optional(),
  subject: SubjectSchema.optional(),
  community: CommunitySchema.optional(),
});

export type DocumentType = z.infer<typeof DocumentSchema>;
