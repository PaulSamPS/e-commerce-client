import { createInstance } from "./api-instance";

export interface User {
  id: number;
  email: string;
  username: string;
}

export interface LoginResponse {
  message: string;
  user: User;
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

// Общий тип для параметра options
type RequestOptions = Parameters<typeof createInstance>[1];

export const register = (
  createUserDto: SignUpProps,
  options?: RequestOptions,
) => {
  return createInstance<RegistrationResponse>(
    {
      url: `/users/register`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createUserDto,
    },
    options,
  );
};

export const activate = (
  activateUserDto: ActivateProps,
  options?: RequestOptions,
) => {
  return createInstance<ActivateResponse>(
    {
      url: `/users/activate`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: activateUserDto,
    },
    options,
  );
};

export const login = (loginUserDto: SignInProps, options?: RequestOptions) => {
  return createInstance<LoginResponse>(
    {
      url: `/users/login`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: loginUserDto,
    },
    options,
  );
};

export const sendResetPasswordCode = (
  sendResetPasswordCodeProps: SendResetPasswordCodeProps,
  options?: RequestOptions,
) => {
  return createInstance<SendResetCodeResponse>(
    {
      url: `/users/reset-password/send-code`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: sendResetPasswordCodeProps,
    },
    options,
  );
};

export const enterResetPasswordCode = (
  enterResetPasswordCodeProps: EnterResetPasswordCodeProps,
  options?: RequestOptions,
) => {
  return createInstance<EnterResetCodeResponse>(
    {
      url: `/users/reset-password/enter-code`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: enterResetPasswordCodeProps,
    },
    options,
  );
};

export const newPassword = (
  newPasswordProps: NewPasswordProps,
  options?: RequestOptions,
) => {
  return createInstance<NewPasswordResponse>(
    {
      url: `/users/new-password`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: newPasswordProps,
    },
    options,
  );
};

export const refreshToken = (options?: RequestOptions) => {
  return createInstance<LoginResponse>(
    { url: `/users/refresh-token`, method: "GET" },
    options,
  );
};

export const checkAuth = (options?: RequestOptions) => {
  return createInstance<LoginResponse>(
    { url: `/users/check-auth`, method: "GET" },
    options,
  );
};
