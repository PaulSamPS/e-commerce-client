"use client";

import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import styles from "./search.module.scss";
import { useAppDispatch, useOnClickOutside } from "@/shared/hooks";
import debounce from "lodash.debounce";
import { searchProductApi, searchState } from "@/entities/product";
import { useSelector } from "react-redux";
import { SearchModal } from "./search-modal/search-modal";
import { SearchButton } from "./search-button/search-button";
import { SearchInput } from "./search-input/search-input";

export const Search = () => {
  const [searchText, setSearchText] = useState<string>("");
  const ref = useRef<HTMLDivElement | null>(null);
  const state = useSelector(searchState);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const goToSearchPage = () => {
    push(`/search?=${searchText}`);
  };

  const onShow = () => {
    setIsVisible(true);
  };

  const onHide = () => {
    setIsVisible(false);
  };

  useOnClickOutside(ref, onHide);

  const debouncedSearch = useCallback(
    debounce(() => {
      dispatch(searchProductApi({ search: searchText }));
    }, 500),
    [searchText, dispatch],
  );

  const setSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchText.trim().length > 0) {
      debouncedSearch();
    }

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchText, dispatch, debouncedSearch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <div className={styles["search-group"]} ref={ref}>
          <SearchInput
            value={searchText}
            onChange={setSearch}
            onFocus={onShow}
          />
          <SearchModal
            products={state?.data.rows}
            isLoading={state?.isLoading}
            searchText={searchText}
            isVisible={isVisible}
          />
        </div>
        <SearchButton
          onClick={goToSearchPage}
          disabled={!searchText.trim().length}
        />
      </div>
    </div>
  );
};
