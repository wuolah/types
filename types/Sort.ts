import { z } from "zod";

export const SortSchema = z.union([z.string(), z.array(z.string())]).optional();

export type SortType = z.infer<typeof SortSchema>;
