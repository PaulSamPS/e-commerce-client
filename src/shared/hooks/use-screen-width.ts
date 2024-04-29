"use client";

import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

export const useScreenWidth = (): number => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    const handleResize = () => {
      debounce(updateScreenWidth, 150);
    };

    window.addEventListener("resize", handleResize);

    updateScreenWidth();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};
