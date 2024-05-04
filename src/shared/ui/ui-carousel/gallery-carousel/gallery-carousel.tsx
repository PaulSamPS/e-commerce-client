import styles from "./gallery-carousel.module.scss";
import { ImageType } from "@/shared/types/image";
import Image from "next/image";
import { MouseEvent, TouchEvent } from "react";

type GalleryCarouselProps = {
  images: ImageType[];
  currentImgWidth: number;
  productName: string;
  scrollRef: (el: HTMLElement | null) => void;
};

const handleMove = (
  e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>,
  isTouch: boolean,
) => {
  const img = e.target as HTMLDivElement;
  const boundingRect = img.getBoundingClientRect();

  const clientX = isTouch
    ? (e as TouchEvent).touches[0].clientX
    : (e as MouseEvent).clientX;
  const clientY = isTouch
    ? (e as TouchEvent).touches[0].clientY
    : (e as MouseEvent).clientY;

  const posX = ((clientX - boundingRect.left) / boundingRect.width) * 100;
  const posY = ((clientY - boundingRect.top) / boundingRect.height) * 100;

  img.style.transformOrigin = `${posX}% ${posY}%`;
  img.style.transform = "scale(2)";
};

const handleLeave = (
  e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>,
) => {
  const target = e.target as HTMLDivElement;
  target.style.transform = "scale(1)";
};

export const GalleryCarousel = ({
  images,
  currentImgWidth,
  productName,
  scrollRef,
}: GalleryCarouselProps) => {
  return (
    <div
      className={styles["slider-wrapper"]}
      style={{
        width: `${currentImgWidth}px`,
        height: `${currentImgWidth}px`,
      }}
      ref={scrollRef}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={styles.slider}
          onMouseMove={(e) => handleMove(e, false)}
          onTouchStart={(e) => handleMove(e, true)}
          onTouchEnd={handleLeave}
          onMouseLeave={handleLeave}
        >
          <Image
            src={`http://localhost:5500${image.url}`}
            alt={productName}
            title={productName}
            width={currentImgWidth}
            height={currentImgWidth}
            quality={95}
          />
        </div>
      ))}
    </div>
  );
};
