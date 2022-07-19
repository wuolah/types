import { z } from "zod";
import { CommunitySchema } from "./Community";
import { SubjectSchema } from "./Subject";
import { dateToString, stringToBoolean } from "./utils";

export const CommunitySubjectSchema = z.object({
  id: z.number().positive(),
  communityId: z.number().nonnegative().optional(),
  centerId: z.number().nonnegative(),
  studyId: z.number().nonnegative(),
  subjectId: z.number().nonnegative(),
  course: z.number().nonnegative(),
  numFiles: z.number().nonnegative().default(0).optional(),
  verified: z
    .preprocess(stringToBoolean(null), z.boolean().nullable())
    .optional(),
  enabled: z
    .preprocess(stringToBoolean(null), z.boolean().nullable())
    .optional(),
  createdAt: z.preprocess(dateToString(null), z.string()),
  updatedAt: z.preprocess(dateToString(null), z.string()),

  community: CommunitySchema.optional(),
  subject: SubjectSchema.optional(),
});

export type CommunitySubjectType = z.infer<typeof CommunitySubjectSchema>;
