"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { useScreenWidth } from "@/shared/hooks/use-screen-width";
import { useSnapCarousel } from "react-snap-carousel";

type IUseTopProductCarousel = {
  imgWidth: number;
  arrLength: number;
  container: number;
};

export const useCarousel = ({
  imgWidth,
  arrLength,
}: IUseTopProductCarousel) => {
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollContainerBy = useCallback((distance: number) => {
    scrollRef.current?.scrollBy({ left: distance, behavior: "smooth" });
  }, []);

  const prev = useCallback(() => {
    scrollContainerBy(-imgWidth);
  }, [scrollContainerBy, imgWidth]);

  const next = useCallback(() => {
    scrollContainerBy(imgWidth);
  }, [scrollContainerBy, imgWidth]);

  const checkForScrollPosition = useCallback(() => {
    const { current } = scrollRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  }, []);

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

  useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      checkForScrollPosition();
      current.addEventListener("scroll", debounceCheckForScrollPosition);
    }

    return () => {
      if (current) {
        current.removeEventListener("scroll", debounceCheckForScrollPosition);
        debounceCheckForScrollPosition.cancel();
      }
    };
  }, [checkForScrollPosition, debounceCheckForScrollPosition]);

  useEffect(() => {
    if (arrLength > 1) {
      scrollRef.current?.scrollTo({ left: 0, top: 0 });
    }
  }, [arrLength]);

  return {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    prev,
    next,
  };
};
