import React from "react";
import { useAppDispatch } from "@/shared/hooks";
import { apiIncreaseCount, IncreaseCountProps } from "@/entities/cart";
import styles from "./increase-count.module.scss";

export const IncreaseCount = ({
  productId,
  productInStock,
}: IncreaseCountProps) => {
  const dispatch = useAppDispatch();

  const increaseCount = () => {
    dispatch(apiIncreaseCount({ productId }));
  };

  return (
    <button
      className={styles.increase}
      onClick={increaseCount}
      disabled={productInStock <= 0}
    />
  );
};
