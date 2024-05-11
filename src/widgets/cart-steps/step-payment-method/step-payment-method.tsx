"use client";

import React from "react";
import { useSelector } from "react-redux";
import styles from "./step-payment-method.module.scss";
import { NextStep, Total, cartState } from "@/entities/cart";
import { useStrictContext } from "@/shared/lib/react";
import { CartStepsContext } from "@/widgets/cart-steps/cart-steps-context";

export const StepPaymentMethod = () => {
  const { cart } = useSelector(cartState);
  const { nextStep, deliveryMethod } = useStrictContext(CartStepsContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.payment}>
        <div className={styles.method}>
          <label htmlFor="method">
            <input type="radio" name="method" checked readOnly />
            <span>Оплата картой онлайн</span>
          </label>
        </div>
      </div>
      <div className={styles.total}>
        <Total
          productsLength={cart?.products?.length!}
          discount={cart?.discount!}
          totalPrice={cart?.total_price!}
          nextStep={<NextStep text="Продолжить" nextStep={nextStep} />}
          title="Ваш заказ"
          delivery={deliveryMethod}
        />
      </div>
    </div>
  );
};
