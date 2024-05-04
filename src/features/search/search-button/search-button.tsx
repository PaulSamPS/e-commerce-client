import { UiButton } from "@/shared/ui/ui-button";
import styles from "./search-button.module.scss";
import { SearchIcon } from "@/shared/assets/icons";
import React from "react";

type SearchButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

export const SearchButton = ({ onClick, disabled }: SearchButtonProps) => {
  return (
    <UiButton
      appearance="primary"
      size="l"
      className={styles["search-btn"]}
      onClick={onClick}
      // disabled={disabled}
      after={<SearchIcon className={styles["search-icon"]} />}
    >
      Поиск
    </UiButton>
  );
};
