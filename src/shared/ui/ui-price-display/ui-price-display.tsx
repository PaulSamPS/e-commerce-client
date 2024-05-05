import React, { ReactNode } from "react";
import styles from "./ui-price-display.module.scss";
import { priceRu } from "@/shared/lib/priceRu";
import clsx from "clsx";

type UiPriceDisplayProps = {
  price: number;
  discount: number;
  oldPrice: number;
  addToCart?: ReactNode;
  column?: boolean;
};

export const UiPriceDisplay: React.FC<UiPriceDisplayProps> = ({
  price,
  oldPrice,
  discount,
  addToCart,
  column,
}) => {
  const hasDiscount = discount > 0;
  const discountedPrice = hasDiscount ? priceRu(oldPrice - price) : null;

  return (
    <div className={clsx(styles["price-container"], column && styles.column)}>
      {hasDiscount && (
        <div className={styles.sale}>
          <span className={styles["old-price"]}>{priceRu(oldPrice)}</span>
          <span className={styles.discount}>-{discountedPrice}</span>
        </div>
      )}
      <span className={styles.price}>{priceRu(price)}</span>
      {addToCart && <div className={styles["add-to-cart"]}>{addToCart}</div>}
    </div>
  );
};
