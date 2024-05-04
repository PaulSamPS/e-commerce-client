"use client";

import React, { DetailedHTMLProps, HTMLAttributes, useEffect } from "react";
import clsx from "clsx";
import styles from "./buy.module.scss";
import { UiPriceDisplay } from "@/shared/ui/ui-price-display/ui-price-display";
import { IProduct } from "@/shared/types/product";
import { AddToCart } from "@/features/add-to-cart/add-to-cart";

export interface BuyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct;
}

export const Buy = ({ product, className }: BuyProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.topBuy}>
        <UiPriceDisplay
          price={product.price}
          discount={product.discount}
          oldPrice={product.oldPrice}
          addToCart={<AddToCart productId={product.id} variant={"withIcon"} />}
        />
        {/*<FavouriteButton productId={currentProduct.id} />*/}
      </div>
      {/*<hr />*/}
      {/*<div className={styles.deliveryBlock}>*/}
      {/*  <div className={styles.location}>*/}
      {/*    <LocationIcon />*/}
      {/*    <a>Самовывоз</a>*/}
      {/*    <span>завтра, бесплатно</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
