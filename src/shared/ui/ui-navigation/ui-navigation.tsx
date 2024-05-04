import React from "react";
import clsx from "clsx";
import { CatalogIcon } from "@/shared/assets/icons";
import styles from "./ui-navigation.module.scss";
import { UiAppLink } from "@/shared/ui/ui-app-link";
import { UiButton } from "@/shared/ui/ui-button";

const navItems = [
  { id: 0, name: "Все акции", path: "/promotions" },
  { id: 1, name: "Доставка", path: "/delivery" },
  { id: 2, name: "Гарантия", path: "/warranty" },
  { id: 3, name: "Доступные цены", path: "/prices" },
  { id: 4, name: "Высокое качество", path: "/quality" },
];

type NavigationItemProps = {
  id: number;
  name: string;
  path: string;
};

type NavigationListProps = {
  items: NavigationItemProps[];
};
const getColorClass = (name: string) =>
  name.toLowerCase() === "все акции" ? "red" : "";

const NavigationItem = ({ id, name, path }: NavigationItemProps) => (
  <UiAppLink
    to={path}
    key={id}
    className={clsx(styles.item, styles[getColorClass(name)])}
  >
    {name}
  </UiAppLink>
);

const NavigationList = ({ items }: NavigationListProps) => (
  <div className={styles.link}>
    {items.map((item) => (
      <NavigationItem key={item.id} {...item} />
    ))}
  </div>
);

export const UiNavigation = () => (
  <div className={styles.wrapper}>
    <UiButton before={<CatalogIcon />} className={styles.catalog}>
      Каталог
    </UiButton>
    <NavigationList items={navItems} />
  </div>
);
