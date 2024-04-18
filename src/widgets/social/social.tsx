import { FC, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./social.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { ChatIcon, CloseIcon } from "@/shared/assets/icons";
import { useOnClickOutside } from "@/shared/hooks/use-click-outside";
import { SocialList } from "@/widgets/social/social-list";
import { Overlay } from "@/shared/ui/ui-modal/overlay";

const ANIMATION_VARIANTS = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};

export const Social: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  useOnClickOutside(ref, handleClose);

  return (
    <div
      className={clsx(styles.social, { [styles.open]: isOpen })}
      data-open={isOpen}
    >
      <button
        type="button"
        onClick={handleOpen}
        className={clsx(styles.contact, { [styles.open]: isOpen })}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles["social-list"]}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
            exit="closed"
            variants={ANIMATION_VARIANTS}
            ref={ref}
          >
            <SocialList />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
