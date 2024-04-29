"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./top-products-card.module.scss";
import { priceRu } from "@/shared/lib/priceRu";
import { UiRating } from "@/shared/ui/ui-rating/ui-rating";
import { UiReview } from "@/shared/ui/ui-review/ui-review";
import { UiText } from "@/shared/ui/ui-text";
import Image from "next/image";
import { IProduct } from "@/shared/types/product";

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct;
  addToCart: ReactNode;
  addToFavourite: ReactNode;
}

export const TopProductsCard = ({
  product,
  addToCart,
  addToFavourite,
  className,
}: CardProps) => (
  <div className={clsx(styles.wrapper, className)}>
    {product.isNew && (
      <UiText weight="regular" className={styles["new-item"]}>
        Новинка
      </UiText>
    )}
    <div className={styles.img}>
      <Link href={`http://localhost:5500/product/${product.name}`}>
        <Image
          width={150}
          height={150}
          src={`http://localhost:5500${product.images[0].url}`}
          alt={product.name}
          title={product.name}
          priority
        />
      </Link>
    </div>
    <div className={styles.rating}>
      {product.rating > 0 && <UiRating rating={product.rating} />}
      <UiReview reviews={product.reviewCount ? product.reviewCount : 0} />
    </div>
    <Link
      href={`http://localhost:5500/product/${product.category}/${product.name}`}
      className={styles.name}
    >
      <span>{product.name}</span>
    </Link>
    {product.discount > 0 && (
      <div className={styles.sale}>
        <span className={styles.oldPrice}>{priceRu(product.oldPrice)}</span>
        {product.oldPrice > 0 && (
          <span className={styles.discount}>
            -{priceRu(product.oldPrice - product.price)}
          </span>
        )}
      </div>
    )}
    <span className={styles.price}>{priceRu(product.price)}</span>
    <div className={styles.bottom}>
      {addToCart}
      {addToFavourite}
    </div>
  </div>
);
