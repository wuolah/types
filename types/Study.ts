import { z } from "zod";

export const StudySchema = z.object({
  id: z.number().nonnegative(),
  slug: z.string().optional().nullable(),
  name: z.string(),
  shortName: z.string().nullable().optional(),
});

export type StudyType = z.infer<typeof StudySchema>;
