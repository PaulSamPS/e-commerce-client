"use client";

import { CartStepsContextProvider } from "@/widgets/cart-steps";
import dynamic from "next/dynamic";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import React from "react";

const CartSteps = dynamic(() => import("@/widgets/cart-steps/cart-steps"), {
  loading: () => (
    <div style={{ height: "100%" }}>
      <UiSpinner color={"var(--blue-themed"} position={"fixed"} />
    </div>
  ),
  ssr: false,
});

const Cart = () => {
  return (
    <CartStepsContextProvider>
      <CartSteps />
    </CartStepsContextProvider>
  );
};

export default Cart;
