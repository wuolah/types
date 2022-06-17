import { z } from "zod";
import { CenterSchema } from "./Center";
import { CommunitySchema } from "./Community";
import { ProfileSchema } from "./Profile";
import { StudySchema } from "./Study";
import { SubjectSchema } from "./Subject";
import { stringToBoolean } from "./utils";

export const SocialEnum = {
  DOUBT: "DOUBT",
  EVENT: "EVENT",
  PUBLICATION: "PUBLICATION",
  RUMOR: "RUMOR",
  UPLOAD: "UPLOAD",
  GIVEAWAY: "GIVEAWAY",
} as const;

export const SocialEnumSchema = z.nativeEnum(SocialEnum);

export type SocialEnumType = z.infer<typeof SocialEnumSchema>;

export const SocialSchema = z.object({
  id: z.number().nonnegative(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),

  type: SocialEnumSchema,
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  uploadId: z.number().nonnegative().optional().nullable(),
  photoDirectory: z.string().optional().nullable(),
  site: z.string().optional().nullable(),
  dateTime: z.string().optional().nullable(),
  data: z.string().optional().nullable(),

  numLikes: z.number().nonnegative().optional().nullable(),
  numDislikes: z.number().nonnegative().optional().nullable(),
  numComments: z.number().nonnegative().optional().nullable(),

  userId: z.number().nonnegative(),
  communityId: z.number().nonnegative(),
  subjectId: z.number().nonnegative(),
  centerId: z.number().nonnegative(),
  studyId: z.number().nonnegative(),
  // virtuals
  user: ProfileSchema.optional(),
  center: CenterSchema.optional(),
  study: StudySchema.optional(),
  subject: SubjectSchema.optional(),
  community: CommunitySchema.optional(),
});

export type SocialType = z.infer<typeof SocialSchema>;
