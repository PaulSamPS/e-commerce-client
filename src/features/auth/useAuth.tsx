import { ReactElement, useCallback, useEffect, useState } from "react";
import { SignIn } from "@/features/auth/sign-in/sign-in";
import { SignUp } from "@/features/auth/sign-up/sign-up";
import { ResetPassword } from "@/features/auth/reset-password/reset-password";

type AuthProps = {
  isOpen: boolean;
};

enum AuthActions {
  signIn = "Вход",
  signUp = "Регистрация",
  resetPassword = "Сброс Пароля",
}

interface UseAuthActionProps extends AuthProps {}

interface UseModalAuthActionReturn {
  currentAction: ReactElement;
  authAction: AuthActions;
}

export const useAuth = ({
  isOpen,
}: UseAuthActionProps): UseModalAuthActionReturn => {
  const [authAction, setAuthAction] = useState<AuthActions>(AuthActions.signIn);

  const goToSignUp = useCallback(() => setAuthAction(AuthActions.signUp), []);
  const goToSignIn = useCallback(() => setAuthAction(AuthActions.signIn), []);
  const goToResetPassword = useCallback(
    () => setAuthAction(AuthActions.resetPassword),
    [],
  );

  useEffect(() => {
    if (!isOpen) {
      setAuthAction(AuthActions.signIn);
    }
  }, [isOpen]);

  const currentActionMapper: Record<AuthActions, () => ReactElement> = {
    [AuthActions.signIn]: () => (
      <SignIn onSignUp={goToSignUp} onResetPassword={goToResetPassword} />
    ),
    [AuthActions.signUp]: () => <SignUp onSignIn={goToSignIn} />,
    [AuthActions.resetPassword]: () => <ResetPassword onSignIn={goToSignIn} />,
  };

  const CurrentActionComponent = currentActionMapper[authAction];

  return { currentAction: <CurrentActionComponent />, authAction };
};
