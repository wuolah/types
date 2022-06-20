import { z } from "zod";
import { CenterSchema } from "./Center";
import { StudySchema } from "./Study";
import { UserSchema } from "./User";
import { stringToBoolean } from "./utils";

export const UploadSchema = z.object({
  id: z.number().nonnegative(),
  userId: z.number().nonnegative(),
  centerId: z.number().nonnegative(),
  studyId: z.number().nonnegative(),
  course: z.string(),
  folderId: z.number().nonnegative(),
  directory: z.string().optional(),
  uploadIp: z.string().optional(),
  title: z.string(),
  titleLink: z.string(),
  category: z.string(),
  comments: z.string(),
  teacher: z.string().nullable().optional(),
  anonymous: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  monetizable: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  size: z.number().nonnegative(),
  likes: z.string().optional(),
  dislikes: z.string().optional(),
  isFolder: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  deletedReason: z.number().nonnegative().nullable().optional(),
  deletedUserMoney: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  deletedComments: z.string().nullable().optional(),
  deletedDate: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  updated: z.string().nullable().optional(),

  // Virtuals
  user: UserSchema.optional(),
  center: CenterSchema.optional(),
  study: StudySchema.optional(),
});

export type UploadType = z.infer<typeof UploadSchema>;
