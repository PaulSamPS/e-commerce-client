import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ui-slider-item.module.scss";
import { IShares } from "@/shared/types/shares";

interface SliderItemProps {
  width: number;
  height: number;
  share: IShares;
}

export const UiSliderItem = memo(
  ({ width, height, share }: SliderItemProps) => {
    const { path, images } = share;

    return (
      <Link href={`/product/${path}`} className={styles.slider}>
        <Image
          src={`http://localhost:5500${images.url}`}
          alt="slide"
          width={width}
          height={height}
          priority
        />
      </Link>
    );
  },
);
