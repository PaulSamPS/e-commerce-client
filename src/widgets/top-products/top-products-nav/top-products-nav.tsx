import clsx from "clsx";
import styles from "./top-products-nav.module.scss";
import { UiButton } from "@/shared/ui/ui-button";
import { TopProductsActive } from "@/widgets/top-products/useTopProducts";

export interface NavProps {
  setActive: (value: TopProductsActive) => void;
  topProductAction: TopProductsActive;
  screenWidth: number;
}

export const TopProductsNav = ({
  topProductAction,
  setActive,
  screenWidth,
}: NavProps) => (
  <div className={styles.wrapper}>
    <UiButton
      appearance={topProductAction === "hits" ? "primary" : "secondary"}
      size="m"
      className={clsx(styles.btn, screenWidth < 800 && styles.small)}
      onClick={() => setActive("hits")}
    >
      Хиты продаж
    </UiButton>
    <UiButton
      appearance={topProductAction === "new" ? "primary" : "secondary"}
      size="m"
      className={clsx(styles.btn, screenWidth < 800 && styles.small)}
      onClick={() => setActive("new")}
    >
      Топ новинок
    </UiButton>
  </div>
);
