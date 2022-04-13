import { z } from "zod";
import { SubjectSchema } from "./Subject";
import { ProfileSchema } from "./Profile";

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
  subjectId: z.number().nonnegative(),
  status: BookmarkSubjectStatusSchema,
  createdAt: z.string(),

  user: ProfileSchema.optional(),
  subject: SubjectSchema.optional(),
});

export type BookmarkSubjectType = z.infer<typeof BookmarkSubjectSchema>;
