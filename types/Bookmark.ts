export interface BookmarkType {
  id: number,
  userId: number,
  followedId: number,
}

export enum BookmarkSubjectStatus {
  IN_PROGRESS = "IN_PROGRESS",
  PASSED = "PASSED"
}

export type BookmarkSubjectType = BookmarkType & {
  status: BookmarkSubjectStatus;
}
