import { z } from "zod";

const stringToNumber = (defaultValue: number) => (val: unknown) =>
  parseInt(String(val), 10) || defaultValue;
const stringToBoolean = (defaultValue: boolean) => (val: unknown) =>
  val != undefined ? val === "true" : defaultValue;

export const PaginationSchema = z
  .object({
    page: z.preprocess(stringToNumber(0), z.number().nonnegative().default(0)),
    pageSize: z.preprocess(
      stringToNumber(10),
      z.number().positive().default(10)
    ),
    withCount: z
      .preprocess(stringToBoolean(false), z.boolean().default(false))
      .optional(),
  })
  .optional();

export type PaginationType = z.infer<typeof PaginationSchema>;
