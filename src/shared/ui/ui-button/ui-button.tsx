import clsx from "clsx";
import styles from "./ui-button.module.scss";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?:
    | "primary"
    | "secondary"
    | "danger"
    | "outline"
    | "commerce"
    | "clear";
  size?: "s" | "m" | "l";
  before?: ReactNode;
  after?: ReactNode;
  isLoading?: boolean;
  stretched?: boolean;
}

export const UiButton: FC<ButtonProps> = ({
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
    className,
  );

  return (
    <button className={classes} type="button" {...otherProps}>
      {isLoading && (
        <span
          className={clsx(
            styles.loader,
            appearance === "clear" && styles["loader-clear"],
          )}
        ></span>
      )}
      {before && !isLoading && before}
      {!isLoading && children}
      {after && !isLoading && after}
    </button>
  );
};
