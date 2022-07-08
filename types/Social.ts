import { z } from "zod";
import { CenterSchema } from "./Center";
import { CommunitySchema } from "./Community";
import { ProfileSchema } from "./Profile";
import { StudySchema } from "./Study";
import { SubjectSchema } from "./Subject";
import { stringToBoolean } from "./utils";

export const SocialEnum = {
  DOUBT: "doubt",
  EVENT: "event",
  PUBLICATION: "publication",
  RUMOR: "rumor",
  UPLOAD: "upload",
  GIVEAWAY: "giveaway",
} as const;

export const SocialEnumSchema = z.nativeEnum(SocialEnum);

export type SocialEnumType = z.infer<typeof SocialEnumSchema>;

export const SocialSchema = z.object({
  id: z.number().nonnegative(),
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),

  type: SocialEnumSchema,
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  photoDirectory: z.string().optional().nullable(),
  course: z.number().nonnegative(),

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
  community: CommunitySchema.optional(),
  subject: SubjectSchema.optional(),
  center: CenterSchema.optional(),
  study: StudySchema.optional(),
});

export type SocialType = z.infer<typeof SocialSchema>;
