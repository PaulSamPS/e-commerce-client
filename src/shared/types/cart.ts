import { ProductCart } from "@/shared/types/product";

export interface ICart {
  id: number;
  products: ProductCart[];
  total_price: number;
  discount: number;
  createdAt: string;
  updatedAt: string;
  user: number;
}

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
