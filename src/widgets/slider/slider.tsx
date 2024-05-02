"use client";

import React, { useState } from "react";
import { SliderControls } from "./slider-controls";
import { useScreenWidth } from "@/shared/hooks/use-screen-width";
import { useAutoScroll } from "./useAutoPlay";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./slider.module.scss";
import { UiDots } from "@/shared/ui/ui-dots";
import { UiTitle } from "@/shared/ui/ui-title";
import { IShares } from "@/shared/types/shares";
import dynamic from "next/dynamic";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { SliderItems } from "@/widgets/slider/slider-items";

interface SliderProps {
  width: number;
  height: number;
  shares: IShares[];
  title?: string;
}

const WrapperSlider = dynamic(() => import("./wrapper-slider"), {
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
});
export const Slider = ({ width, height, shares, title }: SliderProps) => {
  const { scrollRef, next, prev, activePageIndex, goTo, refresh } =
    useSnapCarousel();
  const screenWidth = useScreenWidth();
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

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
      <WrapperSlider
        screenWidth={screenWidth}
        height={height}
        setAuto={setAutoPlay}
      >
        <SliderItems
          width={width}
          height={height}
          shares={shares}
          scrollRef={scrollRef}
        />
        <SliderControls prev={prev} next={next} />
        {screenWidth > 1000 && (
          <UiDots
            className={styles.dots}
            slideIndex={activePageIndex}
            activeDot={goTo}
            dotsCount={shares.length}
          />
        )}
      </WrapperSlider>
    </div>
  );
};
