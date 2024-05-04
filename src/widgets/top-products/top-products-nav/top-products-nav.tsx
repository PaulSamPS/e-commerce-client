import clsx from "clsx";
import styles from "./top-products-nav.module.scss";
import { UiButton } from "@/shared/ui/ui-button";
import { TopProductsActive } from "@/widgets/top-products/use-top-products";

export interface NavProps {
  setActive: (value: TopProductsActive) => void;
  topProductAction: TopProductsActive;
}

export const TopProductsNav = ({ topProductAction, setActive }: NavProps) => (
  <div className={styles.wrapper}>
    <UiButton
      appearance={topProductAction === "hits" ? "primary" : "secondary"}
      size="m"
      className={styles.btn}
      onClick={() => setActive("hits")}
    >
      Хиты продаж
    </UiButton>
    <UiButton
      appearance={topProductAction === "new" ? "primary" : "secondary"}
      size="m"
      className={styles.btn}
      onClick={() => setActive("new")}
    >
      Топ новинок
    </UiButton>
  </div>
);
