import React from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import styles from "./search-modal.module.scss";
import { UiSpinner } from "@/shared/ui/ui-spinner/ui-spinner";
import { UiAppLink } from "@/shared/ui/ui-app-link";
import { priceRu } from "@/shared/lib/priceRu";
import { IProduct } from "@/shared/api/types/product";
import { UiText } from "@/shared/ui/ui-text";

const ANIMATE = {
  closed: {
    height: 0,
    opacity: 0,
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

type SearchModalProps = {
  isVisible: boolean;
  products: IProduct[];
  isLoading: boolean;
  searchText: string;
};

export const SearchModal = ({
  isVisible,
  isLoading,
  products,
}: SearchModalProps) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className={styles["products-block"]}
        animate={isVisible ? "open" : "closed"}
        initial="closed"
        exit="closed"
        variants={ANIMATE}
      >
        {isLoading ? (
          <UiSpinner
            position="relative"
            color="var(--blue-themed)"
            bg="transparent"
          />
        ) : (
          <div className={styles["product-list"]}>
            {products?.length ? (
              products.map((product) => (
                <div key={product.id} className={styles.product}>
                  <UiAppLink to={`/${product.category}/${product.name}`}>
                    <Image
                      src={`http://localhost:5500${product.images[0].url}`}
                      alt={product.name}
                      width={100}
                      height={100}
                    />
                  </UiAppLink>
                  <UiAppLink to={`/${product.category}/${product.name}`}>
                    <UiText weight="regular">{product.name}</UiText>
                  </UiAppLink>
                  <UiText weight="regular">{priceRu(product.price)}</UiText>
                  {product.discount > 0 && (
                    <div className={styles.discount}>-{product.discount}%</div>
                  )}
                </div>
              ))
            ) : (
              <UiText weight="regular">Ничего не найдено</UiText>
            )}
          </div>
        )}
      </motion.div>
    )}
  </AnimatePresence>
);
