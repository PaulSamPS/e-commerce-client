"use client";

import { useEffect, useState } from "react";

export const useScreenWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    let timer: NodeJS.Timeout | null = null;

    const debounce = (func: () => void, delay: number) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(func, delay);
    };

    const handleResize = () => {
      debounce(updateScreenWidth, 150);
    };

    window.addEventListener("resize", handleResize);

    updateScreenWidth();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, []);

  return screenWidth;
};
