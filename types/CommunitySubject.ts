import { z } from "zod";
import { stringToBoolean } from "./utils";

export const CommunitySubjectSchema = z.object({
  id: z.number().positive(),
  centerId: z.number().nonnegative(),
  studyId: z.number().nonnegative(),
  course: z.number().nonnegative(),
  numFiles: z.number().nonnegative().default(0).optional(),
  verified: z
    .preprocess(stringToBoolean(null), z.boolean().nullable())
    .optional(),
  enabled: z
    .preprocess(stringToBoolean(null), z.boolean().nullable())
    .optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type CommunitySubjectType = z.infer<typeof CommunitySubjectSchema>;
