import { z } from "zod";
import { ProfileSchema } from "./ProfileType";
import { SubjectSchema } from "./Subject";

export const BookmarkSubjectStatus = {
  IN_PROGRESS: "IN_PROGRESS",
  PASSED: "PASSED",
} as const;

export const BookmarkSubjectStatusSchema = z.nativeEnum(BookmarkSubjectStatus);

export type BookmarkSubjectStatusType = z.infer<
  typeof BookmarkSubjectStatusSchema
>;

export const BookmarkSubjectSchema = z.object({
  id: z.number().nonnegative(),
  userId: z.number().nonnegative(),
  subjectId: z.number().nonnegative(),
  status: BookmarkSubjectStatusSchema,
  createdAt: z.string(),
  user: ProfileSchema.optional(),
  subject: SubjectSchema.optional(),
})

export type BookmarkSubjectType = z.infer<typeof BookmarkSubjectSchema>;
