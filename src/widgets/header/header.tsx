"use client";

import styles from "./header.module.scss";
import { UiLogo } from "@/shared/ui/ui-logo/ui-logo";
import { Auth } from "@/features/auth";
import { Search } from "@/features/search";
import { UiCartButton } from "@/shared/ui/ui-cart-button/ui-cart-button";
import { useSelector } from "react-redux";
import {
  cartProductsState,
  cartStateLoading,
  cartTotalPricesState,
} from "@/entities/cart";
import { useAppDispatch } from "@/shared/hooks";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getCartApi } from "@/entities/cart";
import Link from "next/link";
import {
  favoriteActions,
  favoriteState,
  FavouriteNotification,
} from "@/entities/favorite";
import { checkAuthApi } from "@/entities/user";

export const Header = () => {
  const products = useSelector(cartProductsState);
  const totalPrice = useSelector(cartTotalPricesState);
  const loading = useSelector(cartStateLoading);
  const dispatch = useAppDispatch();
  const favorite = useSelector(favoriteState);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const checkAuth = useCallback(async () => {
    dispatch(checkAuthApi());
  }, [dispatch]);

  useEffect(() => {
    checkAuth().then(() => setIsAuth(true));
    if (isAuth) {
      dispatch(getCartApi());
    }
    dispatch(favoriteActions.getFavorites());
  }, [checkAuth, dispatch, isAuth]);

  const totalCount = useMemo(() => {
    return products?.reduce((acc, { count }) => acc + count, 0) || 0;
  }, [products]);

  return (
    <div className={styles.header}>
      <div className={styles["header-content"]}>
        <Link href={"/"}>
          <UiLogo
            companyName="Мебель-Стильно"
            slogan="Мебель со вкусом"
            className={styles.logo}
          />
        </Link>
        <Search />
        <FavouriteNotification favoritesCount={favorite.favorites.length} />
        <Auth />
        <UiCartButton
          productsCount={totalCount}
          isLoading={loading}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};
