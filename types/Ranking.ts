import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { stringToNumber } from "./utils";

export const RankingCategory = {
  DOWNLOADS: "downloads",
  POPULARITY: "popularity",
  LIKES: "likes",
} as const;

export const RankingCategorySchema = z.nativeEnum(RankingCategory);
export type RankingCategoryType = z.infer<typeof RankingCategorySchema>;

export const RankingSchema = z.object({
  id: z.number().positive(),
  value: z.preprocess(stringToNumber(0), z.number().optional()),

  user: ProfileSchema.optional(),
});

export type RankingType = z.infer<typeof RankingSchema>;
