import { IUser } from "@/shared/types/auth";

export interface UserSchema {
  userData?: IUser;
  error?: string;
  loading: boolean;
}
