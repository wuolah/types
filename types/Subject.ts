import { z } from "zod";
import { stringToBoolean } from "./utils";

export const SubjectSchema = z.object({
  id: z.number().nonnegative(),
  slug: z.string().optional().nullable(),
  name: z.string(),
  shortName: z.string().nullable().optional(),
  verified: z
    .preprocess(stringToBoolean(true), z.boolean().nullable())
    .optional(),
});

export type SubjectType = z.infer<typeof SubjectSchema>;
