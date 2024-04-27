"use client";

import React, { useEffect } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import styles from "./add-to-cart.scss";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { UiButton } from "@/shared/ui/ui-button";
import { UiCartIcon } from "@/shared/ui/ui-cart-icon/ui-cart-icon";

interface AddToBasketProps {
  productId: number;
  variant: "primary" | "withIcon";
}

export const AddToCart = ({ productId, variant }: AddToBasketProps) => {
  const [isInBasket, setIsInBasket] = React.useState<boolean>(false);
  // const cartProducts = useSelector(cartState.products);
  // const cartIsLoading = useSelector(cartState.isLoading);
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const pathname = usePathname();
  // const inTheBasket = cartProducts?.find((p) => p.productId === productId);

  const addToBasket = () => {
    setIsInBasket(!isInBasket);
    // if (isInBasket) {
    //     return push(`/api/basket`);
    // }
    // return dispatch(apiCart.add({ productId }));
    console.log("add to basket");
  };

  // useEffect(() => {
  //   if (inTheBasket) {
  //     setIsInBasket(true);
  //   } else {
  //     setIsInBasket(false);
  //   }
  // }, [cartProducts, inTheBasket, pathname, productId]);

  return (
    <>
      {variant === "primary" && (
        <UiButton
          isLoading={false}
          appearance={isInBasket ? "commerce" : "primary"}
          className={styles.btn}
          onClick={addToBasket}
          size="s"
          stretched
        >
          {isInBasket ? "В корзине" : "В корзину"}
        </UiButton>
      )}
      {variant === "withIcon" && (
        <UiButton
          size="m"
          appearance={isInBasket ? "commerce" : "primary"}
          className={clsx(isInBasket && styles.added)}
          onClick={addToBasket}
          disabled={false}
        >
          <UiCartIcon className={styles.icon} isInBasket={isInBasket} />
        </UiButton>
      )}
    </>
  );
};
