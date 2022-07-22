import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { SocialSchema } from "./Social";
import { dateToString } from "./utils";

export const SocialCommentSchema = z.object({
  id: z.number().positive(),
  createdAt: z.preprocess(dateToString(null), z.string()),
  updatedAt: z.preprocess(dateToString(null), z.string()),

  text: z.string(),
  photoDirectory: z.string().optional().nullable(),

  userId: z.number().positive(),
  socialId: z.number().positive(),

  numLikes: z.number().positive().optional(),
  user: ProfileSchema.optional(),
  social: SocialSchema.optional(),
});

export type SocialCommentType = z.infer<typeof SocialCommentSchema>;
