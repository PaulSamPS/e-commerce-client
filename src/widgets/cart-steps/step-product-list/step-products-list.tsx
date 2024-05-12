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
import { useMemo } from "react";

export const StepProductsList = () => {
  const { cart } = useSelector(cartState);
  const dispatch = useAppDispatch();
  const { nextStep, step } = useStrictContext(CartStepsContext);

  const handleClearCart = () => {
    dispatch(apiClearCart());
  };

  const calculateTotalCount = () => {
    return cart?.products.reduce((acc, curr) => acc + curr.count, 0) || 0;
  };

  const renderCartItems = useMemo(
    () =>
      cart?.products.map((product) => (
        <CardCart
          key={product.productId}
          product={product}
          className={styles.card}
          IncreaseCount={IncreaseCount}
          DecreaseCount={DecreaseCount}
          DeleteProduct={DeleteProduct}
        />
      )),
    [cart?.products],
  );

  return (
    <>
      <TopCart clearCart={handleClearCart} />
      {renderCartItems}
      <Total
        productsLength={calculateTotalCount()}
        discount={cart?.discount!}
        totalPrice={cart?.total_price!}
        nextStep={<NextStep nextStep={nextStep} text={"Продолжить"} />}
        title={"Оформить заказ"}
        step={step}
      />
    </>
  );
};
