import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./ui-cart-icon.module.scss";
import { AddToCartIcon } from "@/shared/assets/icons";

export interface CartIconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isInBasket: boolean;
  appearance?: "button";
}

export const UiCartIcon = ({
  className,
  appearance,
  isInBasket,
  ...props
}: CartIconProps) => (
  <div
    className={clsx(styles["icon-cart"], className, {
      [styles.added]: isInBasket,
      [styles["added-white"]]: appearance === "button",
    })}
    {...props}
  >
    <AddToCartIcon />
    <span />
  </div>
);
