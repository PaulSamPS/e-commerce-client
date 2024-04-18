import clsx from "clsx";
import styles from "./ui-button.module.scss";
import { IconSpinner } from "./assets";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?:
    | "primary"
    | "secondary"
    | "danger"
    | "outline"
    | "commerce"
    | "clear";
  size?: "s" | "m" | "l";
  before?: React.ReactNode;
  after?: React.ReactNode;
  isLoading?: boolean;
  stretched?: boolean;
}

export const UiButton: React.FC<ButtonProps> = ({
  className,
  children,
  appearance = "primary",
  size = "m",
  before,
  after,
  isLoading = false,
  stretched,
  ...otherProps
}) => {
  const classes = clsx(
    styles.button, // Используем классы из файла SCSS
    stretched && styles.stretched,
    styles[appearance],
    styles[size],
    className
  );

  return (
    <button className={classes} type="button" {...otherProps}>
      {isLoading && (
        <span className={styles["spinner-wrapper"]}>
          <IconSpinner className={styles.spinner} />
        </span>
      )}
      {before && !isLoading && <span className={styles.icon}>{before}</span>}
      <span className={clsx(styles.content, isLoading && styles.hidden)}>
        {children}
      </span>
      {after && !isLoading && <span className={styles.icon}>{after}</span>}
    </button>
  );
};
