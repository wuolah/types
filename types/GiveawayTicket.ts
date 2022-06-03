import { z } from "zod";
import { stringToBoolean } from "./utils";

export const GiveawayTicketSchema = z.object({
  id: z.number().nonnegative(),
  userId: z.number().nonnegative(),
  giveawayId: z.number().nonnegative().optional(),
  sourceId: z.number().nonnegative().optional(),
  sourceType: z.string(),
  used: z.string().optional(),
  number: z.number().nonnegative().optional(),
  createdAt: z.string().optional(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
});

export type GiveawayTicketType = z.infer<typeof GiveawayTicketSchema>;
