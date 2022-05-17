import { z } from "zod";
import { RankingCategorySchema } from "./Ranking";

export const MetaFilterSchema = z.object({
  centerId: z.number().positive().optional(),
  studyId: z.number().positive().optional(),
  communityId: z.number().positive().optional(),
  subjectId: z.number().positive().optional(),
  course: z.number().positive().optional(),
  type: RankingCategorySchema,
});

export type MetaFilterType = z.infer<typeof MetaFilterSchema>;
