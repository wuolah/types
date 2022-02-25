import { z } from "zod";
import { ProfileSchema } from "./ProfileType";


export const BookmarkUserSchema = z.object({
  id: z.number().nonnegative(),
  userId: z.number().nonnegative(),
  profileId: z.number().nonnegative(),

  user: ProfileSchema.optional(),
  profile: ProfileSchema.optional(),
})

export type BookmarkUserType = z.infer<typeof BookmarkUserSchema>;
