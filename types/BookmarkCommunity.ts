import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { CommunitySchema } from "./Community";
import { BookmarkSubjectSchema } from "./BookmarkSubject";
import { stringToBoolean } from "./utils";

export const BookmarkCommunitySchema = z.object({
  userId: z.number().positive(),
  communityId: z.number().positive(),
  default: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  role: z.number().positive().default(1),
  createdAt: z.string(),
  updatedAt: z.string(),

  user: ProfileSchema.optional(),
  community: CommunitySchema.optional(),
  bookmarkedSubjects: z.array(BookmarkSubjectSchema).optional(),
});

export type BookmarkCommunityType = z.infer<typeof BookmarkCommunitySchema>;
