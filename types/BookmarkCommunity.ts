import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { CommunitySchema } from "./Community";
import { BookmarkSubjectSchema } from "./BookmarkSubject";
import { dateToString, stringToBoolean } from "./utils";

export const BookmarkCommunitySchema = z.object({
  userId: z.number().positive(),
  communityId: z.number().positive(),
  default: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  role: z.number().positive().default(1),
  createdAt: z.preprocess(dateToString(null), z.string()),
  updatedAt: z.preprocess(dateToString(null), z.string()),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),

  user: ProfileSchema.optional(),
  community: CommunitySchema.optional(),
  bookmarkedSubjects: z.array(BookmarkSubjectSchema).optional(),
});

export type BookmarkCommunityType = z.infer<typeof BookmarkCommunitySchema>;
