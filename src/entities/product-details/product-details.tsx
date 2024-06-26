import React, { ReactNode } from "react";
import styles from "./product-details.module.scss";
import { IProduct } from "@/shared/api/types/product";
import { UiFeatures } from "@/shared/ui/ui-features/ui-features";
import { FeaturesItem } from "@/shared/api/types/features";
import { UiPriceDisplay } from "@/shared/ui/ui-price-display/ui-price-display";

type TodayProductsProps = {
  product: IProduct;
  features: FeaturesItem[];
  addToCart: ReactNode;
};

export const ProductDetails = ({
  product,
  addToCart,
  features,
}: TodayProductsProps) => (
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
);
