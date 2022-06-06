import { z } from "zod";

export const GiveawayStatus = {
  IN_PROGRESS: "IN_PROGRESS",
  CREATED: "CREATED",
  FINISHED: "FINISHED",
} as const;

const GiveawayStatusSchema = z.nativeEnum(GiveawayStatus);

export type GiveawayStatusType = z.infer<typeof GiveawayStatusSchema>;

export const GiveawayRequirementSchema = z.object({
  typeReq: z.string(),
  value: z.string(),
});

export type GiveawayRequirementType = z.infer<typeof GiveawayRequirementSchema>;

export const GiveawaySchema = z.object({
  id: z.number().nonnegative(),
  participants: z.number().nonnegative(),
  title: z.string(),
  subtitle: z.string().optional().nullable(),
  description: z.string(),
  image: z.string(),
  createdAt: z.string(),
  status: GiveawayStatusSchema,
  requeriments: z.array(GiveawayRequirementSchema).optional(),
});

export type GiveawayType = z.infer<typeof GiveawaySchema>;
