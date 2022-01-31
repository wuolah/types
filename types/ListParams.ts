import { z } from "zod";
import { PaginationSchema } from "..";
import { FilterSchema } from "./Filter";
import { PopulateSchema } from "./Populate";
import { SortSchema } from "./Sort";

export const ListParamsSchema = z.object({
  pagination: PaginationSchema,
  sort: SortSchema,
  filter: FilterSchema,
  populate: PopulateSchema,
});

export type ListParamsType = z.infer<typeof ListParamsSchema>;
