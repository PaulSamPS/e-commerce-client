"use client";

import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import styles from "./day-products-card.module.scss";
import { priceRu } from "@/shared/lib/priceRu";
import { IProduct } from "@/shared/types/product";
import clsx from "clsx";
import { UiRating } from "@/shared/ui/ui-rating/ui-rating";
import { UiReview } from "@/shared/ui/ui-review/ui-review";
import Image from "next/image";
import { UiPriceDisplay } from "@/shared/ui/ui-price-display/ui-price-display";

interface DayProductsCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct;
  addToCart: ReactNode;
}

export const DayProductsCard = ({
  className,
  product,
  addToCart,
}: DayProductsCardProps) => (
  <div className={clsx(styles.wrapper, className)}>
    <div className={styles.img}>
      <Link href={`http://localhost:5500/today/${product.name}`}>
        <Image
          src={`http://localhost:5500${product.images[0].url}`}
          alt={product.name}
          title={product.name}
          width={120}
          height={120}
        />
      </Link>
    </div>
    <div className={styles.percent}>
      <span className={styles["total-percent"]}>
        {product.discount}
        <div>%</div>
      </span>
      <span>скидка</span>
    </div>
    <div className={styles.rating}>
      {product.rating > 0 && <UiRating rating={product.rating} />}
      <UiReview reviews={product.reviewCount > 0 ? product.reviewCount : 0} />
    </div>
    <Link
      className={styles.name}
      href={`http://localhost:5500/today/${product.name}`}
    >
      {product.name}
    </Link>
    <UiPriceDisplay
      price={product.price}
      oldPrice={product.oldPrice}
      discount={product.discount}
      addToCart={addToCart}
    />
  </div>
);
