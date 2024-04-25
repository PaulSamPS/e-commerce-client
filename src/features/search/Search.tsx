"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import styles from "./Search.module.scss";
import { SearchModal } from "./ui/search-modal/search-modal";
import { useAppDispatch } from "@/shared/hooks/use-app-dispatch";
import useDebounce from "@/shared/hooks/use-debounce";
import { UiButton } from "@/shared/ui/ui-button";
import { SearchIcon } from "@/shared/assets/icons";

export const Search = () => {
  const [searchText, setSearchText] = useState<string>("");
  const debouncedSearchText = useDebounce(searchText, 500);
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const goToSearchPage = () => {
    push(`/search?=${debouncedSearchText}`);
  };

  // useEffect(() => {
  //   dispatch(searchStore({ search: debouncedSearchText }));
  // }, [debouncedSearchText, dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <div className={styles["search-group"]}>
          <div className={styles.input}>
            <input
              placeholder="Поиск"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          {/*{searchText.trim().length > 0 && (*/}
          {/*  <SearchModal*/}
          {/*    products={products}*/}
          {/*    isLoading={isLoading}*/}
          {/*    searchText={searchText}*/}
          {/*  />*/}
          {/*)}*/}
        </div>
        <UiButton
          appearance="primary"
          size="l"
          className={styles["search-btn"]}
          onClick={goToSearchPage}
          // disabled={!searchText.trim().length}
        >
          Поиск
          <SearchIcon className={styles["search-icon"]} />
        </UiButton>
      </div>
    </div>
  );
};
