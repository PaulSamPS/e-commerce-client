export interface IUser {
  id: number;
  email: string;
  username: string;
}

export interface LoginResponse {
  message: string;
  user: IUser;
}

export interface LogoutResponse {
  message: string;
}
export interface ActivateResponse {
  message: string;
}

export interface RegistrationResponse {
  message: string;
}

export interface SendResetCodeResponse {
  message: string;
}

export interface EnterResetCodeResponse {
  message: string;
}

export interface NewPasswordResponse {
  message: string;
}

// Интерфейсы для параметров запросов API
export interface SignUpProps {
  email: string;
  password: string;
  username: string;
}

export interface ActivateProps {
  code: string;
  email: string;
}

export interface SignInProps {
  email: string;
  password: string;
}

export interface SendResetPasswordCodeProps {
  email: string;
}

export interface EnterResetPasswordCodeProps {
  code: string;
  email: string;
}

export interface NewPasswordProps {
  email: string;
  password: string;
}

export type CheckAuthResult = {
  user: IUser;
};

export type SignInFormProps = {
  email: string;
  password: string;
};

export interface SignInResult {
  user: IUser;
}

export type SignUpFormProps = {
  email: string;
  password: string;
  username: string;
};

export type SignUpResult = {
  message: string;
};

export interface ResetPasswordProps {
  onSignIn: () => void;
}

export type ResetPasswordFormProps = {
  email: string;
};

export type RefreshTokenResult = {
  user: IUser;
};
