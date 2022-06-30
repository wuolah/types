import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { SocialSchema } from "./Social";
import { stringToBoolean } from "./utils";

export const SocialCommentSchema = z.object({
  id: z.number().positive(),
  socialId: z.number().positive(),
  userId: z.number().positive(),
  text: z.string(),
  photoDirectory: z.string(),
  created: z.string(),
  updated: z.string(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),

  user: ProfileSchema.optional(),
  social: SocialSchema.optional(),
});

export type SocialCommentType = z.infer<typeof SocialCommentSchema>;
