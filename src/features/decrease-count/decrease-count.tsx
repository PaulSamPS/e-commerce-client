import React from "react";
import { useAppDispatch } from "@/shared/hooks";
import styles from "./decrease-count.module.scss";
import { apiDecreaseCount, DecreaseCountProps } from "@/entities/cart";

export const DecreaseCount = ({ productId, count }: DecreaseCountProps) => {
  const dispatch = useAppDispatch();

  const decreaseCount = () => {
    dispatch(apiDecreaseCount({ productId }));
  };

  return (
    <button
      className={styles.decrease}
      onClick={decreaseCount}
      disabled={count <= 1}
    />
  );
};
