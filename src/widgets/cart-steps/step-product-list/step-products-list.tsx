"use client";

import { apiClearCart, NextStep, TopCart, Total } from "@/entities/cart";
import { useAppDispatch } from "@/shared/hooks";
import { useCallback, useMemo } from "react";
import { ProductList } from "./product-list";
import { useCartSteps } from "../useCartSteps";
import { useCartState } from "../useCartState";

export const StepProductsList = () => {
  const { products, discount, totalPrice } = useCartState();
  const dispatch = useAppDispatch();
  const { nextStep, step } = useCartSteps();

  const handleClearCart = useCallback(() => {
    dispatch(apiClearCart());
  }, [dispatch]);

  const totalCount = useMemo(() => {
    return products?.reduce((acc, { count }) => acc + count, 0) || 0;
  }, [products]);

  return (
    <>
      <TopCart clearCart={handleClearCart} />
      <ProductList products={products ? products : []} />
      <Total
        productsLength={totalCount}
        discount={discount || 0}
        totalPrice={totalPrice || 0}
        nextStep={<NextStep nextStep={nextStep} text="Продолжить" />}
        title="Оформить заказ"
        step={step}
      />
    </>
  );
};
