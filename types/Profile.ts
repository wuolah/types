import { z } from "zod";
import { stringToBoolean } from "./utils";

export const ProfileSchema = z.object({
  id: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),

  nickname: z.string().nullable(),
  popularity: z.number().nonnegative().default(0),
});

export type ProfileType = z.infer<typeof ProfileSchema>;
