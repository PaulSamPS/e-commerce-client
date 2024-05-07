import clsx from "clsx";
import styles from "./yesterday-product.module.scss";
import { UiTitle } from "@/shared/ui/ui-title";
import { YesterdayCard } from "./yesterday-card/yesterday-card";
import { IProduct } from "@/shared/api/types/product";

export interface YesterdayProps {
  productsYesterday: IProduct[];
  className?: string;
}
export const YesterdayProduct = ({
  productsYesterday,
  className,
}: YesterdayProps) => (
  <div className={clsx(styles.wrapper, className)}>
    <UiTitle weight="medium" size="h2" className={styles.title}>
      Товары прошлых дней
    </UiTitle>
    <div className={styles.card}>
      {productsYesterday.map((product) => (
        <YesterdayCard
          key={product.id}
          productsYesterday={product}
          className={styles.item}
        />
      ))}
    </div>
  </div>
);
