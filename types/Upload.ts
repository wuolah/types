import { z } from "zod";
import { CenterSchema } from "./Center";
import { CommunitySchema } from "./Community";
import { DocumentCategorySchema } from "./Document";
import { ProfileSchema } from "./Profile";
import { StudySchema } from "./Study";
import { SubjectSchema } from "./Subject";
import { stringToBoolean } from "./utils";

export const UploadSchema = z.object({
  id: z.number().nonnegative(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),

  category: z.union([DocumentCategorySchema, z.string()]),
  name: z.string(),
  teacher: z.string().nullable().optional(),
  comments: z.string().nullable().optional(),

  isFolder: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  isAnonymous: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  isMonetizable: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),

  numFiles: z.number().nonnegative().default(0),
  numLikes: z.number().nonnegative().default(0),
  numDislikes: z.number().nonnegative().default(0),

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

export type UploadType = z.infer<typeof UploadSchema>;
