"use client";

import React, { AllHTMLAttributes, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./favourite-button.module.scss";
import { UiButton } from "@/shared/ui/ui-button";
import { IProduct } from "@/shared/api/types";
import { useSelector } from "react-redux";
import { favoriteActions, favoriteState } from "@/entities/favorite";
import { useAppDispatch } from "@/shared/hooks";
import { MdFavorite } from "react-icons/md";

interface IFavouriteProps extends AllHTMLAttributes<HTMLButtonElement> {
  product: IProduct;
  withText?: boolean;
}

export const FavouriteButton = ({
  product,
  withText = false,
  className,
}: IFavouriteProps) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const { favorites, loading } = useSelector(favoriteState);
  const { id, images, name } = product;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const favoriteItem = favorites.some(
      (favorite) => favorite.id === product.id,
    );
    if (favoriteItem) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, [favorites, isFavourite, product.id]);

  const onPressEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      if (isFavourite) {
        return dispatch(favoriteActions.removeFromFavorite(id));
      }
      return dispatch(
        favoriteActions.addToFavorite({ id, images: images[0].url, name }),
      );
    }

    return;
  };

  const actionFavourites = () => {
    if (isFavourite) {
      return dispatch(favoriteActions.removeFromFavorite(id));
    }
    return dispatch(
      favoriteActions.addToFavorite({ id, images: images[0].url, name }),
    );
  };

  return (
    <UiButton
      isLoading={loading}
      appearance="clear"
      size="m"
      type="button"
      onClick={actionFavourites}
      onKeyDown={onPressEnter}
      className={clsx(styles.favourite, className)}
    >
      <MdFavorite className={clsx(isFavourite && styles["icon-filled"])} />
    </UiButton>
  );
};
