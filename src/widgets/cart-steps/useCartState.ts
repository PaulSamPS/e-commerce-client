import { useSelector } from "react-redux";
import {
  cartDiscountState,
  cartProductsState,
  cartStateLoading,
  cartTotalPricesState,
} from "@/entities/cart";

export const useCartState = () => {
  const products = useSelector(cartProductsState);
  const discount = useSelector(cartDiscountState);
  const totalPrice = useSelector(cartTotalPricesState);
  const loading = useSelector(cartStateLoading);

  return { products, discount, totalPrice, loading };
};
