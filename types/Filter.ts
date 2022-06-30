import { z } from "zod";
import { ArtifactTypeSchema } from "./Artifact";
import { BookmarkSubjectStatusSchema } from "./BookmarkSubject";
import { DocumentCategorySchema } from "./Document";
import { RankingCategorySchema } from "./Ranking";
import { stringToBoolean, stringToNumber } from "./utils";

/**
 * TODO - ESTO ES UN EJEMPLO
 * Filter es complejo de definir de manera permanente, ya que
 * puede variar en función del contexto. Se definen algunas propiedades
 * para testear el funcionamiento.
 */

export const FilterSchema = z
  .object({
    search: z.string().optional(),
    userId: z
      .union([
        z.array(z.preprocess(stringToNumber(null), z.number().positive())),
        z.preprocess(stringToNumber(null), z.number().positive()),
      ])
      .optional(),
    universityId: z
      .preprocess(stringToNumber(null), z.number().nonnegative())
      .optional(),
    centerId: z
      .preprocess(stringToNumber(null), z.number().nonnegative())
      .optional(),
    studyId: z
      .preprocess(stringToNumber(null), z.number().nonnegative())
      .optional(),
    cityId: z
      .preprocess(stringToNumber(null), z.number().nonnegative())
      .optional(),
    countryId: z
      .preprocess(stringToNumber(null), z.number().nonnegative())
      .optional(),
    uploadId: z
      .preprocess(stringToNumber(null), z.number().nonnegative())
      .optional(),
    communityId: z
      .preprocess(stringToNumber(null), z.number().nonnegative())
      .optional(),
    communitySlug: z.string().optional(),
    course: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
    subjectId: z
      .preprocess(stringToNumber(null), z.number().nonnegative())
      .optional(),
    subjectSlug: z.string().optional(),
    profileId: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
    category: z
      .union([
        z.array(DocumentCategorySchema),
        DocumentCategorySchema.optional(),
      ])
      .optional(),
    teacher: z.string().optional(),
    type: z.string().optional(),

    status: BookmarkSubjectStatusSchema.optional(),
    username: z.union([z.array(z.string()), z.string()]).optional(),

    verified: z
      .preprocess(stringToBoolean(null), z.boolean().nullable())
      .optional(),
    enabled: z
      .preprocess(stringToBoolean(null), z.boolean().nullable())
      .optional(),
    active: z
      .preprocess(stringToBoolean(null), z.boolean().nullable())
      .optional(),
    visible: z
      .preprocess(stringToBoolean(null), z.boolean().nullable())
      .optional(),
    default: z
      .preprocess(stringToBoolean(null), z.boolean().nullable())
      .optional(),
    criteria: RankingCategorySchema.optional(),
    finished: z
      .preprocess(stringToBoolean(null), z.boolean().nullable())
      .optional(),

    type: z
      .union([z.array(ArtifactTypeSchema), ArtifactTypeSchema.optional()])
      .optional(),
  })
  .optional();

export type FilterType = z.infer<typeof FilterSchema>;
