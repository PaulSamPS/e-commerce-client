import React from "react";
import { useAppDispatch } from "@/shared/hooks";
import styles from "./decrease-count.module.scss";
import {
  apiDecreaseCount,
  cartStateLoading,
  DecreaseCountProps,
} from "@/entities/cart";
import { useSelector } from "react-redux";

export const DecreaseCount = ({ productId, count }: DecreaseCountProps) => {
  const dispatch = useAppDispatch();
  const loading = useSelector(cartStateLoading);

  const decreaseCount = () => {
    dispatch(apiDecreaseCount({ productId }));
  };

  return (
    <button
      className={styles.decrease}
      onClick={decreaseCount}
      disabled={count <= 1 || loading}
    />
  );
};
