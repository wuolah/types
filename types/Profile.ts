import { z } from "zod";
import { BookmarkCommunitySchema } from "./BookmarkCommunity";

export const ProfileSchema = z.object({
  id: z.number().positive(),
  nickname: z.string(),
  popularity: z.number().nonnegative().default(0),
  money: z.number().nonnegative().default(0),
  createdAt: z.string(),
  deleted: z.boolean().default(false),

  bookmarkedCommunities: z.array(BookmarkCommunitySchema).optional(),
});

export type ProfileType = z.infer<typeof ProfileSchema>;
