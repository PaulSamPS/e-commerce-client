import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import styles from "./ui-subhead.module.scss";

interface SubheadProps extends HTMLAttributes<HTMLSpanElement> {
  weight?: "regular" | "medium" | "bold";
}

export const UiSubhead: FC<SubheadProps> = ({
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
