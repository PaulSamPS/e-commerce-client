import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./top-products-card.module.scss";
import { UiRating } from "@/shared/ui/ui-rating/ui-rating";
import { UiReview } from "@/shared/ui/ui-review/ui-review";
import Image from "next/image";
import { IProduct } from "@/shared/types/product";
import { UiPriceDisplay } from "@/shared/ui/ui-price-display/ui-price-display";
import { UiBadge } from "@/shared/ui/ui-badge/ui-badge";

const config = {
  baseUrl: "http://localhost:5500",
};

interface CardProps {
  product: IProduct;
  addToCart: ReactNode;
  addToFavourite: ReactNode;
  className?: string;
}

// Компонент для отображения цены

// Компонент для отображения карточки продукта
export const TopProductsCard: React.FC<CardProps> = ({
  product,
  addToCart,
  addToFavourite,
  className,
}) => (
  <div className={clsx(styles.wrapper, className)}>
    {product.isNew && <UiBadge text={"новинка"} />}
    <div className={styles.img}>
      <Link href={`/product/${product.name}`}>
        <Image
          width={150}
          height={150}
          src={`${config.baseUrl}${product.images[0].url}`}
          alt={product.name}
          title={product.name}
          priority
        />
      </Link>
    </div>
    <div className={styles.rating}>
      {product.rating > 0 && <UiRating rating={product.rating} />}
      <UiReview reviews={product.reviewCount || 0} />
    </div>
    <Link
      href={`/product/${product.category}/${product.name}`}
      className={styles.name}
    >
      <span>{product.name}</span>
    </Link>
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
