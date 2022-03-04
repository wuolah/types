import { z } from "zod";

export const SubjectSchema = z.object({
  id: z.number().nonnegative(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().optional(),
  course: z.number().positive().optional(),
  numFiles: z.number().positive().optional(),
  verified: z.boolean().optional(),
});

export type SubjectType = z.infer<typeof SubjectSchema>;
