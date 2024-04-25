"use client";

import styles from "./slider.module.scss";
import { UiTitle } from "@/shared/ui/ui-title";
import { UiArrowButton } from "@/shared/ui/ui-arrow";
import { ReactNode } from "react";
import { UiDots } from "@/shared/ui/ui-dots";

type WrapperSliderProps = {
  width: number;
  height: number;
  screenWidth: number;
  setAuto: (value: boolean) => void;
  children: ReactNode;
};

export const WrapperSlider = ({
  children,
  width,
  height,
  screenWidth,
  setAuto,
}: WrapperSliderProps) => (
  <div className={styles.promotions}>
    <div
      className={styles.wrapper}
      style={{
        width: "inherit",
        // width,
        height: `${screenWidth > 1000 ? height : screenWidth / 2}px`,
      }}
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      {children}
    </div>
  </div>
);