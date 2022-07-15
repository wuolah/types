import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { dateToString } from "./utils";

export const BookmarkUserSchema = z.object({
  id: z.number().nonnegative(),
  userId: z.number().nonnegative(),
  profileId: z.number().nonnegative(),
  createdAt: z.preprocess(dateToString(null), z.string()),

  user: ProfileSchema.optional(),
  profile: ProfileSchema.optional(),
});

export type BookmarkUserType = z.infer<typeof BookmarkUserSchema>;
