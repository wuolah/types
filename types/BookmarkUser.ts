import { ProfileType } from "./ProfileType";

export type BookmarkUserType = {
  id: number;
  userId: number;
  profileId: number;

  user?: ProfileType;
  profile?: ProfileType;
};
