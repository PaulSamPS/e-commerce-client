import { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { useScreenWidth } from "@/shared/hooks/use-screen-width";

type IUseTopProductCarousel = {
  imgWidth: number;
  arrLength: number;
  container: number;
};

export const useTopProductCarousel = ({
  imgWidth,
  arrLength,
  container,
}: IUseTopProductCarousel) => {
  const screenWidth = useScreenWidth();

  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const currentContainer =
    imgWidth * arrLength > (screenWidth > container ? container : screenWidth);

  const scrollContainerBy = (distance: number) =>
    scrollRef.current?.scrollBy({ left: distance, behavior: "smooth" });

  const checkForScrollPosition = () => {
    const { current } = scrollRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

  useEffect(() => {
    const { current } = scrollRef;
    checkForScrollPosition();
    current?.addEventListener("scroll", debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener("scroll", debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  }, []);

  useEffect(() => {
    if (arrLength > 1) {
      scrollRef.current?.scrollTo(0, 0);
    }
  }, [arrLength]);

  const prev = () => {
    scrollContainerBy(-imgWidth);
  };

  const next = () => {
    scrollContainerBy(imgWidth);
  };

  return {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    currentContainer,
    prev,
    next,
    screenWidth,
  };
};
