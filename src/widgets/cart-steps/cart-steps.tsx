"use client";

import { useSelector } from "react-redux";
import styles from "./cart-steps.module.scss";
import { CartStepsContext } from "./cart-steps-context";
import { cartState } from "@/entities/cart";
import { StepsBar } from "./steps-bar/steps-bar";
import { FunctionComponent, useMemo } from "react";
import { useStrictContext } from "@/shared/lib/react";
import { StepProductsList } from "@/widgets/cart-steps/step-product-list/step-products-list";
import { StepPaymentMethod } from "@/widgets/cart-steps/step-payment-method/step-payment-method";
import { StepOrderConfirmation } from "@/widgets/cart-steps/step-order-confirmation/step-order-confirmation";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { EmptyCart } from "@/entities/cart";
import { StepPickDelivery } from "@/widgets/cart-steps/step-pick-delivery/step-pick-delivery";

const STEPS_COMPONENTS: {
  [key: number]: FunctionComponent;
} = {
  0: StepProductsList,
  1: StepPickDelivery,
  2: StepPaymentMethod,
  3: StepOrderConfirmation,
};

export const CartSteps = () => {
  const { cart, loading } = useSelector(cartState);
  const { step } = useStrictContext(CartStepsContext);

  const CurrentStep = STEPS_COMPONENTS[step || 0];
  const hasProducts = useMemo(() => cart && cart.total_price > 0, [cart]);

  return (
    <div className={styles.wrapper}>
      {hasProducts && <StepsBar />}

      {loading ? (
        <UiSpinner position={"relative"} bg={"transparent"} />
      ) : hasProducts ? (
        <CurrentStep />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
