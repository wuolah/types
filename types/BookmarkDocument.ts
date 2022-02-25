import { z } from "zod";
import { DocumentSchema } from "./Document";
import { ProfileSchema } from "./ProfileType";

export const BookmarkDocumentSchema = z.object({
  id: z.number().nonnegative(),
  userId: z.number().nonnegative(),
  documentId: z.number().nonnegative(),
  createdAt: z.string(),

  user: ProfileSchema.optional(),
  document: DocumentSchema.optional(),
})

export type BookmarkDocumentType = z.infer<typeof BookmarkDocumentSchema>;
