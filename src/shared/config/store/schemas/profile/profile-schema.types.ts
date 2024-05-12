import { IProfile } from "@/shared/api/profile";

export interface ProfileSchema {
  data?: IProfile;
  loading: boolean;
  error?: string;
  isReadonly: boolean;
}
