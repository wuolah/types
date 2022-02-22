import { z } from "zod";

export const CenterSchema = z.object({
  id: z.number().positive(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().optional(),
  logo: z.string().optional(),
});

export type CenterType = z.infer<typeof CenterSchema>;
