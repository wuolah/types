import { DocumentType } from "./Document";
import { UserType } from "./UserType";

export type BookmarkDocumentType = {
  id: number;
  userId: number;
  user?: UserType;
  documentId: number;
  document?: DocumentType;
  createdAt: Date;
};