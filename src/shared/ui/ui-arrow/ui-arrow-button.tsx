import clsx from "clsx";
import styles from "./ui-arrow-button.module.scss";
import { ArrowIcon } from "@/shared/assets/icons";
import { ButtonHTMLAttributes, FC } from "react";

export interface UiArrowButtonProps {
  appearance: "left" | "right";
  background: "white" | "none";
}

export const UiArrowButton: FC<
  UiArrowButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ appearance, background, ...props }) => {
  const arrowClassName = clsx(
    styles.btn,
    {
      left: styles.arrowLeft,
      right: styles.arrowRight,
    }[appearance],
    {
      white: styles.backgroundWhite,
      none: styles.backgroundNone,
    }[background],
  );

  return (
    <button type="button" className={arrowClassName} {...props}>
      <ArrowIcon />
    </button>
  );
};
