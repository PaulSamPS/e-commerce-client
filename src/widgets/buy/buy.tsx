"use client";

import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./buy.module.scss";
import { UiPriceDisplay } from "@/shared/ui/ui-price-display/ui-price-display";
import { IProduct } from "@/shared/types/product";
import { AddToCart } from "@/features/add-to-cart/add-to-cart";

export interface BuyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct;
}

export const Buy = ({ product, className }: BuyProps) => {
  return <div className={clsx(styles.wrapper, className)}></div>;
};
