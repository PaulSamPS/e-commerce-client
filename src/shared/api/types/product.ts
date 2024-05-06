import { FeaturesItem } from "@/shared/api/types/features";

interface Img {
  url: string;
  name: string;
}
export interface IProduct {
  id: number;
  price: number;
  oldPrice: number;
  name: string;
  description: string;
  images: Img[];
  inStock: number;
  bestseller: boolean;
  isNew: boolean;
  soldCount: number;
  rating: number;
  discount: number;
  category: string;
  createdAt: string;
  updatedAt: string;
  features: FeaturesItem[] | null;
  reviewCount: number;
}

export interface IDayProducts extends IProduct {}
export interface IOneDayProducts extends IProduct {}
export interface IYesterdayProducts extends IProduct {}

export interface ProductCart {
  name: string;
  count: number;
  image: string;
  price: number;
  inStock: number;
  discount: number;
  productId: number;
}

export interface DayProductsProps {
  productName: string;
}

export interface IProductsSearchData {
  count: number;
  rows: IProduct[];
}

export interface ISearchProduct {
  search: string;
}
