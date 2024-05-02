import React from "react";
import styles from "./ui-badge.module.scss";

type UiBadgeProps = {
  discount?: number;
  text: string;
};

export const UiBadge = ({ discount, text }: UiBadgeProps) => {
  return (
    <div className={styles.badge}>
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
