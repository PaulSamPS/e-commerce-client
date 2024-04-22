import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import styles from './Search.module.scss';
import { useAppDispatch, useOnClickOutside } from '@/shared/hooks';
import useDebounce from '@/shared/hooks/use-debounce';
import { searchStore } from '@/entities/Product/model/store/search.store';
import { BASE_URL } from '@/shared/constants';
import { stateProduct } from '@/entities/Product';
import { Button } from '@/shared/ui/Button';
import { SearchIcon } from '@/shared/assets';
import { SearchModal } from './ui/search-modal/search-modal';

export const Search = () => {
    const [searchText, setSearchText] = useState<string>('');
    const debouncedSearchText = useDebounce(searchText, 500);
    const dispatch = useAppDispatch();
    const products = useSelector(stateProduct.productsRows);
    const isLoading = useSelector(stateProduct.isLoading);
    const { push } = useRouter();

    const goToSearchPage = () => {
        push(`${BASE_URL}/search?=${debouncedSearchText}`);
    };

    useEffect(() => {
        dispatch(searchStore({ search: debouncedSearchText }));
    }, [debouncedSearchText, dispatch]);

    return (
      <div className={styles.wrapper}>
          <div className={styles.search}>
              <div className={styles['search-group']}>
                  <div className={styles.input}>
                      <input
                        placeholder='Поиск'
                        type='text'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                      />
                  </div>
                  {searchText.trim().length > 0 && (
                    <SearchModal
                      products={products}
                      isLoading={isLoading}
                      searchText={searchText}
                    />
                  )}
              </div>
              <Button
                appearance='primary'
                size='l'
                className={styles['search-btn']}
                onClick={goToSearchPage}
                disabled={!searchText.trim().length}
              >
                  Поиск
                  <SearchIcon className={styles['search-icon']} />
              </Button>
          </div>
      </div>
    );
};
