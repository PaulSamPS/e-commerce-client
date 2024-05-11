"use client";

import React from "react";
import styles from "./empty-cart.module.scss";
import { UiTitle } from "@/shared/ui/ui-title";
import { EmptyCartIcon } from "@/shared/assets/icons";

export const EmptyCart = () => (
  <div className={styles.wrapper}>
    <EmptyCartIcon />
    <UiTitle size="h2" weight="medium">
      Корзина пуста
    </UiTitle>
  </div>
);
