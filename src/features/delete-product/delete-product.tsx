import React from "react";
import styles from "././delete-product.module.scss";
import { CloseIcon } from "@/shared/assets/icons";
import { useAppDispatch } from "@/shared/hooks";
import { apiRemoveProduct, DeleteProductProps } from "@/entities/cart";

export const DeleteProduct = ({ productId }: DeleteProductProps) => {
  const dispatch = useAppDispatch();

  const deleteProduct = () => {
    dispatch(apiRemoveProduct({ productId }));
  };

  return (
    <div className={styles.delete} onClick={deleteProduct}>
      <CloseIcon />
    </div>
  );
};
