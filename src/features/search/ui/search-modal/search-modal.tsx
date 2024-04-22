import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import styles from '@/features/search/Search.module.scss';
import { UiSpinner } from '@/shared/ui/ui-spinner/ui-spinner';
import { UiAppLink } from '@/shared/ui/ui-app-link';
import { priceRu } from '@/shared/lib/priceRu';
import { IProduct } from '@/shared/types/product';
import { DynamicModule, ReducerMap } from "@/shared/providers/store-provider/dynamic-module";
import { UiText } from '@/shared/ui/ui-text';

const INITIAL_REDUCERS: ReducerMap = {
    productsSearch: productsSearchReducer,
};

const ANIMATE = {
    closed: {
        height: 0,
        transition: {
            delay: 0.15,
        },
    },
    open: {
        height: 'auto',
        transition: {
            type: 'spring',
            duration: 0.4,
            delayChildren: 0.2,
            staggerChildren: 0.05,
        },
    },
} satisfies Variants;

type SearchModalProps = {
    isVisible: boolean
    products: IProduct[]
    isLoading: boolean
    searchText: string
}

export const SearchModal = ({ isVisible, isLoading, products, searchText }: SearchModalProps) => (
  <AnimatePresence>
      {isVisible && searchText.trim() && (
        <DynamicModule reducers={INITIAL_REDUCERS}>
            <motion.div
              className={styles['products-block']}
              animate={isVisible ? 'open' : 'closed'}
              initial='closed'
              exit='closed'
              variants={ANIMATE}
            >
                {isLoading ? (
                  <UiSpinner
                    position='relative'
                    color='var(--blue-themed)'
                    bg='transparent'
                  />
                ) : (
                  <div className={styles['step-product-list']}>
                      {products?.length ? (
                        products.map((product) => (
                          <div
                            key={product.id}
                            className={styles.product}
                          >
                              <UiAppLink to={`/${product.category}/${product.name}`}>
                                  <Image
                                    src={`/api${product.images[0].url}`}
                                    alt={product.name}
                                    width={100}
                                    height={100}
                                  />
                              </UiAppLink>
                              <UiAppLink to={`/${product.category}/${product.name}`}>
                                  <UiText weight='regular'>{product.name}</UiText>
                              </UiAppLink>
                              <UiText weight='regular'>{priceRu(product.price)}</UiText>
                              {product.discount > 0 && (
                                <div className={styles.discount}>
                                    -
                                    {product.discount}
                                    %
                                </div>
                              )}
                          </div>
                        ))
                      ) : (
                        <UiText weight='regular'>Ничего не найдено</UiText>
                      )}
                  </div>
                )}
            </motion.div>
        </DynamicModule>
      )}
  </AnimatePresence>
);
