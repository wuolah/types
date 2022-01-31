import { z } from "zod";

export const PopulateSchema = z
  .union([z.string(), z.array(z.string())])
  .optional();

export type PopulateType = z.infer<typeof PopulateSchema>;
