import React, { LegacyRef } from "react";
import { IShares } from "@/shared/types/shares";
import styles from "./slider.module.scss";
import { SliderItem } from "./slider-item";
import { Shares } from "@/shared/api/shares";

interface SliderItemsProps {
  width: number;
  height: number;
  shares: Shares[];
  scrollRef: LegacyRef<HTMLDivElement> | undefined;
}

export const SliderItems = ({
  width,
  height,
  shares,
  scrollRef,
}: SliderItemsProps) => (
  <div className={styles["slider-wrapper"]} ref={scrollRef}>
    {shares.map((share, index) => (
      <SliderItem key={index} width={width} height={height} share={share} />
    ))}
  </div>
);
