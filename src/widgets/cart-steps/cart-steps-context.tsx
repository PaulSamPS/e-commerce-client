"use client";

import React, { PropsWithChildren, useMemo, useState } from "react";
import { createStrictContext } from "@/shared/lib/react";

interface ICartStepsContext {
  step: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  deliveryMethod: string;
  setDeliveryMethod: (deliveryMethod: string) => void;
}

export const CartStepsContext = createStrictContext<ICartStepsContext>();

export const CartStepsContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [step, setStep] = React.useState<number>(0);
  const [deliveryMethod, setDeliveryMethod] = useState("Самовывоз");
  console.log(step);

  const nextStep = () => {
    console.log("next");
    setStep((prev) => prev + 1);
  };
  const val = useMemo(
    () => ({ step, nextStep, setStep, deliveryMethod, setDeliveryMethod }),
    [deliveryMethod, step],
  );

  return (
    <CartStepsContext.Provider value={val}>
      {children}
    </CartStepsContext.Provider>
  );
};
