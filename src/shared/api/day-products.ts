import { createInstance } from "./api-instance";
import { DayProductsProps, IProduct } from "./types";

// Общий тип для параметра options
type RequestOptions = Parameters<typeof createInstance>[1];

// Интерфейсы для параметров запросов API

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
      url: `/day-products/yesterday/set`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};

export const yesterdayProductsGet = (options?: RequestOptions) => {
  return createInstance<IProduct[]>(
    {
      url: `/day-products/yesterday/get`,
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
      url: `/day-products/get/${dayProducts.productName}`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};
