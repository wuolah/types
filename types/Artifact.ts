import { z } from "zod";
import { DocumentSchema } from "./Document";
import { SocialSchema } from "./Social";

export const ArtifactTypeEnum = {
  DOCUMENT: "DOCUMENT",
  SOCIAL: "SOCIAL",
  FOLDER: "FOLDER",
} as const;
export const ArtifactTypeSchema = z.nativeEnum(ArtifactTypeEnum);
export type ArtifactTypeType = z.infer<typeof ArtifactTypeSchema>;

const BaseArtifact = z.object({
  id: z.string(),
  name: z.string(),
});

const DocumentArtifact = BaseArtifact.extend({
  type: z.literal(ArtifactTypeEnum.DOCUMENT),
  value: DocumentSchema,
});

const FolderArtifact = BaseArtifact.extend({
  type: z.literal(ArtifactTypeEnum.FOLDER),
  value: z.object({}),
});

const SocialArtifact = BaseArtifact.extend({
  type: z.literal(ArtifactTypeEnum.SOCIAL),
  value: SocialSchema,
});

export const ArtifactSchema = z.discriminatedUnion("type", [
  DocumentArtifact,
  FolderArtifact,
  SocialArtifact,
]);

export type ArtifactType = z.infer<typeof ArtifactSchema>;
