import { z } from "zod";
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
  type: SocialEnumSchema,
  userId: z.number().nonnegative(),
  countryId: z.number().nonnegative(),
  cityId: z.number().nonnegative(),
  universityId: z.number().nonnegative(),
  centerId: z.number().nonnegative(),
  studyId: z.number().nonnegative(),
  course: z.number().nonnegative(),
  folderId: z.number().nonnegative(),
  uploadId: z.number().nonnegative().optional().nullable(),
  title: z.string().optional().nullable(),
  text: z.string().optional().nullable(),
  photoDirectory: z.string().optional().nullable(),
  site: z.string().optional().nullable(),
  dateTime: z.string().optional().nullable(),
  data: z.string().optional().nullable(),
  likes: z.number().nonnegative().optional().nullable(),
  dislikes: z.number().nonnegative().optional().nullable(),
  numComments: z.number().nonnegative().optional().nullable(),
  deleted: z
    .preprocess(stringToBoolean(false), z.boolean().nullable())
    .optional(),
  created: z.string().optional(),
  updated: z.string().optional(),
});

export type SocialType = z.infer<typeof SocialSchema>;
