import { useEffect, useState } from "react";
import { IProduct } from "@/shared/types/product";
import { ITopProducts } from "@/shared/types/top-products";

export type TopProductsActive = "hits" | "new";

export interface IUseTopProductsReturn {
  setHit: () => void;
  setNew: () => void;
  currentAction: ITopProducts[];
  topProductAction: TopProductsActive;
}

interface IUseTopProducts {
  newProducts: ITopProducts[];
  topProducts: ITopProducts[];
}
export const useTopProducts = ({
  newProducts,
  topProducts,
}: IUseTopProducts): IUseTopProductsReturn => {
  const [topProductAction, setTopProductAction] =
    useState<TopProductsActive>("hits");

  const setHit = () => {
    setTopProductAction("hits");
  };

  const setNew = () => {
    setTopProductAction("new");
  };

  useEffect(() => {
    setTopProductAction("hits");
  }, []);

  const currentActionMapper: Record<TopProductsActive, ITopProducts[]> = {
    hits: topProducts,
    new: newProducts,
  };

  const currentAction = currentActionMapper[topProductAction];

  return { setHit, setNew, currentAction, topProductAction };
};
