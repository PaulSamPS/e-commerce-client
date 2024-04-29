import { IReviews } from "@/shared/types/reviews";
import { Features, FeaturesItem } from "@/shared/types/features";

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
