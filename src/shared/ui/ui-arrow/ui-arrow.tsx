import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";
import styles from "./ui-arrow.module.scss";
import { ArrowIcon } from "../../assets/icons";

interface ArrowProps {
  appearance: "left" | "right";
  background: "white" | "none";
}

const UiArrow: React.FC<
  ArrowProps & React.ButtonHTMLAttributes<HTMLButtonElement>
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
    }[background]
  );

  return (
    <button type="button" className={arrowClassName} {...props}>
      <ArrowIcon />
    </button>
  );
};
