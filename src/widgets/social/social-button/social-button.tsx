import { FC } from "react";
import clsx from "clsx";
import { ChatIcon, CloseIcon } from "@/shared/assets/icons";
import styles from "./social-button.module.scss";

interface SocialButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const SocialButton: FC<SocialButtonProps> = ({ isOpen, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={clsx(styles.contact, isOpen && styles.open)}
  >
    {isOpen ? <CloseIcon /> : <ChatIcon />}
  </button>
);
