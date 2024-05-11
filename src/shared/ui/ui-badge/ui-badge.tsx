import React from "react";
import styles from "./ui-badge.module.scss";
import clsx from "clsx";

type Colors = "orange" | "red" | "blue";

type Side = "left" | "right";

export type UiBadgeProps = {
  discount?: number;
  text: string;
  color?: Colors;
  side?: Side;
  secondBadge?: boolean;
};

export const UiBadge = ({
  discount,
  text,
  color = "blue",
  side = "right",
  secondBadge,
}: UiBadgeProps) => {
  return (
    <div
      className={clsx(
        styles.badge,
        color && styles[color],
        side && styles[side],
        secondBadge && styles["second-badge"],
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
