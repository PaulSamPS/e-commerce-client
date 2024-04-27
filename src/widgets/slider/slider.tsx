"use client";

import React, { useState } from "react";
import { SliderControls } from "./slider-controls";
import { SliderItems } from "./slider-items";
import { useScreenWidth } from "@/shared/hooks/use-screen-width";
import { useAutoScroll } from "@/widgets/slider/useAutoPlay";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./slider.module.scss";
import { WrapperSlider } from "@/widgets/slider/wrapper-slider";
import { UiDots } from "@/shared/ui/ui-dots";
import { Shares } from "@/shared/api/shares";
import { UiTitle } from "@/shared/ui/ui-title";

interface SliderProps {
  width: number;
  height: number;
  shares: Shares[];
  title?: string;
}

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
