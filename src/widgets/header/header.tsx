"use client";

import styles from "./header.module.scss";
import { UiLogo } from "@/shared/ui/ui-logo/ui-logo";
import { Auth } from "@/features/auth";
import { Search } from "@/features/search";
import { UiCartButton } from "@/shared/ui/ui-cart-button/ui-cart-button";
import { useSelector } from "react-redux";
import { cartState } from "@/entities/cart";
import { useAppDispatch } from "@/shared/hooks";
import { useEffect } from "react";
import { getCartApi } from "@/entities/cart";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const { loading, cart } = useSelector(cartState);
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  useEffect(() => {
    dispatch(getCartApi()).finally(() => dispatch(getCartApi()));
  }, [dispatch]);

  return (
    <div className={styles.header}>
      <div className={styles["header-content"]}>
        <Link href={"/"}>
          <UiLogo companyName="Мебель-Стильно" slogan="Мебель со вкусом" />
        </Link>
        <Search />
        <Auth />
        <UiCartButton
          productsCount={cart?.products.length!}
          isLoading={loading}
          totalPrice={cart?.total_price!}
        />
      </div>
    </div>
  );
};
