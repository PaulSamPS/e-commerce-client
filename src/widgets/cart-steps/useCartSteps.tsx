import { FunctionComponent } from "react";
import { useStrictContext } from "@/shared/lib/react";
import { CartStepsContext } from "@/widgets/cart-steps/cart-steps-context";
import { StepProductsList } from "@/widgets/cart-steps/step-product-list/step-products-list";
import { StepPaymentMethod } from "@/widgets/cart-steps/step-payment-method/step-payment-method";
import { StepOrderConfirmation } from "@/widgets/cart-steps/step-order-confirmation/step-order-confirmation";

const STEPS_COMPONENTS: {
  [key: number]: FunctionComponent;
} = {
  0: StepProductsList,
  1: StepPaymentMethod,
  2: StepOrderConfirmation,
};

export const useCartSteps = (): FunctionComponent => {
  const { step } = useStrictContext(CartStepsContext);
  const currentStep = STEPS_COMPONENTS[step];

  return currentStep;
};
