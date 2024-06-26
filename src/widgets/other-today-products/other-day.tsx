"use client";

import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./other-day.module.scss";
import { Card } from "@/widgets/other-today-products/card/card";
import { IProduct } from "@/shared/api/types/product";
import clsx from "clsx";
import { UiTitle } from "@/shared/ui/ui-title";
import { useAddToRecentlyViewed } from "@/shared/hooks";

export interface OtherDayProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  dayProducts: IProduct[];
  currentProduct: IProduct;
}

export const OtherDay = ({
  dayProducts,
  currentProduct,
  className,
}: OtherDayProps) => {
  const { addToRecentlyViewed } = useAddToRecentlyViewed();

  return (
    <div className={clsx(className)}>
      <UiTitle weight="medium" size="h2" className={styles.title}>
        Другие товары дня
      </UiTitle>
      <div className={styles.card}>
        {dayProducts.map((product) => (
          <Card
            key={product.id}
            currentProduct={currentProduct!}
            dayProduct={product}
            addToRecentlyViewed={() => addToRecentlyViewed(product)}
            className={styles.item}
          />
        ))}
      </div>
    </div>
  );
};

