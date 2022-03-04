import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { CommunitySchema } from "./Community";
import { BookmarkSubjectSchema } from "./BookmarkSubject";

export const BookmarkCommunitySchema = z.object({
  id: z.number().positive(),
  userId: z.number().positive(),
  communityId: z.number().positive(),
  default: z.boolean().default(false),
  role: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),

  user: ProfileSchema.optional(),
  community: CommunitySchema.optional(),
  bookmarkedSubjects: z.array(BookmarkSubjectSchema).optional(),
});

export type BookmarkCommunityType = z.infer<typeof BookmarkCommunitySchema>;
