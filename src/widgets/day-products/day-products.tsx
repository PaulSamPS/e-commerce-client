"use client";

import { useSnapCarousel } from "react-snap-carousel";
import styles from "./day-products.module.scss";
import { UiTitle } from "@/shared/ui/ui-title";
import { UiDots } from "@/shared/ui/ui-dots/ui-dots";
import { IDayProducts } from "@/shared/types/product";
import { useScreenWidth } from "@/shared/hooks/use-screen-width";
import { Timer } from "./day-products-timer/timer";
import { DayProductsCard } from "./day-products-card/day-products-card";
import { AddToCart } from "@/features/add-to-cart/add-to-cart";
import { UiArrowButton } from "@/shared/ui/ui-arrow";
import { useAddToRecentlyViewed } from "@/features/use-add-to-recently-viewed/use-add-to-recently-viewed";

type DayProductsProps = {
  products: IDayProducts[];
};
export const DayProducts = ({ products }: DayProductsProps) => {
  const screenWidth = useScreenWidth();
  const { scrollRef, next, prev, activePageIndex, goTo } = useSnapCarousel();
  const { addToRecentlyViewed } = useAddToRecentlyViewed();

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <UiTitle weight="medium" size="h2">
          Товары дня
        </UiTitle>
        <Timer className={styles.timer} />
      </div>
      <div className={styles.block}>
        <div className={styles["day-product-block"]} ref={scrollRef}>
          {products.map((product) => (
            <DayProductsCard
              addToRecentlyViewed={addToRecentlyViewed}
              className={styles.item}
              key={product.id}
              product={product}
              addToCart={
                <AddToCart productId={product.id} variant="withIcon" />
              }
            />
          ))}
        </div>
        {screenWidth > 1000 && (
          <>
            <UiArrowButton appearance="left" background="none" onClick={prev} />
            <UiArrowButton
              appearance="right"
              background="none"
              onClick={next}
            />
          </>
        )}
      </div>
      {screenWidth > 1000 && (
        <UiDots
          className={styles.dots}
          slideIndex={activePageIndex}
          activeDot={goTo}
          dotsCount={products.length}
        />
      )}
    </div>
  );
};
