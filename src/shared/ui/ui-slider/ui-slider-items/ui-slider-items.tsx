import React, { LegacyRef } from "react";
import { IShares } from "@/shared/types/shares";
import styles from "./ui-slider-items.module.scss";
import { UiSliderItem } from "@/shared/ui/ui-slider/ui-slider-item/ui-slider-item";

interface SliderItemsProps {
  width: number;
  height: number;
  shares: IShares[];
  scrollRef: LegacyRef<HTMLDivElement> | undefined;
}

export const UiSliderItems = ({
  width,
  height,
  shares,
  scrollRef,
}: SliderItemsProps) => {
  return (
    <div className={styles["slider-wrapper"]} ref={scrollRef}>
      {shares.map((share, index) => (
        <UiSliderItem key={index} width={width} height={height} share={share} />
      ))}
    </div>
  );
};
