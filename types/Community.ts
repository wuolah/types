import { z } from "zod";
import { CenterSchema } from "./Center";
import { ProfileSchema } from "./Profile";
import { StudySchema } from "./Study";

export const CommunityStatus = {
  DEFAULT: "DEFAULT",
  TO_CREATE: "TO_CREATE",
  TO_REVIEW: "TO_REVIEW",
  COMPLETED: "COMPLETED",
} as const;
export const CommunityStatusSchema = z.nativeEnum(CommunityStatus);
export type CommunityStatusType = z.infer<typeof CommunityStatusSchema>;

export const CommunitySchema = z.object({
  id: z.number().positive(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().optional(),
  logoUrl: z.string().optional(),
  backgroundUrl: z.string().optional(),
  centerId: z.number().nonnegative(),
  studyId: z.number().nonnegative(),
  numUsers: z.number().nonnegative().default(0),
  createdAt: z.string(),
  updatedAt: z.string(),
  type: z.number().optional(),
  courses: z.number().nonnegative().optional(),
  enabled: z.number().optional(), //Union Boolean
  createdBy: z.number().nonnegative().optional(),
  blocked: z.number().optional(), //Union Boolean
  blockedBy: z.number().nonnegative().optional(),
  status: CommunityStatusSchema.optional(),
  completedDate: z.date().optional(),
  studyPlan: z.string().optional(),
  collaboratorIds: z.array(z.number()).optional(),
  completedCheckAdminId: z.number().nonnegative().optional(),
  processId: z.number().nonnegative().optional(),
  informantId: z.number().nonnegative().optional(),
  verified: z.number().optional(), //Union Boolean
  deleted: z.number().optional(), //Union Boolean
  deletedAt: z.date().optional(),

  center: CenterSchema.optional(),
  study: StudySchema.optional(),
  informant: ProfileSchema.optional(),
  collaborators: z.array(ProfileSchema).optional(),
  admin: ProfileSchema.optional(),
  // admins?: User[];
  // collaborators?: User[];
});

export type CommunityType = z.infer<typeof CommunitySchema>;
