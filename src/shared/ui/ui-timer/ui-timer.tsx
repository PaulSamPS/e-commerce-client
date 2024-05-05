"use client";

import clsx from "clsx";
import styles from "./ui-timer.module.scss";
import { useTimer } from "./use-timer";

type TimerProps = {
  className: string;
};

export const UiTimer = ({ className }: TimerProps) => {
  const { hours, minutes, seconds } = useTimer();

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <span role="timer" className={styles.timer}>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </span>
    </div>
  );
};
