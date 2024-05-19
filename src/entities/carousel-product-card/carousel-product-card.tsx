"use client";

import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./carousel-product-card.module.scss";
import { UiRating } from "@/shared/ui/ui-rating/ui-rating";
import { UiReview } from "@/shared/ui/ui-review/ui-review";
import Image from "next/image";
import { IProduct } from "@/shared/api/types/product";
import { UiPriceDisplay } from "@/shared/ui/ui-price-display/ui-price-display";
import { UiBadge } from "@/shared/ui/ui-badge/ui-badge";
import { UiAppLink } from "@/shared/ui/ui-app-link";

const config = {
  baseUrl: "http://localhost:5500",
  // baseUrl: process.env.API_URL,
};

interface RecentlyViewedCardProps {
  product: IProduct;
  addToCart: ReactNode;
  addToFavourite: ReactNode;
  className?: string;
  addToRecentlyViewed?: (product: IProduct) => void;
}

export const CarouselProductCard: React.FC<RecentlyViewedCardProps> = ({
  product,
  addToCart,
  addToFavourite,
  className,
  addToRecentlyViewed,
}) => {
  const handleAddToRecentlyViewed = () => {
    if (addToRecentlyViewed) {
      addToRecentlyViewed(product);
    }
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.img}>
        <UiAppLink
          to={`/product/${product.name}`}
          onClick={handleAddToRecentlyViewed}
        >
          <Image
            width={150}
            height={150}
            src={`${config.baseUrl}${product.images[0].url}`}
            alt={product.name}
            title={product.name}
            priority
          />
        </UiAppLink>
      </div>
      <div className={styles.badges}>
        {product.isNew && (
          <UiBadge
            text={"новинка"}
            color={"green"}
            position={"absolute"}
            side={"right"}
          />
        )}
        {product.rating > 4.7 && (
          <UiBadge
            text={"Хит"}
            color={"yellow"}
            position={"absolute"}
            side={"right"}
          />
        )}
      </div>
      <div className={styles.rating}>
        {product.rating > 0 && <UiRating rating={product.rating} />}
        <UiReview reviews={product.reviewCount || 0} />
      </div>
      <UiAppLink
        to={`/product/${product.category}/${product.name}`}
        className={styles.name}
        onClick={handleAddToRecentlyViewed}
      >
        {product.name}
      </UiAppLink>
      <UiPriceDisplay
        price={product.price}
        oldPrice={product.oldPrice}
        discount={product.discount}
      />
      <div className={styles.bottom}>
        {addToCart}
        {addToFavourite}
      </div>
    </div>
  );
};
