"use client";

import { useSelector } from "react-redux";
import styles from "./step-products-list.module.scss";
import {
  apiClearCart,
  CardCart,
  cartState,
  NextStep,
  TopCart,
  Total,
} from "@/entities/cart";
import { useAppDispatch } from "@/shared/hooks";
import { useStrictContext } from "@/shared/lib/react";
import { CartStepsContext } from "@/widgets/cart-steps/cart-steps-context";
import { IncreaseCount } from "@/features/increase-count";
import { DecreaseCount } from "@/features/decrease-count";
import { DeleteProduct } from "@/features/delete-product";

export const StepProductsList = () => {
  const { cart } = useSelector(cartState);
  const dispatch = useAppDispatch();
  const { nextStep } = useStrictContext(CartStepsContext);

  const handleClearCart = () => {
    dispatch(apiClearCart());
  };

  const totalCount = () => {
    let count = 0;

    for (let i = 0; i < cart?.products.length; i++) {
      count += cart?.products[i].count;
    }
    return count;
  };

  return (
    <>
      <TopCart clearCart={handleClearCart} />
      {cart?.products.map((p) => (
        <CardCart
          key={p.productId}
          product={p}
          className={styles.card}
          IncreaseCount={IncreaseCount}
          DecreaseCount={DecreaseCount}
          DeleteProduct={DeleteProduct}
        />
      ))}
      <Total
        productsLength={totalCount()}
        discount={cart?.discount}
        totalPrice={cart?.total_price}
        nextStep={<NextStep nextStep={nextStep} text={"Продолжить"} />}
        title={"Продолжить"}
      />
    </>
  );
};
