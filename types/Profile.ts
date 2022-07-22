import { z } from "zod";
import { dateToString, stringToBoolean } from "./utils";

export const ProfileSchema = z.object({
  id: z.number().positive(),
  createdAt: z.preprocess(dateToString(null), z.string()),
  updatedAt: z.preprocess(dateToString(null), z.string().optional()),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),

  nickname: z.string().nullable(),
  popularity: z.number().nonnegative().default(0),
});

export type ProfileType = z.infer<typeof ProfileSchema>;
