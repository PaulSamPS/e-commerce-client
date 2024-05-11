"use client";

import { CartSteps, CartStepsContextProvider } from "@/widgets/cart-steps";

const Cart = () => {
  return (
    <CartStepsContextProvider>
      <CartSteps />
    </CartStepsContextProvider>
  );
};

export default Cart;
