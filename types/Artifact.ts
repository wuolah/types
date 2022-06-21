import { z } from "zod";
import { DocumentSchema } from "./Document";
import { SocialSchema } from "./Social";
import { UploadSchema } from "./Upload";

export const ArtifactTypeEnum = {
  DOCUMENT: "document",
  SOCIAL: "social",
  UPLOAD: "upload",
} as const;
export const ArtifactTypeSchema = z.nativeEnum(ArtifactTypeEnum);
export type ArtifactTypeType = z.infer<typeof ArtifactTypeSchema>;

const BaseArtifact = z.object({
  id: z.string(),
});

const DocumentArtifact = BaseArtifact.extend({
  type: z.literal(ArtifactTypeEnum.DOCUMENT),
  value: DocumentSchema,
});

const SocialArtifact = BaseArtifact.extend({
  type: z.literal(ArtifactTypeEnum.SOCIAL),
  value: SocialSchema,
});

const UploadArtifact = BaseArtifact.extend({
  type: z.literal(ArtifactTypeEnum.UPLOAD),
  value: UploadSchema,
});

export const ArtifactSchema = z.discriminatedUnion("type", [
  DocumentArtifact,
  SocialArtifact,
  UploadArtifact,
]);

export type ArtifactType = z.infer<typeof ArtifactSchema>;
