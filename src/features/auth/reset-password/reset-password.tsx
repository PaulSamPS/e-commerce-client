import {
  DynamicModule,
  ReducerMap,
} from "@/shared/providers/store-provider/dynamic-module";
import { resetPasswordReducer } from "@/entities/Password/reset-password.store";
import { ResetPasswordProps } from "@/features/auth/reset-password/types";
import { useResetPassword } from "@/features/auth/reset-password/useResetPassword";
import styles from "./reset-password.module.scss";
import { useSelector } from "react-redux";
import { resetPasswordState } from "@/entities/Password";

const INITIAL_REDUCERS: ReducerMap = {
  resetPassword: resetPasswordReducer,
};

export const ResetPassword = ({ onSignIn }: ResetPasswordProps) => {
  const state = useSelector(resetPasswordState);
  const { currentAction } = useResetPassword({
    onSignIn,
    isEnterCode: !!state?.email,
  });

  console.log(!!state?.email);

  return (
    <DynamicModule reducers={INITIAL_REDUCERS} className={styles.wrapper}>
      {currentAction}
    </DynamicModule>
  );
};
