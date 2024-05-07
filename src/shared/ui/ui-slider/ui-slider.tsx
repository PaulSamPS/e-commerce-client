"use client";

import React, { useState } from "react";
import { UiSliderControls } from "@/shared/ui/ui-slider/ui-slider-controls/ui-slider-controls";
import { useAutoScroll } from "./useAutoPlay";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./ui-slider.module.scss";
import { UiDots } from "@/shared/ui/ui-dots";
import { UiTitle } from "@/shared/ui/ui-title";
import { IShares } from "@/shared/api/types/shares";
import dynamic from "next/dynamic";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiSliderItems } from "@/shared/ui/ui-slider/ui-slider-items/ui-slider-items";

interface SliderProps {
  width: number;
  height: number;
  shares: IShares[];
  title?: string;
  auto?: boolean;
}

const WrapperSlider = dynamic(
  () => import("@/shared/ui/ui-slider/ui-wrapper-slider/ui-wrapper-slider"),
  {
    loading: () => (
      <div style={{ height: 300 }}>
        <UiSpinner
          color={"var(--blue-themed"}
          position={"relative"}
          bg={"transparent"}
        />
      </div>
    ),
    ssr: false,
  },
);
export const UiSlider = ({
  width,
  height,
  shares,
  title,
  auto = true,
}: SliderProps) => {
  const { scrollRef, next, prev, activePageIndex, goTo, refresh } =
    useSnapCarousel();
  const [autoPlay, setAutoPlay] = useState<boolean>(auto);

  useAutoScroll({
    autoPlay,
    activeIndex: activePageIndex,
    totalSlides: shares.length,
    slideControls: { refresh, goTo, next },
    intervalDuration: 5000,
  });

  return (
    <div className={styles.promotions}>
      {title && (
        <UiTitle weight={"medium"} size={"h2"} className={styles.title}>
          {title}
        </UiTitle>
      )}
      <WrapperSlider height={height} setAuto={setAutoPlay}>
        <UiSliderItems
          width={width}
          height={height}
          shares={shares}
          scrollRef={scrollRef}
        />
        <UiSliderControls prev={prev} next={next} />
        <UiDots
          className={styles.dots}
          slideIndex={activePageIndex}
          activeDot={goTo}
          dotsCount={shares.length}
        />
      </WrapperSlider>
    </div>
  );
};
