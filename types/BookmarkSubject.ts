import { z } from "zod";
import { SubjectType } from "./Subject";
import { ProfileType } from "./ProfileType";

export enum BookmarkSubjectStatus {
  IN_PROGRESS = "IN_PROGRESS",
  PASSED = "PASSED",
}

export const BookmarkSubjectStatusSchema = z.nativeEnum(BookmarkSubjectStatus);

export type BookmarkSubjectType = {
  id: number;
  status: BookmarkSubjectStatus;
  createdAt: string;
  userId: number;
  subjectId: number;

  user?: ProfileType;
  subject?: SubjectType;
};
