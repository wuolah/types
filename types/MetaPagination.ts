import { z } from "zod";

const stringToNumber = (defaultValue: number) => (val: unknown) =>
  parseInt(String(val), 10) || defaultValue;
const stringToBoolean = (defaultValue: boolean) => (val: unknown) =>
  val != undefined ? val === "true" : defaultValue;

export const MetaPaginationSchema = z.object({
  page: z.preprocess(stringToNumber(0), z.number().nonnegative().default(0)),
  pageSize: z.preprocess(stringToNumber(10), z.number().positive().default(10)),
  pageCount: z
    .preprocess(stringToNumber(10), z.number().positive().default(10))
    .optional(),
  total: z
    .preprocess(stringToNumber(0), z.number().positive().default(0))
    .optional(),
});

export type MetaPaginationType = z.infer<typeof MetaPaginationSchema>;
