import { z } from "zod";
import { SubjectType } from "./Subject";
import { ProfileType } from "./ProfileType";

export const BookmarkSubjectStatus = {
  IN_PROGRESS: "IN_PROGRESS",
  PASSED: "PASSED",
} as const;

export const BookmarkSubjectStatusSchema = z.nativeEnum(BookmarkSubjectStatus);

export type BookmarkSubjectStatusType = z.infer<
  typeof BookmarkSubjectStatusSchema
>;

export type BookmarkSubjectType = {
  id: number;
  status: BookmarkSubjectStatusType;
  createdAt: string;
  userId: number;
  subjectId: number;

  user?: ProfileType;
  subject?: SubjectType;
};
