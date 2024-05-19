"use client";

import styles from "./cart-steps.module.scss";
import { StepsBar } from "./steps-bar/steps-bar";
import { useMemo } from "react";
import { EmptyCart } from "@/entities/cart";
import { useCartSteps } from "./useCartSteps";
import { useCartState } from "./useCartState";

const CartSteps = () => {
  const { CurrentStep } = useCartSteps();
  const { totalPrice } = useCartState();

  const hasProducts = useMemo(() => totalPrice! > 0, [totalPrice]);

  return (
    <div className={styles.wrapper}>
      {hasProducts && <StepsBar />}
      {hasProducts ? <CurrentStep /> : <EmptyCart />}
    </div>
  );
};

export default CartSteps;
