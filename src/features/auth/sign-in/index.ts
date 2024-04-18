import { ReactElement } from 'react';
import { User } from '@/entities/User';

export type AuthProps = {
    isOpen: boolean | undefined
    onClose: () => void
}

// export type AuthActions = 'Вход' | 'Регистрация' | 'Сброс пароля'

export enum AuthActions {
    signIn = 'Вход',
    signUp = 'Регистрация',
    resetPassword = 'Сброс Пароля',
}
export interface UseAuthActionProps extends AuthProps{}
export interface UseModalAuthActionReturn {
    currentAction: ReactElement | string
    authAction: string
}

export interface ResetPasswordSchema {
    isLoading: boolean;
    error?: string;
    successMessage?: string | undefined;
}

export interface ResetPasswordProps {
    goToSignIn?: () => void
}

export type ResetPasswordFormProps = {
    email: string
}

export type ResetPasswordMessageProps = {
    message: string
}

export interface SignInSchema {
    isLoading: boolean;
    error?: string;
    loggedInMessage: string | undefined;
}

export interface SignInProps {
    goToSignUp?: () => void
    goToResetPassword?: () => void
    onClose: () => void
}

export type SignInFormProps = {
    email: string
    password: string
}

export interface SignInResult {
    user: User;
    message: string;
}

export type SignUpSchema = {
    isLoading: boolean;
    error?: string;
    successMessage?: string
}

export type SignUpProps = {
    goToSignIn?: () => void
}

export type SignUpFormProps = {
    email: string
    password: string
    username: string
}

export type SignUpResult = {
    message: string;
}

export type CheckAuthResult = {
    user: User | undefined;
}
