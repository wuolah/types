import { z } from "zod";
import { ProfileSchema } from "./ProfileType";
import { CommunitySchema } from "./Community";

export const BookmarkCommunitySchema = z.object({
  userId: z.number().positive(),
  communityId: z.number().positive(),
  default: z.boolean().default(false),
  role: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),

  community: CommunitySchema.optional(),
  user: ProfileSchema.optional(),
});

export type BookmarkCommunityType = z.infer<typeof BookmarkCommunitySchema>;
