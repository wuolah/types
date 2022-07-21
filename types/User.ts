import { z } from "zod";
import { ProfileSchema } from "./Profile";
import { dateToString, stringToBoolean, stringToFloat, stringToNumber } from "./utils";

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
  lastConnection: z.preprocess(dateToString(null), z.string()),
  stripeId: z.string().optional(),
  countryId: z.number().nonnegative().optional(),
  gender: z.number().max(4).nonnegative().nullable().optional(),
  birthday: z.preprocess(dateToString(null), z.string().nullable().optional()),
  money: z.preprocess(
    stringToFloat(0),
    z.number().nonnegative().nullable().optional()
  ),
  accumulated: z.preprocess(
    stringToFloat(0),
    z.number().nonnegative().nullable().optional()
  ),
  displayMoney: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  pro: z.preprocess(stringToBoolean(null), z.boolean().nullable()).optional(),
});

export type UserType = z.infer<typeof UserSchema>;
