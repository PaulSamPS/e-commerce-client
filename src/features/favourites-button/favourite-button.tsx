"use client";

import React, { AllHTMLAttributes, useEffect } from "react";
import clsx from "clsx";
import styles from "./favourite-button.module.scss";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import { UiButton } from "@/shared/ui/ui-button";
import { FavouriteFillIcon, FavouriteIcon } from "@/shared/assets/icons";

interface IFavouriteProps extends AllHTMLAttributes<HTMLButtonElement> {
  productId: number;
}

export const FavouriteButton = ({ productId, className }: IFavouriteProps) => {
  const [isFavourite, setIsFavourite] = React.useState<boolean>(false);
  // const favouritesIsLoading = useSelector(favouritesState.isLoading);
  // const favouritesProducts = useSelector(favouritesState.products);
  const dispatch = useAppDispatch();

  const onPressEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      if (isFavourite) {
        // return dispatch(apiFavourites.remove({ productId }));
        console.log("keyboard");
      }
      // return dispatch(apiFavourites.add({ productId }));
      console.log("mouse");
    }

    return undefined;
  };

  const actionFavourites = () => {
    // if (isFavourite) {
    // return dispatch(apiFavourites.remove({ productId }));
    // }
    // return dispatch(apiFavourites.add({ productId }));
    console.log("favourites");
  };

  // useEffect(() => {
  //   const isFavourite = favouritesProducts?.find(
  //     (p) => p.productId === productId,
  //   );
  //   if (isFavourite) {
  //     setIsFavourite(true);
  //   } else {
  //     setIsFavourite(false);
  //   }
  // }, [favouritesProducts, productId]);

  return (
    <UiButton
      isLoading={false}
      appearance="clear"
      size="m"
      type="button"
      onClick={actionFavourites}
      onKeyDown={onPressEnter}
      className={clsx(styles.favourite, className)}
    >
      {isFavourite ? <FavouriteFillIcon /> : <FavouriteIcon />}
    </UiButton>
  );
};
