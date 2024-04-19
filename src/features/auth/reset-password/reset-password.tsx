import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { FormWithInputs } from "@/shared/ui/ui-form-with-inputs/ui-from-with-inputs";
import { UiButtonGroup } from "@/shared/ui/ui-button-group/ui-button-group";
import { ButtonProps } from "@/shared/ui/ui-button";
import {
  ResetPasswordFormProps,
  ResetPasswordProps,
} from "@/features/auth/reset-password/types";
import styles from "./reset-password.module.scss";
import { emailOptions } from "@/features/auth/constants";
import { resetPasswordApi } from "@/features/auth/reset-password/refresh-token-api";
import {
  DynamicModule,
  ReducerMap,
} from "@/shared/providers/store-provider/dynamic-module";
import { resetPasswordReducer } from "@/entities/Password/reset-password.store";
import { useSelector } from "react-redux";
import { resetPasswordState } from "@/entities/Password/state";
import { UiSubhead } from "@/shared/ui/ui-subhead";

const INITIAL_REDUCERS: ReducerMap = {
  resetPassword: resetPasswordReducer,
};

export const ResetPassword = ({ onSignIn }: ResetPasswordProps) => {
  const dispatch = useAppDispatch();
  const state = useSelector(resetPasswordState);

  const onSubmit = async (formData: ResetPasswordFormProps) => {
    dispatch(resetPasswordApi(formData));
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

  return (
    <DynamicModule reducers={INITIAL_REDUCERS} className={styles.wrapper}>
      {state?.message && (
        <UiSubhead weight="regular" className={styles.success}>
          {state.message}
        </UiSubhead>
      )}
      <FormWithInputs
        isLoading={state?.loading!}
        inputs={inputFields}
        onSubmit={onSubmit}
        actionText={"Сбросить"}
        className={styles.wrapper}
        errorClass={styles.error}
        error={state?.error!}
      />
      <UiButtonGroup buttons={buttons} className={styles.footer} />
    </DynamicModule>
  );
};
