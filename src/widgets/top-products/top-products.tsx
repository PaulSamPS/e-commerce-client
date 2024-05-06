"use client";

import React from "react";
import styles from "./top-products.module.scss";
import { UiTitle } from "@/shared/ui/ui-title";
import { IProduct } from "@/shared/api/types/product";
import { TopProductsNav } from "./top-products-nav/top-products-nav";
import { useTopProducts } from "@/widgets/top-products/use-top-products";
import { useCarousel } from "@/shared/hooks";
import { UiArrowButton } from "@/shared/ui/ui-arrow";
import { AddToCart } from "@/features/add-to-cart";
import { FavouriteButton } from "@/features/favourites-button";
import { UiCarouselProductCard } from "@/shared/ui/ui-carousel-product-card/ui-carousel-product-card";
import { useAddToRecentlyViewed } from "@/shared/hooks";

const IMAGE_WIDTH = 336;
const CONTAINER_WIDTH = 1200;

type TopProductsProps = {
  topProducts: IProduct[];
  newProducts: IProduct[];
};
export const TopProducts = ({ newProducts, topProducts }: TopProductsProps) => {
  const { addToRecentlyViewed } = useAddToRecentlyViewed();
  const { setActive, currentAction, topProductAction } = useTopProducts({
    newProducts,
    topProducts,
  });
  const { scrollRef, canScrollLeft, canScrollRight, prev, next } = useCarousel({
    imgWidth: IMAGE_WIDTH,
    arrLength: currentAction.length,
    container: CONTAINER_WIDTH,
  });

  return (
    <div className={styles.wrapper}>
      <UiTitle size="h2" weight="medium">
        Рекомендуем вам
      </UiTitle>
      <TopProductsNav
        setActive={setActive}
        topProductAction={topProductAction}
      />
      <div className={styles["card-block"]} ref={scrollRef}>
        {currentAction &&
          currentAction.map((p) => (
            <UiCarouselProductCard
              addToRecentlyViewed={addToRecentlyViewed}
              key={p.id}
              product={p}
              className={styles.card}
              addToCart={<AddToCart productId={p.id} variant="primary" />}
              addToFavourite={<FavouriteButton productId={p.id} />}
            />
          ))}
        {canScrollLeft && (
          <UiArrowButton
            disabled={!canScrollLeft}
            appearance="left"
            background="white"
            onClick={prev}
            className={styles.arrow}
          />
        )}
        {canScrollRight && (
          <UiArrowButton
            disabled={!canScrollRight}
            appearance="right"
            background="white"
            onClick={next}
            className={styles.arrow}
          />
        )}
      </div>
    </div>
  );
};
