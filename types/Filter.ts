import { z } from "zod";
import { FileCategorySchema } from "./File";

/**
 * TODO - ESTO ES UN EJEMPLO
 * Filter es complejo de definir de manera permanente, ya que
 * puede variar en función del contexto. Se definen algunas propiedades
 * para testear el funcionamiento.
 */

const stringToNumber = (defaultValue: number) => (val: unknown) =>
  parseInt(String(val), 10) || defaultValue;
const stringToBoolean = (defaultValue: boolean) => (val: unknown) =>
  val != undefined ? val === "true" : defaultValue;

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
    course: z
      .preprocess(stringToNumber(null), z.number().positive())
      .optional(),
    category: FileCategorySchema.optional(),

    verified: z
      .preprocess(stringToBoolean(false), z.boolean().default(false))
      .optional(),
  })
  .optional();

export type FilterType = z.infer<typeof FilterSchema>;
