import { z } from "zod";
import { BookmarkSubjectStatusSchema } from "./BookmarkSubject";
import { DocumentCategorySchema } from "./Document";

/**
 * TODO - ESTO ES UN EJEMPLO
 * Filter es complejo de definir de manera permanente, ya que
 * puede variar en función del contexto. Se definen algunas propiedades
 * para testear el funcionamiento.
 */

const stringToNumber = (defaultValue: number | null) => (val: unknown) =>
  parseInt(String(val), 10) || defaultValue;
const stringToBoolean = (defaultValue: boolean | null) => (val: unknown) =>
  val != undefined
    ? String(val) === "true"
      ? true
      : String(val) === "false"
      ? false
      : defaultValue
    : defaultValue;

export const FilterSchema = z
  .object({
    text: z.string().optional(),
    userId: z.union([
      z.array(
        z.preprocess(stringToNumber(null), z.number().positive())
      ),
      z.preprocess(stringToNumber(null), z.number().positive())
      ]).optional()
    ,
    universityId: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
    centerId: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
    studyId: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
    cityId: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
    countryId: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
    communityId: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
    course: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
    subjectId: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
    profileId: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
    category: z.union([
      z.array(DocumentCategorySchema),
      DocumentCategorySchema.optional()
      ]).optional(),

    status: BookmarkSubjectStatusSchema.optional(),
    username: z.union([
      z.array(z.string()),
      z.string()
    ]).optional(),

    verified: z
      .preprocess(stringToBoolean(null), z.boolean().nullable())
      .optional(),
    visible: z
      .preprocess(stringToBoolean(null), z.boolean().nullable())
      .optional(),
  })
  .optional();

export type FilterType = z.infer<typeof FilterSchema>;
