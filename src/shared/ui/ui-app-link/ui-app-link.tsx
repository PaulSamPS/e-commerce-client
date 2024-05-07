import { memo, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./ui-app-link.module.scss";

interface UiAppLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

export const UiAppLink = memo(
  ({ to, onClick, children, className }: UiAppLinkProps) => (
    <Link
      href={to}
      className={clsx(styles["app-link"], className)}
      onClick={onClick}
    >
      {children}
    </Link>
  ),
);
