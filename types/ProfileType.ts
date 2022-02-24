import { z } from "zod";

export const ProfileSchema = z.object({
  id: z.number().positive(),
  nickname: z.string(),
  popularity: z.number().nonnegative().default(0),
  money: z.number().nonnegative().default(0),
  createdAt: z.string(),
});

export type ProfileType = z.infer<typeof ProfileSchema>;
