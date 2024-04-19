import { UserData } from "@/entities/User";

export type SignInFormProps = {
  email: string;
  password: string;
};

export interface SignInResult {
  user: UserData;
}
