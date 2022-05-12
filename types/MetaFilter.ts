import { z } from "zod";

export const RankingCategory = {
  DOWNLOADS: "downloads",
  POPULARITY: "popularity",
} as const;

export const RankingCategorySchema = z.nativeEnum(RankingCategory);
export type RankingCategoryType = z.infer<typeof RankingCategorySchema>;

export const MetaFilterSchema = z.object({
  centerId: z.number().positive().optional(),
  studyId: z.number().positive().optional(),
  communityId: z.number().positive().optional(),
  subjectId: z.number().positive().optional(),
  course: z.number().positive().optional(),
  type: RankingCategorySchema,
});

export type MetaFilterType = z.infer<typeof MetaFilterSchema>;
