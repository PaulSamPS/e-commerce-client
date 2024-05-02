import { createInstance } from "@/shared/api/api-instance";
import { IProduct, IProductsSearchData } from "@/shared/types/product";

// Общий тип для параметра options

type RequestOptions = Parameters<typeof createInstance>[1];

// Интерфейсы для параметров запросов API
export interface SearchProductsProps {
  productName: string;
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
