import { z } from "zod";
import { CommunitySubjectSchema } from "./CommunitySubject";
import { stringToBoolean } from "./utils";

export const SubjectSchema = z.object({
  id: z.number().nonnegative(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().nullable().optional(),
  verified: z
    .preprocess(stringToBoolean(true), z.boolean().nullable())
    .optional(),
  enabled: z
    .preprocess(stringToBoolean(true), z.boolean().nullable())
    .optional(),
  relation: CommunitySubjectSchema.optional(),
});



export type SubjectType = z.infer<typeof SubjectSchema>;
