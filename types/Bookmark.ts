import { SubjectType } from "./Subject";
import { DocumentType } from "./Document";
import { ProfileType } from "./ProfileType";
import { UserType } from "./UserType";


export type BookmarkType = {
  id: number;
  userId: number;
  user?: UserType;
};

export enum BookmarkSubjectStatus {
  IN_PROGRESS = "IN_PROGRESS",
  PASSED = "PASSED",
}

export type BookmarkSubjectType = BookmarkType & {
  status: BookmarkSubjectStatus;
  subjectId: number;
  subject?: SubjectType;
};

export type BookmarkDocumentType = BookmarkType & {
  documentId: number;
  document?: DocumentType;
};

export type BookmarkUserType = BookmarkType & {
  profileId: number;
  profile?: ProfileType;
};
