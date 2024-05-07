import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import {
  PanelIcon,
  PoofeIcon,
  SofaIcon,
  BedIcon,
  ChairIcon,
  OnOrderIcon,
  ArmChairIcon,
  BanquetteIcon,
} from "./assets";

type SidebarItemProps = {
  name: string;
  icon: ReactNode;
  link: string;
};

const menu = [
  { id: 0, name: "Диваны", icon: <SofaIcon />, link: "/category/divan" },
  { id: 1, name: "Кресла", icon: <ArmChairIcon />, link: "/category/kreslo" },
  { id: 2, name: "Стулья", icon: <ChairIcon />, link: "/category/styl" },
  { id: 3, name: "Кровати", icon: <BedIcon />, link: "/category/krovat" },
  {
    id: 4,
    name: "Банкетки",
    icon: <BanquetteIcon />,
    link: "/category/banquettes",
  },
  { id: 5, name: "Пуфы", icon: <PoofeIcon />, link: "/category/poofes" },
  { id: 6, name: "Панели", icon: <PanelIcon />, link: "/category/panels" },
  { id: 7, name: "На заказ", icon: <OnOrderIcon />, link: "/on-order" },
];

const SidebarItem = ({ name, icon, link }: SidebarItemProps) => (
  <Link href={link} className={styles["link-type"]}>
    {icon}
    {name}
  </Link>
);

export const Sidebar = () => (
  <div className={styles.wrapper}>
    {menu.map(({ id, name, icon, link }) => (
      <SidebarItem key={id} name={name} icon={icon} link={link} />
    ))}
  </div>
);
