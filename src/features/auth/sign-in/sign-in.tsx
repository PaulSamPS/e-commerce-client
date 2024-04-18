import { FC, memo } from "react";
import styles from "./sign-in.module.scss";
import { FormWithInputs } from "@/features/auth/from-with-inputs";
import { UiButtonGroup } from "@/features/auth/button-group";
import { ButtonProps } from "@/shared/ui/ui-button";
import { emailOptions, usernameOptions } from "@/features/auth/constants";
import { SignInFormProps } from "@/features/auth/sign-in";

/**
 * Свойства компонента SignIn.
 */
interface SignInProps {
  /**
   * Функция для перехода к странице регистрации.
   */
  onSignUp: () => void;

  /**
   * Функция для перехода к странице сброса пароля.
   */
  onResetPassword: () => void;
}

/**
 * Интерфейс поля ввода.
 */
interface InputField {
  /**
   * Название поля ввода, соответствующее ключу в объекте данных формы.
   */
  name: keyof SignInFormProps;

  /**
   * Тип поля ввода (например, 'text', 'password').
   */
  type: string;

  /**
   * Текст заполнителя для поля ввода.
   */
  placeholder: string;

  /**
   * Дополнительные параметры для поля ввода.
   */
  options: Record<string, any>;
}

/**
 * Компонент SignIn.
 */
export const SignIn: FC<SignInProps> = memo(({ onSignUp, onResetPassword }) => {
  /**
   * Конфигурация кнопок формы.
   */
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

  /**
   * Конфигурация полей ввода формы.
   */
  const inputFields: InputField[] = [
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

  /**
   * Обработчик отправки формы.
   * @param {SignInFormProps} formData - Данные формы входа.
   */
  const onSubmit = async (formData: SignInFormProps) => {
    console.log(formData);
  };

  return (
    <div className={styles.wrapper}>
      {/* Рендер компонента формы входа */}
      <FormWithInputs
        isLoading={false}
        inputs={inputFields}
        onSubmit={onSubmit}
        className={styles.form}
        actionText={"Войти"}
        errorClass={styles.error}
      />
      {/* Рендер компонента группы кнопок */}
      <UiButtonGroup buttons={buttons} className={styles.footer} />
    </div>
  );
});
