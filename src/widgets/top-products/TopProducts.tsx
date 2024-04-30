"use client";

import React from "react";
import styles from "./TopProducts.module.scss";
import { UiTitle } from "@/shared/ui/ui-title";
import { IProduct } from "@/shared/types/product";
import { TopProductsCard } from "./top-products-card/top-products-card";
import { TopProductsNav } from "./top-products-nav/top-products-nav";
import { useTopProducts } from "@/widgets/top-products/useTopProducts";
import { useTopProductCarousel } from "@/widgets/top-products/useTopProductCarousel";
import { UiArrowButton } from "@/shared/ui/ui-arrow";
import { AddToCart } from "@/features/add-to-cart/add-to-cart";
import { FavouriteButton } from "@/features/favourites-button/favourite-button";

const IMAGE_WIDTH = 234;
const CONTAINER_WIDTH = 1200;

type TopProductsProps = {
  topProducts: IProduct[];
  newProducts: IProduct[];
};
export const TopProducts = ({ newProducts, topProducts }: TopProductsProps) => {
  const { setActive, currentAction, topProductAction } = useTopProducts({
    newProducts,
    topProducts,
  });
  const {
    scrollRef,
    screenWidth,
    canScrollLeft,
    canScrollRight,
    prev,
    next,
    currentContainer,
  } = useTopProductCarousel({
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
        screenWidth={screenWidth}
      />
      <div
        className={styles["card-block"]}
        style={{ width: "100%" }}
        ref={scrollRef}
      >
        {currentAction &&
          currentAction.map((p) => (
            <TopProductsCard
              key={p.id}
              product={p}
              className={styles.card}
              addToCart={<AddToCart productId={p.id} variant="primary" />}
              addToFavourite={<FavouriteButton productId={p.id} />}
            />
          ))}
        {currentContainer && screenWidth > 960 && canScrollLeft && (
          <UiArrowButton
            disabled={!canScrollLeft}
            appearance="left"
            background="white"
            onClick={prev}
            className={styles.arrowLeft}
          />
        )}
        {currentContainer && screenWidth > 960 && canScrollRight && (
          <UiArrowButton
            disabled={!canScrollRight}
            appearance="right"
            background="white"
            onClick={next}
            className={styles.arrowRight}
          />
        )}
      </div>
    </div>
  );
};
