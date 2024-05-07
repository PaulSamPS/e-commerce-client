import { createInstance } from "./api-instance";
import { IProduct, IProductsSearchData } from "./types";

// Общий тип для параметра options

type RequestOptions = Parameters<typeof createInstance>[1];

// Интерфейсы для параметров запросов API
export interface SearchProductsProps {
  productName: string;
}

interface recentlyViewedApiProps {
  productsId: number[];
}

export const searchProductByName = (
  searchProducts: SearchProductsProps,
  options?: RequestOptions,
) => {
  return createInstance<IProductsSearchData>(
    {
      url: `/products/search`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: searchProducts,
    },
    options,
  );
};

export const recentlyViewedApi = (
  recentlyViewedA: recentlyViewedApiProps,
  options?: RequestOptions,
) => {
  return createInstance<IProduct[]>(
    {
      url: `/products/recently-viewed`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: recentlyViewedA,
    },
    options,
  );
};
