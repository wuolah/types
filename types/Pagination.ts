import { z } from "zod";
import { stringToBoolean, stringToNumber } from "./utils";

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
