import { z } from "zod";
import { UniversitySchema } from "./University";

export const CenterSchema = z.object({
  id: z.number().nonnegative(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().nullable().optional(),
  universityId: z.number().nonnegative(),
  logoUrl: z.string().nullable().optional(),

  // virtuals
  university: UniversitySchema.optional(),
});

export type CenterType = z.infer<typeof CenterSchema>;
