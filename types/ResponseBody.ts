import { z } from "zod";
import { MetaFilterSchema } from "./MetaFilter";
import { MetaPaginationSchema } from "./MetaPagination";

const MetaSchema = z.object({
  pagination: MetaPaginationSchema,
  filter: MetaFilterSchema.optional(),
});

export const PaginationResponseSchema = z.object({
  data: z.array(z.any()),
  meta: MetaSchema,
})
export type PaginationResponseType = z.infer<typeof PaginationResponseSchema>;
