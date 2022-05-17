import { z } from "zod";
import { stringToBoolean } from "./utils";

export const ProfileSchema = z.object({
  id: z.number().positive(),
  nickname: z.string().nullable(),
  popularity: z.number().nonnegative().default(0),
  money: z.number().nonnegative().default(0).nullable(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
});

export type ProfileType = z.infer<typeof ProfileSchema>;
