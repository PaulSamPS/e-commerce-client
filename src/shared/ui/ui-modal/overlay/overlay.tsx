import styles from "./overlay.module.scss";
import { FC } from "react";

type OverlayProps = {
  onClose: () => void;
};

export const Overlay: FC<OverlayProps> = ({ onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="button"
      tabIndex={0}
    />
  );
};
