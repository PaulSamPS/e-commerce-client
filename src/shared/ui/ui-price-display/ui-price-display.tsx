import React, { ReactNode } from "react";
import styles from "./ui-price-display.module.scss";
import { priceRu } from "@/shared/lib/priceRu";

type UiPriceDisplayProps = {
  price: number;
  discount: number;
  oldPrice: number;
  addToCart?: ReactNode;
};

export const UiPriceDisplay: React.FC<UiPriceDisplayProps> = ({
  price,
  oldPrice,
  discount,
  addToCart,
}) => {
  const hasDiscount = discount > 0;
  const discountedPrice = hasDiscount ? priceRu(oldPrice - price) : null;

  return (
    <div className={styles.priceContainer}>
      {hasDiscount && (
        <div className={styles.sale}>
          <span className={styles.oldPrice}>{priceRu(oldPrice)}</span>
          <span className={styles.discount}>-{discountedPrice}</span>
        </div>
      )}
      <span className={styles.price}>{priceRu(price)}</span>
      {addToCart && <div className={styles.addToCart}>{addToCart}</div>}
    </div>
  );
};
