import { createInstance } from "./api-instance";
import {
  ActivateProps,
  ActivateResponse,
  EnterResetCodeResponse,
  EnterResetPasswordCodeProps,
  LoginResponse,
  NewPasswordProps,
  NewPasswordResponse,
  RegistrationResponse,
  SendResetCodeResponse,
  SendResetPasswordCodeProps,
  SignInProps,
  SignUpProps,
} from "@/shared/types/auth";

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
