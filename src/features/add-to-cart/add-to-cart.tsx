"use client";

import React, { useEffect, useMemo } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import styles from "./add-to-cart.scss";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { UiButton } from "@/shared/ui/ui-button";
import { UiCartIcon } from "@/shared/ui/ui-cart-icon/ui-cart-icon";
import { cartState } from "@/entities/cart/state/state";
import { addToCartApi } from "@/entities/cart/api/api-add-to-cart";

interface AddToBasketProps {
  productId: number;
  variant: "primary" | "withIcon";
}

export const AddToCart = ({ productId, variant }: AddToBasketProps) => {
  const [isInCart, setIsInCart] = React.useState<boolean>(false);
  const { cart, error, loading } = useSelector(cartState);
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const pathname = usePathname();
  const inTheBasket = useMemo(
    () => cart?.products?.find((p) => p.productId === productId),
    [cart?.products, productId],
  );

  const addToBasket = () => {
    if (isInCart) {
      return push(`/cart`);
    }
    return dispatch(addToCartApi({ productId }));
  };

  useEffect(() => {
    if (inTheBasket) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cart?.products, inTheBasket, pathname, productId]);

  return (
    <>
      {variant === "primary" && (
        <UiButton
          isLoading={false}
          appearance={isInCart ? "commerce" : "primary"}
          className={styles.btn}
          onClick={addToBasket}
          size="l"
          stretched
        >
          {isInCart ? "В корзине" : "В корзину"}
        </UiButton>
      )}
      {variant === "withIcon" && (
        <UiButton
          size="m"
          appearance={isInCart ? "commerce" : "primary"}
          className={clsx(isInCart && styles.added)}
          onClick={addToBasket}
          disabled={false}
        >
          <UiCartIcon className={styles.icon} isInBasket={isInCart} />
        </UiButton>
      )}
    </>
  );
};
