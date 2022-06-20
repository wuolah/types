import { z } from "zod";
import { DocumentSchema } from "./Document";
import { SocialSchema } from "./Social";

export const ArtifactTypeEnum = {
  DOCUMENT: "document",
  SOCIAL: "social",
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

export const ArtifactSchema = z.discriminatedUnion("type", [
  DocumentArtifact,
  SocialArtifact,
]);

export type ArtifactType = z.infer<typeof ArtifactSchema>;
