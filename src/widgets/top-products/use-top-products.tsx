import { useEffect, useState } from "react";
import { IProduct } from "@/shared/types/product";

export type TopProductsActive = "hits" | "new";

interface IUseTopProducts {
  newProducts: IProduct[];
  topProducts: IProduct[];
}
export interface IUseTopProductsReturn {
  setActive: (action: TopProductsActive) => void;
  currentAction: IProduct[];
  topProductAction: TopProductsActive;
}

interface IUseTopProducts {
  newProducts: IProduct[];
  topProducts: IProduct[];
}

export const useTopProducts = ({
  newProducts,
  topProducts,
}: IUseTopProducts): IUseTopProductsReturn => {
  const [topProductAction, setTopProductAction] =
    useState<TopProductsActive>("hits");

  const setActive = (action: TopProductsActive) => {
    setTopProductAction(action);
  };

  useEffect(() => {
    setActive("hits");
  }, []);

  const currentActionMapper: Record<TopProductsActive, IProduct[]> = {
    hits: topProducts,
    new: newProducts,
  };

  const currentAction = currentActionMapper[topProductAction];

  return { setActive, currentAction, topProductAction };
};
