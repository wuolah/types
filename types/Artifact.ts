import { z } from "zod";

export const ArtifactTypeEnum = {
  DOCUMENTS: "DOCUMENTS",
  SOCIAL: "SOCIAL",
  FOLDER: "FOLDER",
} as const;
export const ArtifactTypeSchema = z.nativeEnum(ArtifactTypeEnum);
export type ArtifactTypeType = z.infer<typeof ArtifactTypeSchema>;

export const ArtifactSchema = z.object({
  id: z.string(),
  type: ArtifactTypeSchema,
});

export type ArtifactType = z.infer<typeof ArtifactSchema>;
