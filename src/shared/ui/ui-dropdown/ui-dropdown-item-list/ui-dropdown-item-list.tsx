import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { UiDropdownItem } from "@/shared/ui/ui-dropdown/ui-dropdown-item/ui-dropdown-item";
import { MotionProps } from "framer-motion";

interface DropDownItemType {
  path: string;
  label: string;
  logout?: () => void;
  icon: ReactNode;
}
interface UiDropdownItemList {
  items: DropDownItemType[];
  onNavigate?: (path: string, text?: string) => void;
}

const ANIMATE = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
} satisfies MotionProps;

export const DropdownItemList = ({ items, onNavigate }: UiDropdownItemList) => {
  const pathname = usePathname();

  return (
    <>
      {items.map((i) => (
        <UiDropdownItem
          key={i.path}
          {...ANIMATE}
          aria-disabled={i.path === pathname && i.path !== "/"}
          onClick={() => (onNavigate ? onNavigate(i.path, i.label) : undefined)}
        >
          {i.icon}
          {i.label}
        </UiDropdownItem>
      ))}
    </>
  );
};
