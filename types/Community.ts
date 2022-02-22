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
  universityId: z.number(),
  centerId: z.number(),
  studyId: z.number(),
  numUsers: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),

  university: UniversitySchema.optional(),
  center: CenterSchema.optional(),
  study: StudySchema.optional(),

  // admins?: User[];
  // collaborators?: User[];
});

export type CommunityType = z.infer<typeof CommunitySchema>;
