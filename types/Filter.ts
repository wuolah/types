import { z } from "zod";
import { DocumentCategorySchema } from "./Document";

/**
 * TODO - ESTO ES UN EJEMPLO
 * Filter es complejo de definir de manera permanente, ya que
 * puede variar en función del contexto. Se definen algunas propiedades
 * para testear el funcionamiento.
 */

const stringToNumber = (defaultValue: number | null) => (val: unknown) =>
  parseInt(String(val), 10) || defaultValue;
const stringToBoolean = (defaultValue: boolean) => (val: unknown) =>
  val != undefined ? val === "true" : defaultValue;
const stringToVerified = (defaultValue: number | null) => (val: unknown) =>
  val != undefined ? val === "true" ? 1 : val === "false" ? 0 : defaultValue : defaultValue;

export const FilterSchema = z
  .object({
    userId: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
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
    category: DocumentCategorySchema.optional(),

    verified: z
      .preprocess(stringToVerified(null), z.number().nullable())
      .optional(),
  })
  .optional();

export type FilterType = z.infer<typeof FilterSchema>;
