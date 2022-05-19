import { z } from "zod";

export const UniversitySchema = z.object({
  id: z.number().nonnegative(),
  slug: z.string().optional().nullable(),
  name: z.string(),
  shortName: z.string().nullable().optional(),
  logoUrl: z.string().nullable().optional(),
});

export type UniversityType = z.infer<typeof UniversitySchema>;
