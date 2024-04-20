import React, { ReactNode } from "react";
import clsx from "clsx";
import styles from "./social-wrapper.module.scss";

export type SocialWrapperProps = {
  isOpen: boolean;
  children?: ReactNode;
};
export const SocialWrapper = ({ isOpen, children }: SocialWrapperProps) => {
  return (
    <div
      className={clsx(styles.social, { [styles.open]: isOpen })}
      data-open={isOpen}
    >
      {children}
    </div>
  );
};
