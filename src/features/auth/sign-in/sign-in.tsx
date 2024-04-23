import { FC, memo } from "react";
import styles from "./sign-in.module.scss";
import { UiFormWithInputs } from "@/shared/ui/ui-form-with-inputs/ui-from-with-inputs";
import { UiButtonGroup } from "@/shared/ui/ui-button-group/ui-button-group";
import { ButtonProps } from "@/shared/ui/ui-button";
import { emailOptions, usernameOptions } from "@/features/auth/constants";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { userState } from "@/entities/User";
import { signInApi } from "@/entities/User/api-sign-in";
import { useSelector } from "react-redux";
import { SignInFormProps } from "@/features/auth/sign-in/type";

interface SignInProps {
  onSignUp: () => void;
  onResetPassword: () => void;
}

export const SignIn: FC<SignInProps> = memo(({ onSignUp, onResetPassword }) => {
  const dispatch = useAppDispatch();
  const { error, loading } = useSelector(userState);

  const onSubmit = async (formData: SignInFormProps) => {
    dispatch(signInApi(formData));
  };

  const buttons: ButtonProps[] = [
    {
      size: "s",
      appearance: "clear",
      onClick: onSignUp,
      children: "Зарегистрироваться",
    },
    {
      size: "s",
      appearance: "clear",
      onClick: onResetPassword,
      children: "Забыли пароль?",
    },
  ];

  const inputFields = [
    {
      name: "email",
      type: "text",
      placeholder: "Введите email",
      options: emailOptions,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Введите пароль",
      options: usernameOptions,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <UiFormWithInputs
        isLoading={loading}
        inputs={inputFields}
        onSubmit={onSubmit}
        actionText={"Войти"}
        error={error}
      />
      <UiButtonGroup buttons={buttons} className={styles.footer} />
    </div>
  );
});
