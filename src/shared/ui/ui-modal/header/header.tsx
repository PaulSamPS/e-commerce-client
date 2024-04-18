import { motion } from "framer-motion";
import styles from "./header.module.scss";
import { animateContent } from "./animate";
import { FC, ReactNode } from "react";

type HeaderProps = {
  headerText: string;
  children: ReactNode;
};

export const Header: FC<HeaderProps> = ({ headerText, children }) => (
  <motion.div className={styles.content} {...animateContent}>
    <div className={styles.header}>
      <span>{headerText}</span>
    </div>
    <div className={styles.body}>{children}</div>
  </motion.div>
);
