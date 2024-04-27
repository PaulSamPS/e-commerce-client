import { createInstance } from "@/shared/api/api-instance";
import { IProduct } from "@/shared/types/product";

// Общий тип для параметра options
type RequestOptions = Parameters<typeof createInstance>[1];

// Интерфейсы для параметров запросов API
export interface DayProductsProps {
  productName: string;
}

export const dayProductsSet = (options?: RequestOptions) => {
  return createInstance<IProduct[]>(
    {
      url: `/day-products/set`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};

export const yesterdayProductsSet = (options?: RequestOptions) => {
  return createInstance<IProduct[]>(
    {
      url: `/yesterday/set`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};

export const yesterdayProductsGet = (options?: RequestOptions) => {
  return createInstance<IProduct[]>(
    {
      url: `/yesterday/get`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};

export const dayProductsGet = (options?: RequestOptions) => {
  return createInstance<IProduct[]>(
    {
      url: `/day-products/get`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};

export const dayProductsGetByName = (
  dayProducts: DayProductsProps,
  options?: RequestOptions,
) => {
  return createInstance<IProduct[]>(
    {
      url: `/get/${dayProducts.productName}`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};
