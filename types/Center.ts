import { z } from "zod";

export const CenterSchema = z.object({
  id: z.number().nonnegative(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().optional(),
  logoUrl: z.string().optional(),
});

export type CenterType = z.infer<typeof CenterSchema>;
