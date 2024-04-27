"use client";

import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import styles from "./day-products-card.module.scss";
import { priceRu } from "@/shared/lib/priceRu";
import { IProduct } from "@/shared/types/product";
import clsx from "clsx";
import { UiRating } from "@/shared/ui/ui-rating/ui-rating";
import { UiReview } from "@/shared/ui/ui-review/ui-review";

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
        <img
          src={`http://localhost:5500${product.images[0].url}`}
          alt={product.name}
          title={product.name}
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
      <UiReview
        reviews={
          product.review && product.review.length > 0
            ? product.review.length
            : 0
        }
      />
    </div>
    <Link
      className={styles.name}
      href={`http://localhost:5500/today/${product.name}`}
    >
      {product.name}
    </Link>
    <div className={styles.sale}>
      <span className={styles["old-price"]}>{priceRu(product.oldPrice)}</span>
      <span className={styles.discount}>
        -{priceRu(product.oldPrice! - product.price)}
      </span>
    </div>
    <div className={styles.bottom}>
      <span className={styles.price}>{priceRu(product.price)}</span>
      {addToCart}
    </div>
  </div>
);
