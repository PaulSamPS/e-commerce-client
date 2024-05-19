import { UiButton } from "@/shared/ui/ui-button";
import styles from "./search-button.module.scss";
import React from "react";
import { GoSearch } from "react-icons/go";

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
      after={<GoSearch className={styles["search-icon"]} />}
    >
      Поиск
    </UiButton>
  );
};
