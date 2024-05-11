import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./ui-dots.module.scss";

export type UiDotsProps<T> = {
  slideIndex: number;
  activeDot: (index: number) => void;
  dotsCount: number;
  className?: string;
};

const Dot = ({
  index,
  isActive,
  onClick,
}: {
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button key={index} type="button" onClick={onClick}>
    <span className={clsx(styles.dot, { [styles.active]: isActive })} />
  </button>
);

export const UiDots = <T,>({
  activeDot,
  slideIndex,
  dotsCount,
  className,
}: UiDotsProps<T>) => {
  const [dotsArray, setDotsArray] = useState<React.ReactNode[]>([]);

  const constructDots = useCallback(
    (newSlideIndex: number) => {
      const updateDots = Array.from({ length: dotsCount }, (_, index) => (
        <Dot
          key={index}
          index={index}
          isActive={newSlideIndex === index}
          onClick={() => activeDot(index)}
        />
      ));
      setDotsArray(updateDots);
    },
    [activeDot, dotsCount],
  );

  useEffect(() => {
    constructDots(slideIndex);
  }, [slideIndex, constructDots]);

  return (
    <div className={clsx(styles.dots, className)}>
      {dotsArray.map((dot, index) => (
        <span key={index}>{dot}</span>
      ))}
    </div>
  );
};
