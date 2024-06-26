import { FC, memo } from "react";
import styles from "./sign-in.module.scss";
import { UiFormWithInputs } from "@/shared/ui/ui-form-with-inputs/ui-from-with-inputs";
import { UiButtonGroup } from "@/shared/ui/ui-button-group/ui-button-group";
import { ButtonProps } from "@/shared/ui/ui-button";
import { emailOptions, passwordOptions, usernameOptions } from "../constants";
import { useAppDispatch } from "@/shared/hooks";
import { signInApi, userState } from "@/entities/user";
import { useSelector } from "react-redux";
import { AuthModalAppContext } from "@/shared/context";
import { SignInFormProps, signInSchema } from "./sign-in.schema";
import { getCartApi } from "@/entities/cart";
import { useStrictContext } from "@/shared/lib/react";

interface SignInProps {
  onSignUp: () => void;
  onResetPassword: () => void;
}

export const SignIn: FC<SignInProps> = memo(({ onSignUp, onResetPassword }) => {
  const dispatch = useAppDispatch();
  const { error, loading } = useSelector(userState);
  const { setIsOpen } = useStrictContext(AuthModalAppContext);

  const onSubmit = async (formData: SignInFormProps) => {
    dispatch(signInApi(formData))
      .then(() => setIsOpen(false))
      .then(() => dispatch(getCartApi()));
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
      options: passwordOptions,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <UiFormWithInputs
        schema={signInSchema}
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
