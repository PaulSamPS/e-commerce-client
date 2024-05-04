import * as Ariakit from "@ariakit/react";
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion, Variants } from "framer-motion";
import clsx from "clsx";
import styles from "./ui-dropdown.module.scss";
import { DropdownItemList } from "@/shared/ui/ui-dropdown/ui-dropdown-item-list/ui-dropdown-item-list";

interface DropDownItemType {
  path: string;
  label: string;
  logout?: () => void;
  icon: ReactNode;
}
interface DropdownProps extends ComponentPropsWithoutRef<"div"> {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  label: ReactNode;
  disabled?: boolean;
  items: DropDownItemType[];
  onNavigate?: (path: string, text?: string) => void;
  icon: ReactNode;
}

export const animate = {
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
} satisfies Variants;
export const UiDropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    { open, setOpen, label, className, items, onNavigate, icon, ...props },
    ref,
  ) => {
    const menu = Ariakit.useMenuStore({ open, setOpen });
    const currentPlacement = menu.useState("currentPlacement");
    const mounted = menu.useState("mounted");

    return (
      <MotionConfig reducedMotion="user">
        <Ariakit.MenuButton
          store={menu}
          ref={ref}
          className={clsx(styles.button, className)}
          {...props}
        >
          {icon}
          {label}
        </Ariakit.MenuButton>
        <AnimatePresence>
          {mounted && (
            <Ariakit.Menu
              store={menu}
              alwaysVisible
              className={styles.menu}
              data-placement={currentPlacement}
              render={
                <motion.div
                  animate={open ? "open" : "closed"}
                  initial="closed"
                  exit="closed"
                  variants={animate}
                />
              }
            >
              <Ariakit.MenuArrow className={styles["menu-arrow"]} />
              <DropdownItemList items={items} onNavigate={onNavigate} />
            </Ariakit.Menu>
          )}
        </AnimatePresence>
      </MotionConfig>
    );
  },
);
