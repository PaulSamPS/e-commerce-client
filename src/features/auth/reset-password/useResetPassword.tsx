import { ReactElement, useMemo } from "react";
import { SendResetCode } from "./send-code/send-reset-code";
import { EnterResetCode } from "./enter-code/enter-reset-code";
import { NewPassword } from "./new-password/new-passrod";

enum ResetActions {
  sendCode = "Сброс Пароля",
  enterCode = "Код подтверждения",
  newPassword = "Новый пароль",
}

type UseResetPasswordProps = {
  onSignIn?: () => void;
  isEnterCode: boolean;
  isNewPassword: boolean;
};

export const useResetPassword = ({
  onSignIn,
  isNewPassword,
  isEnterCode,
}: UseResetPasswordProps) => {
  const resetAction = useMemo<ResetActions>(() => {
    if (isNewPassword) {
      return ResetActions.newPassword;
    } else if (isEnterCode) {
      return ResetActions.enterCode;
    }
    return ResetActions.sendCode;
  }, [isEnterCode, isNewPassword]);

  const currentActionMapper = useMemo<Record<ResetActions, () => ReactElement>>(
    () => ({
      [ResetActions.sendCode]: () => <SendResetCode onSignIn={onSignIn!} />,
      [ResetActions.enterCode]: () => <EnterResetCode />,
      [ResetActions.newPassword]: () => <NewPassword />,
    }),
    [onSignIn],
  );

  const CurrentActionComponent = useMemo(
    () => currentActionMapper[resetAction],
    [currentActionMapper, resetAction],
  );

  return {
    currentAction: <CurrentActionComponent />,
  };
};
