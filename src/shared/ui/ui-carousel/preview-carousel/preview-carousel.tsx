import { ImageType } from "@/shared/types/image";
import styles from "./preview-carousel.module.scss";
import clsx from "clsx";
import { memo, useCallback } from "react";

type PreviewCarouselProps = {
  images: ImageType[];
  goToIndex: (idx: number) => void;
  currentSlideIndex: number;
  offsetPreview: number;
};

export const PreviewCarousel = memo(
  ({
    images,
    goToIndex,
    currentSlideIndex,
    offsetPreview,
  }: PreviewCarouselProps) => {
    const offset = useCallback(() => {
      if (currentSlideIndex >= 2 && currentSlideIndex < images.length - 1) {
        return offsetPreview * (currentSlideIndex - 2);
      }
    }, [currentSlideIndex, images.length, offsetPreview]);

    return (
      <div className={styles["preview-wrapper"]}>
        {images.map((image, index) => (
          <button
            type="button"
            key={image.name}
            onClick={() => goToIndex(index)}
            style={{
              transform: `translateX(-${offset()}px)`,
            }}
            className={clsx(styles["preview-slider"], {
              [styles.active]: currentSlideIndex === index,
            })}
          >
            <img src={`http://localhost:5500${image.url}`} alt="" />
          </button>
        ))}
      </div>
    );
  },
);
