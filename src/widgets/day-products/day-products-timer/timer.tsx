"use client";

import clsx from "clsx";
import styles from "./timer.module.scss";
import { useTimer } from "./useTimer";

type TimerProps = {
  className: string;
};

export const Timer = ({ className }: TimerProps) => {
  const { hours, minutes, seconds, updateProducts } = useTimer();

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <span role="timer" className={styles.timer} onClick={updateProducts}>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </span>
    </div>
  );
};
