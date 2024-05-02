import React, { LegacyRef } from "react";
import { IShares } from "@/shared/types/shares";
import styles from "./slider.module.scss";
import { SliderItem } from "./slider-item";
import { UiSpinner } from "@/shared/ui/ui-spinner";

interface SliderItemsProps {
  width: number;
  height: number;
  shares: IShares[];
  scrollRef: LegacyRef<HTMLDivElement> | undefined;
}

export const SliderItems = ({
  width,
  height,
  shares,
  scrollRef,
}: SliderItemsProps) => {
  return (
    <div className={styles["slider-wrapper"]} ref={scrollRef}>
      {shares.map((share, index) => (
        <SliderItem key={index} width={width} height={height} share={share} />
      ))}
    </div>
  );
};
