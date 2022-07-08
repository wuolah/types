import { z } from "zod";
import { SocialCommentSchema } from "./SocialComment";
import { UserSchema } from "./User";

export const TYPE = {
  LIKE: "like",
  DISLIKE: "dislike",
} as const;

export const LikeTypeEnum = z.nativeEnum(TYPE);

export const SocialCommentLikeSchema = z.object({
  id: z.number().positive(),
  created: z.string(),

  type: LikeTypeEnum,

  userId: z.number().positive(),
  commentId: z.number().positive(),
  // virtuals
  user: UserSchema.optional(),
  comment: SocialCommentSchema.optional(),
});

export type SocialCommentLikeType = z.infer<typeof SocialCommentLikeSchema>;
