import { SubjectType } from "./Subject";
import { UserType } from "./UserType";
import { z } from "zod";

export enum BookmarkSubjectStatus {
  IN_PROGRESS = "IN_PROGRESS",
  PASSED = "PASSED",
}

export const BookmarkSubjectStatusSchema = z.nativeEnum(BookmarkSubjectStatus);

export type BookmarkSubjectType = {
  id: number;
  userId: number;
  user?: UserType;
  status: BookmarkSubjectStatus;
  subjectId: number;
  subject?: SubjectType;
  createdAt: Date;
};
