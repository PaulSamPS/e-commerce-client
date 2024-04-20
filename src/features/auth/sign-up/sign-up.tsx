import { useSelector } from "react-redux";
import styles from "./sign-up.module.scss";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { userState } from "@/entities/User";
import { UiButtonGroup } from "@/shared/ui/ui-button-group/ui-button-group";
import { UiFormWithInputs } from "@/shared/ui/ui-form-with-inputs/ui-from-with-inputs";
import { ButtonProps } from "@/shared/ui/ui-button";
import { emailOptions, usernameOptions } from "@/features/auth/constants";
import { signUpApi } from "@/features/auth/sign-up/api-sign-up";
import { SignInFormProps } from "@/features/auth/sign-in/type";
import { memo } from "react";

type SignUpProps = {
  onSignIn: () => void;
};

export const SignUp = memo(({ onSignIn }: SignUpProps) => {
  const dispatch = useAppDispatch();
  const { error, loading } = useSelector(userState);

  const buttons: ButtonProps[] = [
    {
      size: "s",
      appearance: "clear",
      onClick: onSignIn,
      children: "Войти",
    },
  ];

  const inputFields = [
    {
      name: "username",
      type: "text",
      placeholder: "Введите имя пользователя",
      options: usernameOptions,
    },
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

  const onSubmit = async (formData: SignInFormProps) => {
    dispatch(signUpApi(formData));
  };

  return (
    <div className={styles.wrapper}>
      <UiFormWithInputs
        isLoading={loading}
        inputs={inputFields}
        onSubmit={onSubmit}
        actionText={"Регистрация"}
        error={error}
      />
      <UiButtonGroup buttons={buttons} className={styles.footer} />
    </div>
  );
});
