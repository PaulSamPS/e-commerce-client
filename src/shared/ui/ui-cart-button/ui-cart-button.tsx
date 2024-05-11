"use client";

import Link from "next/link";
import styles from "./ui-cart-button.module.scss";
import { priceRu } from "@/shared/lib/priceRu";
import { UiText } from "@/shared/ui/ui-text";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { CartIcon } from "@/shared/assets/icons";

type CartButtonProps = {
  productsCount: number;
  isLoading: boolean;
  totalPrice: number;
};

export const UiCartButton = ({
  productsCount,
  totalPrice,
  isLoading,
}: CartButtonProps) => {
  const hasProducts = productsCount > 0;

  const renderBasketContent = () => {
    if (isLoading) {
      return (
        <UiSpinner
          position="relative"
          bg={"transparent"}
          color={"var(--blue-themed)"}
        />
      );
    }

    if (hasProducts) {
      return (
        <>
          <CartIcon className={styles["basket-icon"]} />
          <div className={styles.count}>{productsCount}</div>
          <UiText weight="regular">{priceRu(totalPrice)}</UiText>
        </>
      );
    }

    return (
      <>
        <CartIcon />
        <UiText weight="regular">Корзина</UiText>
      </>
    );
  };

  return (
    <Link
      href="/cart"
      className={hasProducts ? styles["basket-product"] : styles.basket}
    >
      {renderBasketContent()}
    </Link>
  );
};
