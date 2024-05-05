import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Link from "next/link";
import styles from "./card.module.scss";
import { priceRu } from "@/shared/lib/priceRu";
import { IProduct } from "@/shared/types/product";
import clsx from "clsx";
import Image from "next/image";

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  dayProduct: IProduct;
  currentProduct: IProduct;
  addToRecentlyViewed: () => void;
}

export const Card = ({
  currentProduct,
  dayProduct,
  addToRecentlyViewed,
  className,
}: CardProps) => (
  <Link
    href={`/today/${dayProduct.name}`}
    key={dayProduct.id}
    onClick={addToRecentlyViewed}
  >
    <div
      className={clsx(styles.card, className, {
        [styles.active]: dayProduct.id === currentProduct?.id,
      })}
    >
      <div className={styles.percent}>{dayProduct.discount}%</div>
      <div className={styles.left}>
        <Image
          width={100}
          height={100}
          src={`http://localhost:5500${dayProduct.images[0].url}`}
          alt={dayProduct.name}
          title={dayProduct.name}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.sale}>
          <span className={styles.oldPrice}>
            {priceRu(dayProduct.oldPrice)}
          </span>
          <span className={styles.discount}>
            -{priceRu(dayProduct.oldPrice! - dayProduct.price)}
          </span>
        </div>
        <span className={styles.price}>{priceRu(dayProduct.price)}</span>
        <p className={styles.name}>{dayProduct.name}</p>
      </div>
    </div>
  </Link>
);
