import clsx from "clsx";
import { AllHTMLAttributes, FC } from "react";
import styles from "./ui-subhead.module.scss";

export interface UiSubheadProps extends AllHTMLAttributes<HTMLSpanElement> {
  weight?: "regular" | "medium" | "bold";
}

export const UiSubhead: FC<UiSubheadProps> = ({
  children,
  weight = "regular",
  className,
  ...restProps
}) => {
  const classes = clsx(styles.subhead, styles[weight], className);

  return (
    <span {...restProps} className={classes}>
      {children}
    </span>
  );
};
