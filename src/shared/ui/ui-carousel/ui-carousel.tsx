"use client";

import clsx from "clsx";
import styles from "./ui-carousel.module.scss";
import { IProduct } from "@/shared/types/product";
import { useScreenWidth } from "@/shared/hooks/use-screen-width";
import { GalleryCarousel } from "@/shared/ui/ui-carousel/gallery-carousel/gallery-carousel";
import { CarouselControls } from "./carousel-control/carousel-control";
import { PreviewCarousel } from "./preview-carousel/preview-carousel";
import { useSnapCarousel } from "react-snap-carousel";
import { UiBadge } from "@/shared/ui/ui-badge/ui-badge";

export interface CarouselProps {
  product: IProduct;
  imageWidth: number;
  className?: string;
}

const UiCarousel = ({ product, imageWidth, className }: CarouselProps) => {
  const screenWidth = useScreenWidth();
  const { scrollRef, next, prev, activePageIndex, goTo } = useSnapCarousel();

  return (
    <div className={clsx(styles.wrapper, className)}>
      <GalleryCarousel
        scrollRef={scrollRef}
        productName={product.name}
        images={product.images}
        currentImgWidth={imageWidth}
      />
      <CarouselControls
        left={prev}
        right={next}
        currentSlideIndex={activePageIndex}
        screenWidth={screenWidth}
        imgLength={product.images.length}
        arrowTop
      />
      <PreviewCarousel
        images={product.images}
        goToIndex={goTo}
        offsetPreview={59.5}
        currentSlideIndex={activePageIndex}
      />
      {product.discount > 0 && (
        <UiBadge
          text={"скидка"}
          discount={product.discount}
          color={"red"}
          side={"left"}
        />
      )}
      {product.isNew && (
        <UiBadge
          text={"новинка"}
          color={"orange"}
          secondBadge={product.isNew && product.discount > 0}
          side={"left"}
        />
      )}
    </div>
  );
};

export default UiCarousel;
