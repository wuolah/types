import { z } from "zod";
import { ProfileSchema } from "./Profile";

export const RankingSchema = z.object({
  userId: z.number().positive(),
  value: z.number(),

  user: ProfileSchema.optional(),
});

export type RankingType = z.infer<typeof RankingSchema>;
