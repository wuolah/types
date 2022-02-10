import { SubjectType } from "./Subject";
import { UserType } from "./UserType";

export enum BookmarkSubjectStatus {
  IN_PROGRESS = "IN_PROGRESS",
  PASSED = "PASSED",
}

export type BookmarkSubjectType = {
  id: number;
  userId: number;
  user?: UserType;
  status: BookmarkSubjectStatus;
  subjectId: number;
  subject?: SubjectType;
};
