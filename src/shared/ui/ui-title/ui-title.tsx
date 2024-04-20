import clsx from "clsx";
import React, { ElementType } from "react";
import styles from "./ui-title.module.scss";

export interface UiTitleProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "size"> {
  weight: "regular" | "medium" | "bold";
  size: "h1" | "h2";
  uppercase?: boolean;
}

export const UiTitle = ({
  children,
  weight = "bold",
  size = "h1",
  uppercase,
  className,
  ...restProps
}: UiTitleProps) => {
  const Component = `${size}` as ElementType;

  const classes = clsx(
    styles[size],
    styles.title,
    styles[weight],
    uppercase && styles.uppercase,
    className,
  );

  return (
    <Component {...restProps} className={classes}>
      {children}
    </Component>
  );
};
