import { z } from "zod";
import { CenterSchema } from "./Center";
import { StudySchema } from "./Study";
import { UniversitySchema } from "./University";

export const CommunitySchema = z.object({
  id: z.number().positive(),
  slug: z.string(),
  name: z.string(),
  shortName: z.string().optional(),
  logoUrl: z.string().optional(),
  backgroundUrl: z.string().optional(),
  metadata: z.array(z.object({
    type: z.string(),
    value: z.union([z.string(), z.number().nonnegative()]),
    object: z.union([UniversitySchema, CenterSchema, StudySchema]).optional(),
  })),
  numUsers: z.number().nonnegative().default(0),
  createdAt: z.string(),
  updatedAt: z.string(),
  templateId: z.number().nonnegative(),
  // admins?: User[];
  // collaborators?: User[];
});

export type CommunityType = z.infer<typeof CommunitySchema>;
