import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { stringToBoolean, stringToNumber } from "./utils";
import { CenterSchema } from "./Center";
import { StudySchema } from "./Study";
import { SubjectSchema } from "./Subject";

export const UploadSchema = z.object({
  id: z.number().positive(),
  title: z.string(),
  userId: z.number().positive().nullable().optional(),
  centerId: z.number().nonnegative(),
  studyId: z.number().nonnegative(),
  course: z
    .preprocess(stringToNumber(null), z.number().nonnegative())
    .optional(),
  subjectId: z.number().nonnegative(),
  category: z.string(),
  teacher: z.string().nullable().optional(),
  numLikes: z.number().nonnegative().default(0),
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
});

export type UploadType = z.infer<typeof UploadSchema>;
