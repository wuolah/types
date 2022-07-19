import { z } from "zod";
import { DocumentSchema } from "./Document";
import { ProfileSchema } from "./Profile";
import { dateToString } from "./utils";

export const BookmarkDocumentSchema = z.object({
  userId: z.number().nonnegative(),
  documentId: z.number().nonnegative(),
  createdAt: z.preprocess(dateToString(null), z.string()),

  user: ProfileSchema.optional(),
  document: DocumentSchema.optional(),
});

export type BookmarkDocumentType = z.infer<typeof BookmarkDocumentSchema>;
