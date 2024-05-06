import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./yesterday-card.module.scss";
import { IProduct } from "@/shared/api/types/product";
import Image from "next/image";
import { UiAppLink } from "@/shared/ui/ui-app-link";
import { UiText } from "@/shared/ui/ui-text";

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productsYesterday: IProduct;
}

export const YesterdayCard = ({ productsYesterday, className }: CardProps) => (
  <UiAppLink
    to={`/product/${productsYesterday.name}`}
    className={clsx(styles.wrapper, className)}
  >
    <Image
      width={100}
      height={100}
      src={`http://localhost:5500${productsYesterday.images[0].url}`}
      alt=""
    />
    <UiText weight={"medium"} className={styles.name}>
      {productsYesterday.name}
    </UiText>
  </UiAppLink>
);
