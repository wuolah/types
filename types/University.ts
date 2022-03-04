import { z } from "zod";

export const UniversitySchema = z.object({
  id: z.number().nonnegative(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().optional(),
  logoUrl: z.string().optional(),
});

export type UniversityType = z.infer<typeof UniversitySchema>;
