import { memo, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import styles from "./ui-app-link.module.scss";

interface UiAppLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export const UiAppLink = memo(({ to, children, className }: UiAppLinkProps) => (
  <Link href={to} className={clsx(styles["app-link"], className)}>
    {children}
  </Link>
));
