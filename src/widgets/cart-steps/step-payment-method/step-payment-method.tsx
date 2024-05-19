"use client";

import React from "react";
import styles from "./step-payment-method.module.scss";
import { NextStep, Total } from "@/entities/cart";
import { useCartState } from "../useCartState";
import { useCartSteps } from "../useCartSteps";

export const StepPaymentMethod = () => {
  const { products, discount, totalPrice } = useCartState();
  const { step, deliveryMethod, nextStep } = useCartSteps();

  return (
    <div className={styles.wrapper}>
      <div className={styles.payment}>
        <div className={styles.method}>
          <label htmlFor="method">
            <input type="radio" name="method" checked readOnly />
            <span>Оплата онлайн</span>
          </label>
        </div>
      </div>
      <Total
        productsLength={products?.length!}
        discount={discount!}
        totalPrice={totalPrice!}
        nextStep={<NextStep text="Продолжить" nextStep={nextStep} />}
        title="Ваш заказ"
        delivery={deliveryMethod}
        step={step}
      />
    </div>
  );
};
