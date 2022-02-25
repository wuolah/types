import { z } from "zod";
import { CenterSchema } from "./Center";
import { StudySchema } from "./Study";
import { UniversitySchema } from "./University";

export const CommunitySchema = z.object({
  id: z.number().positive(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().optional(),
  logo: z.string().optional(),
  universityId: z.number().nonnegative(),
  centerId: z.number().nonnegative(),
  studyId: z.number().nonnegative(),
  numUsers: z.number().nonnegative().default(0),
  createdAt: z.string(),
  updatedAt: z.string(),

  university: UniversitySchema.optional(),
  center: CenterSchema.optional(),
  study: StudySchema.optional(),

  // admins?: User[];
  // collaborators?: User[];
});

export type CommunityType = z.infer<typeof CommunitySchema>;
