import { z } from "zod";
import { MetaPaginationSchema } from "./MetaPagination";

export const SearchResponseSchema = z.object({
  items: z.array(z.any()),
  metaPagination: MetaPaginationSchema,
})

export type SearchReponseType = z.infer<typeof SearchResponseSchema>;