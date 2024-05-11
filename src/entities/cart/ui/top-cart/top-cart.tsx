import React from "react";
import styles from "./top-cart.module.scss";
import { RemoveIcon } from "@/shared/assets/icons";

const topCart = [
  { id: 0, name: "Товар" },
  { id: 1, name: "Цена" },
  { id: 2, name: "Колличество" },
  { id: 3, name: "Сумма" },
];

type TopCartProps = {
  clearCart: () => void;
};

export const TopCart = ({ clearCart }: TopCartProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["clear-cart"]} onClick={clearCart}>
        <RemoveIcon />
        <span>Очистить корзину</span>
      </div>
      <div className={styles.name}>
        {topCart.map((h) => (
          <div key={h.id}>{h.name}</div>
        ))}
      </div>
    </div>
  );
};
