import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { CommunitySubjectSchema } from "./CommunitySubject";

export const BookmarkSubjectStatus = {
  IN_PROGRESS: "IN_PROGRESS",
  PASSED: "PASSED",
} as const;

export const BookmarkSubjectStatusSchema = z.nativeEnum(BookmarkSubjectStatus);

export type BookmarkSubjectStatusType = z.infer<
  typeof BookmarkSubjectStatusSchema
>;

export const BookmarkSubjectSchema = z.object({
  id: z.number().positive(),
  userId: z.number().positive(),
  communityId: z.number().positive(),
  communitySubjectId: z.number().nonnegative(),
  status: BookmarkSubjectStatusSchema,
  createdAt: z.string(),
  active: z.boolean(),
  
  user: ProfileSchema.optional(),
  communitySubject: CommunitySubjectSchema.optional(),
});

export type BookmarkSubjectType = z.infer<typeof BookmarkSubjectSchema>;
