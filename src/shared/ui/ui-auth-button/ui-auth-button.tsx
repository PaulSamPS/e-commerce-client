import { ProfileIcon } from "@/shared/assets/icons";
import styles from "./auth-button.module.scss";
import { ButtonHTMLAttributes } from "react";
import { UiButton } from "@/shared/ui/ui-button";

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
      before={<ProfileIcon />}
      {...props}
    >
      Вход или регистрация
    </UiButton>
  );
};
