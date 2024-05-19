import React from "react";
import { useAppDispatch } from "@/shared/hooks";
import {
  apiIncreaseCount,
  cartStateLoading,
  IncreaseCountProps,
} from "@/entities/cart";
import styles from "./increase-count.module.scss";
import { useSelector } from "react-redux";

export const IncreaseCount = ({
  productId,
  productInStock,
}: IncreaseCountProps) => {
  const dispatch = useAppDispatch();
  const loading = useSelector(cartStateLoading);

  const increaseCount = () => {
    dispatch(apiIncreaseCount({ productId }));
  };

  return (
    <button
      className={styles.increase}
      onClick={increaseCount}
      disabled={productInStock <= 0 || loading}
    />
  );
};
