import { z } from "zod";

export const GiveawayStatus = {
  IN_PROGRESS: "IN_PROGRESS",
  CREATED: "CREATED",
  FINISHED: "FINISHED",
} as const;

export const GiveawayStatusSchema = z.nativeEnum(GiveawayStatus);

export type GiveawayStatusType = z.infer<typeof GiveawayStatusSchema>;

export const GiveawayRequirementSchema = z.object({
  countryIds: z.array(z.number()).optional(),
  communityIds: z.array(z.number()).optional(),
});

export type GiveawayRequirementType = z.infer<typeof GiveawayRequirementSchema>;

export const GiveawaySchema = z.object({
  id: z.number().nonnegative(),
  participants: z.number().nonnegative(),
  title: z.string(),
  subtitle: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  winner: z.number().optional().nullable(),
  createdAt: z.string(),
  startAt: z.string(),
  status: GiveawayStatusSchema,
  requirements: GiveawayRequirementSchema.optional(),
});

export type GiveawayType = z.infer<typeof GiveawaySchema>;
