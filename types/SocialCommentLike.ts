import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { SocialCommentSchema } from "./SocialComment";

export const LIKE_TYPE = {
  LIKE: "like",
  DISLIKE: "dislike",
} as const;

export const LikeTypeEnum = z.nativeEnum(LIKE_TYPE);
export type LikeType = z.infer<typeof LikeTypeEnum>;

export const SocialCommentLikeSchema = z.object({
  id: z.number().positive(),
  created: z.string(),

  type: LikeTypeEnum,

  userId: z.number().positive(),
  commentId: z.number().positive(),
  // virtuals
  user: ProfileSchema.optional(),
  comment: SocialCommentSchema.optional(),
});

export type SocialCommentLikeType = z.infer<typeof SocialCommentLikeSchema>;
