import { UiInput } from "@/shared/ui/ui-input";
import { UiButton } from "@/shared/ui/ui-button";
import styles from "./new-password.module.scss";
import { useNewPasswordForm } from "./use-new-password-form";

export const NewPassword = () => {
  const { register, handleSubmit, errors, isValid, newPassword, onSubmit } =
    useNewPasswordForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <UiInput
        error={errors.newPassword?.message}
        placeholder={"Новый пароль"}
        type="password"
        {...register("newPassword", {
          required: "Поле обязательно для заполнения",
          minLength: {
            value: 5,
            message: "Пароль должен содержать минимум 5 символов",
          },
        })}
      />
      <UiInput
        placeholder={"Повторите новый пароль"}
        error={errors.repeatPassword?.message}
        type="password"
        {...register("repeatPassword", {
          validate: (value) =>
            value === newPassword || "Пароли должны совпадать",
        })}
      />
      <UiButton
        appearance={"primary"}
        size={"l"}
        type="submit"
        stretched
        disabled={!isValid}
      >
        Отправить
      </UiButton>
    </form>
  );
};
