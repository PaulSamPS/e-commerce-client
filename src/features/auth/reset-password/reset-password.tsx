import { resetPasswordReducer, resetPasswordState } from "@/entities/user";
import { useResetPassword } from "./useResetPassword";
import styles from "./reset-password.module.scss";
import { useSelector } from "react-redux";
import { ResetPasswordProps } from "@/shared/api/types/auth";
import { DynamicModule, ReducerMap } from "@/shared/config/store";

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
