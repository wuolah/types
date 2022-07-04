import { z } from "zod";
import { SocialCommentSchema } from "./SocialComment";
import { UserSchema } from "./User";

export const SocialCommentLikeSchema = z.object({
  id: z.number().positive(),
  commentId: z.number().positive(),
  userId: z.number().positive(),
  value: z.number(),
  created: z.string(),

  // virtuals
  user: UserSchema.optional(),
  comment: SocialCommentSchema.optional(),
});

export type SocialCommentLikeType = z.infer<typeof SocialCommentLikeSchema>;
