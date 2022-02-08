import { z } from "zod";
import { CommunitySchema } from "..";

export const ProfileCommunitySchema = z.object({
  userId: z.number().positive(),
  communityId: z.number().positive(),
  default: z.boolean().default(false),
  role: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),

  community: CommunitySchema.optional(),
});

export type ProfileCommunityType = z.infer<typeof ProfileCommunitySchema>;

export const ProfileSchema = z.object({
  id: z.number().positive(),
  nickname: z.string(),
  popularity: z.number().nonnegative().default(0),
  money: z.number().nonnegative().default(0),
});

export type ProfileType = z.infer<typeof ProfileSchema>;
