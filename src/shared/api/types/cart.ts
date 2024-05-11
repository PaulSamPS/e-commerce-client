import { ProductCart } from "@/shared/api/types/product";

export interface ICart {
  id: number;
  products: ProductCart[];
  total_price: number;
  discount: number;
  createdAt: string;
  updatedAt: string;
  user: number;
}

export type IClearCart = {
  message: string;
} & ICart;

export type RemoveProduct = {
  message: string;
} & ICart;

export interface ICartAddAndRemove {
  id: number;
  products: ProductCart[];
  total_price: number;
  discount: number;
  createdAt: string;
  updatedAt: string;
  user: number;
  message: string;
}

// Интерфейсы для параметров запросов API
export interface ICartProps {
  productId: number;
}
