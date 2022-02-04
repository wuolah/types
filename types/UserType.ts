import { z } from "zod";
import { ProfileSchema } from "./ProfileType";

export enum UserRole {
  USER = 1,
  ADMIN = 2,
}

export const UserRoleSchema = z.nativeEnum(UserRole);

export const UserSchema = ProfileSchema.extend({
  role: UserRoleSchema,
  email: z.string(),
  password: z.string(),
});

export type UserType = z.infer<typeof UserSchema>;
