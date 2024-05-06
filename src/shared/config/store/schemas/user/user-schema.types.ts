import { IUser } from "@/shared/api/types/auth";

export interface UserSchema {
  userData?: IUser;
  error?: string;
  loading: boolean;
}
