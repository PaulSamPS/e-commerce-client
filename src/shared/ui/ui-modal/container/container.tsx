import { AnimatePresence, motion } from "framer-motion";
import styles from "./container.module.scss";
import { animateContainer } from "./animate";
import { FC, ReactNode } from "react";

type ContainerProps = {
  isOpen: boolean;
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ isOpen, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.container}
          role="dialog"
          animate={isOpen ? "open" : "closed"}
          variants={animateContainer}
          initial="closed"
          exit="closed"
        >
          <div className={styles.wrapper}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
