import { z } from "zod";

export const CenterSchema = z.object({
  id: z.number().nonnegative(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().nullable().optional(),
  logoUrl: z.string().nullable().optional(),
  /**
   * @deprecated This field is deprecated and will be removed in the future.
   */
  DEPR_link: z.string().nullable().optional(),
});

export type CenterType = z.infer<typeof CenterSchema>;
