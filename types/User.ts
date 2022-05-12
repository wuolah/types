import { z } from "zod";
import { ProfileSchema } from "./Profile";

export const UserRole = {
  USER: 1,
  ADMIN: 2,
  COLLABORATOR: 3,
} as const;
export const UserRoleSchema = z.nativeEnum(UserRole);
export type UserRoleType = z.infer<typeof UserRoleSchema>;

export const UserSchema = ProfileSchema.extend({
  role: UserRoleSchema,
  email: z.string(),
  password: z.string().optional(),
  coins: z.number().nonnegative().optional(),
  captchaCounter: z.number().nonnegative().default(0),
  lastConnection: z.string(),
  stripeId: z.string().optional(),
  countryId: z.number().nonnegative().optional(),
  gender: z.number().max(4).nonnegative().nullable().optional(),
  birthday: z.string().nullable().optional(),
  money: z.number().nonnegative().nullable().optional(),
  accumulated: z.number().nonnegative().nullable().optional(),
  displayMoney: z.boolean(),
});

export type UserType = z.infer<typeof UserSchema>;
