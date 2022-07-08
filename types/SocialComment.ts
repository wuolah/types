import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { SocialSchema } from "./Social";
import { stringToBoolean } from "./utils";

export const SocialCommentSchema = z.object({
  id: z.number().positive(),
  created: z.string(),
  updated: z.string(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),

  text: z.string(),
  photoDirectory: z.string(),

  userId: z.number().positive(),
  socialId: z.number().positive(),

  user: ProfileSchema.optional(),
  social: SocialSchema.optional(),
});

export type SocialCommentType = z.infer<typeof SocialCommentSchema>;
