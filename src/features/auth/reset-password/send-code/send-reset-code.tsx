import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { UiFormWithInputs } from "@/shared/ui/ui-form-with-inputs/ui-from-with-inputs";
import { UiButtonGroup } from "@/shared/ui/ui-button-group/ui-button-group";
import { ButtonProps } from "@/shared/ui/ui-button";
import { ResetPasswordFormProps } from "@/features/auth/reset-password/types";
import styles from "../reset-password.module.scss";
import { emailOptions } from "@/features/auth/constants";
import { useSelector } from "react-redux";
import { resetPasswordState } from "@/entities/User/state";
import { UiSubhead } from "@/shared/ui/ui-subhead";
import { sendResetPasswordCode } from "@/entities/User/reset-password-api";
import { FC } from "react";

interface ResetPasswordProps {
  onSignIn: () => void;
}

export const SendResetCode: FC<ResetPasswordProps> = ({ onSignIn }) => {
  const dispatch = useAppDispatch();
  const state = useSelector(resetPasswordState);

  const onSubmit = async (formData: ResetPasswordFormProps) => {
    dispatch(sendResetPasswordCode(formData));
  };

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
      name: "email",
      type: "text",
      placeholder: "Введите email",
      options: emailOptions,
    },
  ];

  const renderSuccessMessage = () =>
    state?.message && (
      <UiSubhead weight="regular" className={styles.success}>
        {state.message}
      </UiSubhead>
    );

  return (
    <div className={styles.wrapper}>
      {renderSuccessMessage()}
      <UiFormWithInputs
        isLoading={state?.loading!}
        inputs={inputFields}
        onSubmit={onSubmit}
        actionText={"Сбросить"}
        error={state?.error!}
      />
      <UiButtonGroup buttons={buttons} className={styles.footer} />
    </div>
  );
};
