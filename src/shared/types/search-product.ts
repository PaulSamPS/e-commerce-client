import { IProduct } from '@/shared/types/product';

export interface IProductsSearchData {
    count: number
    rows: IProduct[]
}
