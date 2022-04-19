import { z } from "zod";
import { stringToBoolean } from "./utils";

export const SubjectSchema = z.object({
  id: z.number().nonnegative(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().nullable().optional(),
  course: z.number().nonnegative().optional(),
  numFiles: z.number().nonnegative().default(0).optional(),
  verified: z
    .preprocess(stringToBoolean(true), z.boolean().nullable())
    .optional(),
  enabled: z
    .preprocess(stringToBoolean(true), z.boolean().nullable())
    .optional(),
  /**
   * @deprecated This field is deprecated and will be removed in the future.
   */
  DEPR_link: z.string().nullable().optional(),
});

export type SubjectType = z.infer<typeof SubjectSchema>;
