"use client";

import clsx from "clsx";
import styles from "./carousel-with-preview.module.scss";
import { IProduct } from "@/shared/api/types/product";
import { GalleryCarousel } from "@/entities/carousel-with-preview/gallery-carousel/gallery-carousel";
import { CarouselControls } from "./carousel-control/carousel-control";
import { PreviewCarousel } from "./preview-carousel/preview-carousel";
import { useSnapCarousel } from "react-snap-carousel";
import { UiBadge } from "@/shared/ui/ui-badge/ui-badge";

export interface CarouselProps {
  product: IProduct;
  imageWidth: number;
  className?: string;
}

const CarouselWithPreview = ({ product, imageWidth, className }: CarouselProps) => {
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

export default CarouselWithPreview
