import { z } from "zod";
import { UniversitySchema } from "./University";

export const CenterSchema = z.object({
  id: z.number().nonnegative(),
  slug: z.string().optional().nullable(),
  name: z.string(),
  shortName: z.string().nullable().optional(),
  universityId: z.number().nonnegative().optional(),
  logoUrl: z.string().nullable().optional(),
  zip: z.number().nonnegative().optional(),

  // virtuals
  university: UniversitySchema.optional(),
});

export type CenterType = z.infer<typeof CenterSchema>;
