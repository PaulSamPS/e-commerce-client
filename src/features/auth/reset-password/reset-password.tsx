import {
  DynamicModule,
  ReducerMap,
} from "@/shared/providers/store-provider/dynamic-module";
import { resetPasswordReducer } from "@/entities/User/reset-password.store";
import { ResetPasswordProps } from "@/features/auth/reset-password/types";
import { useResetPassword } from "@/features/auth/reset-password/useResetPassword";
import styles from "./reset-password.module.scss";
import { useSelector } from "react-redux";
import { resetPasswordState } from "@/entities/User";

const INITIAL_REDUCERS: ReducerMap = {
  resetPassword: resetPasswordReducer,
};

export const ResetPassword = ({ onSignIn }: ResetPasswordProps) => {
  const state = useSelector(resetPasswordState);
  const { currentAction } = useResetPassword({
    onSignIn,
    isEnterCode: !!state?.email,
    isNewPassword: !!state?.code,
  });

  return (
    <DynamicModule reducers={INITIAL_REDUCERS} className={styles.wrapper}>
      {currentAction}
    </DynamicModule>
  );
};
