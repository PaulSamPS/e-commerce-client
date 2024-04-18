import { motion } from "framer-motion";
import styles from "./close-button.module.scss";
import CloseIcon from "./close-icon.svg";
import { animateCloseButton } from "./animate";
import { FC } from "react";

type CloseButtonProps = {
  onClose: () => void;
};

export const CloseButton: FC<CloseButtonProps> = ({ onClose }) => (
  <div className={styles.wrapper}>
    <motion.button
      className={styles["close-button"]}
      onClick={onClose}
      type="button"
      {...animateCloseButton}
    >
      <CloseIcon className={styles.icon} />
    </motion.button>
  </div>
);
