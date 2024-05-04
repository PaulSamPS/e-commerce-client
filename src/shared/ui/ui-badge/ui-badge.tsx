import React from "react";
import styles from "./ui-badge.module.scss";
import clsx from "clsx";

type colors = "orange" | "red" | "blue";

type UiBadgeProps = {
  discount?: number;
  text: string;
  color?: colors;
};

export const UiBadge = ({ discount, text, color = "blue" }: UiBadgeProps) => {
  return (
    <div className={clsx(styles.badge, color && styles[color])}>
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
