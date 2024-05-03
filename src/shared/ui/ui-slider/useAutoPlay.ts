import { useEffect } from "react";

type SlideControlFunctions = {
  goTo: (index: number) => void;
  next: () => void;
  refresh: () => void;
};

type UseAutoScrollProps = {
  activeIndex: number;
  autoPlay: boolean;
  totalSlides: number;
  intervalDuration: number;
  slideControls: SlideControlFunctions;
};

export const useAutoScroll = ({
  activeIndex,
  intervalDuration,
  slideControls,
  totalSlides,
  autoPlay,
}: UseAutoScrollProps) => {
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoPlay) {
      intervalId = setInterval(() => {
        const { goTo, next, refresh } = slideControls;
        refresh();
        if (activeIndex === totalSlides - 1) {
          goTo(0);
        } else {
          next();
        }
      }, intervalDuration);
    }

    return () => clearInterval(intervalId);
  }, [autoPlay, totalSlides, intervalDuration, slideControls, activeIndex]);
};
