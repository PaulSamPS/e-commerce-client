import clsx from "clsx";
import styles from "./ui-arrow-button.module.scss";
import { ArrowIcon } from "@/shared/assets/icons";
import { ButtonHTMLAttributes, FC } from "react";

export interface UiArrowButtonProps {
  appearance: "left" | "right";
  background: "white" | "none";
  onClick: () => void;
}

export const UiArrowButton: FC<
  UiArrowButtonProps &
    Pick<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "onClick" | "disabled" | "className"
    >
> = ({ appearance, background, onClick, className, ...props }) => {
  const arrowClassName = clsx(
    className,
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
    <button
      type="button"
      className={arrowClassName}
      onClick={onClick}
      {...props}
    >
      <ArrowIcon />
    </button>
  );
};
