export type ResetPasswordSchema = {
  loading: boolean;
  error: string | undefined;
  message: string | undefined;
  email: string;
  code: string;
};
