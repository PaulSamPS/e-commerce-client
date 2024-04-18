import styles from "./header.module.scss";
import { UiLogo } from "@/shared/ui/ui-logo/ui-logo";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["header-content"]}>
        <UiLogo
          companyName="Какая-то мебель"
          logoSrc={"/logo.svg"}
          slogan="Мебель со вкусом"
        />
      </div>
    </div>
  );
};
