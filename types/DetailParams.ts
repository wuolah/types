import { z } from "zod";
import { PopulateSchema } from "./Populate";

export const DetailParamsSchema = z.object({
  populate: PopulateSchema,
});

export type DetailParamsType = z.infer<typeof DetailParamsSchema>;
