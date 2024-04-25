import styles from "./header.module.scss";
import { UiLogo } from "@/shared/ui/ui-logo/ui-logo";
import { Auth } from "@/features/auth/auth";
import { Search } from "@/features/search/Search";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["header-content"]}>
        <UiLogo companyName="Какая-то мебель" slogan="Мебель со вкусом" />
        <Search />
        <Auth />
      </div>
    </div>
  );
};
