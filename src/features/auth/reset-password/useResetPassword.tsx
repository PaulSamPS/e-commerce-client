import { ReactElement, useMemo } from "react";
import { SendResetCode } from "@/features/auth/reset-password/send-code/send-reset-code";
import { EnterResetCode } from "@/features/auth/reset-password/enter-code/enter-reset-code";
import { NewPassword } from "@/features/auth/reset-password/new-password/new-passrod";

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
  const resetAction = useMemo(() => {
    if (isEnterCode && isNewPassword) {
      return ResetActions.newPassword;
    } else if (isEnterCode) {
      return ResetActions.enterCode;
    }
    return ResetActions.sendCode;
  }, [isEnterCode, isNewPassword]);

  const currentActionMapper: Record<ResetActions, () => ReactElement> = {
    [ResetActions.sendCode]: () => <SendResetCode onSignIn={onSignIn!} />,
    [ResetActions.enterCode]: () => <EnterResetCode />,
    [ResetActions.newPassword]: () => <NewPassword />,
  };

  const CurrentActionComponent = currentActionMapper[resetAction];

  return {
    currentAction: <CurrentActionComponent />,
  };
};
