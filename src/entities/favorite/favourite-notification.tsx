"use client";

import { FavoriteFilledIcon, FavoriteIcon } from "@/shared/assets/icons";
import { UiButton } from "@/shared/ui/ui-button";
import styles from "./favorite-notification.module.scss";

type FavouriteNotificationProps = {
  favoritesCount: number;
};

export const FavouriteNotification = ({
  favoritesCount,
}: FavouriteNotificationProps) => {
  return (
    <UiButton
      appearance={"clear"}
      style={{ paddingRight: 0 }}
      className={styles.favorite}
    >
      {favoritesCount > 0 ? <FavoriteFilledIcon /> : <FavoriteIcon />}
      {favoritesCount > 0 && (
        <div className={styles.count}>{favoritesCount}</div>
      )}
    </UiButton>
  );
};
