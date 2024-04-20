import { ProfileIcon } from "@/shared/assets/icons";
import styles from "./auth-button.module.scss";
import { ButtonHTMLAttributes } from "react";
import { UiButton } from "@/shared/ui/ui-button";

export interface UiAuthButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onOpen?: () => void;
}
export const UiAuthButton = ({ onOpen }: UiAuthButtonProps) => {
  return (
    <UiButton
      appearance={"clear"}
      className={styles.login}
      onClick={onOpen}
      before={<ProfileIcon />}
    >
      Вход или регистрация
    </UiButton>
  );
};
