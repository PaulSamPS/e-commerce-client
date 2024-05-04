"use client";

import clsx from "clsx";
import styles from "./carousel.module.scss";
import { IProduct } from "@/shared/types/product";
import { useScreenWidth } from "@/shared/hooks/use-screen-width";
import { GalleryCarousel } from "@/shared/ui/ui-carousel/gallery-carousel/gallery-carousel";
import { CarouselControls } from "./carousel-control/carousel-control";
import { PreviewCarousel } from "./preview-carousel/preview-carousel";
import { useSnapCarousel } from "react-snap-carousel";

export interface CarouselProps {
  currentProduct: IProduct | undefined;
  imageWidth: number;
  className?: string;
}

const Carousel = ({ currentProduct, imageWidth, className }: CarouselProps) => {
  const screenWidth = useScreenWidth();
  const { scrollRef, next, prev, activePageIndex, goTo } = useSnapCarousel();

  return (
    <div className={clsx(styles.wrapper, className)}>
      <GalleryCarousel
        scrollRef={scrollRef}
        productName={currentProduct?.name!}
        images={currentProduct?.images!}
        currentImgWidth={imageWidth}
      />
      <CarouselControls
        left={prev}
        right={next}
        currentSlideIndex={activePageIndex}
        screenWidth={screenWidth}
        imgLength={currentProduct?.images.length!}
        arrowTop
      />
      <PreviewCarousel
        images={currentProduct?.images!}
        goToIndex={goTo}
        offsetPreview={59.5}
        currentSlideIndex={activePageIndex}
      />
    </div>
  );
};

export default Carousel;
