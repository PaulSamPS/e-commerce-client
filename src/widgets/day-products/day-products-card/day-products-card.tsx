import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./day-products-card.module.scss";
import { IProduct } from "@/shared/api/types/product";
import clsx from "clsx";
import { UiRating } from "@/shared/ui/ui-rating/ui-rating";
import { UiReview } from "@/shared/ui/ui-review/ui-review";
import Image from "next/image";
import { UiPriceDisplay } from "@/shared/ui/ui-price-display/ui-price-display";
import { UiBadge } from "@/shared/ui/ui-badge/ui-badge";
import { UiAppLink } from "@/shared/ui/ui-app-link";

interface DayProductsCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct;
  addToCart: ReactNode;
  addToRecentlyViewed: (product: IProduct) => void;
}

export const DayProductsCard = ({
  className,
  product,
  addToCart,
  addToRecentlyViewed,
}: DayProductsCardProps) => {
  const handleAddToRecentlyViewed = () => {
    addToRecentlyViewed(product);
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.img}>
        <UiAppLink
          to={`/today/${product.name}`}
          onClick={handleAddToRecentlyViewed}
        >
          <Image
            src={`http://localhost:5500${product.images[0].url}`}
            alt={product.name}
            title={product.name}
            width={120}
            height={120}
          />
        </UiAppLink>
      </div>
      <UiBadge text={"скидка"} discount={product.discount} color={"red"} />
      <div className={styles.rating}>
        {product.rating > 0 && <UiRating rating={product.rating} />}
        <UiReview reviews={product.reviewCount > 0 ? product.reviewCount : 0} />
      </div>
      <UiAppLink
        className={styles.name}
        to={`/today/${product.name}`}
        onClick={handleAddToRecentlyViewed}
      >
        {product.name}
      </UiAppLink>
      <UiPriceDisplay
        price={product.price}
        oldPrice={product.oldPrice}
        discount={product.discount}
        addToCart={addToCart}
      />
    </div>
  );
};
