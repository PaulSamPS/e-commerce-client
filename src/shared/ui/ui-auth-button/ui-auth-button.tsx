import styles from "./auth-button.module.scss";
import { ButtonHTMLAttributes } from "react";
import { UiButton } from "@/shared/ui/ui-button";
import { VscAccount } from "react-icons/vsc";

export interface UiAuthButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}
export const UiAuthButton = ({ loading, ...props }: UiAuthButtonProps) => {
  return (
    <UiButton
      isLoading={loading}
      appearance={"clear"}
      className={styles.login}
      before={<VscAccount />}
      {...props}
    >
      Вход или регистрация
    </UiButton>
  );
};
