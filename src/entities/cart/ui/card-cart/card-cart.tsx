"use client";

import React, { ComponentType, DetailedHTMLProps, HTMLAttributes } from "react";
import clsx from "clsx";
import Image from "next/image";
import styles from "./card-cart.module.scss";
import { priceRu } from "@/shared/lib/priceRu";
import { ProductCart } from "@/shared/api/types";
import {
  DecreaseCountProps,
  DeleteProductProps,
  IncreaseCountProps,
} from "../../types";
import { UiAppLink } from "@/shared/ui/ui-app-link";
import { UiText } from "@/shared/ui/ui-text";

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductCart;
  IncreaseCount: ComponentType<IncreaseCountProps>;
  DecreaseCount: ComponentType<DecreaseCountProps>;
  DeleteProduct: ComponentType<DeleteProductProps>;
}

export const CardCart = ({
  product,
  IncreaseCount,
  DecreaseCount,
  DeleteProduct,
  className,
}: CardProps) => (
  <div className={clsx(styles.wrapper, className)} key={product.productId}>
    <div className={styles.image}>
      <Image
        src={`http://localhost:5500${product.image}`}
        alt={product.name}
        title={product.name}
        width={150}
        height={150}
      />
      {product.discount > 0 && (
        <div className={styles.discount}>-{product.discount}%</div>
      )}
    </div>
    <UiAppLink
      to={`/product/styl/${product.name}`}
      className={styles["product-name"]}
    >
      {product.name}
    </UiAppLink>
    <UiText weight={"regular"} className={styles.price}>
      {priceRu(product.price)}
    </UiText>
    <div className={styles.qty}>
      <DecreaseCount productId={product.productId} count={product.count} />
      <div className={styles.count}>
        {product.count}
        {/* <input value={product.qty} onChange={(e) => props.increaseInput(e.target.value)} /> */}
      </div>
      <IncreaseCount
        productId={product.productId}
        productInStock={product.inStock}
      />
    </div>
    <UiText weight={"regular"} className={styles.totalSum}>
      {priceRu(product.price * product.count)}
    </UiText>
    <DeleteProduct productId={product.productId} />
  </div>
);
