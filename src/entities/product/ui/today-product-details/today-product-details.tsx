import React, { ReactNode } from "react";
import styles from "./today-product-details.module.scss";
import { UiTitle } from "@/shared/ui/ui-title";
import { IProduct } from "@/shared/types/product";
import { UiRatingFull } from "@/shared/ui/ui-rating-full/ui-rating-full";
import { UiReview } from "@/shared/ui/ui-review/ui-review";
import UiCarousel from "@/shared/ui/ui-carousel/ui-carousel";
import { AddToCart } from "@/features/add-to-cart/add-to-cart";
import { UiPriceDisplay } from "@/shared/ui/ui-price-display/ui-price-display";
import { UiFeatures } from "@/shared/ui/ui-features/ui-features";
import { FeaturesItem } from "@/shared/types/features";

type TodayProductsProps = {
  product: IProduct;
  features: FeaturesItem[];
  addToCart: ReactNode;
};

export const TodayProductDetails = ({
  product,
  addToCart,
  features,
}: TodayProductsProps) => (
  <div className={styles.wrapper}>
    <div className={styles.info}>
      <div className={styles.left}>
        <UiTitle weight="medium" size="h1">
          {product.name}
        </UiTitle>
        <div className={styles.rating}>
          <UiRatingFull rating={product.rating} className={styles.star} />
          <UiReview reviews={product.reviewCount} className={styles.comments} />
        </div>
        <div className={styles.productBlock}>
          <div className={styles.carousel}>
            <UiCarousel product={product} imageWidth={400} />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.buy}>
          <UiPriceDisplay
            price={product.price}
            discount={product.discount}
            oldPrice={product.oldPrice}
            addToCart={addToCart}
            column
          />
        </div>
        <UiFeatures features={features} />
      </div>
    </div>
  </div>
);
