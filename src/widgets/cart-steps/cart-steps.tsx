"use client";

import { useSelector } from "react-redux";
import styles from "./cart-steps.module.scss";
import { CartStepsContext } from "./cart-steps-context";
import { cartState } from "@/entities/cart";
import { StepsBar } from "./steps-bar/steps-bar";
import { FunctionComponent } from "react";
import { useStrictContext } from "@/shared/lib/react";
import { StepProductsList } from "@/widgets/cart-steps/step-product-list/step-products-list";
import { StepPaymentMethod } from "@/widgets/cart-steps/step-payment-method/step-payment-method";
import { StepOrderConfirmation } from "@/widgets/cart-steps/step-order-confirmation/step-order-confirmation";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { EmptyCart } from "@/entities/cart";

const STEPS_COMPONENTS: {
  [key: number]: FunctionComponent;
} = {
  0: StepProductsList,
  1: StepPaymentMethod,
  2: StepOrderConfirmation,
};

export const CartSteps = () => {
  const state = useSelector(cartState);
  const { step } = useStrictContext(CartStepsContext);
  const CurrentStep = STEPS_COMPONENTS[step || 0];

  return (
    <div className={styles.wrapper}>
      {state.cart?.products.length > 0 ? (
        <>
          {state.cart?.products && state.cart.products.length > 0 && (
            <StepsBar />
          )}
          {state.loading ? (
            <UiSpinner position={"relative"} bg={"transparent"} />
          ) : (
            <CurrentStep />
          )}
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
