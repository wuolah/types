import { z } from "zod";
import { stringToBoolean } from "./utils";

export const GiveawayTicketSchema = z.object({
  id: z.number().nonnegative(),
  userId: z.number().nonnegative(),
  giveawayId: z.number().nonnegative().optional().nullable(),
  sourceId: z.number().nonnegative().optional().nullable(),
  sourceType: z.string(),
  used: z.string().optional().nullable(),
  number: z.number().nonnegative().optional().nullable(),
  createdAt: z.string().optional(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
});

export type GiveawayTicketType = z.infer<typeof GiveawayTicketSchema>;
