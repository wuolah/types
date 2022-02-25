import { z } from "zod";

export const StudySchema = z.object({
  id: z.number().nonnegative(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().optional(),
  logo: z.string().optional(),
});

export type StudyType = z.infer<typeof StudySchema>;
