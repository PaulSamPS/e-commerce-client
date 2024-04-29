import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Shares } from "@/shared/api/shares";
import styles from "./slider.module.scss";

interface SliderItemProps {
  width: number;
  height: number;
  share: Shares;
}

export const SliderItem = memo(({ width, height, share }: SliderItemProps) => {
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
});
