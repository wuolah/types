import { z } from "zod";
import { CommunitySchema } from "./Community";
import { SubjectSchema } from "./Subject";

export const CommunitySubjectSchema = z.object({
  id: z.number().positive(),
  communityId: z.number().positive(),
  subjectId: z.number().positive(),
  course: z.number().positive(),
  numFiles: z.number().nonnegative().default(0),
  verified: z.boolean().default(true),
  enabled: z.boolean().default(true),
  createdAt: z.number(),
  updatedAt: z.number(),

  community: CommunitySchema.optional(),
  subject: SubjectSchema.optional(),
});

export type CommunitySubjectType = z.infer<typeof CommunitySubjectSchema>;
