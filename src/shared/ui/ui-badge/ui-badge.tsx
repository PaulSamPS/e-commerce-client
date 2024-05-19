import React from "react";
import styles from "./ui-badge.module.scss";
import clsx from "clsx";

type Colors = "yellow" | "red" | "green";

type Side = "left" | "right";

type Position = "relative" | "absolute";

export type UiBadgeProps = {
  discount?: number;
  text: string;
  color?: Colors;
  side?: Side;
  position?: Position;
};

export const UiBadge = ({
  discount,
  text,
  color = "green",
  side = "right",
  position = "relative",
}: UiBadgeProps) => {
  return (
    <div
      className={clsx(
        styles.badge,
        color && styles[color],
        side && styles[side],
        position && styles[position],
      )}
    >
      {discount && (
        <span className={styles.percent}>
          {discount}
          <div>%</div>
        </span>
      )}
      <span>{text}</span>
    </div>
  );
};
