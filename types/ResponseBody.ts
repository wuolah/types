import { z } from "zod";
import { MetaPaginationSchema } from "./MetaPagination";

const MetaSchema = z.object({
  pagination: MetaPaginationSchema,
})

export const PaginationResponseSchema = z.object({
  data: z.array(z.any()),
  meta: MetaSchema,
})
export type PaginationResponseType = z.infer<typeof PaginationResponseSchema>;
