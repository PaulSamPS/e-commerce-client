"use client";

import clsx from "clsx";
import styles from "./top-products-nav.module.scss";
import { TopProductsActive } from "../../Product/model/types/top-products";
import { UiButton } from "@/shared/ui/ui-button";

export interface NavProps {
  setHit?: () => void;
  setNew?: () => void;
  topProductAction: TopProductsActive;
  screenWidth: number;
}

export const TopProductsNav = ({
  topProductAction,
  setHit,
  setNew,
  screenWidth,
}: NavProps) => (
  <div className={styles.wrapper}>
    <UiButton
      appearance={topProductAction === "hits" ? "primary" : "secondary"}
      size="m"
      className={clsx(styles.btn, screenWidth < 800 && styles.small)}
      onClick={setHit}
    >
      Хиты продаж
    </UiButton>
    <UiButton
      appearance={topProductAction === "new" ? "primary" : "secondary"}
      size="m"
      className={clsx(styles.btn, screenWidth < 800 && styles.small)}
      onClick={setNew}
    >
      Топ новинок
    </UiButton>
  </div>
);
