import { createInstance } from "./api-instance";
import {
  ICart,
  ICartAddAndRemove,
  ICartProps,
  IClearCart,
  RemoveProduct,
} from "./types";

// Общий тип для параметра options
type RequestOptions = Parameters<typeof createInstance>[1];

export const addToCart = (
  addToCartDto: ICartProps,
  options?: RequestOptions,
) => {
  return createInstance<ICartAddAndRemove>(
    {
      url: `/cart`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: addToCartDto,
    },
    options,
  );
};

export const getUserCart = (options?: RequestOptions) => {
  return createInstance<ICart>(
    {
      url: `/cart`,
      method: "GET",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};

export const increaseProductCount = (
  addToCartDto: ICartProps,
  options?: RequestOptions,
) => {
  return createInstance<ICart>(
    {
      url: `/cart/increase`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: addToCartDto,
    },
    options,
  );
};

export const decreaseProductCount = (
  addToCartDto: ICartProps,
  options?: RequestOptions,
) => {
  return createInstance<ICart>(
    {
      url: `/cart/decrease`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: addToCartDto,
    },
    options,
  );
};

export const deleteProductFromCart = (
  addToCartDto: ICartProps,
  options?: RequestOptions,
) => {
  return createInstance<RemoveProduct>(
    {
      url: `/cart/${addToCartDto.productId}`,
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};

export const deleteAllProductFromCart = (options?: RequestOptions) => {
  return createInstance<IClearCart>(
    {
      url: `/cart`,
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    },
    options,
  );
};
