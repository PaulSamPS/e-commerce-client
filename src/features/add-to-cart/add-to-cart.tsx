"use client";

import React, { useContext, useEffect, useMemo } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import styles from "./add-to-cart.scss";
import { useAppDispatch } from "@/shared/hooks";
import { UiButton } from "@/shared/ui/ui-button";
import { UiCartIcon } from "@/shared/ui/ui-cart-icon/ui-cart-icon";
import { cartProductsState, addToCartApi } from "@/entities/cart";
import { AuthModalAppContext } from "@/shared/context";
import { userState } from "@/entities/user";

interface AddToBasketProps {
  productId: number;
  variant: "primary" | "withIcon";
}

export const AddToCart = ({ productId, variant }: AddToBasketProps) => {
  const [isInCart, setIsInCart] = React.useState<boolean>(false);
  const { userData } = useSelector(userState);
  const products = useSelector(cartProductsState);
  const authContext = useContext(AuthModalAppContext);
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const pathname = usePathname();

  const inTheBasket = useMemo(
    () => products?.find((p) => p.productId === productId),
    [products, productId],
  );

  const addToBasket = () => {
    if (!userData) {
      return authContext?.setIsOpen(true);
    } else if (isInCart) {
      return push(`/cart`);
    } else {
      return dispatch(addToCartApi({ productId }));
    }
  };

  useEffect(() => {
    if (inTheBasket) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, inTheBasket, pathname, productId]);

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
