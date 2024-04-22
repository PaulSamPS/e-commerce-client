import { ReactElement, useEffect, useState } from "react";
import { SendResetCode } from "@/features/auth/reset-password/send-reset-code";
import { EnterResetCode } from "@/features/auth/reset-password/enter-reset-code";
import { ResetPasswordProps } from "@/features/auth/reset-password/types";

enum ResetActions {
  sendCode = "Сброс Пароля",
  enterCode = "Код подтверждения",
}

type UseResetPasswordProps = {
  onSignIn: () => void;
  isEnterCode: boolean;
};

export const useResetPassword = ({
  onSignIn,
  isEnterCode,
}: UseResetPasswordProps) => {
  const [resetAction, setResetAction] = useState<ResetActions>(
    ResetActions.sendCode,
  );

  useEffect(() => {
    if (isEnterCode) {
      setResetAction(ResetActions.enterCode);
    }
  }, [isEnterCode]);

  const currentActionMapper: Record<ResetActions, () => ReactElement> = {
    [ResetActions.enterCode]: () => <EnterResetCode />,
    [ResetActions.sendCode]: () => <SendResetCode onSignIn={onSignIn} />,
  };

  const CurrentActionComponent = currentActionMapper[resetAction];

  return {
    currentAction: <CurrentActionComponent />,
  };
};
