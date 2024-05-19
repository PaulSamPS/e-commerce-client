import { FunctionComponent } from "react";
import { useStrictContext } from "@/shared/lib/react";
import { CartStepsContext } from "./cart-steps-context";
import { StepProductsList } from "./step-product-list/step-products-list";
import { StepPaymentMethod } from "./step-payment-method/step-payment-method";
import { StepOrderConfirmation } from "./step-order-confirmation/step-order-confirmation";

const STEPS_COMPONENTS: {
  [key: number]: FunctionComponent;
} = {
  0: StepProductsList,
  1: StepPaymentMethod,
  2: StepOrderConfirmation,
};

export const useCartSteps = () => {
  const { step, setStep, nextStep, setDeliveryMethod, deliveryMethod } =
    useStrictContext(CartStepsContext);
  const CurrentStep = STEPS_COMPONENTS[step];

  return {
    CurrentStep,
    step,
    setStep,
    nextStep,
    deliveryMethod,
    setDeliveryMethod,
  };
};
