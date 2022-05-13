import { z } from "zod";
import { ProfileSchema } from "./Profile";

export const RankingCategory = {
  DOWNLOADS: "downloads",
  POPULARITY: "popularity",
  LIKES: "likes",
} as const;

export const RankingCategorySchema = z.nativeEnum(RankingCategory);
export type RankingCategoryType = z.infer<typeof RankingCategorySchema>;

export const RankingSchema = z.object({
  id: z.number().positive(),
  value: z.number(),

  user: ProfileSchema.optional(),
});

export type RankingType = z.infer<typeof RankingSchema>;
