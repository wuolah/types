import { ProfileType } from "./ProfileType";
import { UserType } from "./UserType";

export type BookmarkUserType = {
  id: number;
  userId: number;
  user?: UserType;
  profileId: number;
  profile?: ProfileType;
};