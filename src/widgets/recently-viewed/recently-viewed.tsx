"use client";

import React from "react";
import { useAddToRecentlyViewed } from "@/features/use-add-to-recently-viewed/use-add-to-recently-viewed";
import { AddToCart } from "@/features/add-to-cart/add-to-cart";
import { FavouriteButton } from "@/features/favourites-button/favourite-button";
import { UiTitle } from "@/shared/ui/ui-title";
import { useCarousel } from "@/shared/hooks/use-carousel";
import styles from "./recently-viewed.module.scss";
import { UiArrowButton } from "@/shared/ui/ui-arrow";
import { UiButton } from "@/shared/ui/ui-button";
import { UiCarouselProductCard } from "@/shared/ui/ui-carousel-product-card/ui-carousel-product-card";

const IMAGE_WIDTH = 336;
const CONTAINER_WIDTH = 1200;
export const RecentlyViewed = () => {
  const { recentlyViewed, clearRecentlyViewed } = useAddToRecentlyViewed();
  const { scrollRef, canScrollRight, canScrollLeft, prev, next } = useCarousel({
    imgWidth: IMAGE_WIDTH,
    arrLength: recentlyViewed.length,
    container: CONTAINER_WIDTH,
  });
  return (
    <>
      {recentlyViewed.length > 0 && (
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <UiTitle size="h2" weight="medium">
              Вы недавно смотрели
            </UiTitle>
            <UiButton
              appearance={"clear"}
              onClick={clearRecentlyViewed}
              className={styles.clear}
            >
              Очистить
            </UiButton>
          </div>
          <div className={styles["card-block"]} ref={scrollRef}>
            {recentlyViewed.map((item) => (
              <UiCarouselProductCard
                className={styles.card}
                key={item.id}
                product={item}
                addToCart={<AddToCart productId={item.id} variant="primary" />}
                addToFavourite={<FavouriteButton productId={item.id} />}
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
      )}
    </>
  );
};
