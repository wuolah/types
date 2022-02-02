import { z } from "zod";

export const UserSchema = z.object({
  id: z.number().positive(),
  nickname: z.string(),
});

export type UserType = z.infer<typeof UserSchema>;
