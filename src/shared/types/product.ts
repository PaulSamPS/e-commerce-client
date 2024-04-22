import { IReviews } from '@/shared/types/reviews';
import { Features } from '@/shared/types/features';

interface Img {
    url: string,
    name: string

}
export interface IProduct {
    id: number
    price: number;
    oldPrice: number;
    name: string;
    description: string;
    images: Img[]
    in_stock: number;
    bestseller: boolean;
    new: boolean;
    soldCount: number;
    category: string;
    rating: number
    review: IReviews[]
    features: Features
    discount: number
}

export interface IDayProducts extends IProduct {}
export interface IOneDayProducts extends IProduct {}
export interface IYesterdayProducts extends IProduct {}
