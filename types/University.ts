import { z } from "zod";

export const UniversitySchema = z.object({
  id: z.number().positive(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().optional(),
  logo: z.string().optional(),
});

export type UniversityType = z.infer<typeof UniversitySchema>;
