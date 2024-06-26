import styles from "./today-product-details.module.scss";
import { UiTitle } from "@/shared/ui/ui-title";
import { IProduct } from "@/shared/api/types/product";
import { UiRatingFull } from "@/shared/ui/ui-rating-full/ui-rating-full";
import { UiReview } from "@/shared/ui/ui-review/ui-review";
import { UiPriceDisplay } from "@/shared/ui/ui-price-display/ui-price-display";
import { UiFeatures } from "@/shared/ui/ui-features/ui-features";
import { FeaturesItem } from "@/shared/api/types/features";
import { ReactNode } from "react";

type TodayProductsProps = {
  product: IProduct;
  features: FeaturesItem[];
  addToCart: ReactNode;
  carousel: ReactNode;
};

export const TodayProductDetails = ({
  product,
  addToCart,
  features,
  carousel,
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
          <div className={styles.carousel}>{carousel}</div>
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
