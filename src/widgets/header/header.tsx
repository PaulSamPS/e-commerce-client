import styles from "./header.module.scss";
import { UiLogo } from "@/shared/ui/ui-logo/ui-logo";
import { Auth } from "@/features/auth/auth";
import { Search } from "@/features/search/Search";
import { UiCartButton } from "@/shared/ui/ui-cart-button/ui-cart-button";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["header-content"]}>
        <UiLogo companyName="Какая-то мебель" slogan="Мебель со вкусом" />
        <Search />
        <Auth />
        <UiCartButton productsCount={5} isLoading={false} totalPrice={125000} />
      </div>
    </div>
  );
};
