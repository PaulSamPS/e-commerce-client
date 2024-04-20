import { useOnClickOutside } from "@/shared/hooks/use-click-outside";
import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode, useRef } from "react";
import styles from "./social-panel.module.scss";

interface SocialPanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ANIMATION_VARIANTS = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 50 },
};

const SocialPanel: FC<SocialPanelProps> = ({ isOpen, onClose, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, onClose);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles["social-list"]}
          animate="open"
          initial="closed"
          exit="closed"
          variants={ANIMATION_VARIANTS}
          ref={ref}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialPanel;
