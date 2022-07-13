import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { SocialSchema } from "./Social";

export const SocialCommentSchema = z.object({
  id: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),

  text: z.string(),
  photoDirectory: z.string().optional().nullable(),

  userId: z.number().positive(),
  socialId: z.number().positive(),

  numLikes: z.number().positive().optional(),
  user: ProfileSchema.optional(),
  social: SocialSchema.optional(),
});

export type SocialCommentType = z.infer<typeof SocialCommentSchema>;
