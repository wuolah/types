import { z } from "zod";
import { ProfileSchema } from "./Profile";

export const UserRole = {
  USER: 1,
  ADMIN: 2,
} as const;
export const UserRoleSchema = z.nativeEnum(UserRole);
export type UserRoleType = z.infer<typeof UserRoleSchema>;

export const UserSchema = ProfileSchema.extend({
  role: UserRoleSchema,
  email: z.string(),
  password: z.string().optional(),
  coins: z.number().nonnegative().optional(),
  captchaCounter: z.number().nonnegative().default(0),
});

export type UserType = z.infer<typeof UserSchema>;
