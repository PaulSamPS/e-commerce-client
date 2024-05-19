"use client";

import { UiButton } from "@/shared/ui/ui-button";
import styles from "./favorite-notification.module.scss";
import { MdFavorite } from "react-icons/md";

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
      <MdFavorite />
      {favoritesCount > 0 && (
        <div className={styles.count}>{favoritesCount}</div>
      )}
    </UiButton>
  );
};
